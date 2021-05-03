import React from 'react';
import PropTypes from 'prop-types';

export default function SingleAuthorCard({ children, author }) {
  return (
    <div>
      <h1>Author {author.firstName} {author.lastName }</h1>
        {children}
      {/* <footer>This is the footer</footer> */}
    </div>
  );
}

SingleAuthorCard.propTypes = {
  children: PropTypes.any,
  author: PropTypes.object
};
