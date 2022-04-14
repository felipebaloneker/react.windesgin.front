import './styles.scss'
const avatar = require('../../assets/avatar.png')

function UserHeader(){
    const name = 'Felipe Baloneker'
    return(
        <header>
            <div className="header_wrp">
                <div className="avatar">
                    <div className="user_avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="user_name">
                        <p>{name}</p>
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
            </div>
        </header>
    )
}
export default UserHeader