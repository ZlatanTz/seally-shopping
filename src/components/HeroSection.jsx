import styles from '../styles/HeroSection.module.css'
import { Link } from 'react-router';
const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <img src="./hero.jpg" className={styles.mainImg}/>
            <div className={styles.sideContainer}>
                <p className={styles.introFirst}>Not fashion.</p>
                <p className={styles.introSecond}>A lifestyle</p>
                <button><Link to='/shop' className={styles.link}>Take me to shop</Link></button>
            </div>
        </div>
      );
}

export default HeroSection;