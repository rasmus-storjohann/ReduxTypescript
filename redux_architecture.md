## Stay DRY: Defining action and store types using ReturnType<T>

Redux tends to require a lot of boilerplate code, and many different approaches have been proposed to manage this problem. Typescript's `ReturnType<T>` makes this pretty easy to do. 

Redux encourages us to work in a functional style where values are computed once and never changed (mutated) later. In Javascript where everything is mutable, it is easy to introduce bugs by changing data we shouldn't. Immutable.js is a widely used library designed to stop us from changing state, but it has its own drawbacks. Typescript has `readonly` modifier on data and the `Readonly<T>` helper. These enforce immutability at compile time with no run time impact, which means that unlike with `immutable.js` we can work with plain javascript objects.

With `ReturnType<T>` and `Readonly<T>`, the `increment()` action and action generator can be defined without any repetion:

```ts
export const increment = (store: Store) => (
    { type: constants.SET_COUNTER, payload: { value: store.value + 1 } }
);

export type SetCounterAction = Readonly<ReturnType<typeof increment>>;
```

## Defining the Store type

The same approach can be used to define the Store type for the counter. Now the `Store` is returned by the reducer, so it would be nice to be able to say

```ts
export type Store = Readonly<ReturnType<typeof reducer>>; // won't work
```

Unfortunately, the reducer also takes a Store as argument, so this creates a circular dependency. Instead, we can have a helper function which builds the default (empty) store, and use that function both to define the Store type and the default value for the store argument to the reducer:

```ts
const buildDefaultStore = () => (
    { value: 0 }
);

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;

export const reducer = (store: Store = buildDefaultStore(), action?: SetCounterAction): Store => {
   ...
}
```

If you're using TsLint with the `typedef:arrow-call-signature` rule enabled, TsLint will complain about `increment()` and `buildDefaultStore()`, because neither function defines its return type. They can't because we're using each to define the type using `ReturnType<T>`. To calm down TsLint, put the comment `// tslint:disable-next-line:typedef` above the functions.

If we insist on always defining functions and types before referencing them, the store files can be a bit messy, with action creators and action types interspersed. Javascript hoisting allows us to reference types before they are defined so that we can arrange the different elements of the file in any order we like, such as putting the types up top, followed by the actions, and the reducer at the end.

## Discriminated unions for types

Ideally, we want the action types to be [tagged union](https://blog.mariusschulz.com/2016/11/03/typescript-2-0-tagged-union-types) types. In order to demonstrate the value of this, I will add a bit of functionality to the counter example, with one more action type reset, which should set the counter to zero:

```ts
// tslint:disable-next-line:typedef
export const reset = () => (
    {type: constants.RESET_COUNTER}
);

export type ResetCounterAction = Readonly<ReturnType<typeof reset>>;
```

While the `SetCounterAction` has a `value` in the payload, `ResetCounterAction` has no payload at all. We now have to handle the two different action types in the reducer:

```ts
export const reducer = (store: Store = buildDefaultStore(), 
                        action?: SetCounterAction | ResetCounterAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_COUNTER:
            return { ...store, value: action.payload.value };
        case constants.RESET_COUNTER:
            return { ...store, value: 0 };
        default:
            return store;
    }
};

```
But now I get a compilation error:

```
src/stores/counter.ts(32,46): error TS2339: Property 'payload' does not exist on type 'Readonly<{ type: string; payload: { value: number; }; }> | Readonly<{ type: string; }>'.
```

_We_ know that the payload is there when the type is equal to `constants.SET_COUNTER`, but at this point the compiler doesn't. We _could_ cast the action to the correct type in the reducer, but there is a much better way: with a magic `makeAction()` helper function, the compiler error goes away:

```
export interface Action<T extends string> { type: T };
export interface ActionWithPayload<T extends string, P> { type: T, payload: P };

export function makeAction<T extends string>(type: T): Action<T>;
export function makeAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function makeAction<T extends string, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
};

```

When actions are created using makeAction(), the compiler knows that when the _value_ of `action.type` is `constants.SET_COUNTER`, then the _type_ of payload is `{ value: number }`, but when the _value_ of `action.type` is `constants.RESET_COUNTER`, then there is no payload. No casts needed.

So this is the counter store in its entirety:

```ts
import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetCounterAction = Readonly<ReturnType<typeof increment>>;
export type ResetCounterAction = Readonly<ReturnType<typeof reset>>;

// tslint:disable-next-line:typedef
export const increment = (store: Store) => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value + 1 })
);

export const decrement = (store: Store): SetCounterAction => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value - 1 })
);

// tslint:disable-next-line:typedef
export const reset = () => (
    helpers.makeAction(constants.RESET_COUNTER)
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { value: 0 }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetCounterAction | ResetCounterAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_COUNTER:
            return { ...store, value: action.payload.value };
        case constants.RESET_COUNTER:
            return { ...store, value: 0 };
        default:
            return store;
    }
};
```

## Scaling up the store

Enforcing separation of concerns in the store will likely lead to a Store type with a number of sub-stores for different parts of the application domain. This means that calls to combineReducers() could end up taking a lot of arguments. I want to have a single file that comines all the sub-stores into one. This file should be the only piece in the architecture that knows about all the different sub-stores. This is what I've come up with for the example of just two stores, but it looks like it should be able to expand easily:

```ts
import { combineReducers } from 'redux';
import * as counter from './counter';
import * as message from './message';

export interface Store {
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

export const rootReducer = combineReducers({
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});
```

For this to work, each sub-store should be in its own file, and each sub-store should export their store type and their reducer function. (The store files also export their actions, but those are not used here).


