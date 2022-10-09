import { useAllDesign } from "../../hooks/useAllDesign"
import "./styles.scss"
function ListDesign() {
  const { designList } = useAllDesign()
  return (
    <>
      <div className="list_design">
        <div className="list_design_header">
          <h2> LISTA DE FUNCIONARIOS</h2>
        </div>
        <div className="list_design_main">
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
          <div className="list_design_container">
            {designList.map((item) => {
              return (
                <div className="user_container" key={item.id}>
                  <div className="user_wrp name">{item.name}</div>
                  <div className="user_wrp ">{item.email}</div>
                  <div className="user_wrp center">{item.type}</div>
                  <div className="user_wrp center">
                    {item.birthday.split("-").reverse().join("-")}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListDesign
