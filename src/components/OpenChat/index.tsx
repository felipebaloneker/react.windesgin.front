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
            <>
                {chat_id}
            </>
        )
}
export default OpenChat