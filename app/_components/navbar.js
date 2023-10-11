import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className={styles.container}>
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