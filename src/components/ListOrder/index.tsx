import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseCategoryList } from "../../hooks/useCategoryList";
import { useOrders } from "../../hooks/useOrders";
import Api from "../../services/Api";
import './styles.scss'

type ChatProps={
    id:string;
    order:string;
}
type Props={
    id:string;
}

function ListOrder(){
    const {listCategory} = UseCategoryList()
	const {orderList} = useOrders()
    const navigate = useNavigate()
        //get id of order and chat
        const params = useParams<Props>();
        const id = params.id
        const order_id = id!.split('_')[0]

    const openOderClick = async (id:string)=>{
        if(id!.trim() === ''){
            return;
        }
        const chat = await Api.createChat(id!)
        .then(function(res:ChatProps|any){
            console.log(res.data)
            return res.data
        })
        .catch(function (err){return console.log(err)})
        if(chat){
            navigate(`/room/${chat.order}_${chat.id}`)
        }
    }

    return(
        <div className="listOrder">
            <div className="list_header">
                <h2>Meus Pedidos:</h2>
            </div>
            <div className="orders">
                {
                orderList.length == 0 ? <p>Crie um novo pedido </p>:
                orderList.map(item=>{
                    const [fulldate,] = item.created_at.split('T')
                    const [year,week,day] = fulldate.split('-')
                    const date = `${day}/${week}/${year}`
                    const category = listCategory.map(cat=>{
                        if(item.category_id === cat.id){
                            return cat.name
                        }
                    })
                    if(item.id === order_id){
                        return(
                            <div className="order_container"
                            onClick={()=>openOderClick(item.id)}
                            key={item.id}
                            >
                                <div className="order_wrp">
                                    <div className="order_data">
                                        <span className="text">{category}</span>
                                        <span>Id:</span>
                                        <p className="text">{item.id}</p>
                                    </div>
                                    <div className="order_data"><p className="order_details">{item.details}</p></div>
                                </div>
                                <div className="order_wrp">
                                    <div className="order_data"><span>Status:</span><p>{item.status}</p></div>
                                    <div className="order_data"><span>Data de Criação:</span><p>{date}</p></div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default ListOrder;