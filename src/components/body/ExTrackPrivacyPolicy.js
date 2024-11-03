import classes from './ExTrackPrivacyPolicy.module.css';

const ExTrackPrivacyPolicy = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.heading}>Introduction</h2>
        <p className={classes.paragraph}>
          At ExTracker, we are committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, and share information about you when you use our mobile application.
          By using the App, you agree to the collection and use of information in accordance with
          this Privacy Policy.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Information We Collect</h2>
        <p className={classes.paragraph}>
          When you create an account, we collect your email address and password. Your password is
          encrypted and we cannot view it.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>How We Use Your Information</h2>
        <p className={classes.paragraph}>
          To send you updates, security alerts, and administrative messages.
        </p>
        <p className={classes.paragraph}>
          To respond to your inquiries or provide customer support.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Data Security</h2>
        <p className={classes.paragraph}>
          We take your privacy seriously and implement reasonable security measures to protect your
          information. Passwords are encrypted, and all data transmissions are secured. However, no
          method of transmission over the internet or method of electronic storage is completely
          secure, so we cannot guarantee absolute security.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Data Retention</h2>
        <p className={classes.paragraph}>
          We retain your personal information only for as long as necessary to provide the App's
          services, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Sharing of Information</h2>
        <p className={classes.paragraph}>
          We do not sell, trade, or rent your personal information to third parties.
        </p>
        <p className={classes.paragraph}>
          We may disclose your information to comply with legal obligations, such as in response to
          a court order or other legal process.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Your Rights</h2>
        <p className={classes.paragraph}>Request a copy of the personal data we hold about you.</p>
        <p className={classes.paragraph}>
          Request the correction of inaccurate or incomplete data.
        </p>
        <p className={classes.paragraph}>
          Request the deletion of your personal data, where applicable.
        </p>
        <p className={classes.paragraph}>
          If we are processing your personal data based on your consent, you can withdraw it at any
          time.
        </p>
        <p className={classes.paragraph}>
          To exercise any of these rights, please contact us at support@jahbyte.com.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Children's Privacy</h2>
        <p className={classes.paragraph}>
          The App is not intended for use by individuals under the age of 13. We do not knowingly
          collect personal information from children under 13. If we discover that we have collected
          such information, we will take steps to delete it promptly.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Changes to This Privacy Policy</h2>
        <p className={classes.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will be posted in the
          App, and the "Last Updated" date will be revised. Your continued use of the App after any
          changes constitutes your acceptance of the updated Privacy Policy.
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.heading}>Contact Us</h2>
        <p className={classes.paragraph}>
          If you have any questions or concerns about this Privacy Policy or our data practices,
          please contact us at: support@jahbyte.com.
        </p>
      </div>
    </section>
  );
};

export default ExTrackPrivacyPolicy;
