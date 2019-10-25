import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import RangeHero from '../components/RangeHero';
import RangeContent from '../components/RangeContent';
import Contact from '../components/Contact';

export default class OurRange extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <RangeHero />
        <RangeContent />
        <Contact />
      </Layout>
    );
  }
}
