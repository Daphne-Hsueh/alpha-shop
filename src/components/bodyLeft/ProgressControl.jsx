import { useContext } from 'react';
import { StateContext , FormContext } from '../Body';
import { totalprice } from '../CartContext';


function ProgressControl() {

  const {state , setState} = useContext(StateContext)
  const {formData} = useContext(FormContext)

  function next() {
    setState(state + 1)
  }

  function previous() {
    setState(state - 1)
  }

  function save() {
    if (formData !== undefined && Object.keys(formData).length === 4) {
      console.log("持卡人姓名: ",formData.name)
      console.log("卡號: ",formData.cardNum)
      console.log("有效期限: ",formData.date)
      console.log("CCV: ",formData.CCV)
      console.log(`金額小計: $${totalprice}`)
      return
    }
    alert('請填寫付款資訊')
  }


  return (
   <section className="progress-control-container col col-lg-6 col-sm-12" > 
    <section className="button-group col col-12" data-phase="address">
      <button className="next"
        onClick={next}
      >
        下一步
        <object
          data="/icons/right-arrow.svg"
          className="cursor-point"
        ></object>
      </button>
    </section>

    <section className="button-group col col-12" data-phase="shipping">
      <button className="prev"
        onClick={previous}
      >
        <object
          data="/icons/left-arrow.svg"
          className="cursor-point"
        ></object>
        上一步
      </button>
      <button className="next"
       onClick={next}
      >
        下一步
        <object
          data="/icons/right-arrow.svg"
          className="cursor-point"
        ></object>
      </button>
    </section>

    <section className="button-group col col-12" data-phase="credit-card">
      <button className="prev"
        onClick={previous}
      >
        <object
          data="/icons/left-arrow.svg"
          className="cursor-point"
        ></object>
        上一步
      </button>
      <button className="next"
        onClick={save}
      >確認下單</button>
    </section>
  </section>

  );
}

export default ProgressControl
