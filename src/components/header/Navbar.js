import styles from "./Navbar.module.css"

function Navbar({ current, theme }) {

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href")
        return document.querySelector(id).offsetTop
    }

    function nativeScroll(getDistanceFromTheTop) {
        window.scroll({
            top: getDistanceFromTheTop,
            behavior: "smooth"
        })
    }

    function scrollToSection(event) {
        event.preventDefault()
        const distanceFromTheTop = getDistanceFromTheTop(event.target) - 88
        nativeScroll(distanceFromTheTop)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1><a href="#home" className={theme ? styles.logoDark : styles.logoLight} onClick={scrollToSection}>Lucas G.</a></h1>
            </div>
            <nav>
                <ul>
                    <li className={theme ? styles.menuDark : styles.menuLight}><a className={current === "home" ? styles.mark : ""} href="#home" onClick={scrollToSection}>Home</a></li>
                    <li className={theme ? styles.menuDark : styles.menuLight}><a className={current === "about-me" ? styles.mark : ""} href="#about-me" onClick={scrollToSection}>Sobre mim</a></li>
                    <li className={theme ? styles.menuDark : styles.menuLight}><a className={current === "tecnology" ? styles.mark : ""} href="#tecnology" onClick={scrollToSection}>Tecnologias</a></li>
                    <li className={theme ? styles.menuDark : styles.menuLight}><a className={current === "projects" ? styles.mark : ""} href="#projects" onClick={scrollToSection}>Projetos</a></li>
                    <li className={theme ? styles.menuDark : styles.menuLight}><a className={current === "contacts" ? styles.mark : ""} href="#contacts" onClick={scrollToSection}>Contatos</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar