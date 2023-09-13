import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Login from './Login';
import Cadastro from './Cadastro';
import Roupas from './Roupas';
import EditaRoupa from './EditaRoupa';




const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#72422A',
    },
    secondary: {
      main: '#A17759',
    },
    error: {
      main: '#B9835B',
    },
    background: {
      default: '#ffe1d9',
      paper: 'rgba(161,119,89,0.61)',
    },
    warning: {
      main: '#EDD8CA',
    },
    success: {
      main: '#B9835B',
    },
    info: {
      main: '#B9835B',
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
    element: <Roupas />
  },
  {
    path: "/edicao/:id",
    element: <EditaRoupa />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}/>
  </ThemeProvider>
);