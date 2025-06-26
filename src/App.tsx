import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/css/tabler-themes.min.css'
import '@tabler/core/dist/js/tabler.min.js'
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Setting from "@/layouts/Setting";
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="page-wrapper">
          <AppRoutes />
          <Footer />
        </div>
      </div>
      <Setting />
    </>
  )
}

export default App;
