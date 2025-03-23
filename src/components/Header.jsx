import { Link } from "react-router";

import styles from "../styles/Header.module.css"; 

import { useState, useEffect } from "react";

const Header = ({cartAmount}) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.link}>
                    {isScrolled ? <img src="/logo-black.svg" alt="seal" /> : <img src="/logo.svg" alt="seal" />}
                    <h1 className={styles.logo}>Seally</h1>
                </Link>
            </div>
            <nav>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/shop" className={styles.link}>Shop</Link>
                <p className={styles.cart}>
                    Cart
                    <p className={styles.cartAmount}>{cartAmount}</p>
                </p>
            </nav>
        </header>
    );
};

export default Header;
