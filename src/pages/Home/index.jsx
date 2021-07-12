import { Menu } from '../../components/MenuHome'
import { Landing } from './style'
import { Footer } from '../../components/Rodape'

export const Home = () => {
  return (
    <>
      <Menu />
      <Landing>
        <div>
          <p>O nosso estabelecimento se localiza na cidade de Curitiba, no estado do Paraná, somos focados na produção de lanches <i>gourmet's</i>. Estamos atuando no mercado a mais de cinco anos, sempre visando a qualidade e bem estar do cliente.</p>
          <img src="https://i.pinimg.com/originals/36/51/78/365178356774995cde88f484dcac44da.jpg" alt="Fachada" />
        </div>
        <div>
          <img src="https://culturice.com.br/wp-content/gallery/forno-dos-socios-do-holy-burger/Ambiente-da-Forno.jpg" alt="Interior" />
          <p>Um dos pilares do nosso atendimento é o respeito e a postura perante as pessoas, independente de classe, gênero, cor, ou afins... Temos uma política de <i>pet friendly</i> tambím, e possuímos um vasto cardápio para todos os gostos. Te convido a nos conhecer.</p>
        </div>
      </Landing>
      <Footer />
    </>
  )
}