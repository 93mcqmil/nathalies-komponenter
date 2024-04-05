import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import uuid from "react-uuid";
import { CarouselState } from "./types";

const myObj: CarouselState = {
  carousel: [
    {
      id: uuid(),
      title: "Quibusdam",
      info: "Quibusdam illo excepturi, mollitia omnis optio facere.",
      img: "./src/assets/img/hedgehog.jpg",
    },
    {
      id: uuid(),
      title: "Elit",
      info: "Consectetur, adipisicing elit, nesciunt debitis quisquam nemo temporibus.",
      img: null,
    },
    {
      id: uuid(),
      title: "Nesciunt",
      info: "Nesciunt debitis quisquam nemo temporibus amet sunt.",
      img: null,
    },
    {
      id: uuid(),
      title: "Facere",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea praesentium ex ullam quibusdam illo excepturi aperiam pariatur? Accusantium, maxime mollitia omnis optio facere nesciunt debitis quisquam nemo temporibus.",
      img: "./src/assets/img/partyHog.jpg",
    },
    {
      id: uuid(),
      title: "Excepturi",
      info: "Ea praesentium ex ullam quibusdam illo excepturi aperiam pariatur? Accusantium, maxime mollitia omnis optio facere nesciunt debitis quisquam nemo.",
      img: null,
    },
  ],
};

function App() {
  return (
    <div id="app">
      <Carousel obj={myObj} />
    </div>
  );
}

export default App;
