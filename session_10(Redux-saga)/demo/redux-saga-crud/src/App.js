import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUsers from './components/ListUsers';
import { Route, Routes } from 'react-router-dom';
import NewUser from './components/NewUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/createUser' element={<NewUser />} />
      </Routes>
    </div>
  );
}

export default App;
