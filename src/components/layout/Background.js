import styles from "./Background.module.css"

function Background() {
    return (
        <div className={`${styles.absolute}`}>
            <div className={`${styles.absolute} ${styles.inset_0} ${styles.justifyContent}`}>
                <div className={`${styles.bg_shape1} ${styles.bg_redLight} ${styles.opacity_50} ${styles.bg_blur}`}></div>
                <div className={`${styles.bg_shape2} ${styles.bg_redStrong} ${styles.opacity_50} ${styles.bg_blur}`}></div>
            </div>
        </div>
    )
}

export default Background