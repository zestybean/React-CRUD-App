import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return(
      <div>
        <Link to='/'>Home / </Link>
        <Link to='/hello'>Hello</Link>
      <hr />
      </div>
  );
}

export default Nav;
