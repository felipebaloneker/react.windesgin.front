import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import OpenChat from "../../components/OpenChat";
import OpenDetails from "../../components/OpenDetails";
import UserHeader from "../../components/UserHeader";
import { useAuth } from "../../hooks/useAuth";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillFileTextFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import './styles.scss'

type ChatParams ={
    id:string;
}

function Chat(){
    // get user
    const {user} = useAuth()
    //get id of order and chat
    const params = useParams<ChatParams>();
    const [order_id, chat_id]= params.id!.split('_')
    // open chat or details
    const [chatOpen,setChatOpen] = useState(true)

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
                                    style={{backgroundColor: chatOpen? "var( --text-color)":""}}
                                    onClick={()=> setChatOpen(true)}
                                    ><BsFillChatDotsFill size={25}/></button>
                                    <button
                                    style={{backgroundColor: !chatOpen? "var( --text-color)":""}}
                                    onClick={()=> setChatOpen(false)}
                                    ><BsFillFileTextFill size={25}/></button>
                                                                        <button
                                    onClick={()=> setChatOpen(false)}
                                    ><BsFillArrowLeftCircleFill size={25}/></button>
                                </div>
                                <div className="chat_selected">
                                    {chatOpen ?
                                        <OpenChat
                                        chat_id={chat_id}
                                        /> :
                                        <OpenDetails
                                        order_id={order_id}
                                        />
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