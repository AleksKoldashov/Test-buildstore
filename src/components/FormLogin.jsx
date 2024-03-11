import { NavLink } from 'react-router-dom';
import './styles/FormAuth.css'
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { setUser } from '../redux/Slicer/userSlicer';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function FormAuth() {
   const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const {push} = useNavigate()
    const handelLogin =(email,password)=>{
       const auth = getAuth();
       signInWithEmailAndPassword(auth, email, password)
              .then((({user})=>{
                console.log(user);
                dispatch(setUser({
                      email: user.email,
                      id: user.uid,
                      token: user.accessToken
                }))
              push('/')
      }))
              .catch(console.error)
    }
    return (
        <div className="form-container">
             <form action="" method="post" id="auth">
                <h2>Login</h2>
                <input 
                type="email" 
                name="login" 
                id="login" 
                class="" 
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="password"
                name="password" 
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                  />
                <input type="submit" value="Войти" onClick={()=> handelLogin(email,password)}/>
                <h6>Не зарегистрированы? <NavLink to={`/reg`}>Перейти к регистрации</NavLink></h6> 
            </form> 
            
        </div>
    )
        
    
  }
  
  export default FormAuth;
  