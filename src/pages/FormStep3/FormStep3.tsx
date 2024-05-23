import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme/Index";
import { FormStates, useForm } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

function FormStep3Page(){

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  const githubRegex = /^[a-zA-Z]+.com+[/]+[a-zA-Z0-9.-]/

  const nextPageStep = ()=>{

    if(emailRegex.test(state.email) && githubRegex.test(state.github)){
      navigate('/step4');
    }else{
      alert('Email invalido ou link github invalido!')
    }
    
  }

  const setEmailForm = (e:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormStates.setEmail,
      payload: e.target.value,
    })
  }

  const setGithubForm = (e:ChangeEvent<HTMLInputElement>)=>{
    dispatch({
      type: FormStates.setGithub,
      payload: e.target.value,
    })
  }

  useEffect(()=>{
    if(state.name === ''){
      navigate('/step1');
    }else{
      dispatch({
        type: FormStates.setCurrentStep,
        payload: 3,
      })
    }
  },[])

  return(
    <>
    <Theme>
      <div className="step-container-todo">
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name}, onde te achamos?</h1>
        <p>Digite seus contatos validos para receber ofertas de trabalho.</p>

        <hr />

        <label>
          Email Valido:
          <input 
          type="email" 
          placeholder='Digite aqui seu nome completo'
          value={state.email} 
          onChange={setEmailForm}
          required
          />
        </label>

        <label>
          Link do seu GitHub:
          <input 
          type="url" 
          placeholder='ex: "github.com/SeuUsuario"'
          value={state.github} 
          onChange={setGithubForm}
          required
          />
        </label>

        <div className="form-box-buttons">
          <Link className="buttons-form" to='/step2'>Voltar</Link>
          <button className="buttons-form" onClick={nextPageStep}>Proximo</button>
        </div>

      </div>
    </Theme>
    
    </>
  )
}

export default FormStep3Page;