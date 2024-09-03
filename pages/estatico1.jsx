import { useEffect, useState } from "react"

export default function Estatico1(){
    const [numRand, setNumRand] = useState(0)

    // Essa manobra passa a ideia para o NextJS que esse valor deve ser gerado dinâmicamente
    useEffect(() => {
        setNumRand(Math.random())
    }, [])

    return (
        <div>
            <h1>Estatico #01</h1>

            {/**
             * Conteúdo inserido de forma estática
             *  - Nesse contexto, como o valor é gerado de forma aleatória a cada requisição. O valor que foi gerado na primeira requisição e que ficou salvo no arquivo estático gerado pelo NextJS, não vai bater, e vai gerar um warning ou um erro 
             
                <h2>{Math.random()}</h2>
            */}
            <h2>{numRand}</h2>
        </div>
    )
}