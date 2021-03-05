# qiankun-redux
Use Redux in qiankun.

# Get started

## In master

```js
import { createStore } from 'redux';

// create store as you do in using redux
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(counter);

// register and start as the example in qiankun
registerMicroApps(
    [
        {
            name: 'react16',
            entry: '//localhost:7100',
            container: '#subapp-viewport',
            loader,
            activeRule: '/react16',
            props: {
                store,  // set store to microapps
            },
        },
        // ...
    ]
);


setDefaultMountApp('/react16');

start();
```

## In Slave

    yarn add qiankun-redux
### The `<App />` entry

```jsx
import { Provider } from 'qiankun-redux';

export default function App(props) {
  // get & set the store from Context
  const { store } = props;

  return (
    <Provider store={store}>
      <Content></Content>
    </Provider>
  );
}
```

### Use store in `<Content />`

```jsx
import { connect } from 'qiankun-redux';

function Content(props) {
  const { num, increment } = props;
  return (
    <div>
      {num}
      <button onClick={increment}>update store</button>
    </div>
  );
}

export default connect(
  // mapStateToProps
  (state) => {
    return {
      num: state,
    };
  },
  // mapDispatchToProps
  (dispatch) => {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }),
    };
  }
)(Content);
```