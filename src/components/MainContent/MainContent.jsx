import React from "react";
import { TiArrowBackOutline } from 'react-icons/ti';
import "./MainContent.css";
import Card from "../UI/Card/Card";
import ContentCard from "../UI/Card/ContentCard";

const MainContent = (props) => {
  return (
    <>
      {props.searchResult.map((vStats) => (
        <Card key={vStats.id} className="content">
          <ContentCard>
              <a href="../MainSearcher/MainSearcher" className="undo"><TiArrowBackOutline/></a>
            <ul>
              <h2>Current Rank</h2>
              <li>{vStats.rank}</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <ul>
              <h4>Damage/Round</h4>
              <li>{vStats.dmg}</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <ul>
              <h4>K/D Ratio</h4>
              <li>{vStats.kd}</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <ul>
              <h4>Headshot</h4>
              <li>{vStats.hs}%</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <ul>
              <h4>Win</h4>
              <li>{vStats.win}%</li>
            </ul>
          </ContentCard>
          <ContentCard>
            <h2>Accuracy</h2>
            <ul>
              <h4>Head</h4>
              <li>{vStats.head}%</li>
              <h4>Body</h4>
              <li>{vStats.body}%</li>
              <h4>Legs</h4>
              <li>{vStats.legs}%</li>
            </ul>
          </ContentCard>
        </Card>
      ))}
    </>
  );
};

export default MainContent;
