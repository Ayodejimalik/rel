import image from './jordan.jpeg';
import Emage from './jordan nike.jpg';
import Samad from './korean fashion.jpg';
import './App.css';
import Samd from './new.js';
import Myname from './first.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let productdetails = {
    title: ['japan Shoe', 'nigerian Shoe', 'italian Shoe',],
    tap: [100, 200, 300],
    image: [image, Emage, Samad],


  };

  
  return (
    <>
      <div className='App'>
        <Samd />



        
        <div className='dad'>
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
