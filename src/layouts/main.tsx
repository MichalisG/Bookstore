import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
    <header>
    </header>
    <main style={{ flex: 1, width: '100%' }}>
      <Outlet />
    </main>
    <footer>
    </footer>
    </div>
  );
}

export default Layout;
