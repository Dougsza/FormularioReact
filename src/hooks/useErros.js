import React, {useState} from 'react';

//Recebendo as validações dos DadosPessoais e DadosUsuario
function useErros(validacoes){
    const [error, setError] = useState({senha:{valido:true, texto: ""},
                                        cpf:{valido:true, texto: ""}});
    
    function validarCampos(event){ 
        // nome do evento e valor do evento
        const {name, value } = event.target
        //Verifica se o cpf é valido e desativa ou ativa o botão de cadastro        
        const novoEstado = {...error}
        novoEstado[name] = validacoes[name](value);
        setError(novoEstado);
        console.log(novoEstado);
    }

    return [error, validarCampos]
}

export default useErros;