import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
export default function ErrorPage() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.errorNum}>404</span>
      <span className={styles.errorDescription}>Page not found</span>
      <span className={styles.linkContainer}>
        <span className={styles.errorLinkDescription}>Go to page</span>
        <Link  className={styles.linlText}to={"/"}>Users</Link>
      </span>
    </div>
  );
}
