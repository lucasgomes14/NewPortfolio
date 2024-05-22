import { useState } from "react"
import Background from "./components/layout/Background"

import Header from "./components/header/Header"

function App() {

    const [theme, setTheme] = useState("light")

    return (
        <div className={theme}>
            <Background />
            <Header theme={theme} setTheme={setTheme} />
            <section id="home"></section>
            <section id="about-me"></section>
            <section id="tecnology"></section>
            <section id="projects"></section>
            <section id="contacts"></section>
        </div>
    )
}

export default App