import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? classes.active : classes.inactive)}
      >
        HOME
      </NavLink>
      <NavLink
        to="about"
        className={(navData) => (navData.isActive ? classes.active : classes.inactive)}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="projects"
        className={(navData) => (navData.isActive ? classes.active : classes.inactive)}
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="certifications"
        className={(navData) => (navData.isActive ? classes.active : classes.inactive)}
      >
        CERTIFICATIONS
      </NavLink>
      <NavLink
        to="contact-bagwellbyte"
        className={(navData) => (navData.isActive ? classes.active : classes.inactive)}
      >
        CONTACT
      </NavLink>
    </nav>
  );
};

export default Nav;
