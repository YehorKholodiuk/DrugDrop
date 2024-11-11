import React from "react"
import './App.css';
import Header from "./Header";
import DragDropTable from "./DragDropTable";
import {TextField} from "@mui/material";

function App() {
  return (
    <div className="App">
<Header/>
        <DragDropTable/>

    </div>
  );
}

export default App;
