
import React, { useState, useRef, useReducer } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */
// const reducer = (state, action, event) => {
//   switch (action.type) {
//     case "FNAME":
//       return ({ fname: event.target.vallue, lname: state.lname });
//       break;
//     case "LNAME":
//       return ({ fname: state.fname, lname: event.target.vallue });
//     default: return state;
//   }
// }

function App() {
  const [state, setState] = useState({ fname: "", lname: "" });


  const [error, setError] = useState({ status: false, massage: "Email is invalid" });
  const fnameRef = useRef();
  const emailRef = useRef();
  const handlesubmit = () => {

  }
  const Validator = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  const checkhandler = (event) => {
    if (event.target.name == "name") {
      if (!Validator(event.target.value)) {
        setError({ status: true, massage: "Email is invalid" });
      }
      if (Validator(event.target.value)) {
        setError({ status: false, massage: "Email is invalid" });
      }
    }
  }
  return (
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" ref={fnameRef} onChange={checkhandler} />
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" ref={emailRef} onChange={checkhandler} />
            {error.status && <h2 style={{ color: 'red' }}>{error.massage}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit" disabled={error.status == true} onClick={handlesubmit} >Submit</button>
      </form>
      {
        state.fname != undefined && (
          <div>
            <h1>{state.fname}</h1>
            <h2>{state.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;