import React from 'react';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection title={title}>
        {children}
      </BodySection>
    </div>
  );
};

export default BodySectionWithMarginBottom;
