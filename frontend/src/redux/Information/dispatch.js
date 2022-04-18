

var saveId = "";



const ch=(state=saveId,action)=>{
 
    switch(action.type){
        case 'ID':{
              
             return{
               saveId : action.pay
                
             }
        

        }
        
          
           
       
        default:return state
    }

    
  

   
}

export default ch