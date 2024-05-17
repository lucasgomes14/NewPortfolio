import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"

import styles from "./Theme.module.css"

function Theme({ theme }) {
    return (
        <div className={styles.theme}>
            {theme ? <CiLight className={styles.dark} /> : <MdDarkMode className={styles.light} />}            
        </div>
    )
}

export default Theme