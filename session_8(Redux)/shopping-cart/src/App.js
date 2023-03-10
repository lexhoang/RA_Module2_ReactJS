import logo from './logo.svg';
import './App.css';
import ListProductComp from './components/product/ListProductComp';
import ListCartComp from './components/cart/ListCartComp';


function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Redux ReactJS - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProductComp />
        {/* LIST PRODUCT : END */}

        {/* CART : START */}
        <ListCartComp />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
