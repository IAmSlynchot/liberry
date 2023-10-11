import styles from './navbar.module.css';
import Link from 'next/link';

export default function LeftNav() {
    return (
        <div className={styles.leftNav}>
            <h2>Welcome to the DVD Menu</h2>
            <a href="#">Dashboard</a>
            <a href="#">My LiBerry</a>
        </div>
    );
}