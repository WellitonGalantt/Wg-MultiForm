import './style.css'
import Header from '../Header';
import LeftSideBar from '../LeftSideBar';

import { useForm } from "../../contexts/FormContext";


type ChildrenProps = {
  children: React.ReactNode;
}

function Theme({ children }:ChildrenProps){

  const { state } = useForm();

  return(
    <>
      <div className="container-todo">
        
          <Header />

        <div className="form-box-todo">
          <div className="form-sidebar-area">
            <LeftSideBar
              title='Pessoal'
              description='Se identifique'
              path='/step1'
              emoji='FaUserAlt'
              select={state.currentStep === 1}
            />

            <LeftSideBar
              title='Profissional'
              description='Seu nivel'
              path='/step2'
              emoji='FaBookOpen'
              select={state.currentStep === 2}
            />

            <LeftSideBar
              title='Contatos'
              description='Onde te achar'
              path='/step3'
              emoji='FaEnvelope'
              select={state.currentStep === 3}
            />

            <LeftSideBar
              title='Confirmar'
              description='Verificar dados'
              path='/step4'
              emoji='FaCheckDouble  '
              select={state.currentStep === 4}
            />
          </div>

          <div className="form-steps-area">
            {children}
          </div>
        </div>

      </div>
    </>
  )
}

export default Theme;