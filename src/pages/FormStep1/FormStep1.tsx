import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme/Index';
import './FormStep1.css'

import { useForm, FormStates} from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';

function FormStep1Page(){

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const nextPageStep = ()=>{
    if(state.name !== '' && state.name.length >= 3){
      navigate('/step2');
    }else{
      alert('Deve conter pelo menos 3 caracteres para poder prosseguir');
    }
    
  }

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormStates.setName,
      payload: e.target.value,
    })
  }

  useEffect(()=>{
    dispatch({
      type: FormStates.setCurrentStep,
      payload: 1,
    })
  },[])

  return(
    <>
    <Theme>
      <div className="step-container-todo">
        <p>Passo {state.currentStep}/4</p>
        <h1>Vamos Começar pelo seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="">
          Nome completo:
          <input 
          type="text" 
          placeholder='Digite aqui seu nome completo'
          value={state.name} 
          onChange={handleNameChange}
          required
          autoFocus
          />
        </label>

        <div className="form-box-buttons">
          <button className="buttons-form" onClick={nextPageStep}>Proximo</button>
        </div>

      </div>
    </Theme>
    
    </>
  )
}

export default FormStep1Page;