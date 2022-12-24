

import { RouterProvider,} from "react-router-dom";
import { ToastContainer } from "react-toastify";


import { Routes } from "./Router/Routes";

function App() {


  return (
    <RouterProvider router={Routes}></RouterProvider>
   
  );
}

export default App;
