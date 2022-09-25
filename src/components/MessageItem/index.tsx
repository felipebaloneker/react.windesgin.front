import { useAuth } from "../../hooks/useAuth";
import './styles.scss'
type IMessageProps ={
    author:string;
    author_name:string;
    message:string;
    time:string;
    type:string;
}

function MessageItem({author,author_name,message,time, type}:IMessageProps){
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
            <div className="message-author">
                <p>{author_name}</p>
            </div>
            <div className="message-text"
                     style={{
                        backgroundColor:user?.id == author ? '#3A7FFF': "#495871"
                    }}>{message}</div>
            <div className="message-time">
                <p>{time.split("T")[1].slice(0,5)}</p>
            </div>
        </div>
    </div>
)
}
export default MessageItem;