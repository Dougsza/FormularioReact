function validaCPF(cpf){
    if(cpf.length !== 11){    
      return {valido:false, texto:"O CPF deve ter 11 digitos"}
    }else{
      return {valido:true, texto:""}
    }
  }
  function validaSenha(senha){
    if(senha.length <= 4){    
      return {valido:false, texto:"O senha deve ter mais que 4 dígitos"}
    }else{
      return {valido:true, texto:""}
    }
  }
  function validaBotao(boolean){
    if(boolean === true){
      return {disabled:false};
    }else{
      return {disabled:true}
    }
  }

  export {validaCPF, validaSenha, validaBotao}