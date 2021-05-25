import React from 'react';

export default function StonesList({ stones }) {
  return (
    <>
      <p>LIST OF STONES</p>
      {stones.map(stone => (
        <>
          <p>{stone.name}</p>
          <p>{stone.description}</p>
        </>
      ))}
    </>
  );
}
