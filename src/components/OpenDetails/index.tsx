import { useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { UseCategoryList } from "../../hooks/useCategoryList"
import { useGetOrder } from "../../hooks/useGetOrder"
import Api from "../../services/Api"
import "./styles.scss"

type Props = {
  id: string
}
type Types = {
  value: string
}
function OpenDetails() {
  // get user
  const { user } = useAuth()
  //get id of order and chat
  const params = useParams<Props>()
  const id = params.id
  const chat_order = id!.split("_")[0]
  const { orderList } = useGetOrder(chat_order)
  const { listCategory } = UseCategoryList()
  const [status, setStatus] = useState("")
  const [completion, setCompletion] = useState("03-10-2022")
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {orderList.map((item) => {
        const [fulldate] = item.created_at.split("T")
        const [year, week, day] = fulldate.split("-")
        const date = `${day}/${week}/${year}`
        const category = listCategory.map((cat) => {
          if (item.category_id === cat.id) {
            return cat.name
          }
        })
        //
        const changeOrderStatus = async () => {
          await Api.updateOrder(chat_order, status)
          window.location.reload()
        }
        const updateCompletion = async () => {
          const [year, week, day] = completion.split("-")
          await Api.updateOrderCompletion(chat_order, `${day}-${week}-${year}`)
          setCompletion("")
        }

        return (
          <div className="details_container" key={item.id}>
            <div className="details_header">
              <div className="details_data">
                <span className="text">{category}</span>
                <p>ID: {item.id}</p>
              </div>
              <div className="details_data">
                <span>Status:</span>
                {user?.type === "usuario" ? (
                  <p>{item.status}</p>
                ) : (
                  <>
                    <button
                      className="button-primary"
                      onClick={() => setModalOpen(true)}
                    >
                      {item.status}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="details_wrp">
              <div className="details_data">
                <span>Detalhes:</span>
                <p className="details_details">{item.details}</p>
              </div>
              <div className="details_data">
                <span>Data de Criação:</span>
                <p>{date}</p>
              </div>
              <div className="details_data">
                <span>Estimativa de Conclução:</span>
                <p>
                  {item.completion_date == "Null"
                    ? "Ainda não foi definida uma estimativa para conclução do pedido."
                    : item.completion_date}
                </p>
              </div>

              {user?.type === "usuario" ? (
                ""
              ) : (
                <div className="details_data">
                  <span>Definir data de Conclução:</span>
                  <input
                    type="date"
                    value={completion}
                    onChange={(e) => {
                      setCompletion(e.target.value)
                    }}
                  />
                  <button
                    className="button-primary"
                    onClick={() => updateCompletion()}
                  >
                    Atualizar
                  </button>
                </div>
              )}
              {/* Metodo de pagamento */}
              {/* {user?.type === "usuario" ? (
                <>
                  {item.status === "concluido" ? (
                    <>
                      <div className="details_data">
                        <span>Emitir Boleto </span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )} */}
            </div>

            {/* Model to change status */}
            <div
              className="modal_wrp"
              style={{ display: modalOpen ? "flex" : "none" }}
            >
              <div className="modal_container">
                <div className="modal_main">
                  <label>Alterar Status do Pedido:</label>
                  <p>
                    Atenção!! Despois que Alterar o status do pedido vc não
                    poderá alterar novamente.
                  </p>
                  <select onChange={(event) => setStatus(event.target.value)}>
                    <option value="em progresso" selected>
                      em progresso
                    </option>
                    <option value="concluido">concluido</option>
                  </select>
                </div>
                <div className="modal_buttons">
                  <button
                    className="button-primary"
                    onClick={() => changeOrderStatus()}
                  >
                    Atualizar
                  </button>
                  <button
                    className="button-secondary"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default OpenDetails
