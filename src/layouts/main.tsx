import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
