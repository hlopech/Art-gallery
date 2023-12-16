import { NavLink, Outlet } from "react-router-dom";
import styles from "../Layout/Layout.module.css";
export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkDefault
            }
            to="/"
          >
             Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.linkDefault
            }
            to="/albums"
            end={true}
          >
            Albums
          </NavLink>
        </header>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
      <footer className={styles.footer}>
        <span>Created by: Nikita Starovojtov</span>
        <span>BSU: {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
