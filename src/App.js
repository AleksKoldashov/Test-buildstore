import './App.css';
import FormLogin from './components/FormLogin';
import { useAuth } from './hooks/use-auth';
import Home from './page/Home';
import {useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()  
const {isAuth, email}= useAuth()

  return isAuth ? (
    <div className="App">
      <Home/>
    </div>
  ) : (
    <div><FormLogin/></div>
  )
}

export default App;
