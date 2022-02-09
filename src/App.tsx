import { useEffect, useState } from "react";
import * as Styles from "./App.styles";
import PlayerInfo from "./PlayerInfo";
import { profiles } from "./shared/api";

const App = () => {
  const [count, setCount] = useState(0); //stan
  const [player, setPlayer] = useState(profiles[0].playerName);
  const [inputValue, setInputValue] = useState("elo");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Styles.CountLabel>{count}</Styles.CountLabel>
      <Styles.CountLabel>{player}</Styles.CountLabel>
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => setCount(count + 1)}
      />
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
          setPlayer(e.currentTarget.value);
        }}
      ></input>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle players visibility
      </button>
      {isVisible
        ? profiles.map((profile) => {
            return (
              <PlayerInfo
                key={profile.favoriteChampion}
                playerName={profile.playerName}
                level={profile.level}
                favoriteChampion={profile.favoriteChampion}
                playerRank={profile.playerRank}
              />
            );
          })
        : null}
    </>
  );
};

export default App;
