import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlankPage from './pages/BlankPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blank',
    element: <BlankPage />,
  },
];

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4);
    NProgress.inc();
    NProgress.done();
    return () => {
      NProgress.done();
    };
  }, [location]);

  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
