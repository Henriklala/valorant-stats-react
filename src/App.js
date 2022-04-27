import React, { useState, useEffect } from "react";
import MainSearcher from "./components/MainSearcher/MainSearcher";
import useLoadingScreen from "./components/Hooks/useLoadingScreen";
import Loading from "./components/UI/Loader/Loading";
import API from "./API/API";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [valorantStats, setValorantStats] = useState([]);
  const [valorantContent, setValorantContent] = useState(false);

  const searchAgentHandler = async (agentSearch) => {
    setValorantContent(false);
    setIsLoading(true);
    const res = await fetch(`${`http://localhost:5050/${agentSearch}`}`);
    const Data = await res.json();

    const transformedData = Data.map((valData) => {
      return {
        id: Math.random(),
        icon: valData.icon,
        rank: valData.Current_rank,
        dmg: valData.Damage,
        kd: valData.KD,
        hs: valData.Headshot,
        win: valData.Win,
        head: valData.Accuracy[0].Head,
        body: valData.Accuracy[0].Body,
        legs: valData.Accuracy[0].Legs,
      };
    });
    console.log("transformedData :", transformedData);
    setValorantStats(transformedData);
    setIsLoading(false);
    setValorantContent(true);
  };

  return (
    <>{!isLoading && !valorantContent && <MainSearcher onSearchAgent={searchAgentHandler} />}
      {isLoading ? <Loading /> : valorantContent && <MainContent searchResult={valorantStats} />}
    </>
  );
}

export default App;
