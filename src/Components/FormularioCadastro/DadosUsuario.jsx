import React, { useContext, useState } from "react";
//Estilizações da biblioteca MaterialUi
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import { validaBotao } from "../../models/cadastro";
import validacoesCadastro from "../../contexts/validacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({ senha: { valido: true, texto: "" } });

  //useContext
  const validacoes = useContext(validacoesCadastro);

  function validarCampos(event) {
    // nome do evento e valor do evento
    const { name, value } = event.target;
    //Verifica se o cpf é valido e desativa ou ativa o botão de cadastro
    const novoEstado = { ...error };
    novoEstado[name] = validacoes[name](value);
    setError(novoEstado);
    console.log(novoEstado);
  }

  function possoEnviar(){
    let posso = true;
    for(let campo in error){
      if(!error[campo].valido){
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){          
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!error.senha.valido}
        helperText={error.senha.texto}
        id="senha"
        label="senha"
        name="senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" disabled={validaBotao(possoEnviar()).disabled}>
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
