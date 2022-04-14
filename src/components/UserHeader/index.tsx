import './styles.scss'
const avatar = require('../../assets/avatar.png')

function UserHeader(){
    const name = 'Felipe Baloneker'
    return(
        <header>
            <div className="header_wrp">
            <div className="logo">
                    <a href="/"><h3 className="logo_header">Win<span>Design</span></h3></a>
                </div>
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
                        <li><a href="/login" className='log' >Sair</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default UserHeader