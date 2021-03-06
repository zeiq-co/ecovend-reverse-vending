import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import config from '../utils/config';

const Section = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  padding-bottom: 3.5rem;
  .columns {
    margin-top: 1rem;
  }
  .title.is-5 {
    padding-top: 2rem;
    color: ${props => props.theme.secondaryColor};
  }
  .social {
    margin-top: 1.5rem !important;
  }

  img {
    height: 15rem;
    width: 15rem;
    margin-right: 1rem;
    @media screen and (max-width: 768px) {
      margin-right: 0rem;
    }
  }
  .first {
    background-color: #f7f7f7;
  }
  .second {
    background-color: #636362;
  }
`;

const NextBlog = ({ news, share }) => {
  const metaUrl = `${config.siteUrl}/blog/${share.slug}`;
  const metaTitle = `Checkout ${share.newsTitle}`;

  return (
    <Link to={`/blog/${news.slug}`}>
      <Section className="section">
        <div className="container">
          <div className="columns first">
            <div className="column">
              <h1 className="title is-5">SHARE THIS POST</h1>
              <FacebookShareButton
                url={metaUrl}
                quote={metaTitle}
                hashtag="#eco-vend"
              >
                <p className="title is-6">Facebook</p>
              </FacebookShareButton>
              <div className="social">
                <TwitterShareButton
                  url={metaUrl}
                  quote={metaTitle}
                  hashtag="#eco-vend"
                >
                  <p className="title is-6">Twitter</p>
                </TwitterShareButton>
              </div>
            </div>
            <div className="column second">
              <article className="media is-block-mobile has-text-centered-mobile">
                <img src={news.thumbnail.file.url} alt={news.thumbnail.title} />
                <div className="media-content ">
                  <div className="content has-text-centered-mobile">
                    <p className="subtitle is-5 has-text-white">Next Blog</p>
                    <p className="subtitle is-5 has-text-white">
                      {news.newsTitle}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Section>
    </Link>
  );
};
export default NextBlog;
