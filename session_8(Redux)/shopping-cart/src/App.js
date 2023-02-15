import logo from './logo.svg';
import './App.css';
import ListProductComp from './components/listProduct/ListProductComp';
import ListCartComp from './components/cart/ListCartComp';

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Redux - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        <ListProductComp />
        <ListCartComp />
      </div>
    </div>
  );
}

export default App;
