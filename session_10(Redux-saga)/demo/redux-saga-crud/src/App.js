import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUsers from './components/ListUsers';
import { Route, Routes } from 'react-router-dom';
import NewUser from './components/NewUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/createUser' element={<NewUser />} />
        <Route path='/updateUser' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
