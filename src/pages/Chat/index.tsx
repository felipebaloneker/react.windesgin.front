import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import UserHeader from "../../components/UserHeader";
import { useAuth } from "../../hooks/useAuth";
type ChatParams ={
    id:string;
}

function Chat(){
    // pegando usuario
    const {user} = useAuth()
    //pegando id do pedido
    const params = useParams<ChatParams>();
    const order_id = params.id
    // pegando id do chat
    console.log(order_id)
    
    if(user){
        return(
            <>
                <UserHeader/>
                <main>
                    <div className="chat_wrp">
                        <div className="chat_btn">

                        </div>
                        <div className="chat_selected">

                        </div>
                    </div>
                </main>
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