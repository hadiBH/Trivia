import React, { Dispatch, createContext, useContext, useState } from 'react'

export interface TriviaOptions {
  category: string;
  level: string;
  code: string;
}

interface OptionContextProps  {
  setOptions: Dispatch<TriviaOptions>;
  options: TriviaOptions;
}
const OptionContext = createContext<OptionContextProps | undefined>(undefined);

const INITIALSTATE: TriviaOptions = {
  category: "",
  level: "",
  code: "",
};

const OptionContextProvider = ({children}) => {
  const [options, setOptions] = useState(INITIALSTATE)
  return (
    <OptionContext.Provider value={{options, setOptions}}>
      {children}
    </OptionContext.Provider>
  )
}

export default OptionContextProvider;


export const useOptions = (): OptionContextProps => {
  const context = useContext(OptionContext)
  if(!context) return null;
  return context;
}

