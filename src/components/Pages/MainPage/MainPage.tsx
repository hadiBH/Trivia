import Menu from "../../Menu/Menu";
import { useState } from "react";
import QuizResponse from "../../../utilis/interfaces/question.interface";
import Trivia from "../../Trivia/Trivia";
import { getQuestions } from "../../../utilis/actions/actions.api";
import { useDispatch } from "react-redux";
import { UserAction } from "../../../store/slice/user.slice";
import { DUMMYDATA } from "../../../utilis/interfaces/question.interface";
const MainPage = () => {
  const [questions, setQuestion] = useState<QuizResponse | null>(DUMMYDATA);
  const dispatch = useDispatch();

  const startQuizHandler = async (
    code: string,
    level: string,
    category: string
  ) => {
    const data = await getQuestions(code, level);
    dispatch(UserAction.startTest(category));
    setQuestion(data);
  };

  if (!questions) {
    return <Menu startQuiz={startQuizHandler} />;
  }
  const manipulatedQuestions = questions.results.map((question) => ({
    ...question,
    incorrect_answers: [
      ...question.incorrect_answers,
      question.correct_answer,
    ].sort(() => Math.random() - 0.5),
  }));

  return <Trivia questions={manipulatedQuestions} setQuestion={setQuestion} />;
};

export default MainPage;
