import React, { useState, useEffect, useRef } from "react";
import "./JumpingGame.css"; // You can create this CSS file for styles

const Blank1 = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [obstacleSpeed, setObstacleSpeed] = useState(1500); // Start with 1.5 seconds
  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    let obstacleTimer, scoreTimer;

    const handleKeyPress = (event) => {
      if (event.key === " " && !isJumping && !gameOver) {
        jump();
      }
    };

    const jump = () => {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 300); // Jump duration
    };

    const checkCollision = () => {
      const dino = dinoRef.current;
      const obstacle = obstacleRef.current;

      const dinoRect = dino.getBoundingClientRect();
      const obstacleRect = obstacle.getBoundingClientRect();

      if (
        dinoRect.bottom > obstacleRect.top &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.right > obstacleRect.left
      ) {
        setGameOver(true);
      }
    };

    const incrementScore = () => {
      if (!gameOver) {
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          // Increase obstacle speed every 5 points
          if (newScore % 5 === 0) {
            setObstacleSpeed((prevSpeed) => Math.max(500, prevSpeed - 200)); // Increase speed, minimum 500ms
          }
          return newScore;
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    obstacleTimer = setInterval(() => {
      checkCollision();
      // This allows the obstacle to speed up
      obstacleRef.current.style.animationDuration = `${obstacleSpeed}ms`;
    }, 50); // Check for collision every 50ms
    scoreTimer = setInterval(incrementScore, 600); // Increment score every second

    return () => {
      clearInterval(obstacleTimer);
      clearInterval(scoreTimer);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isJumping, gameOver, obstacleSpeed]);

  const restartGame = () => {
    setScore(0);
    setObstacleSpeed(1500); // Reset speed
    setGameOver(false);
  };

  // Redirect to Blank2 page if the score reaches 24
  useEffect(() => {
    if (score >= 24) {
      alert("Somebody is 24...");
      // Redirect logic here (e.g., navigate to a new route)
      window.location.href = '/m2n3b4v5c6x7z8a9s0d1f2g3h'; // Modify this line according to your routing setup
    }
  }, [score]);

  return (
    <main id="mainContent">
      <div className="container">
        <div className="row justify-content-center mt-5 p-0">
          <h3>Jumping Jonas</h3>
          <div className="game-container">
            <div className={`dino ${isJumping ? "jump" : ""}`} ref={dinoRef}></div>
            <div className={`obstacle`} ref={obstacleRef}></div>
            <div className="score" ref={scoreRef}>
              Score: {score}
            </div>
            {gameOver && (
              <div className="game-over">
                <h2>Game Over!</h2>
                <button onClick={restartGame}>Restart</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          .game-container {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: #f7f7f7;
            overflow: hidden;
            border: 2px solid #000;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }

          .dino {
            position: absolute;
            bottom: 0;
            left: 50px;
            width: 40px;
            height: 40px;
            background-color: green;
            border-radius: 10px;
            transition: bottom 0.3s ease;
          }

          .jump {
            bottom: 100px; /* Jump height */
          }

          .obstacle {
            position: absolute;
            bottom: 0;
            right: -50px; /* Start off-screen */
            width: 30px;
            height: 40px;
            background-color: red;
            animation: obstacle-animation ${obstacleSpeed}ms linear infinite;
          }

          @keyframes obstacle-animation {
            0% {
              right: -50px; /* Start off-screen */
            }
            100% {
              right: 100%; /* Move off-screen */
            }
          }

          .score {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 20px;
            font-weight: bold;
          }

          .game-over {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
        `}
      </style>
    </main>
  );
};

export default Blank1;
