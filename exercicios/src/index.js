import React from 'react'
import ReactDOM  from 'react-dom'

import  Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
        <Pai nome="Thalleco" sobrenome="Rangel">
            <Filho sobrenome="Souza"></Filho>
            <Filho nome="Katarina"></Filho>
            <Filho nome="Scarlet"></Filho>
        </Pai>
    </div>
, document.getElementById('root'))