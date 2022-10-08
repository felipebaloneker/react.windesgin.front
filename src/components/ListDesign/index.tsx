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
          <div className="list_design_container">
            {designList.map((item) => {
              return (
                <div className="user_container" key={item.id}>
                  <div className="user_type">{item.name}</div>
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
