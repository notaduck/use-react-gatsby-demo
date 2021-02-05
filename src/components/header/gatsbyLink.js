import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const GatsbyLink = ({ title, route }) => (
  <Link
    className="py-1 mt-4 md:inline-block md:mt-0 md:ml-6 text-link-primary border-b-2 border-transparent hover:border-orange-primary"
    activeClassName="text-orange-primary"
    partiallyActive={true}
    to={route}
  >
    {title}
  </Link>
);

GatsbyLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
};

export default GatsbyLink;
