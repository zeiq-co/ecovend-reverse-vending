import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import firstVideo from '../../static/videos/Section 3 - RVM Sales Video.mp4';

const Conatiner = styled.div`
  margin-top: 6rem;
  font-family: ${theme.primaryFontFamily};
  padding-bottom: 1rem;

  .title {
    color: ${theme.primaryColor};
    font-weight: 400;
  }
  video {
    width: 61.3125rem;
    height: 34.875rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
`;

class Video extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner id="video" className="container">
        <div className="has-text-centered">
          <h1 className="title is-1 is-capitalized">{home.videoTitle}</h1>
          {/* <iframe
            width="560"
            height="415"
            className="video"
            src={firstVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <video width="560" height="415" controls>
            <source src={firstVideo} type="video/mp4" />
          </video>
        </div>
      </Conatiner>
    );
  }
}

export default Video;
