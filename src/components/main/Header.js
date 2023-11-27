import { CgMenuGridO } from 'react-icons/cg';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  const navRef = useRef(null);

  const naviagte = useNavigate();

  const handleShowNav = () => {
    navRef.current.classList.toggle(classes.display);
  };

  const navigateHome = () => {
    naviagte('/');
  };

  return (
    <header className={classes.header}>
      <h2 onClick={navigateHome}>JahByte</h2>
      <CgMenuGridO className={classes.menu} onClick={handleShowNav} />
      <div className={classes.nav} ref={navRef}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
