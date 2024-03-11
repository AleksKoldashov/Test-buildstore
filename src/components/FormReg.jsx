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
  const {push} = useNavigate()

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
                  push('/')
          }))
           .catch(console.error)
 }
    return (
        <div className="form-container">
          <form action="" method="post" id="register">
                <h2>Регистрация</h2>
                <input 
                type="email" 
                name="login" 
                id="login" 
                class="input__text" 
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="password"
                name="password" 
                class="input__text" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
                />

             </form>
             <button onClick={()=> handelReg(email,password)}>Регистрация</button>
        </div>
    )
        
    
  }
  
  export default FormReg;