import { PlayerProfile } from "./shared/types";

const PlayerInfo = ({
  playerName,
  level,
  favoriteChampion,
  playerRank,
}: PlayerProfile) => {
  return (
    <div
      style={{
        backgroundColor: "#ffed65",
        border: "5px dotted red",
        fontSize: 36,
        padding: "60px 35px",
        color: "red",
        margin: 60,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
      }}
    >
      <div>/////////////////////////////////////////////////</div>
      <div>................................................</div>
      <div style={{ color: "green" }}>Nazwa gracza: {playerName}</div>
      <div>Poziom: {level}</div>
      <div>Ulubiona postać: {favoriteChampion}</div>
      <div>Ranga gracza: {playerRank}</div>
      <div>................................................</div>
      <div>/////////////////////////////////////////////////</div>
    </div>
  );
};

export default PlayerInfo;
