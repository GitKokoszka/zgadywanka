import { PlayerProfile } from "./shared/types";
import * as Styles from "./PlayerInfo.styles";
import { useEffect, useState } from "react";

const PlayerInfo = ({
  playerName,
  level,
  favoriteChampion,
  playerRank,
}: PlayerProfile) => {
  const [count, setCount] = useState(0);
  const [adminComments, setAdminComments] = useState("");

  useEffect(() => {
    console.log("witaj");

    return () => console.log("narkaa");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log(adminComments + "<----------------");
  }, [adminComments]);

  return (
    <Styles.Container>
      <button
        style={{ width: 50, height: 50 }}
        onClick={() => setCount(count + 1)}
      />
      <div>{count}</div>
      <div>/////////////////////////////////////////////////</div>
      <div>................................................</div>
      <div style={{ color: "green" }}>Nazwa gracza: {playerName}</div>
      <div>Poziom: {level}</div>
      <div>Ulubiona postać: {favoriteChampion}</div>
      <div>Ranga gracza: {playerRank}</div>
      <div>................................................</div>
      <div>/////////////////////////////////////////////////</div>
      <Styles.Input
        value={adminComments}
        onChange={(e) => setAdminComments(e.currentTarget.value)}
      ></Styles.Input>
      <div>Komentarz od admina: {adminComments}</div>
    </Styles.Container>
  );
};

export default PlayerInfo;
