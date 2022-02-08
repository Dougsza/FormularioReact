import React, {useState, useEffect} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosDeEntrega from "./DadosDeEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validaBotao}) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({}); 
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}      
      validaBotao={validaBotao}
      />,
    
    <DadosPessoais aoEnviar={coletarDados}           
      voltarEtapa={voltarEtapa}
      validaBotao={validaBotao}
      />,

    <DadosDeEntrega aoEnviar={coletarDados}       
      validaBotao={validaBotao}
      />,

    <Typography variant="h5">Obrigado por se cadastrar!</Typography>
  ]; 
  //etapaAtual serve é um useState do tipo number para auxiliar na troca dos components
  useEffect(() => {
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }
   
  })

  function coletarDados(dados){
    //utiliza o Spread operator para coletar os dados e jogar dentro do dadosColetados
    setDados({...dadosColetados, ...dados});
    proximaEtapa();
  }
  //pula para proxima etapado formulário
  function proximaEtapa(){
    setEtapaAtual(etapaAtual+1);
  }
  //retorna para etapa anterior do formulario
  function voltarEtapa(){
    setEtapaAtual(etapaAtual-1);
  }

  return (
    <> {/*Stepper do Material-ui*/}
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>  
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;


 /*
  Modo antigo de passar para outros componentes
  function proximaEtapa(){
    setEtapaAtual(etapaAtual+1);
  }
  
  function formularioAtual(etapaAtual){

    switch(etapaAtual){
      case 0:
        return <DadosUsuario proximo={proximaEtapa}/>
      case 1:
        return <DadosPessoais 
                aoEnviar={aoEnviar} 
                proximo={proximaEtapa}
                validadorCPF={validadorCPF} 
                validadorBotao={validadorBotao} 
               />
      case 2:
        return <DadosDeEntrega/>
      default:
        return "ERROR";
    }

  }  */
