import { useState } from "react"
import { useAllOrders } from "../../hooks/useAllOrders"
import { UseCategoryList } from "../../hooks/useCategoryList"

function ListAllOrdersPainel() {
  const [listType, setListType] = useState("Selecione")
  const { allOrderList } = useAllOrders()
  return (
    <>
      <div className="list_all_orders">
        <div className="list_orders_header">
          <h2> LISTA DE DEMANDAS</h2>
        </div>
        <div className="list_orders_main">
          {/* Filter Orders by progress */}
          <select onChange={(e) => setListType(e.target.value)}>
            <option selected>Selecione</option>
            <option selected>Em andamento</option>
            <option selected>Concluída</option>
          </select>
          {/* Separators */}
          <div className="separators">
            <div className="separator">
              <span>Name</span>
            </div>
            <div className="separator">
              <span>Email</span>
            </div>
            <div className="separator">
              <span>Tipo</span>
            </div>
            <div className="separator">
              <span>Aniversario</span>
            </div>
          </div>
          {/* List of orders */}
          <div className="list_orders_container">
            {allOrderList.map((item) => {
              return (
                <div className="order_container" key={item.id}>
                  {item}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default ListAllOrdersPainel
