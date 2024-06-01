import { Fragment, useRef, useState } from 'react';
import { BsFillPersonFill, BsFillEnvelopeAtFill, BsEnvelopeFill } from 'react-icons/bs';
import useInput from '../../hooks/userInput';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { useSpring, animated } from 'react-spring';

import classes from './ContactUs.module.css';
import Spinner from '../UI/Spinner';
import AuthAlert from '../UI/AuthAlert';

const ContactUs = () => {
  const formRef = useRef();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertStatus, setAlertStatus] = useState(false);

  const props = useSpring({
    marginTop: 0,
    opacity: 1,
    from: { marginTop: -50, opacity: 0 },
    config: { tension: 1000, friction: 10, duration: 1000 },
  });

  const {
    value: nameInput,
    enteredValueIsValid: nameInputIsValid,
    hasError: nameInputIsInvalid,
    valueInputChangedHandler: nameInputChangedHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailInput,
    enteredValueIsValid: emailInputIsValid,
    hasError: emailInputIsInvalid,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: messageInput,
    enteredValueIsValid: messageInputIsValid,
    hasError: messageInputIsInvalid,
    valueInputChangedHandler: messageInputChangedHandler,
    valueInputBlurHandler: messageInputBlurHandler,
    reset: messageInputReset,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (emailInputIsValid && nameInputIsValid && messageInputIsValid) {
    formIsValid = true;
  }

  const sendEmailHandler = (e) => {
    e.preventDefault();
    setShowSpinner(true);

    emailjs
      .sendForm('service_z111as9', 'template_1m4o7wg', formRef.current, '68LD1sFIvxz4ARoxv')
      .then(
        (result) => {
          e.target.reset();
          setShowSpinner(false);
          nameInputReset();
          emailInputReset();
          messageInputReset();
          setAlertMsg('Email sent successfully, I will get back to you as soon as possible');
          setAlertStatus(true);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 6000);
        },
        (error) => {
          setShowSpinner(false);
          setAlertMsg(
            'Error sending your email, please try again later or use another contact channel provided'
          );
          setAlertStatus(false);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 6000);
        }
      );
  };

  const nameInputClasses = nameInputIsInvalid
    ? `${classes.group} ${classes.invalid}`
    : classes.group;

  const emailInputClasses = emailInputIsInvalid
    ? `${classes.group} ${classes.invalid}`
    : classes.group;

  const messageInputClasses = messageInputIsInvalid
    ? `${classes.group} ${classes.invalid}`
    : classes.group;

  return (
    <Fragment>
      <Helmet>
        <title>Contact JahByte</title>
        <meta
          name="description"
          content="Contact us through our contact channels provided for support and enquiries."
        />
        <link rel="canonical" href="/contact-jahbyte" />
      </Helmet>
      <animated.div style={props} className={classes.container}>
        <form className={classes.form} ref={formRef} onSubmit={sendEmailHandler}>
          {showSpinner && <Spinner />}
          {showAlert && <AuthAlert message={alertMsg} status={alertStatus} />}
          <div className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <div className={classes['input-group']}>
              <BsFillPersonFill className={classes.icon} />
              <input
                type="text"
                name="name"
                value={nameInput}
                onChange={nameInputChangedHandler}
                onBlur={nameInputBlurHandler}
              />
            </div>
            {nameInputIsInvalid && <span>Please enter your name.</span>}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Emaill address</label>
            <div className={classes['input-group']}>
              <BsFillEnvelopeAtFill className={classes.icon} />
              <input
                type="text"
                name="email"
                value={emailInput}
                onChange={emailInputChangedHandler}
                onBlur={emailInputBlurHandler}
              />
            </div>
            {emailInputIsInvalid && <span>Please enter your valid email.</span>}
          </div>
          <div className={messageInputClasses}>
            <label htmlFor="message">Message</label>
            <div className={classes['input-group']}>
              <BsEnvelopeFill className={classes.icon} style={{ alignSelf: 'flex-start' }} />
              <textarea
                type="text"
                name="message"
                value={messageInput}
                onChange={messageInputChangedHandler}
                onBlur={messageInputBlurHandler}
              />
            </div>
            {messageInputIsInvalid && <span>Message field cannot be empty.</span>}
          </div>
          <div className={classes.action}>
            <button type="submit" disabled={!formIsValid}>
              Send email
            </button>
          </div>
        </form>
      </animated.div>
    </Fragment>
  );
};

export default ContactUs;
