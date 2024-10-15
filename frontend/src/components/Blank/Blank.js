import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for redirection
import "./Blank.css";

const Blank = () => {
  const questions = [
    // FC Köln Questions
    {
      question: "What year was FC Köln founded?",
      answer: "1948",
      correct: true,
      category: "football",
    },
    {
      question: "Who is FC Köln's all-time top scorer?",
      answer: "Hans Schäfer",
      correct: true,
      category: "football",
    },
    {
      question: "In which stadium does FC Köln play?",
      answer: "RheinEnergieStadion",
      correct: true,
      category: "football",
    },

    // Aviation Industry Questions
    {
      question: "Who is considered the father of modern aviation?",
      answer: "Orville Wright",
      correct: true,
      category: "aviation",
    },
    {
      question: "What is the world's largest passenger airplane?",
      answer: "Airbus A380",
      correct: true,
      category: "aviation",
    },
    {
      question: "What is the primary purpose of an altimeter?",
      answer: "Measure altitude",
      correct: true,
      category: "aviation",
    },

    // Computer Science Questions
    {
      question: "What is the Big O notation for bubble sort?",
      answer: "O(n^2)",
      correct: true,
      category: "cs",
    },
    {
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      correct: true,
      category: "cs",
    },
    {
      question: "What is the main purpose of a database index?",
      answer: "speed up",
      correct: true,
      category: "cs",
    },
  ];

  const history = useHistory(); // Hook for programmatic navigation

  const generateBoxes = () => {
    const container = document.querySelector('.chaotic-container');
    for (let i = 0; i < 20; i++) {
      const box = document.createElement('div');
      box.classList.add('moving-box');
      box.textContent = "Click Me!"; // Initial message
      box.style.top = `${Math.random() * 100}vh`;
      box.style.left = `${Math.random() * 100}vw`;

      box.onclick = () => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        const userAnswer = prompt(randomQuestion.question);

        const answerTimeout = setTimeout(() => {
          alert("Too late!");
        }, 6000); // 6 seconds timeout for the answer

        if (userAnswer) {
          clearTimeout(answerTimeout); // Clear timeout if user answers in time
          if (userAnswer.trim().toLowerCase() === randomQuestion.answer.toLowerCase()) {
            if (randomQuestion.question == "Who is FC Köln's all-time top scorer?") {
              alert("Correct! Enjoy the net level :) PS: Make sure to save the link otherwise you need to start from scratch...");
              history.push("/Blank1"); // Redirect to the new page
            } else {
              alert("Correct! But you do not move to the next level.");
              // Open a random page of famous people or funny things
              window.open('https://c.tenor.com/NII7Z9YQLsMAAAAC/tenor.gif', '_blank'); // Replace with actual URL
            }
          } else {
            if (randomQuestion.category == "CS") {
              alert("Wrong answer! Enjoy some kittens..");
              // Open a random kitten page
              window.open('https://www.google.com/search?q=happy+kittens&sca_esv=d9880e105989b578&udm=2&biw=1440&bih=657&sxsrf=ADLYWIICFE7U01-lZooANN9Fe413jEL2UQ%3A1728916417737&ei=wSsNZ-XYLIiC9u8P5evAoQ4&ved=0ahUKEwilvbPHi46JAxUIgf0HHeU1MOQQ4dUDCBA&uact=5&oq=happy+kittens&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWhhcHB5IGtpdHRlbnMyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjIJFDyHFiRIXADeACQAQCYAUGgAaACqgEBNbgBA8gBAPgBAZgCCKACxwLCAgoQABiABBhDGIoFwgIGEAAYCBgemAMAiAYBkgcBOKAH0h0&sclient=gws-wiz-serp', '_blank'); // Redirect to kittens page
            } else {
              alert("WRONG :(");
            }
           
          }
        } else {
          clearTimeout(answerTimeout); // Clear timeout if user clicks cancel
          alert("Too late!");
        }
      };

      container.appendChild(box);
    }
  };

  useEffect(() => {
    generateBoxes();
  }, []);

  return (
    <main id="mainContent">
      <div className="chaotic-container"></div>
    </main>
  );
};

export default Blank;
