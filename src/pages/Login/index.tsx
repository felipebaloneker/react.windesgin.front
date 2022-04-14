import { useState } from "react";
import Header from "../../components/Header";
import './styles.scss'
const login =require('../../assets/login.jpg')

function Login(){         
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    return(
        <div className="login">
            <Header/>
            <div className="main">
                        <div className="image_banner">
                            <img src={login} alt="" />
                        </div>
                        <div className="login_wrp">
                            <div className="log_header">
                                <h2>Login</h2>
                            </div>
                            <div className="log_main">
                                <label htmlFor="">Email:</label>
                                <input type="text" onChange={()=>setEmail} />
                                <label htmlFor="">Senha:</label>
                                <input type="text" onChange={()=>setPassword} />
                                <button className='log_btn'>Cadastrar</button>
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