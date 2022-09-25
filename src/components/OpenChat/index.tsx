import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useChatMessages } from '../../hooks/useChatMessages';
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import EmojiPicker from 'emoji-picker-react';

import './styles.scss'
import Api from '../../services/Api';
import MessageItem from '../MessageItem';

type Props ={
    id:string;
}

function OpenChat(){
        // get user
        const {user} = useAuth()
        const [name,] = user!.name!.split(' ')
        //get id of order and chat
        const params = useParams<Props>();
        const id = params.id
        const chat_id = id!.split('_')[1]
        const [text,setText] = useState('')
        const [type,setType] = useState('text')
        const {messages} = useChatMessages(chat_id)
        const [emojiOpen,setEmojiOpen] = useState(false)
        const body = document.getElementById('body')

        useEffect(() => {
            if (body !== null) {
                body.scrollTop = body.scrollHeight;
            }
        }, [messages.length]);

        const openEmoji=()=>{
            if(emojiOpen){
                setEmojiOpen(false)
            }
            else{setEmojiOpen(true)}
        }

        const sendMessage= async()=>{
            await Api.createMessage(name,chat_id,text,type)
            .catch(err =>console.log(err))
            setText('')
        }

        const clickEnter = (e:string) =>{
            if(e === 'Enter'){
                sendMessage();
            }
        }

        const EmojiClick =(e:any,emojiObject:any)=>{
            setText(text + emojiObject.emoji);
        }

        if(chat_id){                
            return(
                <div className="chat_open">
                    <div className="chat_header">

                    </div>
                    <div className="chat_main" id ='body'>
                        <div className="chat_message">
                            {messages.map(item=>{
                                return(
                                    <MessageItem
                                    author={item.author_id}
                                    author_name={item.author_name}
                                    message={item.body}
                                    time={item.created_at}
                                    type={item.type}
                                    key={item.id}
                                    />
                                )
                            })}
                        </div>
                        <div className="chat-emoji"
                        style={{display: emojiOpen ? "flex" : "none"}}
                        >
                        <EmojiPicker
                        onEmojiClick={EmojiClick}
                        disableSearchBar
                        disableSkinTonePicker
                        />
                        </div>
                    </div>
                    <div className="chat_footer">
                        <div className="footer_btn">
                            <BsFillEmojiSmileFill 
                            className='emoji-btn'
                            onClick={openEmoji}
                            size={20}
                            />
                        </div>
                        <input type="text" placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={e =>clickEnter(e.key)}
                        />
                        <div className="footer_btn">
                            <IoMdSend
                            className='send-btn'
                            onClick={sendMessage}
                            size={25}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        return(<></>)
}
export default OpenChat