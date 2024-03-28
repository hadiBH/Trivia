import Menu from "../../Menu/Menu";
import { useState } from "react";
import QuizResponse from "../../../utilis/interfaces/question.interface";
import Trivia from "../../Trivia/Trivia";
import { getQuestions } from "../../../utilis/actions/actions.api";
const MainPage = () => {
  const [questions, setQuestion] = useState<QuizResponse | null>(null);

  const startQuizHandler = async (
    code: string,
    level: string,
    category: string
  ) => {
    const data = await getQuestions(code, level, category);
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
