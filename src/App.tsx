import PlayerInfo from "./PlayerInfo";
import { PlayerProfile } from "./shared/types";

const profiles: PlayerProfile[] = [
  {
    playerName: "PotatoCanon",
    level: 50,
    favoriteChampion: "Ashe",
    playerRank: "Silver III",
  },
  {
    playerName: "Ouji",
    level: 69,
    favoriteChampion: "Teemo",
    playerRank: "Challenger",
  },
  {
    playerName: "GameKornel",
    level: 10,
    favoriteChampion: "Master Yi",
    playerRank: "Wood 3",
  },
];

const App = () => {
  return (
    <>
      <div>Informacje o graczu:</div>
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
