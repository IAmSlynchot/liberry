import styles from '../styles/navbar.module.css';
import Link from 'next/link';

export default function LeftNav() {
    return (
        <div className={styles.leftNav}>
            <div className={styles.menuItem}><Link href="/">Dashboard</Link></div>
            <div className={styles.menuItem}><Link href="/">My LiBerry</Link></div>
            <div className={styles.menuItem}><Link href="/">Profile</Link></div>
        </div>
    );
}