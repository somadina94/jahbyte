import classes from './Home.module.css';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';

import Projects from './Projects';
import ContactUs from './ContactUs';
import extentionVideo from '../../videos/auto messenger.mp4';

const Home = () => {
  const props = useSpring({
    marginTop: 0,
    opacity: 1,
    from: { marginTop: -50, opacity: 0 },
    config: { tension: 1000, friction: 10, duration: 1000 },
  });
  return (
    <Fragment>
      <Helmet>
        <title>JahByte-Home</title>
        <meta name="description" content="A brief introduction to JahByte" />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className={classes.hero}>
        <animated.div style={props}>
          <h1>Williams Somadina Onuaguluchi</h1>
        </animated.div>
        <animated.div style={props}>
          <p>
            Hey I am Williams, a passionate freelance full-stack web developer with a deep love for
            coding and a keen eye for cutting-edge technology. In a world where technology has
            become the heartbeat of progress, I believe in harnessing its power to make life easier
            and more enjoyable. My journey is driven by a fascination with the evolving landscape of
            technology. I thrive on turning this fascination into tailored solutions for start-ups
            and individuals aiming to elevate their presence through captivating websites. My
            commitment lies in crafting digital experiences that not only meet but exceed
            expectations.
          </p>
        </animated.div>
        {/* <p>
          Curious about the tools I wield? Click "Learn More" to explore my technology stack, a
          fusion of modern and trending web programming languages. It's not just about writing code;
          it's about sculpting efficient solutions that bring your vision to life. Let's embark on a
          journey where your ideas meet the precision of technology.
        </p> */}
        {/* <Link to="about">Learn more</Link> */}
        <div className={classes['section-title']}>
          <h2>Projects</h2>
        </div>
        <Projects />
        <div className={classes.demo}>
          <h2>Demos</h2>
          <p>
            A video demo of one of my top projects a browser extension for auto messaging on
            Facebook
          </p>
          <video controls>
            <source src={extentionVideo} type="video/mp4" />
          </video>
        </div>
        <div className={classes['section-title']}>
          <h2>Contact</h2>
        </div>
      </section>
      <ContactUs />
    </Fragment>
  );
};

export default Home;
