import UserHeader from "../../components/UserHeader";
import "./styles.scss"
function UserRoom(){
    return(
        <div className="user_painel">
          <UserHeader/>  
          <div className="painel_wrp">
            <main>
              <div className="user_btn">
                <button className="painel_btn">Novo Pedido</button>
                <button className="painel_btn">Meus Pedidos</button>
              </div>
            </main>
          </div>
        </div>
    )
}
export default UserRoom;