import { useState } from "react";
import { UseCategoryList } from "../../hooks/useCategoryList";
import { useOrders } from "../../hooks/useOrders";
import './styles.scss'

function ListOrder(){
    const {listCategory} = UseCategoryList()
    console.log(listCategory)
	// const {orderList} = useOrders()
    const [orderList,setOrderList] = useState([
        {
            'author_id': "0291930d-689d-46a1-b8e8-045a0f01d972",
            "category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
            "created_at": "2022-04-16T00:05:13.586Z",
            "details": "teste de pedido",
            "id": "5d648141-d8d7-4247-ab43-e9d3c48a0e94",
            "status": "concluido",
        },
        {
            'author_id': "0291930d-689d-46a1-b8e8-045a0f01d972",
            "category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
            "created_at": "2022-04-16T00:05:13.586Z",
            "details": "teste de pedido",
            "id": "5d648141-d8d7-4247-ab43-e9d3c48a0e93",
            "status": "concluido",
        },
        {
            'author_id': "0291930d-689d-46a1-b8e8-045a0f01d972",
            "category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
            "created_at": "2022-04-16T00:05:13.586Z",
            "details": "teste de pedido",
            "id": "5d648141-d8d7-4247-ab43-e9d3c48a0e91",
            "status": "concluido",
        },
        {
            'author_id': "0291930d-689d-46a1-b8e8-045a0f01d972",
            "category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
            "created_at": "2022-04-16T00:05:13.586Z",
            "details": "teste de pedido",
            "id": "5d648141-d8d7-4247-ab43-e9d3c48a0e90",
            "status": "concluido",
        },
        {
            'author_id': "0291930d-689d-46a1-b8e8-045a0f01d972",
            "category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
            "created_at": "2022-04-16T00:05:13.586Z",
            "details": "teste de pedido",
            "id": "5d648141-d8d7-4247-ab43-e9d3c48a0e96",
            "status": "concluido",
        },
    ])
    const openOderClick = ()=>{
        console.log('Open')
    }

    return(
        <div className="listOrder">
            <div className="list_header">
                <h2>Meus Pedidos:</h2>
            </div>
            <div className="orders">
                {orderList.map(item=>{
                    const [fulldate,] = item.created_at.split('T')
                    const [year,week,day] = fulldate.split('-')
                    const date = `${day}/${week}/${year}`
                    const category = listCategory.map(cat=>{
                        if(item.category_id = cat.id){
                            return cat.name
                        }
                    })
                    return(
                        <div className="order_details"
                        onClick={openOderClick}
                        key={item.id}
                        >
                            <div className="order_wrp">
                                <div className="order_data">
                                    <span>{category}</span>
                                    <span>Id:</span>
                                    <p>{item.id}</p>
                                </div>
                                <div className="order_data"><p>{item.details}</p></div>
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