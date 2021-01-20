import React, { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000)

  return (
    <>
      <h1> {ctime} </h1>
      {/*<button onClick={updateTime}> Get Time </button>*/}
    </>
  );
};

export default App;