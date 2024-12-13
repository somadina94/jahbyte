import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';
import { FcLink } from 'react-icons/fc';
import { FaGithubSquare } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

import classes from './Projects.module.css';
import { projects } from '../../util/projects';

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
        {projects.map((proj, index) => (
          <animated.div style={props} key={index} className={classes['content-container']}>
            <div className={classes.content}>
              <Carousel>
                {proj.photos.map((photo, index) => (
                  <Carousel.Item>
                    <div className={classes.photo} key={index}>
                      <img key={index} src={photo} alt="carou" />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className={classes.links}>
                <a href={proj.githubLink} target="_blank" rel="noreferrer">
                  <FaGithubSquare className={classes.icon} />
                </a>
                {!proj.description.includes('React Native') && (
                  <a href={proj.websiteLink} target="_blank" rel="noreferrer">
                    <FcLink className={classes.icon} />
                  </a>
                )}
                {proj.description.includes('React Native') && (
                  <a href={proj.websiteLink} target="_blank" rel="noreferrer">
                    <IoLogoGooglePlaystore className={classes.icon} />
                  </a>
                )}
              </div>
              <p>{proj.description}</p>
            </div>
          </animated.div>
        ))}
      </section>
    </Fragment>
  );
};

export default Projects;
