import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

// const Dropdown = styled.select`
//   display: block;
//   padding: 10px;
//   margin: 10px 0;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `;

// const DropdownOption = styled.option`
//   padding: 10px;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `;

// class SingleItemPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       threadLengths: '15',
//       threadOptions: 'acrylic',
//     };
//   }

//   setSelected = value => {
//     this.setState({ selected: value });
//   };

//   render() {
//     const item = this.props.data.item.node;

//     return (
//       <Layout>
//         <h2>SINGLE ITEM</h2>
//         // <p>{item.name}</p>
//         // <GatsbyImage image={image} alt={`A picture of a ${item.name}`} />
//         <Dropdown
//           id="threadLengths"
//           onChange={e => this.setSelected(e.target.value)}
//           value={this.state.selected}
//         >
//           {item.threadLengths.map(option => (
//             <DropdownOption key={option}>{option}</DropdownOption>
//           ))}
//         </Dropdown>
//       </Layout>
//     );
//   }
// }
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

// export default SingleItemPage;

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
