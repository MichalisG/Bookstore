import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto">
        <Breadcrumbs/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
