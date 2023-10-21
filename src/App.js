import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Components/Router/router";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-5xl mx-auto ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
