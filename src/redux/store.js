
import { configureStore} from '@reduxjs/toolkit'
import rootReducer from '../reduser/rootReducer';
import createSagaMiddleware from 'redux-saga';
import PoductSaga from './ProductSaga';


const sagaMiddleware = createSagaMiddleware();
console.log("nitinram",sagaMiddleware);


const store = configureStore({
     reducer: rootReducer,

     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(sagaMiddleware),
});




sagaMiddleware.run(PoductSaga);
export default store;