import { Menu } from '../../components/MenuHome'
import { Footer } from '../../components/Rodape'
import { Biography } from './style'
export const About = () => {
  return (
    <>
      <Menu />
      <Biography>
        <h1>Hamburgueria do Tuka</h1>
        <div className='container'>
          <p>Projeto autoral, feito pelo estudante de desenvolvimento <i>full stack </i>
            da escola Kenzie Academy e Engenheiro Civil, Arthur Fenili Linemburg. 
            Referente ao segundo quarter da turma de março/2021. 
            O projeto inicial tinha por finalidade apenas explorar os conceitos basicos de React,
            porém, ele acabou indo um pouco mais além, e optando por adaptar alguns conceitos
            ainda não vistos no curso, como a utilização de bibliotecas do <b>react-router-dom</b> <b>e styled-components</b>. 
            As imagens utilizadas no projeto são meramente ilustrativas.
          </p>
        </div>
        <p>Aberto a quaisquer sugetões ou criticas via LinkedIn.</p>
      </Biography>
      <Footer />
    </>
  )
}