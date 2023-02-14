import logo from './logo.svg';
// import './App.css';
import LayoutComponent from './components/LayoutComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutComponent />} />
      </Routes>
 </div>
  );
}

export default App;
