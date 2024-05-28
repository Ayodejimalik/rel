import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function Myname(props) {
    
    let [tap, setTap] = useState(props.tap)
    const changeTitle = () => {
       let dad = Math.trunc(tap / 2)
  
      setTap(dad)
    }

    return (
        <div className="sal w-100 mx-0 mx-lg-3 my-3  ">
            <>
                <h1 id="haa"> {props.title} </h1><br></br>
                <img src={props.image} alt="" width= "60%" height= "300"  id="badie" /><br></br><br></br>
                <h3> PRICE: {tap}</h3><br></br>
                <button id="get" onClick={changeTitle} >GET DISCOOUNT</button>


            </>
        </div>  
    )
    
}
export default Myname;