import { useState} from "react";
import styles from "../styles/Product.module.css"; 

const Product = ({id, name, price, img, onAmountChange}) => {
   const [selectedAmount, setSelectedAmount] = useState(1) 

    const handleChange = (e) => {
        const data = parseInt(e.target.value)
        setSelectedAmount(data)
        
    }
    const handleClick = () => {
        onAmountChange((prev) => prev + selectedAmount)
    }
    
    return (
    <div className={styles.product} id={id}> 
        <img className={styles.productImg} src={img} alt={name}/>
        <div className={styles.productContent}>
            <p className={styles.productName}>{name}</p>
            <p className={styles.productPrice}>${price}</p>
            <div className={styles.inputContainer}>
                <select id="amountSelect" value={selectedAmount} onChange={handleChange}>
                    {[...Array(10)].map((_, index) => {
                        return (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>

                        )
                    })}   
                </select>
                <button onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    </div>
    )
    
}

export default Product