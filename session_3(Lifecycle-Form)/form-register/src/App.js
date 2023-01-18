import './App.css';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: true,
    }
  }
  handleOpenRegister = () => {
    this.setState({ isToggle: false });
  }

  handleOpenLogin = () => {
    this.setState({ isToggle: true });
  }
  render() {
    if (this.state.isToggle == false) {
      document.querySelector('.form-toggle').classList.add = 'visible';
      document.querySelector('.form-panel.one').classList.add = 'hidden';
      document.querySelector('.form-panel.two').classList.add = 'active';
    } else {

    }
    return (
      <div className="form">
        <div className="form-toggle" onClick={this.handleOpenLogin}></div>
        <FormLogin />
        <FormRegister onClick={this.handleOpenRegister} />
      </div>
    );
  }
}

export default App;
