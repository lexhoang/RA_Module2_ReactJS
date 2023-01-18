import logo from './logo.svg';
import './App.css';
import ExUseState from './components/ExUseState';
import ExContext from './components/ExContext';
import ExUseRef from './components/ExUseRef';
import ExUseReducer from './components/ExUseReducer';
import ExUseCallBack from './components/ExUseCallBack';
import ExUseMemo from './components/ExUseMemo';
require("@popperjs/core/package.json"); // @popperjs/core is a peer dependency. 
function App() {
  return (
    <div className="App">
      <ExUseState></ExUseState>
      <ExContext></ExContext>
      <ExUseRef></ExUseRef>
      <ExUseReducer></ExUseReducer>
      <ExUseCallBack></ExUseCallBack>
      <ExUseMemo></ExUseMemo>
    </div>
  );
}

export default App;
