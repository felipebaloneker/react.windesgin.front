import './styles.scss'
import '../../index.scss'
const banner = require('../../assets/banner.jpg')

function Home(){
    return (
        <div className="home">
            <header>
                <div className="logo">
                    <h3 className="logo_header">Windesign</h3>
                </div>
                <nav className='menu' >
                <ul
                >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about" >Sobre</a></li>
                    <li><a href="#servicos" >Serviços</a></li>
                    <li><a href="/login" >Login</a></li>
                    <li><a href="/cadastro" className='cad' >Cadastro</a></li>
                </ul>
            </nav>
            </header>
            <main>
                <section>
                    <div className="banner">
                        <div className="banner_text">
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p> Corporis consequuntur sunt temporibus tempore blanditiis debitis commodi, accusamus provident beatae animi fugit, quia reprehenderit quas facere repudiandae sequi asperiores. Vel, fugiat.</p>
                        </div>
                        <div className="banner_image">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Home