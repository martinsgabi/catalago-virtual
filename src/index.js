import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Login from './Login';
import Cadastro from './Cadastro';
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';



const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#FF3B86',
      },
      secondary: {
        main: '#801D43',
      },
      error: {
        main: '#400F21',
      },
      background: {
        default: '#fde3ed',
        paper: '#FF87B5',
      },
    },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}/>
  </ThemeProvider>
);