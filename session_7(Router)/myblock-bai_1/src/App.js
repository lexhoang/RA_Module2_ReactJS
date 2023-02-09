import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import LayoutComponent from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import UserDetail from './components/content/UserDetail';
import ContactPage from './pages/ContactPage';

const listUsers = [
  { id: "001", name: 'John', email: 'john@gmail.com', phone: "0123" },
  { id: "002", name: 'Jay', email: 'jay@gmail.com', phone: "4567" },
  { id: "003", name: 'lisa', email: 'lisa@gmail.com', phone: "6789" }
]

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path="user" element={<UserPage listUsers={listUsers} />} />
          <Route path='user/:userId' element={<UserDetail listUsers={listUsers} />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;