import React, { useState } from 'react';
import classes from "./style.module.scss"



function App() {
  const [word,setWord] = useState("")
  const fetchHandler=()=>{

  }
  return (
    <div className={classes.container}>
      <div className={classes.top__section}>

   <div className={classes.title}>
    <h1>Synonims app</h1>
   </div>
   <form className={classes.search} onSubmit={fetchHandler}>
    <label htmlFor="search">Your word </label>
    <input type="text" name="search"placeholder="search synonims ..." onChange={(e)=>setWord(e.target.value)}/>

    <button>Submit</button>

   
   </form>
      </div>
      <div className={classes.bottom__section}
      >
<div className={classes.card}>
  <div className={classes.card}>
    <p className={classes.display}>new</p>
  </div>
</div>

      </div>
    </div>
  );
}

export default App;
