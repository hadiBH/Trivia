import { useState } from "react";
import Question from "./Question";
import classes from "./Trivia.module.scss";

import QuizResponse, {
  QuizQuestion,
} from "../../utilis/interfaces/question.interface";
import { useDispatch } from "react-redux";
import { UserAction } from "../../store/slice/user.slice";

interface TriviaProps {
  questions?: QuizQuestion[];
  setQuestion?: (question: QuizResponse) => void;
}

const Trivia = ({ setQuestion, questions }: TriviaProps) => {
  const dispatch = useDispatch();
  console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { question, correct_answer, category, incorrect_answers } =
    questions[currentQuestion];

  const changeQuestion = (score: number) => {
    if (currentQuestion === questions.length - 1) {
      dispatch(
        UserAction.update({
          category: category,
          score,
        })
      );
      setCurrentQuestion(0);
      setQuestion(null);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const abortHandler = () => {
    setCurrentQuestion(0);
    setQuestion(null);
  };

  return (
    <div className={classes.__triviaContainer}>
      <>
        <Question
          changeQuestion={changeQuestion}
          category={category}
          question={question}
          correct_answer={correct_answer}
          answers={incorrect_answers}
        />
        <button onClick={abortHandler}>Quit game</button>
      </>
    </div>
  );
};

export default Trivia;
