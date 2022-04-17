import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './styles.scss'

type Props ={
    id:string;
}

function OpenChat(){
        // get user
        const {user} = useAuth()
        //get id of order and chat
        const params = useParams<Props>();
        const id = params.id
        const chat_id = id!.split('_')[1]
        
        return(
            <div className="chat_open">
                <div className="chat_header">

                </div>
                <div className="chat_main">
                    
                </div>
                <div className="chat_footer">

                </div>
            </div>
        )
}
export default OpenChat