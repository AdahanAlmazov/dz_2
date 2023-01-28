import React, { useState } from "react";

function Box() {
  const [dis, setDis] = useState(true);
  function chek() {
    setDis(!dis);
  }
  return (
    <div>
      <input type="email" disabled={!dis} />
      <input type="number" disabled={!dis} />
      <input type="text" disabled={!dis} />
      <input type="checkbox" onChange={chek} />
      <button disabled={dis}>Add</button>
    </div>
  );
}

export default Box;
