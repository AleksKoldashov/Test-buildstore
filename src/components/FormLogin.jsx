import { NavLink } from 'react-router-dom';
import './styles/FormAuth.css'
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { setUser } from '../redux/Slicer/userSlicer';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

function FormLogin() {
   const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const navigate =  useNavigate ()
  
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
                navigate('/')
      }))
              .catch(console.error)
    }
    return (
        <div className="form-container">
          <div className="form">
                <h1>Войти</h1>
                <div className="mail">
                <h3>
                    Введите адрес электронной почты
                </h3>
                <input 
                type='mail'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                <div className="pass">
                <h3>
                    Введите пароль
                </h3>
                <input
                type='password'
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                />
                </div>
                
                <button onClick={()=> handelLogin(email,password)}>Войти</button>
                <h6>Не зарегистрированы? <NavLink to={`/reg`}>Перейти к регистрации</NavLink></h6>    

          </div>
                
        </div>
    )
        
    
  }
  
  export default FormLogin;
  