import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validaCPF, validaSenha, validaBotao } from "./models/cadastro";
import validacoesCadastro from "./contexts/validacoesCadastro";

class App extends Component {
  render() {
    return (
      //Como o container foi adicionado automaticamente ele adicionauma div permitindo a estilização do formulário
      //article é um elemento auto-contido.
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro!
        </Typography>
        {/*Enviar propriedades utilizando function components 
        é bem parecido com o class components como está escrito abaixo
        o FormularioCadastro vai receber a função aoEnviarForm pelos parâmetros*/}

        <validacoesCadastro.Provider
          value={{ cpf: validaCPF, senha: validaSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} validaBotao={validaBotao} />
        </validacoesCadastro.Provider>
     
      </Container>
    );
  }
}

function aoEnviarForm(params) {
  console.log(params);
}

export default App;
