import '../styles/Shop.css'
import Header from "../components/Header";
import Products from '../components/Products'
import { useEffect, useState } from 'react';
const Shop = () => {
    const [cartItems, setCartItems] = useState([]) 
    useEffect(() => {
        console.log(cartItems)
    },[cartItems])

    return (
        <>
        <Header cartAmount={cartItems.length}/>
        <main> 
           <Products setCartItems={setCartItems}/>
        </main>
        </>
    )
}

export default Shop;