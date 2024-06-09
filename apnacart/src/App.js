import './App.css';

import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js'

function App() {
  const products = [
    {
      price:200000,
      name:'IPhone',
      quantity: 0
    },
    {
      price:20000,
      name:'Samsung',
      quantity: 0
    }
  ]
  return (
    <div className="App">
      <ProductList products = {products}/>
      <Navbar/>
    </div>
  );
}

export default App;