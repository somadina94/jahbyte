import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaXTwitter,
  FaLinkedin,
  FaSquareWhatsapp,
  FaDiscord,
  FaSquareGithub,
} from 'react-icons/fa6';

import classes from './Social.module.css';

const Social = () => {
  return (
    <nav className={classes.social}>
      <a href="https://github.com/somadina94" target="_blank" rel="noreferrer">
        <FaSquareGithub className={classes.icon} />
      </a>
      <a href="https://github.com/somadina94" target="_blank" rel="noreferrer">
        <FaDiscord className={classes.icon} />
      </a>
      <a href="https://twitter.com/Somadina_O" target="_blank" rel="noreferrer">
        <FaXTwitter className={classes.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/somadina-onuaguluchi-3aa8b02a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={classes.icon} />
      </a>
      <a
        href="https://instagram.com/bagwellsoma?igshid=YTQwZjQ0NmI0OA== "
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareInstagram className={classes.icon} />
      </a>
      <a
        href="https://m.facebook.com/profile.php/?id=100089486186582"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareFacebook className={classes.icon} />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=2349063481322&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareWhatsapp className={classes.icon} />
      </a>
    </nav>
  );
};

export default Social;
