import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core'


class App extends Component {

  render(){
    return (
      //Como o container foi adicionado automaticamente ele adicionauma div permitindo a estilização do formulário
      //article é um elemento auto-contido.
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align='center' >Formulario de Cadastro!</Typography>
        <FormularioCadastro/>
      </Container>
      
    );
  }
 
}

export default App;
