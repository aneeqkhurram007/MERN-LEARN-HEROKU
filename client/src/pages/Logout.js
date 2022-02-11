import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";

const Logout = () => {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();
  const [state, setState] = useState("You must be logged in first");
  const callLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      dispatch({ type: "LOGOUT", payload: true });
      setState("Logging you out");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callLogout();
  }, []);

  return <div>{state}</div>;
};

export default Logout;
