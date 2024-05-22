import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"

import styles from "./Theme.module.css"

function Theme({ theme }) {
    return (
        <div className={styles.theme}>
            {theme === "dark" ? <CiLight className={styles[theme]} /> : <MdDarkMode className={styles[theme]} />}            
        </div>
    )
}

export default Theme