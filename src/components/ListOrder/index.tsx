import { useState } from "react";
import './styles.scss'

function ListOrder(){
    const [orderlist,setOrderList] = useState([
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
        {"id": "3ab01d55-30c5-4ee7-9f1a-a86574dc38cf",
		"author_id": "91dd5dc5-6593-4f27-b138-791326eabaa1",
		"details": "teste de pedido",
		"category_id": "92e8e58b-f513-4299-b8fa-54385ea14ef7",
		"status": "em progresso",
		"created_at": "2022-04-07T21:42:03.172Z"},
    ])

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
                {orderlist.map(item=>{
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