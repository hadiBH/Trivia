import { statsInterface } from "../store/slice/user.slice";
export const getCategoryTestCounts = (
  stats: statsInterface
): { label: string; y: number }[] => {
  const categoryTestCounts: { label: string; y: number }[] = [];
  for (const key of Object.keys(stats)) {
    categoryTestCounts.push({
      label: key,
      y: stats[key].numberOfTests,
    });
  }

  return categoryTestCounts;
};

interface PercentageData {
  label: string;
  data: {
    name: string;
    y: number;
  }[];
}

export const getPrecentage = (stats: statsInterface): PercentageData => {
  let totalCorrectAnswers = 0;
  let totalQuestions = 0;

  const categoryPercentages: { name: string; y: number }[] = [];

  for (const category in stats) {
    const { correctAnswers, numberOfTests } = stats[category];
    const categoryTotalCorrect = correctAnswers;
    const categoryTotalQuestions = numberOfTests * 5; // Each test has 5 questions

    totalCorrectAnswers += categoryTotalCorrect;
    totalQuestions += categoryTotalQuestions;

    const categoryPercentage =
      (categoryTotalCorrect / categoryTotalQuestions) * 100;

    categoryPercentages.push({ name: category, y: categoryPercentage / 10 });
  }

  const totalTests = Object.values(stats).reduce(
    (acc, curr) => acc + curr.numberOfTests,
    0
  );

  totalQuestions = totalTests * 10;

  const totalPercentage = (totalCorrectAnswers / totalQuestions) * 10;

  return {
    label: `Total : ${totalPercentage.toFixed(2)}%`,
    data: categoryPercentages,
  };
};
