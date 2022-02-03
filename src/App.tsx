import React, { useState } from "react";
import PlayerInfo from "./PlayerInfo";
import { profiles } from "./shared/api";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div style={{ fontSize: 32 }}>{count}</div>
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => setCount(count + 1)}
      />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      ></input>
      <div></div>
      {profiles.map((profile) => {
        return (
          <PlayerInfo
            playerName={profile.playerName}
            level={profile.level}
            favoriteChampion={profile.favoriteChampion}
            playerRank={profile.playerRank}
          />
        );
      })}
    </>
  );
};

export default App;
