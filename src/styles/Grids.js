import styled from 'styled-components';

export const RootsPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr [middle] 1fr;
  grid-template-rows: 10% 1fr;
`;

export const RootsMain = styled.main`
  grid-column: 1 / [middle];
`;

export const RootsImage = styled.div`
  grid-column: [middle] / 3;
`;
