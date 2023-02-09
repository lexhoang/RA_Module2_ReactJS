// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import RikkeiSoft from './components/content/about/RikkeiSoft';
import RikkeiAcademy from './components/content/about/RikkeiAcademy';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* Định nghĩa bộ định tuyến */}
      <Routes>
        {/* Định tuyến */}
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} >
          <Route path="rikkeisoft" element={<RikkeiSoft />} />
          <Route path="rikkeiacademy" element={<RikkeiAcademy />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
