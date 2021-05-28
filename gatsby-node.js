import path from 'path';

// { graphql, actions } is destructured from params
async function turnItemsIntoPages({ graphql, actions }) {
  // Get a template for the pages
  const itemTemplate = path.resolve('./src/templates/ItemPageTemplate.js');
  // Query all items
  const { data } = await graphql(`
    query {
      items: allSanityItem {
        nodes {
          name
          slug {
            current
          }
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  console.log(data);
  // Loop over each item and create a page for that item
  data.items.nodes.forEach(item => {
    actions.createPage({
      // What is the URL for the new page? REMEMBER THAT WE'RE GOING TO BE DOING THIS WITH ITEMS NOT STONES
      path: `item/${item.slug.current}`,
      component: itemTemplate,
      context: {
        slug: item.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create item pages dynamically
  await turnItemsIntoPages(params);
}
