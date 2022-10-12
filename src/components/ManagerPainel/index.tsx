import { useState } from "react"
import ListAllOrders from "../ListAllOrders"
import ListUserPainel from "../ListUserPainel"
import NewDesign from "../NewDesign"

function ManagerPainel() {
  const [newDesign, setNewDesign] = useState(false)
  const [relatory, setRelatory] = useState(false)
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
              setRelatory(true)
            }}
          >
            Relatorio de Demandas
          </button>
        </div>
        <div className="painel_container">
          {newDesign ? <NewDesign /> : ""}
          {userList ? <ListUserPainel /> : ""}
          {relatory ? <ListAllOrders /> : ""}
        </div>
      </main>
    </>
  )
}
export default ManagerPainel
