import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Form from './Form';
import styles from './report.module.css';

class ReportScamming extends Component {
  render() {
    const { redirectToView } = this.props;
    return (
      <section id="Report-scame" className={styles.report}>
        <div className={`${styles.container} container`}>
          <header className={styles.header}>
            <h1 className={styles.title}>Report a scam</h1>
            <p className={styles.description}>
              our vision is to make women feel trust that we will help them and
              secure to deal with us without feeling scare
              <Link className={styles.readmore} to="/about">
                ... read more
              </Link>
            </p>
          </header>
          <div className={styles['form--container']}>
            <div className={styles['report-img-div']}>
              <img
                className={styles['form-img']}
                alt="form"
                src="https://media.gettyimages.com/photos/all-women-should-take-part-we-are-all-part-of-this-picture-id1074842602?s=2048x2048"
              ></img>
            </div>
            <Form redirectToView={redirectToView} />
          </div>
        </div>
      </section>
    );
  }
}

ReportScamming.propTypes = {
  redirectToView: PropTypes.func.isRequired,
};

export default ReportScamming;
