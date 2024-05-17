import { useEffect, useState } from "react"

import Navbar from "./components/header/Navbar"
import Line from "./components/header/Line"
import Theme from "./components/header/Theme"
import Background from "./components/layout/Background"

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

    const [theme, setTheme] = useState(false)

    function darkOrLight() {
        setTheme(!theme)
    }

    return (
        <div className={theme ? "dark" : "light"}>
            <Background />
            <div className="navbar">
                <Navbar current={current} theme={theme} />
                <div onClick={darkOrLight}>
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