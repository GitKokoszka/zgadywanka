import Komponent from "./Komponent";

const sum = (a: number, b: number) => {
  return a + b;
};

const App = () => {
  return (
    <div>
      Poziomy:
      {sum(20, 10)}
      <Komponent />
    </div>
  );
};

export default App;
