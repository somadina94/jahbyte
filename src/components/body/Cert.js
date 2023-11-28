import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import classes from './Cert.module.css';
import esut from '../../images/esut.jpg';
import html from '../../images/html-css.jpg';
import javascript from '../../images/javascript.jpg';
import react from '../../images/react.jpg';
import node from '../../images/node.jpg';
import cSharp from '../../images/c-sharp.jpg';

const Cert = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Certifications</title>
        <meta name="description" content="View JahByte's certifications." />
        <link rel="canonical" href="/certifications" />
      </Helmet>
      <section className={classes.cert}>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img src={esut} alt="certificate" />
          </div>
          <Link to="#">View certificate</Link>
        </div>
        <div className={classes.content}>
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
        </div>
        <div className={classes.content}>
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
        </div>
        <div className={classes.content}>
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
        </div>
        <div className={classes.content}>
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
        </div>
        <div className={classes.content}>
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
        </div>
      </section>
    </Fragment>
  );
};

export default Cert;
