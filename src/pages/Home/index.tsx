import './styles.scss'
import '../../index.scss'
import Header from '../../components/Header'
import ServicesSlider from '../../components/ServicesSlider'
const banner = require('../../assets/banner.jpg')

function Home(){
    return (
        <div className="home">
            <Header/>
            <main>
                <section>
                    <div className="banner">
                        <div className="banner_text">
                            <h2>SOLUÇÃO INOVADORA PARA IMAGEM DO  SEU NEGÓCIO</h2>
                            <p> Construa usa marca, ajudamos nossos clientes com a comunicação visual da sua marca desde a criação de um nome, design de seus produtos até sua posição no mercado.</p>
                            <a className='register-btn'>Cadastre-se</a>
                        </div>
                        <div className="banner_image_wrp">
                            <div className="banner_image">
                                <img src={banner} alt="banner imagem" />
                            </div>
                            <div className="banner_sub">
                                <div className="circle"></div>
                                <p>100% Trabalhos Concluidos</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="banner text_container">
                    <div className="banner_text ">
                        <h2>QUER IMPULSIONAR O CRESCIMENTO DO SEU NEGÓCIO? SOMOS A SOLUÇÃO.</h2>
                    </div>
                    </div>
                    <div className="services_container">
                        <ServicesSlider/>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Home