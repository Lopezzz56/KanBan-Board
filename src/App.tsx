import React from "react";
import routes from "./routes";
import { useRoutes} from "react-router-dom";
function App() {
  const element = useRoutes(routes);
  console.log(element); 
  return <>{element}</>;
}

export default App;
