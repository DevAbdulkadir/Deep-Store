
import './App.css'
import { products } from '../data/products'

function App() {

  const shoeProducts = products.filter(p => p.category === "fashion");
  const handleClick = () => {
    console.log(shoeProducts);
  }
  

  return (
    <>
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={handleClick}>
        Add to Cart
      </button>
    </>
  )
}

export default App
