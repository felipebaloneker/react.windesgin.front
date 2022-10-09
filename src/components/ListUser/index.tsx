import { useAllUsers } from "../../hooks/useAllUsers"

function ListUser() {
  const { usersList } = useAllUsers()
  return (
    <>
      <div className="list_design">
        <div className="list_design_header">
          <h2> LISTA DE USUARIOS</h2>
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
              <span>Criado em:</span>
            </div>
          </div>
          <div className="list_design_container">
            {usersList.map((item) => {
              return (
                <div className="user_container" key={item.id}>
                  <div className="user_wrp name">{item.name}</div>
                  <div className="user_wrp ">{item.email}</div>
                  <div className="user_wrp center">{item.phone}</div>
                  <div className="user_wrp center">
                    {item.created_at
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
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

export default ListUser
