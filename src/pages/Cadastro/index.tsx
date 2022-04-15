import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Api from "../../services/Api";
import './styles.scss'
const cadastro =require('../../assets/cadastro.jpg')

function Cadastro(){
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const navigate = useNavigate()
    
    const createUser = async()=>{
        const user = await Api.createUser(name,email,password)
        if(user){navigate('/login')}

    }
    return(
        <div className="cadastro">
            <Header/>
            <div className="main">
                <div className="image_banner">
                    <img src={cadastro} alt="" />
                </div>
                <div className="cadastro_wrp">
                    <div className="cad_header">
                        <h2>Cadastre-se</h2>
                    </div>
                    <div className="cad_main">
                        <label htmlFor="text">Nome:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                        <label htmlFor="text">Email:</label>
                        <input type="text" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="text">Senha:</label>
                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button className='cad_btn'
                        onClick={createUser}
                        >Cadastrar</button>
                    </div>
                    <div className="cad_footer">
                        <a href="/login">já tem uma conta? Loge-se</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cadastro;