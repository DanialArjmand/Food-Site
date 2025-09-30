import styles from "@/components/layout/Layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <main className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        Reference :
        <a href="https://botostart.ir" target="_blank" rel="noreferrer">
          Botostart
        </a>
        Next.js course | BotoFood Project &copy;
      </footer>
    </>
  );
}

export default Layout;
