import './styles.scss'
import '../../index.scss'
import Header from '../../components/Header'
const banner = require('../../assets/banner.jpg')

function Home(){
    return (
        <div className="home">
            <Header/>
            <main>
                <section>
                    <div className="banner">
                        <div className="banner_text">
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p> Corporis consequuntur sunt temporibus tempore blanditiis debitis commodi, accusamus provident beatae animi fugit, quia reprehenderit quas facere repudiandae sequi asperiores. Vel, fugiat.</p>
                            <a className='register-btn'>Cadastre-se</a>
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