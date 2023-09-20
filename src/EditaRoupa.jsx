import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuResponsivo from './components/MenuResponsivo';

function EditaFilme() {

  const { id } = useParams();

  const[ titulo, setTitulo ] = useState( "" );
  const[ descricao, setDescricao ] = useState( "" );

  const[ ano, setAno ] = useState( "" );
  const[ duracao, setDuracao ] = useState( "" );

  const[ categoria, setCategoria ] = useState( "" );
  const[ imagem, setImagem ] = useState( "" );
  const[ editar, setEditar ] = useState( "" );
  const[ erro, setErro ] = useState( "" );
  
  useEffect( () => {
    const usuario = localStorage.getItem( "usuario" );
    fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      },
      
      } )
      .then( (resposta) => resposta.json() )
      .then( (json) => {
        if(!json.status) {
          setTitulo(json.titulo);
          setDescricao(json.descricao);
          setAno(json.ano);
          setDuracao(json.duracao);
          setCategoria(json.categoria);
          setImagem(json.imagem);
        }else {
          setErro( "Roupa não encontrado" );
        }
        
          
      } )
      .catch( (erro) => { setErro( true ) })

  }, [] );


  function Editar(evento){
    evento.preventDefault();

    fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                  id: id,
                  titulo: titulo,
                  descricao: descricao,
                  ano: "",
                  duracao: "",
                  categoria: categoria,
                  imagem: imagem,
                  usuario: localStorage.getItem( "usuario" )
                }
                )
            } )
        .then((resposta) => resposta.json() )
        .then((json) => {
          if( json._id){
            setEditar( true );
            setErro(false)
          }else{
            setErro( "Erro ao processar sua requisição" );
            setEditar(false);
          }
        } )
        .catch((erro) => { setErro(true) })
    
            
    }
     /* useEffect( () => {
      
        setTitulo( "" );
        setDescricao( "" );
        setAno( "" );
        setDuracao( "" );
        setCategoria( "" );
        setImagem( "" );
        //setCadastro( false );
    }, [ cadastroFilme ] );*/

  return (
    <>
    <MenuResponsivo/>
    <Container component="section" maxWidth="sm">
      <Box sx={{
            mt:10,
            background: "#FFE1D9",
            padding: "40px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
          <Typography component="h1" variant='h4'>Editar filme</Typography>
          { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }}>{erro}</Alert>)}
          { editar && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Filme editado com sucesso</Alert>)}
          <Box component="form" onSubmit={Editar}>
            <TextField
                type="text"
                label="Qual a peça de roupa"
                variant="filled"
                margin="normal"
                value={titulo}
                onChange={ (e) => setTitulo( e.target.value )}
                fullWidth              
            />
            <TextField 
                type="text"
                label="Descrição da peça"
                variant="filled"
                margin="normal"
                value={descricao}
                onChange={ (e) => setDescricao( e.target.value )}
                fullWidth
            />
            <TextField
                type="text"
                label="Preço da peça"
                variant="filled"
                margin="normal"
                value={categoria}
                onChange={ (e) => setCategoria( e.target.value )}
                fullWidth
            />
            <TextField
                type="text"
                label="Foto da peça"
                variant="filled"
                margin="normal"
                value={imagem}
                onChange={ (e) => setImagem( e.target.value )}
                fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={ {mt: 2, mb: 2} }>Editar</Button>

          </Box>
      </Box>
    </Container>
    </>
  )
}

export default EditaFilme;