import React, {useState} from "react";
//Botão estilizado da biblioteca MaterialUi
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  /*O useState não devolve só o valor inicial do meu estado para uma variável ele vai desenvolver uma tupla, ou um array
   o nome é a variável que vai receber o estado e o setNome é uma função que vai enviar uma alteração para a variável nome*/
  const [nome, setNome] = useState(""); 
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(false);
  const [promocoes, setPromocoes] = useState(true);
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(`o seu nome é :${nome}\ne seu sobrenome é: ${sobrenome}\nCPF: ${cpf}\nPromoções: ${promocoes}\nNovidades: ${novidades}`);
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
          if(tempCpf.length >= 11){
            tempCpf = tempCpf.substr(0,11);
          }
          setCpf(tempCpf);
        }}
        id="cpf"
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

      

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
