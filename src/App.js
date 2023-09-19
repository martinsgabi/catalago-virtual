import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Roupa from "./components/Filme";
import MenuResponsivo from "./components/MenuResponsivo";
import "./global.css"


function App() {

    const [ roupas, setRoupas ] = useState();
    const [ erro, setErro ] = useState();

    useEffect(() => {
        fetch( process.env.REACT_APP_BACKEND + "filmes", {
            headers: {
                'Content-Type': 'application/json'
            }
        } )
        .then( (resposta) => resposta.json() )
        .then( (json) => { setRoupas (json)})
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
            const novaLista = roupas.filter( (roupa) => roupa._id !== id );
            setRoupas( novaLista );
        } )
        .catch( (erro) =>  setErro( true ) )
    }

    return(
        <>
            <MenuResponsivo />
            <h1>NOVIDADES</h1>
            <Container sx={{
                display:"flex",
                flexFlow:"row",
                flexWrap:"wrap",
                gap:"2rem",

            }}>
            { roupas && (
                roupas.map( (roupa, index) => (
                    <Roupa
                    imagem={roupa.imagem}
                    titulo={roupa.titulo}
                    descricao={roupa.descricao}
                    categoria={roupa.categoria}
                    excluir={ (e) => Excluir(e, roupa._id) }
                    id={roupa._id}
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