import { useEffect, useState } from "react"

import Navbar from "./components/header/Navbar"
import Line from "./components/header/Line"
import Theme from "./components/header/Theme"
import Background from "./components/layout/Background"
import Logo from "./components/header/Logo"

import styles from "./App.module.css"
import Toggle from "./components/header/Toggle"

function App() {
    const [current, setCurrent] = useState()

    useEffect(() => {
        const option = {
            threshold: .5
        }

        const myObserve = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrent(entry.target.id)
                }
            })
        }, option)

        const elements = document.querySelectorAll("section")

        elements.forEach((e) => myObserve.observe(e))

        return () => {
            myObserve.disconnect()
        }
    }, [])

    const [theme, setTheme] = useState("light")

    function darkOrLight() {
        if(theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className={theme}>
            <Background />
            <div className={styles.navbar}>
                <Toggle />
                <Logo className={styles.logo} theme={theme} />
                <Navbar current={current} theme={theme} />
                <div className={styles.buttonTheme} onClick={darkOrLight}>
                    <Theme theme={theme} />
                </div>
            </div>
            <Line />
            <section id="home"></section>
            <section id="about-me"></section>
            <section id="tecnology"></section>
            <section id="projects"></section>
            <section id="contacts"></section>
        </div>
    )
}

export default App