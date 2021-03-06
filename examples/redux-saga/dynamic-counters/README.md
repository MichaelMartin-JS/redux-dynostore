# Dynamic List of Counters Example

This example extends [Redux Saga's cancellable counter example](https://github.com/redux-saga/redux-saga/tree/master/examples/cancellable-counter), allowing for a dynamic number of counters on the same page.

The redux store contains a `counters` slice with a static reducer. The `allIds` value is an array of identifier strings.

Counters are created with a typical `Array.map()` in the render() function of [App.js](./src/App.js).

The [DynaCounter](./src/components/DynaCounter.js) component class is of particular interest. This is where the dynostore dynamic instance is created using identifiers known only at runtime.

```sh
git clone https://github.com/ioof-holdings/redux-dynostore.git

cd redux-subspace/examples/redux-saga/dynamic-counters
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/ioof-holdings/redux-dynostore/tree/master/examples/redux-saga/dynamic-counters).
