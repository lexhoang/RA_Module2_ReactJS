import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LayoutComp from './components/LayoutComp';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignPage from './pages/SignPage';

function App() {
  return (
    <div className="App">
      {/* <div class="hero_area"> */}
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="signIn" element={<SignPage />} />
        </Route>
      </Routes>



    </div>
  );
}

export default App;
