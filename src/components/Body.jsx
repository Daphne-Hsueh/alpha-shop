import StepProgress from "./bodyLeft/StepProgress"
import Steps from "./bodyLeft/Steps"
import ProgressControl from "./bodyLeft/ProgressControl"
import Cart from "./Cart"
import { createContext, useState } from 'react';
import { CartProvider } from "./CartContext";

export const StateContext = createContext(1)
export const FormContext = createContext(null)

function Body () {
  const [state,setState] = useState(1) 
  const [formData, setFormData] = useState()

  return (
    <StateContext.Provider value={{state, setState}}>
      <FormContext.Provider value = {{formData,setFormData}}>
        <main className="site-main">
          <div className="main-container">
            <section className="register-container col col-lg-6 col-sm-12"  data-phase={state} data-total-price="0">
              <StepProgress/>
              <Steps/>
            </section>
            <CartProvider>
              <Cart/> 
              <ProgressControl />
            </CartProvider>
          </div>
        </main>
      </FormContext.Provider>
    </StateContext.Provider>
  )
}


export default Body;