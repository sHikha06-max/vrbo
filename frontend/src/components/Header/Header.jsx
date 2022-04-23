import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../redux/Information/action";
import  "./Header.css";

const Header = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("http://localhost:3000/images")
        .then((res) => res.json())
        .then((res) => dispatch(storeData(res)))
        .catch((err)=> console.log(err))
    },[])

    const data = useSelector((state)=>state.data);
   // console.log(data,"dd");

    return  <div>
        { console.log(data,"dd")}
           {/* <div>
      {data.images.map((images, i) => (
        <div className="item" key={i}>
          <img src={images.imageName}  key={i} />
        </div>
      ))}
    </div> */}
        </div>
    
}
  
  export {Header};
  