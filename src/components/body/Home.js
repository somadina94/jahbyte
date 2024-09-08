import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import classes from './Home.module.css';

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
            and individuals aiming to elevate their presence through captivating websites and mobile
            applications. My commitment lies in crafting digital experiences that not only meet but
            exceed expectations.
          </p>
        </animated.div>
        <Link to="/about">View Stack</Link>
      </section>
    </Fragment>
  );
};

export default Home;
