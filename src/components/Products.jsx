import styles from "../styles/Products.module.css";

import { useEffect, useState } from "react";
import { ring } from 'ldrs'
ring.register()

import Product from "./Product";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [productsData, setProductsData] = useState(null)

    useEffect(() => {
        const handleData = async () => {
            try{
                const response = await fetch('https://api.escuelajs.co/api/v1/products')
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

   
    return (
    <div className={styles.productsGrid}>
        {productsData.map(product => <Product key={product.id} name={product.title} img={product.images[0]} price={product.price} />)}
    </div>)
    
        
}

export default Products;