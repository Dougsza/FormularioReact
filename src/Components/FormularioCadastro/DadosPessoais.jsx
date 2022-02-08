import React, {useState, useContext} from "react";
//Estilizações da biblioteca MaterialUi
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
//import { spacing } from '@material-ui/system';
import validacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais(props) {
    /*O useState não devolve só o valor inicial do meu estado para uma variável ele vai desenvolver uma tupla, ou um array
     o nome é a variável que vai receber o estado e o setNome é uma função que vai enviar uma alteração para a variável nome*/
    const [nome, setNome] = useState(""); 
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidades] = useState(false);
    const [promocoes, setPromocoes] = useState(true);
    // coloca dentro da variável error o useState um objeto com a variável cpf válido e texto
    const [button, setButton] = useState({disabled: false});
    //useContext
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
      <form onSubmit={(event) => {
        if(possoEnviar()){
          props.aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}>
        <TextField
         //The value of the input element, required for a controlled component.
          value={nome}
          onChange={ (event) => {  
            //Variável temporária que pega o nome que foi escrito no TextField        
            let tempNome = event.target.value 
              setNome(tempNome);          
            //setNome(tempNome);
          }}
          id="nome"
          label="Digite o seu nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={sobrenome}      
          onChange={(event)=>{ 
            let tempSobrenome = event.target.value          
            setSobrenome(tempSobrenome);
          }}
          id="sobrenome"
          label="Digite o seu Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={cpf}
          onChange={(event)=>{          
            let tempCpf = event.target.value;          
            setCpf(tempCpf);
          }}          
          //evento que faz com que a caixinha fique vermelha
          error = {!error.cpf.valido}
          //evento para colocar uma menságem caso aconteça um erro
          helperText = {error.cpf.texto}
          //evento que valida as funções desse elemento quando a pessoa foca em outro elemento (clica em outro componente)
          onBlur={validarCampos}
          id="cpf"
          //nome do campo
          name="cpf"
          label="Digite o seu CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />
  
        <FormControlLabel
          checked={promocoes}
          label="Promoções"
          control={
            <Switch 
            onChange={(event) =>{
              setPromocoes(event.target.checked);
            }}
            name="Promoções" 
            defaultChecked={promocoes} 
            color="primary" />
          }
        />

          <FormControlLabel
          checked={novidades}
          label="Novidades"
          control={
            <Switch 
            onChange={(event)=>{
              //Muda a variável promocoes com o event
              setNovidades(event.target.checked);
            }}
            name="Novidades" 
            defaultChecked={novidades} 
            color="primary" />
          }
        /> 
        <Button type="" variant="contained"  color="primary" >
          Voltar
        </Button>        
        {/*button é a variável do useState*/}
        <Button type="submit" variant="contained" color="primary" disabled = {button.disabled}>
          Proximo
        </Button>

        
        
      </form>
    );
  }
  
  export default DadosPessoais;
  

  /*
  Método antigo dentro do onBlur
  
  (event) =>{
            //verifica se o cpf é válido
            const ehValidoCPF = props.validadorCPF(cpf);
            //Verifica se o cpf é valido e desativa ou ativa o botão de cadastro
            const ehValidoBotao = props.validadorBotao(ehValidoCPF.valido);
            setError({cpf:ehValidoCPF});
            setButton(ehValidoBotao)



            event.preventDefault();
        // props.aoEnviar(`o seu nome é :${nome}
        //               \ne seu sobrenome é: ${sobrenome}
        //               \nCPF: ${cpf}
        //               \nPromoções: ${promocoes}
        //               \nNovidades: ${novidades}`);
        //Método para passar para outro formulário
          }*/