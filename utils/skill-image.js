import blender from '/public/svg/skills/blender.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import react from '/public/svg/skills/react.svg';
import vitejs from '/public/svg/skills/vitejs.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'java':
      return java;
    case 'git':
      return git;
    case 'blender':
      return blender;
    case 'canva':
      return canva;
    default:
      break;
  }
}
