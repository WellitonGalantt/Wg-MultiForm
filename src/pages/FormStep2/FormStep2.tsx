import { useEffect } from "react";
import Theme from "../../components/Theme/Index";
import { FormStates, useForm } from "../../contexts/FormContext";
import SelectOptions from "../../components/SelectOptions";
import { useNavigate, Link } from "react-router-dom";



function FormStep2Page(){

  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  useEffect(()=>{

    if(state.name === ''){
      navigate('/step1');
    }else{
      dispatch({
        type: FormStates.setCurrentStep,
        payload: 2,
      })
    }
    
  },[])

  const nextPageStep = ()=>{
    navigate('/step3');
  }

  const setLevelForm = (level:number) =>{
    dispatch({
      type: FormStates.setLevel,
      payload: level,
    })
  }

  return(
    <>
    <Theme>
      <div className="step-container-todo">
        <p>Passo {state.currentStep}/4</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Selecione a opção que descreve melhor sua carreira atualmente.</p>

        <hr />

        <SelectOptions 
          title='Sou Iniciante'
          description='Comecei a estudar a menos de 2 anos.'
          icon='🥳'
          selected={state.level === 0}
          onClick={()=>{setLevelForm(0)}}
        />

        <SelectOptions 
          title='Sou Programador'
          description='Já programo a mais de 2 anos.'
          icon='😎'
          selected={state.level === 1}
          onClick={()=>{setLevelForm(1)}}
        />

        <div className="form-box-buttons">
          <Link className="buttons-form" to='/step1'>Voltar</Link>
          <button className="buttons-form" onClick={nextPageStep}>Proximo</button>
        </div>
        

      </div>
    </Theme>
    
    </>
  )
}

export default FormStep2Page;