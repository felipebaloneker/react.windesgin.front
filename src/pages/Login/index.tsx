import { useState } from "react";
import Header from "../../components/Header";
import './styles.scss'
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../hooks/useAuth";
import loginImg from '../../assets/login.jpg'

function Login(){         
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const navigate = useNavigate()
    const {user,loginUser,setUser} =  useAuth()
    const token = localStorage.getItem('token')

    const loginClick= async()=>{
          await loginUser(email,password).then(function(res:any){
            if(res === 404){return}
            else{
                return navigate('/meu-painel');
            }
          });
    }

    return(
        <div className="login">
            <Header/>
            <div className="main">
                        <div className="image_banner">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="login_wrp">
                            <div className="log_header">
                                <h2>Login</h2>
                            </div>
                            <div className="log_main">
                                <label htmlFor="text">Email:</label>
                                <input 
                                type="email" 
                                autoFocus
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />

                                <label htmlFor="text">Senha:</label>
                                <input 
                                type="password" 
                                required
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} />
                                
                                <button className='log_btn'
                                onClick={loginClick}
                                >Entrar</button>
                            </div>
                            <div className="login_footer">
                                <a href="/cadastro">Não tem uma conta? Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Login