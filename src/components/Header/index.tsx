import type { FC } from 'react';
import Profile from './Profile';
import Search from './Search';
import Logo from './Logo';
import Cart from './Cart';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <MobileNavigation />
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <Navigation />
        </div>
        <div className="navbar-end">
          <Search />
          <Cart />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
