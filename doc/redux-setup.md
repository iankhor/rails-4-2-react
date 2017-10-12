### How to setup Redux + Redux-Thunk
1. Run `npm i react-redux redux redux-thunk --save`
2. Create folders : `store`, `containers`, `actions` and `reducers` in `app\javascript\`
3. Create a file called `configureStore.js` in `app\javascript\store` with the follwing code

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
```

4. Create a file called `Root.js` in `app\javascript\containers` with the following code :
```
import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';
import {setCounter} from '../actions/counter'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
```

6. Create a file called `CounterApp.js` in `app\javascript\containers` with the follwing code :
```
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

6. Create a file called `index.js` in `app\javascript\reducers` with the follwing code :
```
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
```

7. Create a file called `counter.js` in `app\javascript\reducers` with the following code :
```
import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from '../actions/counterTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  case SET_COUNTER:
    return action.counter;
  default:
    return state;
  }
```

8. Create a file called `counterTypes.js` in `app\javascript\actions` with the following code :
```
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
```

9. Create a file called `counter.js` in `app\javascript\actions` with the following code :

```
import {SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER} from './counterTypes';

export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter: counter
  };
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
```

10. Create a file called `Counter.js` in `app\javascript\actions` with the code :
```
import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
```

11. Set up redux debugging tool for Chrome. Update `configureStore.js` to the following :
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
```
