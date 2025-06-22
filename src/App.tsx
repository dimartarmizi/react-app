import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css'
import routes from '@/routes/routes';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
