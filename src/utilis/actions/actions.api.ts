import axios from "axios";
import QuizResponse from "../interfaces/question.interface";

const API_BASE_URL: string = "https://opentdb.com/api.php";
// const BASE_CODE = "9";
const HEADERS = {
  "Content-Type": "application/json",
};

const BASE_RESPOINSE: QuizResponse = {
  response_code: 400,
  results: [],
};

export const getQuestions = async (
  code: string,
  difficulty: string,
  category: string
): Promise<QuizResponse> => {
  try {
    const { data } = await axios.get(API_BASE_URL, {
      headers: { ...HEADERS },
      params: {
        amount: "5",
        category: code,
        difficulty: difficulty.toLocaleLowerCase(),
        type: "multiple",
      },
    });
    if (data.response_code === 0) return data;
    return BASE_RESPOINSE;
  } catch (e) {
    console.log(`Error with quiz category:${category}`);
  }
};
