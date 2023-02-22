import { createStore, applyMiddleware } from "redux";
import createReduxMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { rootSaga } from "../saga";

//Tạo đối tượng sagaMiddleware
const sagaMiddleware = createReduxMiddleware();

// Cấu hình store chấp nhận sagaMiddleware là middleware của nó
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//Chạy rootSaga để lắng nghe các action
sagaMiddleware.run(rootSaga);
export default store;