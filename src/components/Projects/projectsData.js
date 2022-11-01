import {
    project1Laptop,
    project1Mobile,
    project2Laptop,
    project2Mobile,
    project3Laptop,
    project3Mobile,
  } from "./projectImages";
  
  export const projectData = [
    {
      id: 1,
      image: project1Laptop,
      transitionImage: project1Mobile,
      title: "Coco Donuts",
      codeLink: "https://github.com/fatihyanik/cocodonuts",
      liveLink: "https://cocodonuts.vercel.app/",
    },
    {
      id: 2,
      image: project2Laptop,
      transitionImage: project2Mobile,
      title: "King Plexi",
      codeLink: "https://github.com/fatihyanik/nextjs_commerce",
      liveLink: "https://king-plexi.vercel.app/",
    },
    {
      id: 3,
      image: project3Laptop,
      transitionImage: project3Mobile,
      title: "Notes App",
      codeLink: "https://github.com/fatihyanik/notesapp",
      liveLink: "https://fatih-note-app.netlify.app/",
    },
  ];