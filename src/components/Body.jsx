
import StepProgress from "./bodyLeft/StepProgress"
import Steps from "./bodyLeft/Steps"
import ProgressControl from "./bodyLeft/ProgressControl"

function Body () {
  return (
    <body>
      <div>main Left</div>
        <section className="progress-container col col-12">
          <StepProgress/>
          <Steps/>
        </section>

        <ProgressControl/>

      <div>main Right</div>
      
    </body>
  )
}

export default Body;