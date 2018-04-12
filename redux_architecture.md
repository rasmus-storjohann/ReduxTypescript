

Rather than organizing the redux boilerplate code with reducers in one file and actions in another, I think it's more natural to put the actions and reducers that operate on the same data together. The actions are naturally closely related to the reducer that will act on them.

## Stay DRY: Defining action types using ReturnType

One redux problem that many redux libraries and architectures solve is the need to define both action objects and action creator functions that make those action object. This tends to produce a  lot of repeated code. With TypeScript's `ReturnType<T>`, we now have an simple solution to this problem. TypeScript also has readonly, and in particular the type `Readonly<T>`, which modifies a type `T` by making every attribute on that type readonly. So for example, associated with the counter there is an `increment()` action, which can used to also define the `SetCounterAction` type without any repeated code:

```ts
// tslint:disable-next-line:typedef
export const increment = (store: Store) => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value + 1 })
);

export type SetCounterAction = Readonly<ReturnType<typeof increment>>;
```

Additional actions returning the same action type are defined like this:

```ts
export const decrement = (store: Store): SetCounterAction => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value - 1 })
);
```

Immutability is enforced at compile time, which allows us to work with plain javascript objects rather than immutable.js's wrappers.

## Defining the Store type

The same approach can be used to define the Store type for the counter. Now the Store is what is returned by the reducer, so it would be nice to be able to say

```ts
export type Store = Readonly<ReturnType<typeof reducer>>; // won't work
```

Unfortunately, the reducer also takes a Store as argument, so this would cause a circular dependency. Instead, I have a function which builds the default (empty) store, and use that function both to define the Store type and the default value for the store argument to the reducer as so:

```ts
// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { value: 0 }
);

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
```

Then the signature of the reducer is:

```ts
export const reducer = (store: Store = buildDefaultStore(), action?: SetCounterAction): Store => {
   ...
}
```

## Scaling up the store

Enforcing separation of concerns in the store will likely lead to a Store type with a number of sub-stores. This means that calls to combineReducers() could end up taking a lot of arguments. I want to have a single file that comines all the sub-stores into one, and this one file should be the only piece in the architecture that knows about all the different sub-stores. This is what I've come up with for the example of just two stores, but it looks like it should be able to expand easily:

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

## Discriminated unions for types

