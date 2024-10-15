import React, { useEffect, useState } from 'react';
import './Blank2.css';

const codingChallenges = [
  {
    prompt: "Write the simplest possible Python function that returns the square of a number.",
    codeTemplate: "def square(x):\n    # Your code here\n",
    expectedOutput: "Return: x * x"
  },
  {
    prompt: "Create the simplest possible Python function to check if a number is even.",
    codeTemplate: "def is_even(x):\n    # Your code here\n",
    expectedOutput: "Return: x % 2 == 0"
  },
  {
    prompt: "Write the simplest possible Python function to find the maximum of three numbers.",
    codeTemplate: "def max_of_three(a, b, c):\n    # Your code here\n",
    expectedOutput: "Return: max(a, b, c)"
  },
];

const challengeSymbols = ['💻', '🛩️', '🔑'];
const randomSymbols = [
  '🔒', // Locked
  '🧩', // Puzzle piece
  '📍', // Location pin
  '🎯', // Target
  '🚀', // Rocket
  '✈️', // Airplane
  '📊', // Bar chart
  '🏢', // Office building (representing an airport)
  '🔮', // Crystal ball
  '🎈', // Balloon
  '✨', // Sparkles
  '🍀', // Four-leaf clover
  '🌈', // Rainbow
  '🦄', // Unicorn
  '🌟', // Star
  '💫', // Dizzy symbol
  '🍕', // Pizza
  '⚔️', // Crossed swords (black symbol)
  '🌹', // Rose (red)
  '🔴', // Red circle
  '🚥', // Traffic light (with red)
  '🐒', // Monkey (funny and colorful)
  '🎉', // Party popper
  '🍭', // Lollipop
  '🍩', // Donut
  '🦋', // Butterfly
  '🐉', // Dragon (funny and colorful)
  '🍹', // Tropical drink
  '👾', // Alien monster
  '🦄', // Unicorn
  '🎈', // Balloon
  '🌈', // Rainbow
  '🧸', // Teddy bear
  '🍔', // Hamburger
  '🎃', // Pumpkin (funny for Halloween)
  '🐳', // Whale
  '🧙‍♂️', // Wizard
  '🧞‍♀️', // Genie
  '🤹', // Juggling
  '🎨', // Artist palette
];


const Blank2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [challengeActive, setChallengeActive] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [symbols, setSymbols] = useState([]);
  const [motivationMessage, setMotivationMessage] = useState("");
  const [messagePosition, setMessagePosition] = useState({});
  const [showWonMessage, setShowWonMessage] = useState(false);

  // Function to generate random positions for symbols
  const generateRandomPosition = () => {
    return {
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      fontSize: `${Math.random() * 1.5 + 1}em`,
    };
  };

  // Update symbols periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newSymbols = [];
      // Generate random symbols, including a challenge symbol with probability 1/60
      for (let i = 0; i < 30; i++) {
        if (i === Math.floor(Math.random() * 80)) { // 1 in 60 chance to add a challenge symbol
          newSymbols.push(challengeSymbols[Math.floor(Math.random() * challengeSymbols.length)]);
        } else {
          newSymbols.push(randomSymbols[Math.floor(Math.random() * randomSymbols.length)]);
        }
      }
      setSymbols(newSymbols.map(symbol => ({ symbol, position: generateRandomPosition() })));
    }, 2000); // Update symbols every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let motivationTimer;
    let hideMessageTimer;

    if (challengeActive) {
      motivationTimer = setTimeout(() => {
        setMessagePosition({
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%) scale(2)', // Scale up for jumping effect
        });
        setMotivationMessage("C'mon Jonas, you can do it...");
        hideMessageTimer = setTimeout(() => setMotivationMessage(""), 6000);
      }, 10000);
    } else {
      clearTimeout(motivationTimer);
      clearTimeout(hideMessageTimer);
      setMotivationMessage("");
    }

    return () => {
      clearTimeout(motivationTimer);
      clearTimeout(hideMessageTimer);
    };
  }, [challengeActive]);

  const handleSymbolClick = (symbol) => {
    if (challengeActive || completedChallenges.length >= codingChallenges.length) return;

    if (challengeSymbols.includes(symbol)) {
      setShowPopup(true);
    } else {
      setFeedback("");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    const remainingChallenges = codingChallenges.filter(
      (_, idx) => !completedChallenges.includes(idx)
    );
    if (remainingChallenges.length > 0) {
      setCurrentChallenge(remainingChallenges[0]);
      setChallengeActive(true);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (userCode.includes(currentChallenge.expectedOutput.split(":")[1].trim())) {
      setCompletedChallenges((prev) => [...prev, codingChallenges.indexOf(currentChallenge)]);
      setFeedback("Correct! On to the next one...");
      setUserCode("");
      setChallengeActive(false);
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  const handleFinalClick = () => {
    if (completedChallenges.length === codingChallenges.length) {
      setShowWonMessage(true);
      setTimeout(() => window.location.href = '/j0i9u8y7t6r5e4w3q2l1k0o9m8', 3000); // Navigate after 3 seconds
    }
  };

  return (
    <div className="chaotic-container">
      <div className="animated-background"></div>

      <div className="moving-objects">
        {symbols.map(({ symbol, position }) => (
          <div
            key={symbol}
            className="object"
            style={{
              ...position,
              display: 'block', // Always display
            }}
            onClick={() => {
              if (symbol === '🔑' && completedChallenges.length === codingChallenges.length) {
                handleFinalClick();
              } else {
                handleSymbolClick(symbol);
              }
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup">
          <h2>Happy Birthday Jonas! 🎂</h2>
          <p>Ready for a coding challenge? ❤️</p>
          <button onClick={handleClosePopup}>Start</button>
        </div>
      )}

      {challengeActive && (
        <div className="challenge-popup">
          <h3>💻 Coding Challenge</h3>
          <p>{currentChallenge.prompt}</p>
          <textarea
            rows="6"
            cols="50"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder={currentChallenge.codeTemplate}
          />
          <button onClick={handleCodeSubmit}>Submit Code</button>
          {feedback && <p>{feedback}</p>}
        </div>
      )}

      {motivationMessage && (
        <p className="motivation-message" style={{ ...messagePosition }}>
          {motivationMessage}
        </p>
      )}

      {showWonMessage && (
        <div className="popup">
          <h2>You Won! 🎉</h2>
          <p>Get ready for the next challenge...</p>
        </div>
      )}

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default Blank2;
