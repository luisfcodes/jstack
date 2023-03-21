import React from "react";
import PropTypes from 'prop-types';

function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      { children }
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: "JStack's Blog"
}

export default Header