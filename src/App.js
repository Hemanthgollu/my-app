//import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
//import Footer from './Footer.js';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import Employees from './Employees';
import Timer from './Timer';


function App() {
  return (
    <div className="App">
      <Navbar/>
  
       <Routes>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/ProductDetails/:productId" element={<ProductDetails/>}></Route>
        <Route path="/Employees" element={<Employees/>}></Route>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
       
      {/* <Timer/> */}
      
    
    </div>
  )
}
//import { Form } from 'react-router-dom';

export default App;
