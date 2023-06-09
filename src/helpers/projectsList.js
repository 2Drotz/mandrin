import project01 from "./../img/projects/01.png";
import project01Big from "./../img/projects/01-big.png";

import project02 from "../img/projects/02.png";
import project02Big from "../img/projects/02-big.png";

import project03 from "./../img/projects/03.png";
import project03Big from "./../img/projects/03-big.png";

import test from "./../img/projects/test.png";
import testBig from "./../img/projects/test-big.png";

import project04 from "./../img/projects/04.png";
import project04Big from "./../img/projects/04-big.png";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
   {
      title: 'ReactPC',
      skills: 'JavaScript, HTML, LESS',
      img: project01,
      imgBig: project01Big,
      gitHubLink: 'https://github.com/2Drotz/ReactPC.com/tree/main',
   },
   {
      title: 'Васюринская',
      img: project02,
      imgBig: project02Big,
      skills: 'HTML, Less',
      gitHubLink: 'https://github.com/2Drotz/vs/tree/master',
   },
   {
      title: 'Marvel heroes',
      img: project03,
      imgBig: project03Big,
      skills: 'React, SCSS, HTML',
      gitHubLink: 'https://github.com/2Drotz/MarvelApp',
   },
   {
      title: 'Portrait on canvas',
      img: project04,
      imgBig: project04Big,
      skills: 'JavaScript, Less, HTML',
      gitHubLink: 'https://github.com/2Drotz/Portrait-on-canvas'
   },
   {
      title: 'Landing',
      img: test,
      imgBig: testBig,
      skills: 'HTML, SCSS, JS',
   },
   {
      title: 'Gaming community',
      img: test,
      imgBig: testBig,
      skills: 'React, PHP, MySql',
   },
];

export { projects }