import './App.css'
import {Cabecalho, Conteudo, Rodape} from './components'

const App = () => {

  return (
    <>
      <Cabecalho />
      <Conteudo>
        <p>Esse é o conteúdo do site</p>
      </Conteudo>
      <Rodape criador="Carla" />
    </>
  )
}

export {App}
