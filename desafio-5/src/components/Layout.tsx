import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Layout() {
  return (
    <body className='w-full h-full'>
      <div className='w-full h-full min-h-screen flex flex-col justify-between'>
        <Header />
        <main className='font-[Poppins, sans-serif]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default Layout;
