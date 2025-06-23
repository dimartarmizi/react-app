import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlankPage = lazy(() => import('../pages/BlankPage'));

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

export default routes;
