import logo from './logo.svg';
import './App.css';
import TittleComp from './components/TittleComp';
import ListProductComp from './components/ListProductComp';
import CartComp from './components/cart/CartComp';

function App() {
  return (
    <div className="container">
      <TittleComp />
      <div className="row">
        <ListProductComp />
        <CartComp />
      </div>
    </div>
  );
}

export default App;
