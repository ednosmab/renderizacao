// Através da convenção o NextJS assume que essa função deve gerar um valor estático e não será realizado a troca desse valor em ambiente de produção
// Para subir o ambiente de produção, deve ser gerado a build primeiro e em seguida subir o servidor

// Rodar o build
// npm run build

// Subir o servidor
// npm start

export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props){
    return (
        <div>
            <h1>Estatico #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}