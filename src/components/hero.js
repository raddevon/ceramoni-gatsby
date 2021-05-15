import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import GlobalStyles from '../styles/GlobalStyles';

export default function Hero() {
  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'grid' }}>
        <StaticImage
          style={{
            gridArea: '1/1',
          }}
          src="../assets/images/logo-original.jpg"
          alt="Site Logo"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            alignItems: 'end',
            justifyItems: 'end',
            display: 'grid',
            color: 'yellow',
          }}
        >
          Test text (Offerings Box and Button goes here)
        </div>
      </div>
    </>
  );
}
