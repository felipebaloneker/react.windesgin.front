import { useState } from "react";
import Header from "../../components/Header"
import Api from "../../services/Api";
import './styles.scss'

function ForgotPassword(){
    const [email,setEmail] = useState('');
    const passwordReset= async()=>{
        Api.sendEmailPassword(email);
        window.alert('Verifique sua Caixa de Email');
    }
    return(
        <div className="forgot">
            <Header/>
            <div className="forgot_main">
                <div className="container">
                    <div className="wrp">
                       <div className="tittle">
                            <h1>Recuperar Senha!</h1>
                       </div>
                        <p>Digite seu email e vamos enviar um link para você resetar sua senha.</p>
                        <label htmlFor="text">Email:</label>
                        <input type="email" autoFocus 
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button onClick={passwordReset}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword