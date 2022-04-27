import React, {useState, useEffect } from "react";

const API = () => {
    const [valorantStats, setValorantStats] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data);
        setValorantStats(Data);
      });
  }, []);
  return console.log('yo')
};

export default API;
