import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UseCategoryList } from '../../hooks/useCategoryList';
import { useOrders } from '../../hooks/useOrders';
import './styles.scss'

type Props ={
    id:string
}
function OpenDetails(){
        // get user
        const {user} = useAuth()
        //get id of order and chat
        const params = useParams<Props>();
        const id = params.id
        const chat_id = id!.split('_')[1]
        const {orderList} = useOrders()
        const {listCategory} = UseCategoryList()


    return(
        <>
            {
                orderList.map(item=>{
                    const [fulldate,] = item.created_at.split('T')
                    const [year,week,day] = fulldate.split('-')
                    const date = `${day}/${week}/${year}`
                    const category = listCategory.map(cat=>{
                        if(item.category_id === cat.id){
                            return cat.name
                        }
                    })
                    return(
                        <div className="order_container"
                        key={item.id}
                        >
                            <div className="order_header">
                                <div className="order_data">
                                    <span className="text">{category}</span>
                                    <p>ID: {item.id}</p>
                                </div>
                                <div className="order_data"><span>Status:</span><p>{item.status}</p></div>
                            </div>
                            <div className="order_wrp">
                                <div className="order_data">
                                    <span>Detalhes:</span>
                                    <p className="order_details">{item.details}</p>
                                </div>
                                <div className="order_data">
                                    <span>Data de Criação:</span>
                                    <p>{date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default OpenDetails