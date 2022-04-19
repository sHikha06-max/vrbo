import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../redux/Information/action";
import  "./Header.css";

const Header = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch(" http://localhost:3000/images")
        .then((res) => res.json())
        .then((res) => dispatch(storeData(res)))
        .catch((err)=> console.log(err))
    },[])

    const data = useSelector((state)=>state.data);
    console.log(data);

    return  <div>
            Header
        </div>
    
}
  
  export {Header};
  