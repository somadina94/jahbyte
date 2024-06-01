import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';
import { FcLink } from 'react-icons/fc';
import { FaGithubSquare } from 'react-icons/fa';

import classes from './Projects.module.css';
import dice from '../../images/dice-game.png';
import socialWarlock from '../../images/social-warlock.png';
import natwest from '../../images/natwest.png';
import chambers from '../../images/chambers.png';
import extension from '../../images/extension.png';
import mernchat from '../../images/mernchat.png';
import nike from '../../images/nike-page.png';

const Projects = () => {
  const props = useSpring({
    marginTop: 0,
    opacity: 1,
    from: { marginTop: -50, opacity: 0 },
    config: { tension: 1000, friction: 10, duration: 1000 },
  });
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
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={mernchat} alt="project" />
            </div>
            <div className={classes.links}>
              <a href="https://github.com/somadina94/mern-chat" target="_blank" rel="noreferrer">
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://mernchat.jahbyte.com" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              A dynamic real-time chat application built using the MERN stack (MongoDB, Express.js,
              React, Node.js) and Socket.io. The app offers seamless live chat functionality,
              complete with features such as read receipts, login and sign-up capabilities, and
              typing indicators. Designed for a smooth user experience, it ensures instant
              communication and feedback.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={socialWarlock} alt="project" />
            </div>
            <div className={classes.links}>
              <a
                href="https://github.com/somadina94/SocialWarlock"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://www.socialwarlock.com" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              An e-commerce platform designed for selling social media marketing accounts. Built
              with React for the frontend and Node.js for the backend, the application ensures
              exceptional speed and reliability. It features visually appealing animations for both
              the cart and background images, enhancing the overall user experience.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={natwest} alt="project" />
            </div>
            <div className={classes.links}>
              <a href="https://github.com/somadina94/sky-height" target="_blank" rel="noreferrer">
                <FaGithubSquare className={classes.icon} />
              </a>
              <a
                href="https://github.com/somadina94/sky-height-server"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://skyheight.netlify.app" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              A simulated practice bank created for training purposes, enabling users to practice
              transferring funds within the bank and to international banks. It's important to note
              that this is a dummy bank and not valid for actual transactions. It serves the purpose
              of showcasing my skills and the services I offer, developed using the JavaScript MERN
              stack.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={chambers} alt="project" />
            </div>
            <div className={classes.links}>
              <a
                href="https://github.com/somadina94/farrugia-chambers"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://farrugiachambers.netlify.app" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              A sophisticated law chambers designed for a law firm based in New Zealand. Developed
              using the JavaScript MERN stack, the website offers exceptional speed and surpasses
              expectations in fulfilling its purpose. It boasts a professional and well-crafted
              design tailored to meet professional standards.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={extension} alt="project" />
            </div>
            <div className={classes.links}>
              <a
                href="https://github.com/somadina94/farrugia-chambers"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className={classes.icon} />
              </a>
              <a
                href="https://github.com/somadina94/farrugia-chambers"
                target="_blank"
                rel="noreferrer"
              >
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              Introducing my premium Facebook extension – a game-changer for direct messaging
              strategies. With this app, effortlessly reach your target audience by scheduling
              personalized messages to a curated list of user IDs. Delivered at 20-minute intervals,
              your communication remains consistent and effective. Plus, enjoy the convenience of
              background operation – minimize your browser or switch tabs, and the app continues its
              tasks seamlessly. Even if your system shuts down unexpectedly, it resumes from exactly
              where it stopped, ensuring uninterrupted workflow.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={dice} alt="project" />
            </div>
            <div className={classes.links}>
              <a href="https://github.com/somadina94/365CLUB" target="_blank" rel="noreferrer">
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://365.jahbyte.com" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              A distinctive dice game crafted using React for the frontend and Node.js for the
              backend. It offers an enjoyable experience where players roll a dice, aiming for
              numbers 3, 6, or 5 to win, and any other number results in a loss. The implementation
              is seamless, with React employed to create an engaging single-page application that
              enhances the overall gaming experience.
            </p>
          </div>
        </animated.div>
        <animated.div style={props} className={classes['content-container']}>
          <div className={classes.content}>
            <div className={classes.photo}>
              <img src={nike} alt="project" />
            </div>
            <div className={classes.links}>
              <a href="https://github.com/somadina94" target="_blank" rel="noreferrer">
                <FaGithubSquare className={classes.icon} />
              </a>
              <a href="https://nike-landing-project.netlify.app" target="_blank" rel="noreferrer">
                <FcLink className={classes.icon} />
              </a>
            </div>
            <p>
              Discover the epitome of style and functionality with our React Nike Product Landing
              Page. Powered by React.js, TypeScript, and Tailwind CSS, this page seamlessly
              integrates stunning design with robust functionality. Explore the latest Nike products
              with ease, thanks to smooth navigation and dynamic features. Elevate your online
              shopping experience to new heights.
            </p>
          </div>
        </animated.div>
      </section>
    </Fragment>
  );
};

export default Projects;
