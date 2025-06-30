import Link from 'next/link';
import styles from './SiteTitle.module.css';

export default function SiteTitle() {
  return (
    <Link href="/" legacyBehavior>
      <a className={styles.siteTitle}>MK</a>
    </Link>
  );
}
