import { combineReducers,applyMiddleware} from 'redux'
import  ch from './dispatch'

const rootreduce=combineReducers({

    ch
});


const midle=(store)=>(next)=>(action)=>{
  
    return next(action)
   
}

export {midle};


export default rootreduce
