import { useState } from "react";
import { UseCategoryList } from "../../hooks/useCategoryList";
import { useOrders } from "../../hooks/useOrders";
import './styles.scss'

function ListOrder(){
    const {listCategory} = UseCategoryList()
	const {orderList} = useOrders()
    const openOderClick = ()=>{
        console.log('Open')
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
                    return(
                        <div className="order_container"
                        onClick={openOderClick}
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
                })}
            </div>
        </div>
    )
}
export default ListOrder;