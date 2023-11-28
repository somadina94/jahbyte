import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import classes from './Projects.module.css';
import dice from '../../images/dice-game.png';
import socialWarlock from '../../images/social-warlock.png';
import natwest from '../../images/natwest.png';
import chambers from '../../images/chambers.png';

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <title>JahByte projects</title>
        <meta
          name="description"
          content="See a glimpse of what JahByte is capable of. Your design and ideas will be brought to live"
        />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <section className={classes.projects}>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img src={dice} alt="project" />
          </div>
          <h2>Description</h2>
          <p>
            A distinctive dice game crafted using React for the frontend and Node.js for the
            backend. It offers an enjoyable experience where players roll a dice, aiming for numbers
            3, 6, or 5 to win, and any other number results in a loss. The implementation is
            seamless, with React employed to create an engaging single-page application that
            enhances the overall gaming experience.
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img src={socialWarlock} alt="project" />
          </div>
          <h2>Description</h2>
          <p>
            An e-commerce platform designed for selling social media marketing accounts. Built with
            React for the frontend and Node.js for the backend, the application ensures exceptional
            speed and reliability. It features visually appealing animations for both the cart and
            background images, enhancing the overall user experience.
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img src={natwest} alt="project" />
          </div>
          <h2>Description</h2>
          <p>
            A simulated practice bank created for training purposes, enabling users to practice
            transferring funds within the bank and to international banks. It's important to note
            that this is a dummy bank and not valid for actual transactions. It serves the purpose
            of showcasing my skills and the services I offer, developed using the JavaScript MERN
            stack.
          </p>
        </div>
        <div className={classes.content}>
          <div className={classes.photo}>
            <img src={chambers} alt="project" />
          </div>
          <h2>Description</h2>
          <p>
            A sophisticated law chambers designed for a law firm based in London, United Kingdom.
            Developed using the JavaScript MERN stack, the website offers exceptional speed and
            surpasses expectations in fulfilling its purpose. It boasts a professional and
            well-crafted design tailored to meet professional standards.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
