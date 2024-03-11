import './styles/FormAuth.css'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch } from 'react-redux';
import { setUser } from '../redux/Slicer/userSlicer';
import {useNavigate} from 'react-router-dom'

function FormReg() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const navigate =  useNavigate ()

  const handelReg =(email,password)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword (auth, email, password)
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
                
                <button onClick={()=> handelReg(email,password)}>Регистрация</button> 

          </div>
        </div>
    )
        
    
  }
  
  export default FormReg;