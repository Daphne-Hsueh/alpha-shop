import StepProgress from "./bodyLeft/StepProgress"
import Steps from "./bodyLeft/Steps"
import ProgressControl from "./bodyLeft/ProgressControl"
import Cart from "./Cart"
import { useState } from "react"




function Body () {
  const [state,setState] = useState(1) 
  
  
  function next() {
    setState(state + 1)
  }

  function previous() {
    setState(state - 1)
  }

  
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12"  data-phase={state} data-total-price="0">
          <StepProgress/>
          <Steps/>
        </section>
        <Cart/>
        <ProgressControl next={next} previous={previous}/>
      </div>
    </main>
  )
}




export default Body;