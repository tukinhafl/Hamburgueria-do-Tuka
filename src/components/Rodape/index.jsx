import { Rodape } from './style'

export const Footer = () => {
  return (
    <Rodape>
      <ul>
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/tukinhafl" target='_blank' rel='noreferrer'>GitHub</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/arthur-fenili-linemburg-ab8936184/" target='_blank' rel='noreferrer'>LinkedIn</a>
        </li>
      </ul>
      <div>
        <p>Rua Hamburguer, 123</p>
        <p>Curitiba-PR</p>
        <p>(48) 9 9601-0693</p>
      </div>
    </Rodape>
  )
}