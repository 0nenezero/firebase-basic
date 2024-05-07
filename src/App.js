import React, { useState } from "react";
import Router from "./routes/Router";
import { authService } from "./firebase/fbConfig";

function App() {
  const [isLogin, setIsLogin] = useState(authService.currentUser);
  return <Router isLogin={isLogin} />;
}

export default App;
