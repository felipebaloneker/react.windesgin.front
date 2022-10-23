import UserHeader from "../../components/UserHeader"
import "./styles.scss"
import { useAuth } from "../../hooks/useAuth"
import Header from "../../components/Header"
import UserPainel from "../../components/UserPainel"
import DirectorPainel from "../../components/DirectorPainel"
import ManagerPainel from "../../components/ManagerPainel"
import DesignPainel from "../../components/DesignPainel"

function UserRoom() {
  const { user } = useAuth()
  if (user) {
    return (
      <div className="user_painel">
        <UserHeader />
        <div className="painel_wrp">
          {user.type === "usuario" ? <UserPainel /> : ""}
          {user.type === "gestor" ? <ManagerPainel /> : ""}
          {user.type === "diretor" ? <DirectorPainel /> : ""}
          {user.type === "design" ? <DesignPainel /> : ""}
        </div>
      </div>
    )
  }
  return (
    <>
      <Header />
    </>
  )
}
export default UserRoom
