import Header from "../../components/Header";
import UserHeader from "../../components/UserHeader";
import { useAuth } from "../../hooks/useAuth";

function Chat(){
    // pegando usuario
    const {user} = useAuth()
    //pegando id do chat
    if(user){
        return(
            <>
                <UserHeader/>
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