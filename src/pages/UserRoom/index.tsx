import UserHeader from "../../components/UserHeader";
import "./styles.scss"
import ListOrder from "../../components/ListOrder";
import { useState } from "react";
import NewOrder from "../../components/NewOrder";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";

function UserRoom(){
  const [listOpen,setListOpen] = useState(true)
  const {user} = useAuth()
  const user_id = user?.id;

    return(
        <div className="user_painel">
          {user? <UserHeader/>  : <Header/>}
          <div className="painel_wrp">
            <main>
              <div className="user_btn">
                <button className="painel_btn" onClick={()=>setListOpen(false)}>Novo Pedido</button>
                <button className="painel_btn" onClick={()=>setListOpen(true)}>Meus Pedidos</button>
              </div>
              <div className="painel_container">
                  {listOpen?
                    <ListOrder/> 
                    :
                    <NewOrder/>
                  }
              </div>
            </main>
          </div>
        </div>
    )
}
export default UserRoom;