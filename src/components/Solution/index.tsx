import { IconType } from 'react-icons';
import './styles.scss'
type Props ={
    title:string;
    detail:string;
    Icon:IconType
}

function Solution({title,detail,Icon}:Props){
    return(
        <div className="solution">
            <div className="solution_image">
               <div className="circle">
                    <Icon size={25}/>
               </div>
            </div>
            <div className="solution_text">
                <h2>{title}</h2>
                <p>{detail}</p>
            </div>
        </div>
    )
}
export default Solution