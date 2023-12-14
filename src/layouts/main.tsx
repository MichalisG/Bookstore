import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ScrollToTop from '../components/ScrollToTop';
interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between bg-base-200">
      <ScrollToTop/>
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
