import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import ShopApp from "../reducers/index";

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


const store = createStore(ShopApp,composeEnhancers(applyMiddleware(thunk)));
window['store'] = store

export default store;
