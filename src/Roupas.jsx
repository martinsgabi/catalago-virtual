import { Alert, Box, Button, Container, ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react'
import MenuResponsivo from './components/MenuResponsivo';

function Roupas() {

    const [peca, setPeca] = useState("");
    const [descricao, setDescricao] = useState("");

    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");

    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastroRoupa, setCadastroRoupa] = useState("");
    const [erroC, setErroC] = useState("");
    //controlar estado de uma varialvel

    function CadastrarRoupa(evento) {
        evento.preventDefault();

        fetch(process.env.REACT_APP_BACKEND + "filmes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    peca: peca,
                    descricao: descricao,
                    ano: "",
                    duracao: "",
                    categoria: categoria,
                    imagem: imagem
                }
            )
        })
            .then((resposta) => resposta.json())
            .then((json) => {

                if (json._id) {
                    setCadastroRoupa(true);
                    setErroC(false);
                } else {
                    setErroC(true);
                    setCadastroRoupa(false);
                }
            })
            .catch((erroC) => { setErroC(true) })
    }

    useEffect(() => {

        setPeca("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");
        //setCadastro( false );
    }, [cadastroRoupa]);


    return (
        <>
            <MenuResponsivo />
            <Container component="section" maxWidth="sm">
                <Box sx={{
                    mt: 10,
                    padding: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Typography component="h1" variant='h4'>CADASTRAR UMA PEÇA</Typography>
                    {erroC && (<Alert severity="warning" sx={{ mt: 2, mb: 2 }}>Desculpe, peça já cadastrada, tente novamente</Alert>)}
                    {cadastroRoupa && (<Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigado por cadastrar</Alert>)}
                    <Box component="form" onSubmit={CadastrarRoupa} >
                        <TextField
                            type="text"
                            label="Qual a peça de roupa"
                            variant="filled"
                            margin="normal"
                            value={peca}
                            onChange={(e) => setPeca(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            label="Descrição da peça"
                            variant="filled"
                            margin="normal"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            label="Categoria do peça"
                            variant="filled"
                            margin="normal"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            type="text"
                            label="Foto da peça"
                            variant="filled"
                            margin="normal"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                            fullWidth
                        />

                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>Cadastrar roupa</Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Roupas