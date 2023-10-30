//import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
//import Footer from './Footer.js';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import EmployeeList from './Employees/EmployeeList';
import Timer from './Timer';
import Productspecifications from './Productspecifications';
import Productrating from './Productrating';
import Productdescription from './Productdescription';
import Form from './Employees/Form';





function App() {
  return (
    <div className="App">
      <Navbar/>
  
       <Routes>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/ProductDetails/:productId" element={<ProductDetails/>}>
          <Route path="Productdescription" element = {<Productdescription/>}></Route>
          <Route path="Productspecifications" element = {<Productspecifications/>}></Route>
          <Route path="Productrating" element = {<Productrating/>}></Route>
        </Route>
        <Route path="/Form" element={<Form/>}></Route>
        <Route path="/Employees" element={<EmployeeList/>}></Route>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
       
      {/* <Timer/> */}
      
    
    </div>
  )
}
//import { Form } from 'react-router-dom';

export default App;
