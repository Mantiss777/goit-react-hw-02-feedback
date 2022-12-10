import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={css.container}>
      <h3
        style={{
          textAlign: 'center',
          alignSelf: 'stretch',
          marginBottom: 20,
        }}
      >
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
