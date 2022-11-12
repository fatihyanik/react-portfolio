import coco from "../../assets/playground/coco.png";
import random from "../../assets/playground/random.png";
import rock from "../../assets/playground/rock.png";
import pet from "../../assets/playground/pet.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Coco Donuts",
    liveLink: "https://cocodonuts.vercel.app/",
    hasLink: true,
    img: coco,
  },
  {
    id: 2,
    projectName: "Random Quote Generator",
    liveLink: "https://random-quote-mfy.netlify.app/",
    hasLink: true,
    img: random,
  },
  {
    id: 3,
    projectName: "Rock Paper Scissors",
    hasLink: true,
    liveLink: "https://fatih-rock-paper-scissors.netlify.app/",
    img: rock,
  },
  {
    id: 4,
    projectName: "Pettaker",
    hasLink: false,
    liveLink: "",
    img: pet,
  },
];
