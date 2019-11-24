import React from 'react';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const NotFoundPage: React.FC<{}> = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{ fontSize: '75px', textAlign: 'center', marginTop: 50 }}>
      {`ERROR 404: NOT FOUND`}
    </h1>
  </Layout>
);

export default NotFoundPage;
