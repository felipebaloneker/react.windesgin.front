import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import Api from "../../services/Api";
import './styles.scss'
type Props ={
    id:string;
}
function ResetPassword(){
    const [password,setPassword] = useState('');
    const [confimPassword,setConfirmPassword] = useState('');
    const params = useParams<Props>();
    const id = params.id
    const passwordReset= async()=>{
        if(confimPassword !== password){
            return window.alert('Confirmação de senhas não confere!')
        }
        await Api.resetPassword(id,password).then(function (res:any){
            if(res.status == 200){
                return window.alert("Senha auterada com sucesso!")
            }
            else{
                return window.alert("Ocorreu um erro!")
            }
        })
        return
    }
    return(
        <div className="reset">
            <Header/>
            <div className="reset_main">
                <div className="container">
                    <div className="wrp">
                       <div className="tittle">
                            <h1>Recuperar Senha!</h1>
                       </div>
                        <p>Digite sua nova senha.</p>
                        <label htmlFor="text">Senha:</label>
                        <input type="password" autoFocus 
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label htmlFor="text">Confirma Senha:</label>
                        <input type="password"
                        required
                        value={confimPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={passwordReset}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword