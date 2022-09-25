import { useEffect, useState } from 'react'
import Api from '../services/Api'
type MessageProps = Record<string,{
    id:string;
    author_id:string;
    author_name:string;
    chat_id:string;
    message:string;
    created_at:string;
    type:string;
}>
type resProp = {
    data:MessageProps;
}
type Message = {
    id:string;
    author_id:string;
    author_name:string;
    chat_id:string;
    body:string;
    created_at:string;
    type:string;
}
export function useChatMessages(chat_id:string){
    const [messages, setMessages] = useState<Message[]>([])
    useEffect(()=>{
     const timer = setInterval(()=>{
        Api.listChatMessage(chat_id).then(function(item:resProp|any){
            return setMessages(item.data)
            }).catch(err => {return err})
     },1000)
     return ()=> clearInterval(timer)
    })
    return {messages}
}