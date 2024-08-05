import React, { useEffect, useState } from "react";

const KnapTryk = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });

  return (
    <>
      <div>
        <p>Du har trykket {count} gange!</p>
        <button onClick={() => setCount(count + 1)}>Tryk her!</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default KnapTryk;
