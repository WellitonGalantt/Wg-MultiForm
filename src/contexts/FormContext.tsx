import { createContext, useContext, useReducer } from 'react';


const FormContext = createContext<FormContextProps | undefined>(undefined);

type ChildrenProps = {
  children: React.ReactNode;
}

//TODO: type para so dados do state
type StateFormProps = {
  currentStep:number;
  name:string;
  level:0 | 1;
  email:string;
  github:string;
}

type FormActionProps = {
  type: FormStates;
  payload: any;
}

type FormContextProps = {
  state: StateFormProps;
  dispatch: (action: FormActionProps) => void;
}

//?um elemento enum guarda varios valores dirferentes(como objetos porem sm precisar de chaves e valores)
export enum FormStates {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub
}

const InitialData:StateFormProps ={
  currentStep: 1,
  name:'',
  level: 0,
  email:'',
  github:'',
}

//?funcao que ira verificar qual dos state ira alterar
//?o state sao os valores qu ja estao no state, e o action recebe duas chaves que sao type e o payload
//? o type é a funcao/setState que queremos fazer e o payload é o dado que iremos setar com essa funcao
const FormReducer = (state:StateFormProps, action:FormActionProps)=>{
  switch(action.type) {
    case FormStates.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormStates.setName:
      return { ...state, name: action.payload };
    case FormStates.setLevel:
      return { ...state, level: action.payload };
    case FormStates.setEmail:
      return { ...state, email: action.payload };
    case FormStates.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
}

export function FormProvider({children}:ChildrenProps){

  const [ state, dispatch ] = useReducer(FormReducer, InitialData);

  return(
    <FormContext.Provider value={{state, dispatch}}>
      {children}
    </FormContext.Provider>
  )
}

//todo: Ao inves de usar o contexto diretamente posso utilizar um funcao
//todo: que ira verificar se estou utilizando dentro do provider evitando erros;
export const useForm = ()=>{
  const context = useContext(FormContext);
  if(context === undefined){
    throw new Error('Use o useForm apenas dentro do FormProvider ')
  }
  return context;
}