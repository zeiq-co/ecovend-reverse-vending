import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AdvertismentHero from '../components/AdvertisingHero';
import Rvm from '../components/RvmAdvertising';
import Infographic from '../components/Infographic';

export const advertQuery = graphql`
  query advert {
    contentfulAdvertisingPage {
      title
      introParagrpah {
        introParagrpah
        childMarkdownRemark {
          html
        }
      }
      heroTitle
      heroSubtitle
      videoTitle
      videoFirstPara {
        videoFirstPara
      }
      videoSecondPara {
        videoSecondPara
        childMarkdownRemark {
          html
        }
      }
      advertisementPoints
      videoSecondTitle
      videoParagraph
      infoGraphicsPoint
      gallery {
        title
        file {
          url
        }
      }
    }
    contentfulHomePage {
      imageGrid {
        file {
          url
        }
      }
    }
  }
`;

export default class AdvertisingPage extends React.Component {
  render() {
    const {
      data: { contentfulAdvertisingPage: adv, contentfulHomePage: home },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Advertising"
          description="Advertising with us today!"
          url={`${config.siteUrl}`}
        />
        <AdvertismentHero adv={adv} />
        <Rvm adv={adv} hero={home} />
        <Infographic data={adv} />
      </Layout>
    );
  }
}
