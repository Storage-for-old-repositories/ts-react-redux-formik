import React from "react";
import { RouterProvider } from "react-router-dom";
import { routerExamples } from "./routes";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "@/features";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <RouterProvider router={routerExamples} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
