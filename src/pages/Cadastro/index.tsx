import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Api from "../../services/Api"
import "./styles.scss"
const cadastro = require("../../assets/cadastro.jpg")

function Cadastro() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordCorfim] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [birthday, setBirthday] = useState("")
  const [address, setAddress] = useState("")
  const [errorMsg, setErrorMsg] = useState<Array<string>>([])
  const [juridico, setJuridico] = useState(false)
  const navigate = useNavigate()

  const createUser = async () => {
    setErrorMsg([])
    if (password !== passwordConfirm) {
      return setErrorMsg([...errorMsg, "Confirmação de senha não confere!!"])
    }
    const juridic = juridico.toString()
    const user = await Api.createUser({
      name,
      email,
      password,
      phone,
      cpf,
      cnpj,
      juridico: juridic,
      birthday,
      address
    })
    if (user) {
      navigate("/login")
    } else {
      setErrorMsg([...errorMsg, "Opps... Ocorreu um ERROR!!"])
    }
  }
  const clearInputs = async () => {
    setName("")
    setAddress("")
    setBirthday("")
    setCpf("")
    setCnpj("")
    setEmail("")
    setPassword("")
    setPhone("")
  }

  return (
    <div className="cadastro">
      <Header />
      <div className="cad_main">
        <div className="image_banner">
          <img src={cadastro} alt="" />
        </div>
        <div className="cadastro_wrp">
          <div className="cad_header">
            <h2>Cadastre-se</h2>
            <br />
            <label className="errorMsg">
              {errorMsg.map((error) => {
                return <p>{error}</p>
              })}
            </label>
          </div>
          <div className="type_card">
            <div className="type_btn">
              <button
                style={{
                  backgroundColor: juridico ? "" : "#3a7fff",
                  color: juridico ? "" : "#ffff"
                }}
                onClick={() => {
                  clearInputs()
                  setErrorMsg([])
                  setJuridico(false)
                }}
              >
                Fisico
              </button>
              <button
                style={{
                  backgroundColor: juridico ? "#3a7fff" : "",
                  color: juridico ? "#ffff" : ""
                }}
                onClick={() => {
                  clearInputs()
                  setErrorMsg([])
                  setJuridico(true)
                }}
              >
                Juridico
              </button>
            </div>
          </div>
          {juridico ? (
            <div className="cad_main">
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Nome Empresarial:</label>
                  <input
                    type="text"
                    value={name}
                    autoFocus
                    className="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    value={email}
                    className="name"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Senha:</label>
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="wrp">
                  <label htmlFor="">Confirmar Senha:</label>
                  <input
                    type="password"
                    value={passwordConfirm}
                    required
                    onChange={(e) => setPasswordCorfim(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">CNPJ:</label>
                  <input
                    type="text"
                    value={cnpj}
                    required
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </div>
                <div className="wrp">
                  <label htmlFor="">Telefone:</label>
                  <input
                    type="text"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Endereço Comercial:</label>
                  <input
                    type="text"
                    value={address}
                    required
                    className="name"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <button className="cad_btn" onClick={createUser}>
                Cadastrar
              </button>
            </div>
          ) : (
            <div className="cad_main">
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Nome Completo:</label>
                  <input
                    type="text"
                    value={name}
                    autoFocus
                    className="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    value={email}
                    className="name"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Senha:</label>
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="wrp">
                  <label htmlFor="">Confirmar Senha:</label>
                  <input
                    type="password"
                    value={passwordConfirm}
                    required
                    onChange={(e) => setPasswordCorfim(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">CPF:</label>
                  <input
                    type="text"
                    value={cpf}
                    required
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
                <div className="wrp">
                  <label htmlFor="">Telefone:</label>
                  <input
                    type="text"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <div className="wrp">
                  <label htmlFor="">Data de Nascimento:</label>
                  <input
                    type="date"
                    value={birthday}
                    required
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className="wrp">
                  <label htmlFor="">Endereço:</label>
                  <input
                    type="text"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <button className="cad_btn" onClick={createUser}>
                Cadastrar
              </button>
            </div>
          )}
          <div className="cad_footer">
            <a href="/login">já tem uma conta? Loge-se</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cadastro
