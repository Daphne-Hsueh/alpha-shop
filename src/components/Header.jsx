import styles from "../styles/Header.module.css"

function Navitem({navText}) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href="#">
        {navText}
      </a>
    </li>
  )
}
function Navlogo({id,path}) {
  return (
    <li id={id} className={styles.navItem}>
      <object
        data={path}
        className= {styles.navIcon} 
        type="image/svg+xml"
      ></object>
    </li>
  )
}


function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>
        {/* navbar-toggle */}
        <input id="navbar-toggle" className={styles.navbarToggle} type="checkbox" />
        <label htmlFor="navbar-toggle" className={styles.burgerContainer}>
          <object data="./public/icons/toggle.svg" className={`${styles.iconToggle} cursor-point`} />
        </label>
        {/* navbar-menu */}
        <nav className={styles.navbarMenu}>
          <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
            <Navitem navText="男款" />
            <Navitem navText="女款" />
            <Navitem navText="最新消息" />
            <Navitem navText="客製商品" />
            <Navitem navText="聯絡我們" />
          </ul>
          <ul className={`${styles.navList} ${styles.siteActionList}`}>
            <Navlogo path="./public/icons/search.svg" />
            <Navlogo path="./public/icons/cart.svg" />
            <Navlogo id="theme-toggle" path="./public/icons/moon.svg" />
            <Navlogo id="theme-toggle" path="./public/icons/sun.svg" />
          </ul>
        </nav>
        {/* logo */}
        <a className={styles.headerLogoContainer} href="#">
          <img src="./public/icons/logo.svg"  />
        </a>
      </div>
    </header>
  );
}
export default Header;