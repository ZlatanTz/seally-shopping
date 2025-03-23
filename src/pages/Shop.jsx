import '../styles/Shop.css'
import Header from "../components/Header";
import Products from '../components/Products'
import { useState } from 'react';
const Shop = () => {
    const [cartAmount, setCartAmount] = useState(0) 


    return (
        <>
        <Header cartAmount={cartAmount}/>
        <main> 
           <Products setCartAmount={setCartAmount}/>
        </main>
        </>
    )
}

export default Shop;