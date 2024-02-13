import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
    Sou um profissional formado em Sistema de informação. Tenho 1 ano de experiência como desenvolvedor Frontend. Estou a  me especializar como desenvolvedor Full Stack Java,
    para alcançar os meus objetivos profissionais tenho investido
    em minha qualificação por meio da EBAC (Escola Britânica de Artes Criativas e Tecnologia) e trabalhado como freelancer, onde tenho enfrentado diversos desafios.
    Minhas habilidades incluem a criação de interfaces atraentes e responsivas, utilizando tecnologias como HTML5 com ênfase em semântica e acessibilidade, CSS3,
    Javascript (ECMA6) e TypeScript. Tenho experiências com frameworks como React, React Native, Angular, Vue.js e Bootstrap,
    Jquery, assim como conhecimento no uso de pré-processadores como Sass e Less, e Gulp.
    Tenho um grande apreço por desafios e estou sempre em busca de oportunidades que me permitam crescer e aprimorar minhas habilidades.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=ogiansouza&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ogiansouza&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
export default Sobre

