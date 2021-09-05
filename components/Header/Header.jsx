import Button from "../Button/Button";
import styles from "./Header.module.scss";
import { GiHamburgerMenu as Menu } from "react-icons/gi";
import { CgClose as MenuClose } from "react-icons/cg";
import { useState } from "react";
function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>Logo</h2>
        <label
          htmlFor="nav-toggle"
          className={styles.navToggleLabel}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <MenuClose /> : <Menu />}
        </label>
        <input
          type="checkbox"
          name="nav-toggle"
          id="nav-toggle"
          className={styles.navToggle}
        />
        <ul className={styles.navItem}>
          <li className={styles.navItems}>
            <a href="#">Home</a>
          </li>
          <li className={styles.navItems}>
            <a href="#">About Us</a>
          </li>
          <li className={styles.navItems}>
            <a href="#">Divisions</a>
          </li>
          <li className={styles.navItems}>
            <a href="#">Services</a>
          </li>
          <li className={styles.navItems}>
            <a href="#">Satmarga Online</a>
          </li>
          <li className={styles.navButtonWrapper}>
            <Button text="Donate Now" variant="primary" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
