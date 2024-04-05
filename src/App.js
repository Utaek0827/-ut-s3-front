import logo from './logo.svg';
import './App.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Dashboard from './dashboard/Dashboard';
import Orders from './dashboard/Orders';
import { Route, Routes } from 'react-router-dom';
import ServiceInfoComponent from './serviceInfoComponent/ServiceInfoComponent';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<SignIn /> }/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Orders' element={<Orders />}/>
        <Route path='/ServiceInfoComponent' element={< ServiceInfoComponent />}/>

      </Routes>
    </div>
  );
}

export default App;
