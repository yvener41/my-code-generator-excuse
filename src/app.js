import "./style.css";
import "./index.html";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#my-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["The", "A"];
  let subject = ["Lady", "Fool", "Officer", "Bull", "Soldier"];
  let action = ["Burn my", "Took my", "Arrest my", "Look at"];
  let what = ["Kid", "Scooter", "Me", "Drivers License"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex]
  );
};
