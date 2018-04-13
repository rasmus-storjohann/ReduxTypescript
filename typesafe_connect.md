# Typesafe redux connect()

Figuring out the `connect()` function in redux can be hard, and making it typesave with TypeScript can make it even trickier. 

The way to think about it is that the component has a public API defined by two interfaces, `Props` and `Actions`. When using the component with `conncect()`, we connect to that API using two objects that match those two interfaces.

As an example, consider a component that takes two properties and three actions. Without any type information it looks like this:

```ts
import { connect } from 'react-redux';
import { HelloWorldContainer } from './hello_world_container';

const mapStateToProps = (store) => ({
    counterInProps: store.counterInStore,
    messageInProps: store.messageInStore,
});

const mapDispatchToProps = (dispatch) => ({
    increment: (aCounter) => dispatch(counter.increment(aCounter)),
    decrement: (aCounter) => dispatch(counter.decrement(aCounter)),
    setMessage: (aMessage) => dispatch(message.setMessage(aMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
```

`mapStateToProps` should be straightforward. `mapDispatchToProps` is trickier, but what's going on is that each action calls the appropriate action generator functions, in this case `counter.increment()`, `counter.decrement()` and `message.setMessage()`, passing the resulting action object to the redux `dispatch()` function.

## connect() with types

Clearly there will need to be some type information to make TypeScript happy. Assume for the moment that the `HelloWorldContainer` defines an interface `Props` that describes the set of props that the component expects. Then the definition of `mapStateToProps()` looks like this:

```ts
import { connect } from 'react-redux';
import { Props, HelloWorldContainer } from './hello_world_container';
import { Store } from '../application/store';

const mapStateToProps = (store: Store): Props => ({
    counterInProps: store.counterInStore,
    messageInProps: store.messageInStore,
});
```

Here the `Store` is the type of the entire application store.

Now also assume that `HelloWorldContainer` also defines an interface `Actions` that describes the set of actions that the component can trigger. This gets more complicated because each action is a function with arguments and return type that need to match a function in the `Actions` interface, as well as the implementation calling `dispatch()` as above. It's a lot of information packed into very few lines of code, but if you squint I hope you can see that it's really just the same thing as `mapDispatchToProps` above, but with the function signatures added in:

```ts
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, HelloWorldContainer } from './hello_world_container';
import * as counter from '../stores/counter';
import * as message from '../stores/message';
import { Store } from '../application/store';

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    increment: (aCounter: counter.Store): counter.SetCounterAction => dispatch(counter.increment(aCounter)),
    decrement: (aCounter: counter.Store): counter.SetCounterAction => dispatch(counter.decrement(aCounter)),
    setMessage: (aMessage: string): message.MessageAction => dispatch(message.setMessage(aMessage)),
});
```

Now we have all the pieces we need to call `connect()`, passing in the type arguments, and returning the connected component.

```ts
export default connect<Props, Actions>(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
```

This can be simplified a bit since TypeScript can infer the two types from the types of the arguments, so this also works:

```ts
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
```

## The component

So that's what it looks like to use a component, now we need to look at the component itself and its `Props` and `Actions` types. The definition of the two interfaces is pretty straightforward. The two types `counter.Store` and `message.Store` are the return types of the counter and message reducer functions.

```ts
import React from 'react';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

export interface Props {
    counterInProps: counter.Store,
    messageInProps: message.Store,
};

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    setMessage(newMessage: string): message.MessageAction;
};
```

There is just one more trick needed: While `connect()` requires us to define the `Props` and `Actions` as two separate interfaces, the `React.StatelessComponent<T>` function takes a single interface type that defines both. In TypeScript, if you want a type with the same properties as two other types, all you need to do is `Props & Actions`. 

```ts
export const HelloWorldContainer: React.StatelessComponent<Props & Actions> = (props) => {
    const { counterInProps, messageInProps, increment, decrement, setMessage } = props;
    return (
        <View>
		...
        </View >
    );
};
```

This was the monent I knew TypeScript and me are going to get along just fine!

