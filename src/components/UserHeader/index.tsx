import './styles.scss'
const avatar = require('../../assets/avatar.png')

function UserHeader(){
    return(
        <header>
        <div className="avatar">
            <div className="user_avatar">
                <img src={avatar} alt="" />
            </div>
        </div>
        <nav className='menu' >
            <ul
            >
                <li><a href="/">Home</a></li>
                <li><a href="/#about" >Sobre</a></li>
                <li><a href="/#servicos" >Serviços</a></li>
                <li><a href="/cadastro" >Meus pedidos</a></li>
                <li><a href="/login" className='log' >Sair</a></li>
            </ul>
        </nav>
        </header>
    )
}
export default UserHeader