import styled from 'styled-components';

export const RootsPageGrid = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr);
  grid-template-columns: 1fr 1fr;
`;

export const RootsMain = styled.main`
  grid-column: 1 / [2];
`;

export const RootsImage = styled.div`
  grid-column: [2] / 3;
`;

export const StonesPageGrid = styled.main`
  display: grid;
  grid-auto-columns: minmax(300px, auto);
`;
