
import React, { useState, useRef, useEffect } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 *  state.fname != undefined
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
  const [status2, setStatus2] = useState(false)


  const [error, setError] = useState({ status: false, massage: "Email is invalid" });
  const fnameRef = useRef();
  const emailRef = useRef();
  const handlesubmit = (event) => {
    event.preventDefault();
    setStatus2(true);
  }

  useEffect(() => {
    fnameRef.current.focus();
  }, [])

  const Validator = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  const checkhandler = (event) => {
    if (event.target.name == "email") {
      if (!Validator(event.target.value)) {
        setError({ status: true, massage: "Email is invalid" });
      }
      if (Validator(event.target.value)) {
        setError({ status: false, massage: "Email is invalid" });
      }
      setState({ fname: state.fname, lname: event.target.value });
    }
    else {
      setState({ fname: event.target.value, lname: state.lname });
    }
  }
  return (
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" ref={fnameRef} value={state.name} onChange={checkhandler} />
            <br></br>
            <p>Email</p>
            <input id='lname' name="email" ref={emailRef} value={state.email} onChange={checkhandler} />
            {error.status && <h2 style={{ color: 'red' }}>{error.massage}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit" disabled={error.status == true && state.lname.length > 0} onClick={handlesubmit} >Submit</button>
      </form>
      {
        status2 && (
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