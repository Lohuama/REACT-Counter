import React, { useState } from "react";
import {ContadorContexto} from '../ContadorContexto'

function Contador(props){

    const [contagem, setContagem] = useState(0)

    return(
        <div>
            <div>{contagem}</div>
            <button onClick={()=>{setContagem(anterior=>anterior - 1)}}>-</button>
            <button onClick={()=>{setContagem(anterior=>anterior + 1)}}>+</button>
        </div>
    )
}

export default Contador;