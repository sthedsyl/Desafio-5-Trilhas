import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
      <div className='w-full h-full min-h-screen flex flex-col justify-between'>
        <Header />
        <main className='font-[Poppins, sans-serif]'>
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default Layout;
