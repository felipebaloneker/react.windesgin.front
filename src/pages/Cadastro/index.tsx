import { useState } from "react";
import Header from "../../components/Header";
import './styles.scss'
const cadastro =require('../../assets/cadastro.jpg')

function Cadastro(){
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
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
                        <label htmlFor="">Nome:</label>
                        <input type="text" onChange={()=>setName} />
                        <label htmlFor="">Email:</label>
                        <input type="text" onChange={()=>setEmail} />
                        <label htmlFor="">Senha:</label>
                        <input type="text" onChange={()=>setPassword} />
                        <button className='cad_btn'>Cadastrar</button>
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