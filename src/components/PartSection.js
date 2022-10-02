import styles from '../css/PartSection.module.css'
import { colors } from '../constants/Colors'

export default function PartSection({ title, children }) {
    return (
        <div id={styles.container} style={{ backgroundColor: colors.secondary, borderRadius: 10, marginTop: 30 }}>
            <div id={styles.titleWrapper}>
                <h1 style={{ color: colors.text }}>{title}</h1>
            </div>
            <div id={styles.body}>
                {children}
            </div>
        </div>
    )
}