import React from 'react';
import PropTypes from 'prop-types';

import { Container as DefaultContainer } from './styles';

export default function Container({ children }) {
  return <DefaultContainer>{children}</DefaultContainer>;
}

Container.propTypes = {
  children: PropTypes.shape({
    children: PropTypes.func,
  }).isRequired,
};
