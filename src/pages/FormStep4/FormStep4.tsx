import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Index";
import { FormStates, useForm } from "../../contexts/FormContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import './FormStep4.css';

function FormStep4Page(){

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const nextPageStep = ()=>{
    alert('Parabens, voce foi selecionado! Agora voce recebera vagas por email.')
    console.log(state);
  }

  useEffect(()=>{
    if(state.name === ''){
      navigate('/step1');
    }else{
      dispatch({
        type: FormStates.setCurrentStep,
        payload: 4,
      })
    }
  },[])

  return(
    <>
    <Theme>
      <div className="step-container-todo">
        <p>Passo {state.currentStep}/4</p>
        <h1>{state.name}, Agora confirme os dados.</h1>
        <p>Verifique se os dados estao todos corretos.</p>

        <hr/>

        <div className="confirm-contents-form-box">
          <span>Pessoal:</span>
        
          <p className='more-info-p'>Seu nome é {state.name}.</p>
          <p className='more-info-p'>Você é um {state.level === 0 && 'Iniciante, programa a menos de 2 anos.' || 'Programador, ja programa a mais de 2 anos.' }</p>

          <span>Contatos:</span>
          <p className='more-info-p'>Email: {state.email}</p>
          <p className='more-info-p'>GitHub: {state.github}</p>

        </div>

        <div className="form-box-buttons">
          <Link className="buttons-form" to='/step3'>Voltar</Link>
          <button className="buttons-form" onClick={nextPageStep}>Confirmar</button>
        </div>
        
      </div>
    </Theme>
    
    </>
  )
}

export default FormStep4Page;