import { useState } from "react";
import { useOrders } from "../../hooks/useOrders";
import './styles.scss'

function ListOrder(){
	const {orderList} = useOrders()

    const openOderClick = ()=>{
        console.log('Open')
    }

    return(
        <div className="listOrder">
            <div className="column">
                <p>ID</p>
                <span>|</span>
                <p>Categoria</p>
                <span>|</span>
                <p>Detalhes</p>
                <span>|</span>
                <p>Status</p>
                <span>|</span>
                <p>Data</p>
            </div>
            <div className="orders">
                {orderList.map(item=>{
                    const [fulldate,] = item.created_at.split('T')
                    const [year,week,day] = fulldate.split('-')
                    const date = `${day}/${week}/${year}`

                    return(
                        <div className="order_details"
                        onClick={openOderClick}
                        key={item.id}
                        >
                            <div className="order_data"><p>{item.id}</p></div>
                            <div className="order_data"><p>{item.category_id}</p></div>
                            <div className="order_data"><p>{item.details}</p></div>
                            <div className="order_data"><p>{item.status}</p></div>
                            <div className="order_data"><p>{date}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ListOrder;