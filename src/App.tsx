import { Outlet, useNavigate } from "react-router-dom";
import { FormProvider } from './contexts/FormContext';
import { useEffect } from "react";

function App() {

  
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/step1');
  },[])

  return (
    <FormProvider>
      <Outlet />
    </FormProvider>
  )
}

export default App;
