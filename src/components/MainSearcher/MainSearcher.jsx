import React, { useState } from "react";
import "./MainSearcher.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Loading from "../UI/Loader/Loading";
import useLoadingScreen from "../Hooks/useLoadingScreen";
import MainContent from "../MainContent/MainContent";

const MainSearcher = (props) => {
  const isLoading = useLoadingScreen(false);
  const [enteredAgent, setEnteredAgent] = useState("");

  const agentChangeHandler = (e) => {
      setEnteredAgent(e.target.value)
  }

  const searchAgentHandler = (e) => {
    e.preventDefault();
    props.onSearchAgent(enteredAgent);
  };

  return (
    <Card className="main-card">
{/*       {!isLoading && ( */}
        <form onSubmit={searchAgentHandler}>
          <div className="main-search">
            <h2>VALORANT STATS</h2>
            <input
              onChange={agentChangeHandler}
              value={enteredAgent}
              placeholder="Find an Agent, ie.player#EU1"
              type="text"
              className="search-input"
            />
            <Button>Search</Button>
          </div>
        </form>
{/*       )}
      {isLoading && <Loading />}  */}
    </Card>
  );
};

export default MainSearcher;
