import { useState } from "react"
import ListDesign from "../ListDesign"
import ListUser from "../ListUser"
import "./styles.scss"
function ListUserPainel() {
  const [listUser, setListUser] = useState(false)
  return (
    <>
      <div className="list_user">
        <div className="list_btn">
          <button
            className="painel_btn"
            onClick={() => {
              setListUser(false)
            }}
          >
            Lista de Functionarios
          </button>
          <button
            className="painel_btn"
            onClick={() => {
              setListUser(true)
            }}
          >
            Lista de Usuarios
          </button>
        </div>
        <div className="list_container">
          {listUser ? <ListUser /> : <ListDesign />}
        </div>
      </div>
    </>
  )
}
export default ListUserPainel
