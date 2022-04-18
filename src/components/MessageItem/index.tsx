import { useAuth } from "../../hooks/useAuth";
import './styles.scss'
type IMessageProps ={
    author:string;
    message:string;
    time:string;
    type:string;
}

function MessageItem({author,message,time, type}:IMessageProps){
    const {user} = useAuth()
return (
    <div className="message-line"
        style={{
            justifyContent:user?.id == author ? 'flex-end': "flex-start"
        }}
    >
        <div className="message-body"
                style={{
                    alignItems:user?.id == author ? 'flex-end': "flex-start"
                }}
        >
            <div className="message-text"
                     style={{
                        backgroundColor:user?.id == author ? '#3A7FFF': "#495871"
                    }}>{message}</div>
            <div className="message-time">{time.split("T")[1].slice(0,5)}</div>
        </div>
    </div>
)
}
export default MessageItem;