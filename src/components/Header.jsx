import { Link } from "react-router";

import styles from "../styles/Header.module.css"; 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="../public/logo.svg" alt="seal"/>
                <h1 className={styles.logo}>Seally</h1>
            </div>
            <nav>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/shop' className={styles.link}>Shop</Link>
            </nav>
        </header>
    )
}

export default Header;