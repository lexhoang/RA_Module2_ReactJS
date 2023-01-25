// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import UserDetail from './components/content/user/UserDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* Định nghĩa bộ định tuyến */}
      <Routes>
        {/* Định tuyến */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<UserPage />} >
          {/* Nested Route */}
          <Route path="userDetail" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
