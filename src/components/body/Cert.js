import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';

import classes from './Cert.module.css';
import esut from '../../images/esut.jpg';
import html from '../../images/html-css.jpg';
import javascript from '../../images/javascript.jpg';
import react from '../../images/react.jpg';
import node from '../../images/node.jpg';
import cSharp from '../../images/c-sharp.jpg';
import typescript from '../../images/typescript.jpg';
import RnT from '../../images/React-Typescript.jpg';
import tailwind from '../../images/Tailwind.jpg';
import reactNative from '../../images/React-Native.jpg';

const Cert = () => {
  const props = useSpring({
    marginTop: 0,
    opacity: 1,
    from: { marginTop: -50, opacity: 0 },
    config: { tension: 1000, friction: 10, duration: 1000 },
  });
  return (
    <Fragment>
      <Helmet>
        <title>Certifications</title>
        <meta name="description" content="View JahByte's certifications." />
        <link rel="canonical" href="/certifications" />
      </Helmet>
      <section className={classes.cert}>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={esut} alt="certificate" />
          </div>
          <Link to="#">View certificate</Link>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={html} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-654c660e-c95b-4a05-ac38-a8565a72aeee/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={tailwind} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-0da14fdf-99b3-4866-9fba-4d82ee55f123/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={javascript} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-62d1b709-3148-4775-ad8b-09c34e32c675/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={typescript} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-9dd81385-5f66-47ea-bcac-350855a4f0bb/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={react} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-45b621bc-507d-4507-94f1-1e4215ba6fc9/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={RnT} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-14f28e33-7a64-4861-875f-2a13750dd9f7/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={reactNative} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-84533fc6-5b1b-4865-a658-d66b0e95003e/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={node} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-3aa55b85-dec5-4c02-a436-36aecfca88b0/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
        <animated.div style={props} className={classes.content}>
          <div className={classes.photo}>
            <img src={cSharp} alt="certificate" />
          </div>
          <a
            href="https://www.udemy.com/certificate/UC-057429c5-dc1c-4d3a-8e9b-b3fce2cca625/"
            target="_blank"
            rel="noreferrer"
          >
            View certificate
          </a>
        </animated.div>
      </section>
    </Fragment>
  );
};

export default Cert;
