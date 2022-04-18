import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import OpenChat from "../../components/OpenChat";
import OpenDetails from "../../components/OpenDetails";
import UserHeader from "../../components/UserHeader";
import { useAuth } from "../../hooks/useAuth";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillFileTextFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import './styles.scss'
import { useOrders } from "../../hooks/useOrders";

function Chat(){
    // get user
    const {user} = useAuth()
    // open chat or details
    const [chatOpen,setChatOpen] = useState(true)
    const navigate = useNavigate()
    const backToPainel=()=>{
        navigate('/meu-painel')
    }
    
    if(user){
        return(
            <>
                <UserHeader/>
                <div className="chat_page">
                    <div className="chat_wrp">
                        <main>
                            <div className="chat_container">
                                <div className="chat_btn">
                                    <button
                                    style={{backgroundColor: chatOpen? "var(--button-color)":""}}
                                    onClick={()=> setChatOpen(true)}
                                    ><BsFillChatDotsFill size={25}/></button>
                                    <button
                                    style={{backgroundColor: !chatOpen? "var(--button-color)":""}}
                                    onClick={()=> setChatOpen(false)}
                                    ><BsFillFileTextFill size={25}/></button>
                                    <button
                                    onClick={backToPainel}
                                    ><BsFillArrowLeftCircleFill size={25}/></button>
                                </div>
                                <div className="chat_selected">
                                    {chatOpen ?
                                        <OpenChat/> :
                                        <OpenDetails/>
                                    }
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
        <Header/>
        </>
    )
}
export default Chat;