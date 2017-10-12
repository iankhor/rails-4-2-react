### How to setup Redux + Redux-Thunk
1. Run `npm i react-redux redux react-thunk --save`
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
4.
