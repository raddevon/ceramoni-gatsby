import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import StonesList from '../components/StonesList';

export default function StoneIndexPage(props) {
  const stones = props.data.stones.nodes;
  return (
    <div>
      <Layout>
        <p>Stone Index</p>
        <StonesList stones={stones} />
      </Layout>
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    stones: allSanityStone {
      nodes {
        name
        description
        id
        slug {
          current
        }
      }
    }
  }
`;
