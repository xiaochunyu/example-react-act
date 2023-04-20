
import React from "react";

function Button() {


  let [counter, setCounter] = React.useState(0);
  return <button onClick={() => setCounter(counter + 1)} disabled={counter > 3}>{counter}</button>;
}

export default Button;
