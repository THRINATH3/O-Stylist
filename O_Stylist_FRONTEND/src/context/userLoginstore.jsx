import {  useState } from "react";
import { usercontext } from "./userLoginContext";

function UserLoginStore({ children }) {
  const [curruser, setCurruser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const [err, setErr] = useState('');

  async function onSubmit(data) {
    try {
      const res = await fetch(
        'https://o-stylist-6jpm.vercel.app/user-api/login',
        {
          method: "POST",
          headers: { "Content-type": "application/json" ,},
          body: JSON.stringify(data),
        }
      );
      let result= await res.json();
      if(result.message==='LOGIN SUCCESS')
      {
        setCurruser(result.user);
        setLoginStatus(true);
        setErr('');
        sessionStorage.setItem('token',result.token);
      }
      else
      {
        setErr(result.message);
        setCurruser({});
        setLoginStatus(false);
      }
    } catch (error) {
      setErr('An error occurred. Please try again.');
    }
  }

  function logout() {
    setCurruser({});
    setLoginStatus(false);
    setErr('');
    sessionStorage.removeItem('token')
  }

  return (
    <usercontext.Provider value={{ onSubmit, logout, loginStatus, err, curruser, setCurruser }}>
      {children}
    </usercontext.Provider>
  );
}

export default UserLoginStore;
