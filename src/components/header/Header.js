import styles from "./Header.module.css"

import { useState, useEffect } from "react"

import Logo from "./Logo"
import Navbar from "./Navbar"
import ButtonTheme from "./ButtonTheme"
import Line from "./Line"

function Header({ theme, setTheme }) {

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

    return (
        <>
            <header className={styles.header}>
                <Logo theme={theme} />
                <Navbar current={current} theme={theme} />
                <ButtonTheme theme={theme} setTheme={setTheme} />
            </header>
            <Line />
        </>
    )
}

export default Header