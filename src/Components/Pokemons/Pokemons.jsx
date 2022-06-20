import React, { useEffect, useState } from "react";

const Pokemons = () => {
  const [inp1Value, setinp1Value] = useState("");
  const [inp2Value, setinp2Value] = useState("");

  //! коллбэк отработает один раз при рендере страницы, так как массив зависимости пустой
  // useEffect(() => {
  // console.log("useEffect!");
  // }, []);

  //! следит за изменениями в стейте inp1value и inp2Value
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value]);

  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value, inp2Value]);

  //! следит за изменениями во всех стейтах
  // useEffect(() => {
  //   console.log("useEffect!");
  // });

  return (
    <div>
      Pokemons
      <input
        value={inp1Value}
        onChange={e => setinp1Value(e.target.value)}
        type="text"
        placeholder="input-1"
      />
      <input
        value={inp2Value}
        onChange={e => setinp2Value(e.target.value)}
        type="text"
        placeholder="input-2"
      />
    </div>
  );
};

export default Pokemons;
