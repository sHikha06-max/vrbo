import { reducer } from "./reduce";
import { legacy_createStore as createStore} from 'redux'

const store = createStore(reducer)
    
    


export {store};
