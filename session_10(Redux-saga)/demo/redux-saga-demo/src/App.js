import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListUsers />} />
        <Route path="/updateUser" element={<UpdateUser />}/>
      </Routes>
    </div>
  );
}

export default App;
