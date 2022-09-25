import { useState } from "react";
import NewDesign from "../NewDesign";

function ManagerPainel() {
  const [newDesign, setNewDesign] = useState(true);
  const [relatory, setRelatory] = useState(false);
  const [userList, setUserList] = useState(false);
  return (
    <>
      <main>
        <div className="user_btn">
          <button className="painel_btn" 
          onClick={() => {
            setRelatory(false);
            setUserList(false);
            setNewDesign(true);
          }}>
            Novo Funcionario
          </button>
          <button className="painel_btn" 
          onClick={() => {
            setRelatory(false);
            setNewDesign(false);
            setUserList(true);
          }}>
            Lista de Usuarios
          </button>
          <button className="painel_btn" 
          onClick={
            () => {
              setNewDesign(false);
              setUserList(false);
              setRelatory(true);
              }}>
            Relatorio de Vendas
          </button>
        </div>
        <div className="painel_container">
          {newDesign ? <NewDesign/> : ""}
          {userList ? <div /> : ""}
          {relatory ? <div/> : ""}
        </div>
      </main>
    </>
  );
}
export default ManagerPainel;
