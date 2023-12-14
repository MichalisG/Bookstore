import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/books/add'>Add Book</Link></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
  </ul>
  );
}

export default Navigation;
