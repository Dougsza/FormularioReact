import React, {useState, useContext } from "react";
//Estilizações da biblioteca MaterialUi
import { TextField, Button,} from "@material-ui/core";
import { validaBotao } from "../../models/cadastro";
import validacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");  
  //useContext e injeção de dependências para o useErros
  const validacoes = useContext(validacoesCadastro);
  const [error, validarCampos] = useErros(validacoes);

  function possoEnviar(){    
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
