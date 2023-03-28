import { useState } from "react";

function App() {
  const [InputValue, setInputValue] = useState({
    input1:"",
    input2:"",
    password:"",
    checkbox:"",
    color:"",
    date:"",
    datetime_local:"",
    email:"",
    file:"",
    hidden:"",
    image:"",
    month:"",
    number:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    tel:"",
    time:"",
    url:"",
    week:"",
  });
  const handleInputChange = (e) => {
    setInputValue({
      ...InputValue,
      [e.target.name]: e.target.value
    });
    console.log (InputValue);
  }
  return (
    <div className = "input-1 mt-5" style={{ textAlign: "center" }}>
      <h1>Input Test</h1>
      <div className="input-1 mt-3">
        <label htmlFor="input1">Introduce Valor 1 : </label>
      <input
      id="input1"
      name="input1"
      onChange={(e) => handleInputChange(e)}
      type="text"
      value={InputValue.input1}
      />
      </div>

      <div className="input-2 mt-3">
        <label>
          Introduce Valor 2 :
          <input
          name = "input2"
          onChange={(e) => handleInputChange(e)}
          type="text"
          value={InputValue.input2}
          />
        </label>

        <br/>
       
        <label>
          Password :
          <input
          className="mt-2"
          name = "password"
          onChange={(e) => handleInputChange(e)}
          type="password"
          value={InputValue.password}
          />
        </label>

        <br/>
       
        <label>
          Checkbox 
          <input
          className="mt-2"
          name = "checkbox"
          onChange={(e) => handleInputChange(e)}
          type="checkbox"
          value={InputValue.checkbox}
          />
        </label>

        <br/>
       
        <label>
          Color 
          <input
          className="mt-2"
          name = "color"
          onChange={(e) => handleInputChange(e)}
          type="color"
          value={InputValue.color}
          />
        </label>

        <br/>
       
        <label>
          Date 
          <input
          className="mt-2"
          name = "date"
          onChange={(e) => handleInputChange(e)}
          type="date"
          value={InputValue.date}
          />
        </label>

        <br/>
       
        <label>
          Datetime-local 
          <input
          className="mt-2"
          name = "datetime-local"
          onChange={(e) => handleInputChange(e)}
          type="datetime-local"
          value={InputValue.datetime_local}
          />
        </label>

        <br/>
       
        <label>
          Email 
          <input
          className="mt-2"
          name = "email"
          onChange={(e) => handleInputChange(e)}
          type="email"
          value={InputValue.email}
          />
        </label>

        <br/>
       
        <label>
          File 
          <input
          className="mt-2"
          name = "file"
          onChange={(e) => handleInputChange(e)}
          type="file"
          value={InputValue.file}
          />
        </label>

        <br/>
       
        <label>
          Hidden 
          <input
          className="mt-2"
          name = "hidden"
          onChange={(e) => handleInputChange(e)}
          type="hidden"
          value={InputValue.hidden}
          />
        </label>

        <br/>
       
        <label>
          Image 
          <input
          className="mt-2"
          name = "image"
          onChange={(e) => handleInputChange(e)}
          type="image"
          value={InputValue.image}
          />
        </label>

        <br/>
       
        <label>
          Month 
          <input
          className="mt-2"
          name = "month"
          onChange={(e) => handleInputChange(e)}
          type="month"
          value={InputValue.month}
          />
        </label>

        <br/>
       
        <label>
          Number 
          <input
          className="mt-2"
          name = "number"
          onChange={(e) => handleInputChange(e)}
          type="number"
          value={InputValue.number}
          />
        </label>

        <br/>
       
        <label>
          Radio 
          <input
          className="mt-2"
          name = "radio"
          onChange={(e) => handleInputChange(e)}
          type="radio"
          value={InputValue.radio}
          />
        </label>

        <br/>
       
        <label>
          Range 
          <input
          className="mt-2"
          name = "range"
          onChange={(e) => handleInputChange(e)}
          type="range"
          value={InputValue.range}
          />
        </label>

        <br/>
       
        <label>
          Reset 
          <input
          className="mt-2"
          name = "reset"
          onChange={(e) => handleInputChange(e)}
          type="reset"
          value={InputValue.reset}
          />
        </label>

        <br/>
       
        <label>
          Search 
          <input
          className="mt-2"
          name = "search"
          onChange={(e) => handleInputChange(e)}
          type="search"
          value={InputValue.search}
          />
        </label>

        <br/>
       
        <label>
          Tel 
          <input
          className="mt-2"
          name = "tel"
          onChange={(e) => handleInputChange(e)}
          type="tel"
          value={InputValue.tel}
          />
        </label>

        <br/>
       
        <label>
          Time 
          <input
          className="mt-2"
          name = "time"
          onChange={(e) => handleInputChange(e)}
          type="time"
          value={InputValue.time}
          />
        </label>

        <br/>
       
        <label>
          url 
          <input
          className="mt-2"
          name = "url"
          onChange={(e) => handleInputChange(e)}
          type="url"
          value={InputValue.url}
          />
        </label>

        <br/>
       
        <label>
          Week 
          <input
          className="mt-2"
          name = "week"
          onChange={(e) => handleInputChange(e)}
          type="week"
          value={InputValue.week}
          />
        </label>

      </div>
    </div>
  ) 
}
export default App
