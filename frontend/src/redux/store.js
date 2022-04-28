import { reducer } from "./Information/reduce";
import { legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";
import { Login } from "./Login/reducer";


//const store = createStore(reducer)
    
    
const rootReducer = combineReducers({
    reducer: reducer,
    login: Login,
  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));
  

//iexport {store};
