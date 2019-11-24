import React from 'react';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ fontSize: '75px', textAlign: 'center', marginTop: 200 }}>
      {`COMING SOON`}
    </h1>
  </Layout>
);

export default IndexPage;
