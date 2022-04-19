import './styles.scss'
import Solution from "../Solution"
import {BsFillCollectionFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {BsFillMegaphoneFill} from 'react-icons/bs'
import {BsFillPencilFill} from 'react-icons/bs'

function SolutionSlider(){
    return (
        <div className="solution_slider">
            <Solution
            title={'BRANDING'}
            detail={'Sua empresa terá uma renovação de Identidade visual da marca '}
            Icon={BsFillCollectionFill}
            />
            <Solution
            title={'LOGO MARCA'}
            detail={' Elaboramos um Logo unica para sua empresa '}
            Icon={BsFillPencilFill}
            />            
            <Solution
            title={'UX DESIGN / WEB DESIGN'}
            detail={'Criamos um site único de diretamente voltado ao publico.'}
            Icon={BsSearch}
            />
            <Solution
            title={'REDE SOCIAL'}
            detail={'Gerenciamos a rede social do seu negócio.'}
            Icon={BsFillMegaphoneFill}
            />

        </div>
    )
}
export default SolutionSlider