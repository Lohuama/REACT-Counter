import React, { useContext } from "react";
import { ContadorContexto } from "../ContadorContexto";

function Cabecalho(props){
    const value = useContext(ContadorContexto)
    return(
        <div className="Cabecalho">
            <h3>{value}</h3>
            <div>0</div>
        </div>
    )
}

export default Cabecalho;