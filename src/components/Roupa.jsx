import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'


function Roupa(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="400"
                image={props.imagem}
                alt={props.titulo}            
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secundary">
                    {props.descricao}
                </Typography>
                <Grid container>
                    <Grid item xs={4}>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{props.duracao}</span>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Grid container>
            <Grid item xs={6}>
                <button className='botaoExcluir' onClick={props.excluir}>⌦</button>
            </Grid>
            <Grid item xs={6}>
                <Link className='botaoEditar' href={ "edicao/" + props.id }>✎editar</Link>
            </Grid>
        </Grid>
    </Card>
  )
}

export default Roupa
