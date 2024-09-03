export async function getStaticProps(){
    // Servidor enviando dados para o cliente
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()

    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props){
    // Renderizando no lado do cliente
    function renderizar(){
        return props.produtos.map(produto => {
            return <li 
                        style={{fontSize: "20px"}}
                        key={produto.id}
                    >{produto.nome} custa R${produto.preco}</li>
        })
    }

    return (
        <div>
            <h1>Estatico #04</h1>
            <ul style={{marginTop: "30px"}}>
                {renderizar()}
            </ul>
        </div>
    )
}