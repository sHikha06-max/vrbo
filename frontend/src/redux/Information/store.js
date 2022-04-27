import { reducer } from "./reduce";
import { legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";

//const store = createStore(reducer)
    
    
const rootReducer = combineReducers({
    reducer: reducer,
  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));
  

//iexport {store};
