import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function Myname(props) {
    
    let [tap, setTitle] = useState(props.tap)
    // const changeTitle = () => {
    //     tap = props.tap / 2
  
    //   setTitle("$" + tap)
    // }

    return (
        <div className="sal">
            <>
                <h1 id="haa"> {props.title} </h1><br></br>
                <img src={props.image} alt="" width= "70%" id="badie" /><br></br><br></br>
                <h3> PRICE: {tap}</h3><br></br>
                <button id="get" onClick={() => setTitle(tap / 2 && ("$" + tap) )}>GET DISCOOUNT</button>


            </>
        </div>
    )
    
}
export default Myname;