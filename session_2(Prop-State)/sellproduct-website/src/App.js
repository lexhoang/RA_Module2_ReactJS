import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Detail from './components/Detail';
import Product from './components/Product';
import Find from './components/Find';
import Client from './components/Client';
import Sign from './components/Sign';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <Detail />
      <Product />
      <Find />
      <Client />
      <Sign />
      <Info />
      <Footer />
    </>
  );
}

export default App;
