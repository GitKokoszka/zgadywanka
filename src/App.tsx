import PlayerInfo from "./PlayerInfo";

const profiles = [];

const App = () => {
  return (
    <>
      <div>Informacje o graczu:</div>
      <PlayerInfo
        playerName={"PotatoCanon"}
        level={50}
        favoriteChampion="Ashe"
        playerRank="Silver III"
      />
      <PlayerInfo
        playerName={"Ouji"}
        level={30}
        favoriteChampion="Teemo"
        playerRank="Gold IV"
      />
    </>
  );
};

export default App;
