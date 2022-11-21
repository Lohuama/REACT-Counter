import React, {useState, createContext} from "react";

export const ContadorContexto = createContext();
export function ContadorProvider(props){
    return(
        <ContadorContexto.Provider value="Teste">
            {props.children}
        </ContadorContexto.Provider>
    )
}