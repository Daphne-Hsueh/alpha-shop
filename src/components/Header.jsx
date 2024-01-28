
function Header() {
  return (
    
   <header className="site-header">
      <div className="header-container mx-auto">
        {/* navbar-toggle */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <object
            data="/icons/toggle.svg"
            className="icon-toggle cursor-point"
          />
        </label>
        {/* navbar-menu */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* search */}
            <li className="nav-item">
              <object
                data="/icons/search.svg"
                className="nav-icon cursor-point"
                type="image/svg+xml"
              ></object>
            </li>
            {/* cart */}
            <li className="nav-item">
              <object
                data="/icons/cart.svg"
                className="nav-icon cursor-point"
                type="image/svg+xml"
              ></object>
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* moon */}
              <object
                data="/icons/moon.svg"
                className="nav-icon cursor-point"
              ></object>
              {/* sun */}
              {/* <object data="/icons/sun.svg" class="nav-icon cursor-point">
            </object>    */}
            </li>
          </ul>
        </nav>
        {/* logo */}
        <a className="header-logo-container" href="#">
          <img src="/icons/logo.svg" className="cursor-point" />
        </a>
      </div>
    </header>

  );
}
export default Header;