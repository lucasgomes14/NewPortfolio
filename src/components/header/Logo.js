import scrollToSection from "./scrollToSection"

import styles from "./Logo.module.css"

function Logo({ theme }) {
    return (
        <div className={styles.logo}>
            <a href="#home" className={styles[theme]} onClick={scrollToSection}>Lucas G.</a>
        </div>
    )
}

export default Logo