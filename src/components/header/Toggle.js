import { useState } from "react"
import styles from "./Toggle.module.css"

function Toggle() {

    const [burger_class, setBurgerClass] = useState("burger_bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger_bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger_bar unclicked")
            setMenuClass("menu hidden")
        }
    }

    return (
        <div className={styles.toggle}>
            <div className={styles.burger_menu}>
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
                <div className={burger_class} onClick={updateMenu}></div>
            </div>

        </div>
    )
}

export default Toggle