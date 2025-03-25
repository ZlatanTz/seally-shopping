import styles from "../styles/Products.module.css";

import { useEffect, useState } from "react";
import { ring } from 'ldrs'
ring.register()

import Product from "./Product";

const Products = ({setCartItems}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [productsData, setProductsData] = useState(null)

    useEffect(() => {
        const handleData = async () => {
            try{
                const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=50&offset=0')
                if(!response.ok){
                    throw new Error('invalid request')
                }
                const data = await response.json()
                setProductsData(data)
            }catch(error){
                setError(error)
                
            }finally{
                setIsLoading(false)
            }
        }

        handleData()  
    }, [])

    if(isLoading){
        return (<l-ring
        className={styles.loading}
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2" 
        color="black" 
      ></l-ring>)
    }

    if(error){
        return (<div>Error occured: {error.message} </div>)
    }

    const handleAddToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(cartItem => cartItem.id === item.id);
            
            if (existingItem) {
               
                return prev.map(cartItem => 
                    cartItem.id === item.id
                        ? { ...cartItem, selectedAmount: cartItem.selectedAmount + item.selectedAmount }
                        : cartItem
                );
            } else {
                
                return [...prev, item];
            }
        });
    };
    

    return (
    <div className={styles.productsGrid}>
        {productsData.map(product => <Product key={product.id}  id={product.id} name={product.title} img={product.images[0]} price={product.price} addToCart={handleAddToCart} />)}
    </div>)
    
        
}

export default Products;