import { Menu } from '../../components/MenuHome'
import { Footer } from '../../components/Rodape'
import { ContactContainer } from './style'

export const Contact = () => {
  return (
    <>
      <Menu />
      <ContactContainer>
      <form name="meu_form">
        <section className='contato'>
          <h1>Entre em contato</h1>
          <div>
            <label for="nome">Nome</label>
            <input type="text" id="nomeid" placeholder="Informe seu nome" required="required" name="nome" />
          </div>
          <div>
            <label for="fone">Fone</label>
            <input type="tel" id="foneid" placeholder="(xx)x xxxx-xxxx" name="fone" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="emailid" placeholder="fulano@mail.com" name="email" />
          </div>
          <textarea placeholder="Deixe sua opnião"></textarea>

          <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
        </section>
      </form>
      </ContactContainer>
      <Footer />
    </>
  )
}