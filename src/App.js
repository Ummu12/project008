import React from "react";
import "./component/style.css";
import {Button, Rating} from "@mui/material";

function App() {
  return (
    <div className="main">
       <h1>Welcome to MUI</h1>
       <Button variant="contained" color="success" size="medium">Add your feedback</Button>
     <br />
     <Rating  value={1}/>
     <br />

     <Rating value={2}/>
     <br />

     <Rating value={3}/>
    <br />

    <Rating value={4}/>  
   
    </div>


  );
}

export default App;
