import scrollToSection from "./scrollToSection"

import styles from "./Navbar.module.css"

function Navbar({ current, theme }) {
    return (
        <nav className={styles.navegation}>
            <ul>
                <li className={styles[theme]}><a className={current === "home" ? styles.mark : ""} href="#home" onClick={scrollToSection}>Home</a></li>
                <li className={styles[theme]}><a className={current === "about-me" ? styles.mark : ""} href="#about-me" onClick={scrollToSection}>Sobre mim</a></li>
                <li className={styles[theme]}><a className={current === "tecnology" ? styles.mark : ""} href="#tecnology" onClick={scrollToSection}>Tecnologias</a></li>
                <li className={styles[theme]}><a className={current === "projects" ? styles.mark : ""} href="#projects" onClick={scrollToSection}>Projetos</a></li>
                <li className={styles[theme]}><a className={current === "contacts" ? styles.mark : ""} href="#contacts" onClick={scrollToSection}>Contatos</a></li>
            </ul>
        </nav>

    )
}

export default Navbar