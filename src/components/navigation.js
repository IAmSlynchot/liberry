import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className={styles.topNavContainer}>
            <Link id="brand-header" href="/">
                <Image 
                    className={styles.logo}
                    src="/images/berry.png"
                    height={65}
                    width={65}
                    alt="berry logo"
                    id="brand-header-logo"
                >              
                </Image>
                <h2 className={styles.title} id="brand-header-title">LiBerry</h2>
            </Link>
        </div>
    );
}

export function LeftNav({signOut}) {
    return (
        <div className={styles.leftNav}>
            <div className={styles.menuItem}><Link href="/" id="nav-left-home">My LiBerry</Link></div>
            <div className={styles.menuItem}><Link href="/settings" id="nav-left-settings">Settings</Link></div>
            <div className={styles.menuItem}><Link href="about" id="nav-left-about">About</Link></div>
            <button onClick={signOut} >Sign Out</button>
        </div>
    );
}