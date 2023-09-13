import { Avatar, Button, Container, Menu } from "@mui/material";
import { useEffect, useState } from "react";
import Roupa from "./components/Filme";
//import Menu from "./Menu";


function App() {

    const [ filmes, setFilmes ] = useState();
    const [ erro, setErro ] = useState();

    useEffect(() => {
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { setFilmes (json)})
        .catch( (erro) => { setErro( true ) })

    }, [])

    function Excluir( evento, id ){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    id: id
                })
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => {
            const novaLista = filmes.filter( (filme) => filme._id !== id );
            setFilmes( novaLista );
        } )
        .catch( (erro) =>  setErro( true ) )
    }

    return(
        <>
          
            <h1>Novidades</h1>
            <Container sx={{
                display:"flex",
                flexFlow:"row",
                flexWrap:"wrap",
                gap:"2rem"
            }}>
            { filmes && (
                filmes.map( (filme, index) => (
                    <Roupa
                    imagem={filme.imagem}
                    titulo={filme.titulo}
                    descricao={filme.descricao}
                    categoria={filme.categoria}
                    ano={filme.ano}
                    duracao={filme.duracao}
                    excluir={ (e) => Excluir(e, filme._id) }
                    id={filme._id}
                    />
                ) )
            )}
            </Container>
        </>
    );
}

export default App;
/*API - rest full:
post_inserir(+);
put_atualizar(+);
delete_excluir(+);
get_busca(-)*/


/*<Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Avatar alt="Gabriela" src="/static/images/avatar/1.jpg" />*/