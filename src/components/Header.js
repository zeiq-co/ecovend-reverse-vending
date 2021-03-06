import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

const Navbar = styled.div`
  font-family: ${props => props.theme.primaryFontFamily}!important;
  padding-bottom: 1rem;
  .navbar-item img {
    max-height: 107px;
  }
  .is-active {
    color: ${props => props.theme.secondaryColor}!important;
    @media only screen and (max-width: 768px) {
      color: black !important;
    }
  }
  .navbar-item {
    transition: color 0.2s;
    :hover {
      background: transparent;
      color: ${props => props.theme.hovercolor}!important;
    }
    :focus-within {
      background: transparent;
      color: ${props => props.theme.primaryColor};
    }
  }
  .column {
    @media only screen and (max-width: 768px) {
      padding: 0rem !important;
    }
  }
  .navbar-end {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .navbar-dropdown {
    margin-top: -2rem;
    /* margin-right: 20rem; */
    @media only screen and (max-width: 768px) {
      margin-top: unset;
      margin-left: unset;
    }
  }
`;

const LinkStyled = styled(Link)`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.fontSize};
`;

const Logo = styled.a`
  padding: 0 !important;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
    };
  }

  Menu = () => {
    const { view } = this.state;
    this.setState({
      view: !view,
    });
  };

  render() {
    const { view } = this.state;
    const { display } = this.props;

    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Logo href="/" className="navbar-item">
              <img className="logo" src="/images/logo.png" alt="ecovend-logo" />
            </Logo>
            <a
              className={view ? 'navbar-burger is-active' : 'navbar-burger '}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.Menu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={view ? 'navbar-menu is-active' : 'navbar-menu '}
          >
            <div className="navbar-end">
              <LinkStyled to="/" className="navbar-item is-size-6">
                Home
              </LinkStyled>
              <LinkStyled to="/advertising" className="navbar-item is-size-6">
                Advertising
              </LinkStyled>
              <LinkStyled to="/technology" className="navbar-item is-size-6">
                Technology
              </LinkStyled>
              <div className="navbar-item has-dropdown is-hoverable">
                <LinkStyled to="/products" className="navbar-item  is-size-6">
                  Products
                </LinkStyled>
                <StaticQuery
                  query={graphql`
                    query HeadingQuery {
                      allContentfulEcoVendMachines(
                        sort: { fields: order, order: ASC }
                      ) {
                        edges {
                          node {
                            id
                            machineName
                            slug
                          }
                        }
                      }
                    }
                  `}
                  render={data => (
                    <div className="navbar-dropdown">
                      {data.allContentfulEcoVendMachines.edges.map(item => (
                        <LinkStyled
                          to={`/machine/${item.node.slug}`}
                          className="navbar-item  is-size-6"
                        >
                          {item.node.machineName
                            .replace('ECOVEND', '')
                            .replace('RVM', 'RVM -')}
                        </LinkStyled>
                      ))}
                    </div>
                  )}
                />
              </div>
              <LinkStyled to="/news" className="navbar-item is-size-6">
                News
              </LinkStyled>
              {display && (
                <LinkStyled to="/case" className="navbar-item is-size-6">
                  Case Studies
                </LinkStyled>
              )}
              <LinkStyled to="/faq" className="navbar-item is-size-6">
                FAQ
              </LinkStyled>
              <LinkStyled to="/contact" className="navbar-item is-size-6">
                <button type="submit" className="button is-primary">
                  <span className="">Contact us</span>
                </button>
              </LinkStyled>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
