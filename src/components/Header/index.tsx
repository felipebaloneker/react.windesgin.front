import './styles.scss'
function Header(){
    return(
        <header>
            <div className="logo">
                <a href="/"><h3 className="logo_header">Win<span>Design</span></h3></a>
            </div>
            <nav className='menu' >
            <ul
            >
                <li><a href="/">Home</a></li>
                <li><a href="/#about" >Sobre</a></li>
                <li><a href="/#servicos" >Serviços</a></li>
                <li><a href="/cadastro" >Cadastro</a></li>
                <li><a href="/login" className='login' >Login</a></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header;