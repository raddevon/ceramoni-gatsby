import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const HeroGrid = styled.div`
  //Start with the grid: 3x3
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  //grid-gap goes here if we need it
`;

const HeroBkImg = styled.div`
  //The image will take up the whole grid and be in the background
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;

const HeroCTA = styled.div`
  //The link to "Offerings" or whatever else we want as the attention-getter
  grid-column-end: 3;
  grid-row-end: 4;
  z-index: 99;
  background-color: var(--light-accent);
`;

export default function Hero() {
  return (
    <>
      <HeroGrid>
        <HeroBkImg>
          <StaticImage
            src="../assets/images/logo-original.jpg"
            alt="Site Logo"
            placeholder="blurred"
            layout="fullWidth"
          />
        </HeroBkImg>
        <HeroCTA>TEST</HeroCTA>
      </HeroGrid>
    </>
  );
}
