import React from 'react';
import {Link} from 'react-router-dom';

export default ({
  children,
  boardPath,
  sidebarLink,
}) => (
  <Link
    to={
        boardPath + '/' + sidebarLink.replace('/', '')
    }
  >
    {children}
  </Link>
)