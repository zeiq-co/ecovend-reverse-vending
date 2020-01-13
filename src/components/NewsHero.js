import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BreadCrumbs from './BreadCrumbs';
import BlogCard from './BlogCard';
import Followus from './FollowUs';
import RecentPost from './RecentPost';
import HelpCard from './HelpCard';

const Section = styled.section`
  margin-bottom: 4rem;

  .column:first-child {
    padding: 0;
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

  .icon {
    color: ${props => props.theme.primaryColor};
    margin-right: 1rem;
  }
`;

class NewsConetnt extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        <BreadCrumbs undelineText="News" />
        <Section className="section">
          <div className="container">
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
                <Followus />
                <RecentPost />
                <div className="posts">
                  <HelpCard />
                </div>
              </div>
            </div>
            <nav
              className="pagination"
              role="navigation"
              aria-label="pagination"
            >
              <Link
                to="/"
                className="pagination-previous"
                title="This is the first page"
                disabled
              >
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
                    aria-current="page"
                  >
                    1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="pagination-link"
                    aria-label="Goto page 2"
                  >
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="pagination-link"
                    aria-label="Goto page 3"
                  >
                    3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Section>
      </React.Fragment>
    );
  }
}
export default NewsConetnt;
