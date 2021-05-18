import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Hero />
        <p>Hey! I'm the Home page</p>
      </Layout>
    </div>
  );
}
