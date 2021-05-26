import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { StonesPageGrid } from '../styles/Grids';

function StoneCard({ stone }) {
  const image = getImage(stone.image.asset.gatsbyImageData);
  return (
    <StonesPageGrid>
      <div>
        <h2>{stone.name}</h2>
        <p>{stone.description}</p>
        <Link to={`/stone/${stone.slug.current}`}>
          <GatsbyImage image={image} alt={`A picture of ${stone.name} beads`} />
        </Link>
      </div>
    </StonesPageGrid>
  );
}

export default function StonesList({ stones }) {
  console.log(stones);
  return (
    <>
      {stones.map(stone => (
        <StoneCard key={stone.id} stone={stone} />
      ))}
    </>
  );
}
