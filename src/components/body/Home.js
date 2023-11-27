import classes from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={classes.hero}>
      <h1>Hey, welcome to JahByte. My name is Williams Onuaguluchi a.k.a Mr. Bagwell</h1>
      <p>
        A passionate freelance full-stack web developer with a deep love for coding and a keen eye
        for cutting-edge technology. In a world where technology has become the heartbeat of
        progress, I believe in harnessing its power to make life easier and more enjoyable.
      </p>
      <p>
        My journey is driven by a fascination with the evolving landscape of technology. I thrive on
        turning this fascination into tailored solutions for start-ups and individuals aiming to
        elevate their presence through captivating websites. My commitment lies in crafting digital
        experiences that not only meet but exceed expectations.
      </p>
      <p>
        Curious about the tools I wield? Click "Learn More" to explore my technology stack, a fusion
        of modern and trending web programming languages. It's not just about writing code; it's
        about sculpting efficient solutions that bring your vision to life. Let's embark on a
        journey where your ideas meet the precision of technology.
      </p>
      <Link to="about">Learn more</Link>
    </section>
  );
};

export default Home;
