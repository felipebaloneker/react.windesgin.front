import ListOrder from "../../components/ListOrder";
import NewOrder from "../../components/NewOrder";
import { useState } from "react";

function UserPainel() {
  const [listOpen, setListOpen] = useState(true);

  return (
    <>
      <main>
        <div className="user_btn">
          <button className="painel_btn" onClick={() => setListOpen(false)}>
            Novo Pedido
          </button>
          <button className="painel_btn" onClick={() => setListOpen(true)}>
            Meus Pedidos
          </button>
        </div>
        <div className="painel_container">
          {listOpen ? <ListOrder /> : <NewOrder />}
        </div>
      </main>
    </>
  );
}
export default UserPainel;
