import logo from './logo.svg';
import './App.css';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<SignIn /> }/>
        <Route path='/auth/SignUp' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
