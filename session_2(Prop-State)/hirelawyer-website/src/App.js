import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';

import About from './components/content/About';
import Services from './components/content/Services';
import Appointment from './components/content/Appointment';
import Features from './components/content/Features';
import Action from './components/content/Action';
import Team from './components/content/Team';
import Testimonial from './components/content/Testimonial';

import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <Services />
      <Appointment />
      <Features />
      <Action />
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
