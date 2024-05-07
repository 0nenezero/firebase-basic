import React, { useEffect, useState } from "react";
import Router from "./routes/Router";
import { authService } from "./firebase/fbConfig";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return init ? <Router isLogin={isLogin} /> : "Loading...";
}

export default App;
