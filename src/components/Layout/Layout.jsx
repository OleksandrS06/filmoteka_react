import { Outlet, NavLink } from 'react-router-dom';

import css from '../Layout/Layout.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul className={css.Layout}>
              <li>
                <NavLink to="/" className={css.NavLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" className={css.NavLink}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading homepage...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};
export default Layout;
