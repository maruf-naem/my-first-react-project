import { Suspense } from "react";
import "./App.css";
import Hero from "./Components/HeroComponent/Hero";
import Nav from "./Components/NavComponents/Nav";
import Players from "./Components/PlayersComponents/Players";

const data = async () => {
  const res = await fetch("/Players.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>This is Fall Back</p>}>
        <Players data={data()} />
      </Suspense>
    </>
  );
}

export default App;
