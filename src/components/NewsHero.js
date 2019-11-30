import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BreadCrumbs from './BreadCrumbs';
import BlogCard from './BlogCard';
import NewsPosts from './NewsPosts';
import HelpCard from './HelpCard';

const Section = styled.section`
  margin-bottom: 4rem;

  .menu-list li ul {
    border-left: none !important;
  }

  .menu-list li ul li {
    font-size: 1rem;
    border-left: 4px solid #dbdbdb;
    transition: border-left 0.5s, padding-left 0.5s;
    :hover {
      padding-left: 0.5rem;
      border-left: 5px solid ${props => props.theme.secondaryColor};
    }
  }

  .image.is-64x64 {
    margin: 0rem 1rem 0rem 0rem;
  }

  .pagination {
    margin-top: 3rem;
  }

  .test {
    margin-bottom: 5rem;
  }
  .heading {
    font-weight: 600;
    letter-spacing: 1.1px;
    line-height: 2;
    font-size: 1.5rem;
  }
  .icon {
    color: ${props => props.theme.primaryColor};
    margin-right: 1rem;
  }
`;

class NewsConetnt extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="test">
            <BreadCrumbs undelineText="News" />
          </div>
          <div className="columns">
            <div className="column">
              {news.map(item => (
                <BlogCard
                  category={item.node.newsCategory}
                  date={item.node.date}
                  image={item.node.image.file.url}
                  title={item.node.newsTitle}
                  para={item.node.shortDescription.internal.content}
                  to={`/blog/${item.node.slug}`}
                />
              ))}
            </div>
            <div className="column is-4">
              <div className="">
                <h5 className="heading">Follow Us</h5>
                <Link to="/" className="icon is-size-4">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="/" className="icon is-size-5">
                  <i className="fab fa-twitter"></i>
                </Link>
              </div>
              <div className="posts">
                <h5 className="title is-4">Recent Posts</h5>
                <aside className="menu">
                  <ul className="menu-list">
                    <li>
                      <ul>
                        <li>
                          <Link to="/">Recent</Link>
                        </li>
                        <li>
                          <Link to="/"> Business</Link>
                        </li>
                        <li>
                          <Link to="/"> PR</Link>
                        </li>
                        <li>
                          <Link to="/"> Projects</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="posts">
                <h5 className="title is-4">Recent Posts</h5>
                <NewsPosts image="/images/news/four.jpg" />
                <NewsPosts image="/images/news/three.jpg" />
              </div>
              <div className="posts">
                <HelpCard />
              </div>
            </div>
          </div>
          <nav className="pagination" role="navigation" aria-label="pagination">
            <Link
              to="/"
              className="pagination-previous"
              title="This is the first page"
              disabled>
              Previous
            </Link>
            <Link to="/" className="pagination-next">
              Next page
            </Link>
            <ul className="pagination-list">
              <li>
                <Link
                  to="/"
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page">
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="pagination-link"
                  aria-label="Goto page 2">
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="pagination-link"
                  aria-label="Goto page 3">
                  3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    );
  }
}
export default NewsConetnt;
