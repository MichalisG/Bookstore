import type { FC } from 'react';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <li><a>Add Book</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
  </ul>
  );
}

export default Navigation;
