import { useState, useEffect } from "react";
import classes from "./Question.module.scss";
// import ConfettiExplosion from "react-confetti-explosion";
import mole from "../../assets/mole.png";

const LETTERS = ["A", "B", "C", "D"];

interface QuestionProps {
  category: string;
  question: string;
  correct_answer: string;
  answers: string[];
  changeQuestion: (score: number, isLost?: boolean) => void;
}

const DIVS_INITIAL_STATE = [
  { id: 1, content: "" },
  { id: 2, content: "" },
  { id: 3, content: "" },
  { id: 4, content: "" },
  { id: 5, content: "" },
  { id: 6, content: "" },
  { id: 7, content: "" },
  { id: 8, content: "" },
  { id: 9, content: "" },
];

const Question = (props: QuestionProps) => {
  const { question, correct_answer, answers, changeQuestion } = props;

  const [divs, setDivs] = useState(DIVS_INITIAL_STATE);
  const [randomDivIndex, setRandomDivIndex] = useState<number | null>(null);
  const [tries, setTries] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * divs.length);
      setRandomDivIndex(randomIndex);
      const randomLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];

      const newDivs = [...divs];
      newDivs[randomIndex] = {
        ...newDivs[randomIndex],
        content: randomLetter,
      };

      setDivs(newDivs);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [divs]);

  useEffect(() => {
    if (randomDivIndex) {
      setTimeout(() => {
        setRandomDivIndex(null);
        setDivs(DIVS_INITIAL_STATE);
      }, 2000);
    }
  }, [randomDivIndex]);
  const handleClick = (contnet: string) => {
    const index = LETTERS.indexOf(contnet);
    const isCorrect = answers[index] === correct_answer;
    if (isCorrect) {
      setTries(3);
      setScore((prev) => prev + 10);
      changeQuestion(score + 10);
      return;
    }
    if (tries - 1 === 0) {
      setTries(3);
      changeQuestion(score, true);
      return;
    }
    setTries((prev) => prev - 1);
    setScore((prev) => (prev - 5 < 0 ? 0 : prev - 5));
  };

  return (
    <>
      <div className={classes.__question}>
        <h2>Tries left: {tries}</h2>
        <h2>Score: {score}</h2>
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className={classes.__answers}>
          <h4>
            {answers.map((answer, index) => {
              return (
                <span
                  key={`${answer}-${index}`}
                  dangerouslySetInnerHTML={{
                    __html: `${LETTERS[index]}.   ${answer}`,
                  }}
                />
              );
            })}
          </h4>
        </div>
        <div className={classes.board}>
          <div className={classes.holes}>
            {divs.map((div, index) => (
              <div
                className={classes.hole}
                key={div.id}
                onClick={
                  index === randomDivIndex
                    ? () => {
                        handleClick(div.content);
                      }
                    : null
                }
              >
                {index === randomDivIndex && (
                  <div className={classes.mole}>
                    <span>{div.content}</span>
                    <img src={mole} alt="mole" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
