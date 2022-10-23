import { useState } from "react"
import ListAllOrders from "../ListAllOrders"
import ListUserPainel from "../ListUserPainel"
import NewDesign from "../NewDesign"
import RelatoryPainel from "../RelatoryPainel"

function ManagerPainel() {
  const [newDesign, setNewDesign] = useState(false)
  const [relatory, setRelatory] = useState(false)
  const [orderList, setOrderList] = useState(false)
  const [userList, setUserList] = useState(true)
  return (
    <>
      <main>
        <div className="user_btn">
          <button
            className="painel_btn"
            onClick={() => {
              setRelatory(false)
              setNewDesign(false)
              setOrderList(false)
              setUserList(true)
            }}
          >
            Lista de Usuarios
          </button>
          <button
            className="painel_btn"
            onClick={() => {
              setRelatory(false)
              setUserList(false)
              setOrderList(false)
              setNewDesign(true)
            }}
          >
            Novo Funcionario
          </button>
          <button
            className="painel_btn"
            onClick={() => {
              setNewDesign(false)
              setUserList(false)
              setRelatory(false)
              setOrderList(true)
            }}
          >
            Lista de Pedidos
          </button>
          <button
            className="painel_btn"
            onClick={() => {
              setNewDesign(false)
              setUserList(false)
              setOrderList(false)
              setRelatory(true)
            }}
          >
            Relatorio de vendas
          </button>
        </div>
        <div className="painel_container">
          {newDesign ? <NewDesign /> : ""}
          {userList ? <ListUserPainel /> : ""}
          {orderList ? <ListAllOrders /> : ""}
          {relatory ? <RelatoryPainel /> : ""}
        </div>
      </main>
    </>
  )
}
export default ManagerPainel
