import StepProgress from "./bodyLeft/StepProgress"
import Steps from "./bodyLeft/Steps"
import ProgressControl from "./bodyLeft/ProgressControl"
import Cart from "./Cart"

function BodyLeft ({children}) {
 return (
  <div className="site-main">
    {children}
  </div>
 ) 
}

function Body () {
  return (
    <main className="site-main">
      <div className="main-container">
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <StepProgress/>
          <Steps/>
        </section>
        <Cart/>
        <ProgressControl/>
      </div>
    </main>
  )
}

export default Body;