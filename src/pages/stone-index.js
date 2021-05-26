import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import StonesList from '../components/StonesList';

export default function StoneIndexPage(props) {
  const stones = props.data.stones.nodes;
  return (
    <Layout>
      <p>Stone Index</p>
      <StonesList stones={stones} />
    </Layout>
  );
}

export const query = graphql`
  query StoneQuery {
    stones: allSanityStone {
      #(sort: { fields: order, order: ASC }) {
      nodes {
        #order
        id
        name
        slug {
          current
        }
        description
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
