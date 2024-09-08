import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

import classes from './Stack.module.css';

const Stack = () => {
  return (
    <nav className={classes.tech}>
      <FaHtml5 className={`${classes.html} ${classes.icon}`} />
      <FaCss3Alt className={`${classes.css} ${classes.icon}`} />
      <RiJavascriptFill className={`${classes.javascript} ${classes.icon}`} />
      <FaReact className={`${classes.react} ${classes.icon}`} />
      <SiTypescript className={`${classes.react} ${classes.icon}`} />
      <TbBrandNextjs className={`${classes.next} ${classes.icon}`} />
      <FaNodeJs className={`${classes.node} ${classes.icon}`} />
    </nav>
  );
};

export default Stack;
