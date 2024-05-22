import styles from "./ButtonTheme.module.css"

import Theme from "./Theme"

function ButtonTheme({theme, setTheme}) {

    function darkOrLight() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className={styles.buttonTheme} onClick={darkOrLight}>
            <Theme theme={theme} />
        </div>
    )
}

export default ButtonTheme