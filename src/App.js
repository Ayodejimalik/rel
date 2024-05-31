import image from './jordan.jpeg';
import Emage from './jordan nike.jpg';
import Samad from './korean fashion.jpg';
import './App.css';
import Samd from './new.js';
import Myname from './first.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let productdetails = {
    title: ['japan Shoe', 'nigerian Shoe', 'italian Shoe', ],
    tap: [1000, 500, 500],
    image: [image, Emage, Samad],


  };

  
  return (
    <>
      <div className='App'>
        <Samd />



        
        <div className='d-flex flex-column w-100 flex-lg-row justify-content-center align-item-center '>
        {
          productdetails.title.map((title,index)=>{
            return  <Myname key={index} 
            image={productdetails.image[index]}
            title={productdetails.title[index]}
            tap={productdetails.tap[index]}
            />
          })
        }
          

        </div>
      </div>
    </>

  );
}

export default App;
