import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin-right: 10px;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    color: var(--main-brand);
  }
`;

export default function Nav() {
  return (
    <nav>
      <NavStyles>
        <ul>
          <li>
            <Link to="/stone-index">STONE INDEX</Link>
          </li>
          <li>
            <Link to="/roots">Roots</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <Link to="/consultations">Consultations</Link>
          </li>
        </ul>
      </NavStyles>
    </nav>
  );
}
