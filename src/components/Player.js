/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1rem 0rem;
  .frame {
    padding: 0.5rem 0.5rem 0.35rem 0.5rem;
    background: ${props => props.theme.primaryColor};
  }
  .button {
    border-radius: 3rem;
    margin-top: -1.5rem;
    border: 1px solid ${props => props.theme.primaryColor};
    background-color: #fff !important;
    color: #fff !important;
  }
  .react-player__preview {
    height: 20rem !important;
  }
  /* .react-player__shadow {
    background: #fff !important;
    margin-bottom: -1.65rem;
    width: 50px !important;
    height: 50px !important;
    border: 2px solid ${props => props.theme.primaryColor} !important;
  }
  .react-player__play-icon {
    border-color: transparent transparent transparent
      ${props => props.theme.primaryColor} !important;
  } */
`;

const Player = ({ src, width, poster, play }) => {
  const [active, changeActive] = useState(play);
  const [display, changeDisplay] = useState(true);
  return (
    <Section className="">
      <div className="frame">
        <ReactPlayer
          url={src}
          light={poster}
          playing={active}
          width={width}
          height="100%"
          onPlay={() => changeDisplay(false)}
        />
      </div>
      <div className="has-text-centered">
        <button
          type="button"
          className={display ? 'button is-large' : 'is-hidden'}
          onClick={() => changeActive(true)}
        >
          <span className="icon has-text-danger">
            <i className="fas fa-play-circle"></i>
          </span>
        </button>
        <button
          type="button"
          className={display ? 'is-hidden' : 'button is-large'}
          onClick={() => {
            changeActive(!active);
            changeDisplay(!display);
          }}
        >
          <span className="icon has-text-danger">
            <i className="fas fa-pause-circle"></i>
          </span>
        </button>
      </div>
    </Section>
  );
};

export default Player;
