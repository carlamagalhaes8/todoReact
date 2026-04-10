import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './App.css'

import {Cabecalho, Conteudo, Rodape} from './components'
import {Inicial} from './pages'

const App = () => {

  return (
    <BrowserRouter>
      <Router/>

      {/* <Cabecalho />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape criador="Carla" /> */}

    </BrowserRouter>
  )
}

export {App}
