import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

class SingleItemPage extends React.Component {
  state = 
}

export default function SingleItemPage({ data }) {
  const item = data.item;
  const image = getImage(item.image.asset.gatsbyImageData);

  return (
    <Layout>
      <h2>SINGLE ITEM</h2>
      <p>{item.name}</p>
      <GatsbyImage image={image} alt={`A picture of a ${item.name}`} />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    item: sanityItem(slug: { current: { eq: $slug } }) {
      id
      image {
        asset {
          gatsbyImageData
        }
      }
      name
      price
      threadLengths {
        threadLengthArray
      }
      threadOptions {
        name
      }
      wrist
    }
  }
`;
