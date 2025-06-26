import { Routes, Route } from 'react-router-dom';

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
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
