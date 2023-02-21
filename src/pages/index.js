import * as React from 'react';
import Layout from './components/layout';
import Seo from './components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const img = {
  maxWidth: '200px',
  maxHeight: '200px',
};

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage style={ img }
        alt="Gatsby logo"
        src="../images/icon.png"
      />
    </Layout>
  );
};

export const Head = () => <Seo title='Home Page'/>;

export default IndexPage;
