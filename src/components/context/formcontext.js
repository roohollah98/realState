import React,{useState} from 'react'

export const FormContext=React.createContext();
const FormContextProvider = (props) => {
  const [signUpMode, setSignUpMode] = useState(false);
  return (
    <FormContext.Provider value={{signUpMode,setSignUpMode}}>{props.children}</FormContext.Provider>
  )
}

export default FormContextProvider