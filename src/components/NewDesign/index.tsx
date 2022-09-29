import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../../services/Api"
import "./styles.scss"

function NewDesign() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")
  const [birthday, setBirthday] = useState("")
  const [address, setAddress] = useState("")
  const [msg, setMsg] = useState<Array<string>>([])
  const type = "desgin"
  const createNewDesign = async () => {
    const user = await Api.createUser({
      name,
      email,
      password,
      type,
      phone,
      cpf,
      birthday,
      address
    })
    if (user) {
      setMsg([...msg, "Cadastrado com sucesso!"])
    } else {
      setMsg([...msg, "Error ao Cadastrar!"])
    }
  }
  const clearInputs = async () => {
    setName("")
    setAddress("")
    setBirthday("")
    setCpf("")
    setEmail("")
    setPassword("")
    setPhone("")
  }

  return (
    <div className="new_design">
      <div className="design_header">
        <h2>Cadastrar novo Funcionario:</h2>
        <div className="alert">
          <label className="errorMsg">
            {msg.map((item) => {
              return <p>{item}</p>
            })}
          </label>
        </div>
      </div>
      <div className="design_main">
        {/* Formulario Criação novo Design */}
        <div className="cadastro_wrp">
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
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="wrp">
              <label htmlFor="">Senha:</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="wrp">
              <label htmlFor="">CPF:</label>
              <input
                type="text"
                value={cpf}
                placeholder="CPF"
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
              <label htmlFor="">Endereço</label>
              <input
                type="text"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="buttons">
            <button className="cad_btn" onClick={clearInputs}>
              Limpar
            </button>
            <button className="cad_btn" onClick={createNewDesign}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewDesign
