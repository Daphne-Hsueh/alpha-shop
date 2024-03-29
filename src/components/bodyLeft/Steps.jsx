import { useContext } from 'react';
import { FormContext } from "../Body";

function Location() {
  const locations = [
  { value: "KLU", label: "基隆市" },
  { value: "TPH", label: "新北市" },
  { value: "TPE", label: "臺北市" },
  { value: "TYC", label: "桃園市" },
  { value: "HSH", label: "新竹縣" },
  { value: "HSC", label: "新竹市" },
  { value: "MAC", label: "苗栗市" },
  { value: "MAL", label: "苗栗縣" },
  { value: "TXG", label: "臺中市" },
  { value: "CWH", label: "彰化縣" },
  { value: "CWS", label: "彰化市" },
  { value: "NTC", label: "南投市" },
  { value: "NTO", label: "南投縣" },
  { value: "YLH", label: "雲林縣" },
  { value: "CHY", label: "嘉義縣" },
  { value: "CYI", label: "嘉義市" },
  { value: "TNN", label: "臺南市" },
  { value: "KHH", label: "高雄市" },
  { value: "IUH", label: "屏東縣" },
  { value: "PTS", label: "屏東市" },
  { value: "ILN", label: "宜蘭縣" },
  { value: "ILC", label: "宜蘭市" },
  { value: "HWA", label: "花蓮縣" },
  { value: "HWC", label: "花蓮市" },
  { value: "TTC", label: "臺東市" },
  { value: "TTT", label: "臺東縣" },
  { value: "PEH", label: "澎湖縣" },
  { value: "KMN", label: "金門縣" },
  { value: "LNN", label: "連江縣" }
];

  return(
    <select required>
      <option value="">請選擇縣市</option>
      {locations.map(location => (
        <option key={location.value} value={location.value}>
          {location.label}
        </option>
      ))}
    </select>
  )
}

function Address() {
  return (
    <form className="col col-12" data-phase="address">
          <h3 className="form-title">寄送地址</h3>
          <section className="form-body col col-12">
            <div className="col col-12">
              <div className="input-group input-w-lg-2 input-w-sm-s1">
                <div className="input-label">稱謂</div>
                <div className="select-container">
                  <select required>
                     <option value="" >請選擇稱謂</option>
                      <option value="mr" selected="">先生</option>
                      <option value="ms">女士</option>
                      <option value="mx">不明</option>                    
                  </select>
                </div>
              </div>
              <div className="input-group input-w-lg-4 input-w-sm-s2">
                <div className="input-label">姓名</div>
                <input type="text" placeholder="請輸入姓名" />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-3 input-w-sm-full">
                <div className="input-label">電話</div>
                <input type="tel" placeholder="請輸入行動電話" />
              </div>
              <div className="input-group input-w-lg-3 input-w-sm-full">
                <div className="input-label">Email</div>
                <input type="email" placeholder="請輸入電子郵件" />
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group input-w-lg-2 input-w-sm-full">
                <div className="input-label">縣市</div>
                <div className="select-container">
                  <Location/>
                </div>
              </div>
              <div className="input-group input-w-lg-4 input-w-sm-full">
                <div className="input-label">地址</div>
                <input type="text" placeholder="請輸入地址" />
              </div>
            </div>
          </section>
        </form>
  );
}

function Shipping () {
  return (
    <form className="col col-12" data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body col col-12">
          <label className="radio-group col col-12" data-price={0}>
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              defaultChecked=""
            />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">標準運送</div>
                <div className="price" />
              </div>
              <div className="period col col-12">約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border" />
          </label>
          <label className="radio-group col col-12" data-price={500}>
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">DHL 貨運</div>
                <div className="price" />
              </div>
              <div className="period col col-12">48 小時內送達</div>
            </div>
            <div className="radio-box-border" />
          </label>
        </section>
      </form>
  );
}

function CreditCard() {
  const {formData , setFormData } = useContext(FormContext)

  return (
    <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input type="text" placeholder="John Doe" onChange={e => setFormData({...formData, name: e.target.value})}/>
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" onChange={e => setFormData({...formData, cardNum: e.target.value})}/>
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input type="text" placeholder= "MM/YY" onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input type="text" placeholder="123" onChange={e => setFormData({...formData, CCV: e.target.value})}/>
            </div>
          </div>
        </section>
      </form>
  );
}

function Steps() {
  return (
    <section className="form-container col col-12">
      <Address/>
      <Shipping/>
      <CreditCard/>
    </section>

  );
}

export default Steps