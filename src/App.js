import logo from './logo.svg';
import './App.css';
import Diamond from '../src/components/Diamond'
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='diamond' element={<Diamond/>}/>
    <Route path='product' element={<Product/>}/>
   </Routes>
    </div>
  );
}

export default App;
