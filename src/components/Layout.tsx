
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

type LayoutProps = {
  children: ReactNode;
  transparentHeader?: boolean;
};

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={transparentHeader} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
