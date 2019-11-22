import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: ${theme.secondaryColor};
  .columns {
    margin-left: 0rdem !important;
    margin-right: 0rem !important;
  }
  .section {
    padding: 3rem 1.5rem 0rem 1.5rem;
  }
  .top {
    margin: 4rem;
  }
  .text {
    margin-top: 3rem !important;
    line-height: 2 !important;
  }
  .photos {
    margin-top: 3.5rem !important;
  }
  img {
    height: 104%;
    object-fit: cover;
    width: 100%;
  }
`;

class Advertisment extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner id="advertising">
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters has-text-centered has-text-white top">
                <h1 className="title is-1 has-text-white has-text-weight-medium">
                  {home.marketingTitle}
                </h1>
                <h5 className="subtitle is-6 has-text-white text">
                  {home.marketingPara.marketingPara}
                </h5>
              </div>
            </div>
          </div>
        </section>
        <div className="columns is-multiline photos is-gapless">
          <div className="column is-4 is-marginless">
            <img src="/images/advertisment-one.jpg" alt="#" />
          </div>
          <div className="column is-4">
            <img src="/images/advertisment-two.jpg" alt="#" />
          </div>
          <div className="column is-4">
            <img src="/images/advertisment-three.jpg" alt="#" />
          </div>
          <div className="column is-4">
            <img src="/images/advertisment-four.jpg" alt="#" />
          </div>
          <div className="column is-4">
            <img src="/images/advertisment-five.jpg" alt="#" />
          </div>
          <div className="column is-4">
            <img src="/images/advertisment-six.jpg" alt="#" />
          </div>
        </div>
      </Conatiner>
    );
  }
}

export default Advertisment;
