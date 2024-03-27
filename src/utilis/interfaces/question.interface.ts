export interface QuizQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizResponse {
  response_code: number;
  results: QuizQuestion[];
}
export default QuizResponse;

export const DUMMYDATA: QuizResponse = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does HTML stand for?",
      correct_answer: "HyperText Markup Language",
      incorrect_answers: ["Hyperl", "Home T", "Hyperl"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does CSS stand for?",
      correct_answer: "Cascading Style Sheets",
      incorrect_answers: ["Compute", "Creativ", "Coded S"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does SQL stand for?",
      correct_answer: "Structured Query Language",
      incorrect_answers: ["Sequen", "Standar", "Structu"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does URL stand for?",
      correct_answer: "Uniform Resource Locator",
      incorrect_answers: ["Univers", "Uniform", "Univers"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: ["Compute", "Central", "Compute"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does RAM stand for?",
      correct_answer: "Random Access Memory",
      incorrect_answers: ["Read-O", "Random", "Random"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does GUI stand for?",
      correct_answer: "Graphical User Interface",
      incorrect_answers: ["Graphi", "Graphi", "Graphi"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does LAN stand for?",
      correct_answer: "Local Area Network",
      incorrect_answers: ["Large A", "Local A", "Locali"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does DNS stand for?",
      correct_answer: "Domain Name System",
      incorrect_answers: ["Domain", "Dynamic", "Dynamic"],
    },
    {
      type: "multiple",
      difficulty: "medium",
      category: "Science: Computers",
      question: "What does FTP stand for?",
      correct_answer: "File Transfer Protocol",
      incorrect_answers: ["File T", "File T", "File T"],
    },
  ],
};
