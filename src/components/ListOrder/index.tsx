import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UseCategoryList } from "../../hooks/useCategoryList"
import { useOrders } from "../../hooks/useOrders"
import Api from "../../services/Api"
import ServicesSwiper from "../ServicesSwiper"

import "./styles.scss"

type ChatProps = {
  id: string
  order: string
}
type Props = {
  id: string
}

function ListOrder() {
  const { listCategory } = UseCategoryList()
  const { orderList } = useOrders()
  const navigate = useNavigate()
  const [listType, setListType] = useState("Selecione")
  const openOderClick = async (id: string) => {
    if (id!.trim() === "") {
      return
    }
    const chat = await Api.createChat(id!)
      .then(function (res: ChatProps | any) {
        return res.data
      })
      .catch(function (err) {
        return console.log(err)
      })
    const participant = await Api.addUserChat(chat.id)
      .then(function (res: ChatProps | any) {
        return res.data
      })
      .catch(function (err) {
        return console.log(err)
      })

    if (chat && participant) {
      navigate(`/room/${chat.order}_${chat.id}`)
    }
  }

  return (
    <div className="listOrder">
      <div className="services">
        <h2>Nossos Serviços:</h2>
        <ServicesSwiper />
      </div>
      <div className="list_header">
        <h2>Meus Pedidos:</h2>
        <div className="filter">
          <p>Filtrar Pedidos:</p>
          {/* Filter Orders by progress */}
          <select onChange={(e) => setListType(e.target.value)}>
            <option selected>Selecione</option>
            <option value="em progresso">Em andamento</option>
            <option value="concluido">Concluída</option>
          </select>
        </div>
      </div>
      <div className="orders">
        {orderList.length == 0 ? (
          <div className="painel_container">
            <p>
              Você ainda não tem pedidos registrados crie um clicando no botão
              "Novo Pedido".
            </p>
            <p></p>
          </div>
        ) : (
          orderList.map((item) => {
            const [fulldate] = item.created_at.split("T")
            const [year, week, day] = fulldate.split("-")
            const date = `${day}/${week}/${year}`
            const category = listCategory.map((cat) => {
              if (item.category_id === cat.id) {
                return cat.name
              }
            })
            if (listType == "Selecione" || listType == item.status) {
              return (
                <div
                  className="order_container"
                  onClick={() => openOderClick(item.id)}
                  key={item.id}
                >
                  <span className="order_type">{category}</span>
                  <div className="order_wrapper">
                    <div className="order_wrp">
                      <div className="order_data">
                        <span>Id:</span>
                        <p className="text">{item.id}</p>
                      </div>
                      <div className="order_data">
                        <span>Detalhes:</span>
                        <p className="text">{item.details}</p>
                      </div>
                    </div>
                    <div className="order_wrp">
                      <div className="order_data">
                        <span>Status:</span>
                        <p>{item.status}</p>
                      </div>
                      <div className="order_data">
                        <span className="text">Data de Criação:</span>
                        <p className="text">{date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        )}
      </div>
    </div>
  )
}
export default ListOrder
