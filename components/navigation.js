import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className={styles.topNavContainer}>
            <Link href="/">
                <Image 
                    className={styles.logo}
                    src="/images/berry.png"
                    height={65}
                    width={65}
                    alt="berry logo">
                </Image>
                <h2 className={styles.title}>LiBerry</h2>
            </Link>
        </div>
    );
}

export function LeftNav() {
    return (
        <div className={styles.leftNav}>
            <div className={styles.menuItem}><Link href="/">Dashboard</Link></div>
            <div className={styles.menuItem}><Link href="/">My LiBerry</Link></div>
            <div className={styles.menuItem}><Link href="/">Profile</Link></div>
            <div className={styles.menuItem}><Link href="about">About</Link></div>
        </div>
    );
}