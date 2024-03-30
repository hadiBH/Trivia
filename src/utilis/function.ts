import { statsInterface } from "../store/slice/user.slice";
export const getCategoryTestCounts = (
  stats: statsInterface
): { label: string; y: number }[] => {
  const categoryTestCounts: { label: string; y: number }[] = [
    { label: "General Knowledge", y: 0 },
    { label: "Entertainment: Books", y: 0 },
    { label: "Entertainment: Film", y: 0 },
    { label: "Entertainment: Music", y: 0 },
    { label: "Sports", y: 0 },
    { label: "History", y: 0 },
    { label: "Vehicles", y: 0 },
    { label: "Animals", y: 0 },
    { label: "Geography", y: 0 },
    { label: "Celebrities", y: 0 },
    { label: "Mythology", y: 0 },
    { label: "Art", y: 0 },
  ];

  for (const key of Object.keys(stats)) {
    const index = categoryTestCounts.findIndex((obj) => obj.label === key);
    if (index === -1) continue;
    categoryTestCounts[index].y = stats[key].numberOfTests;
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
    const { correctAnswers, numOfQuestions } = stats[category];
    console.log(category, correctAnswers, numOfQuestions);
    const categoryTotalCorrect = correctAnswers / 10;
    const categoryTotalQuestions = numOfQuestions;

    totalCorrectAnswers += categoryTotalCorrect;
    totalQuestions += categoryTotalQuestions;
    console.log(isNaN((0 / 0) * 100));
    let categoryPercentage =
      (categoryTotalCorrect / categoryTotalQuestions) * 100;

    if (isNaN(categoryPercentage)) categoryPercentage = 0;

    categoryPercentages.push({ name: category, y: categoryPercentage });
  }

  const totalPercentage = (totalCorrectAnswers / totalQuestions) * 10;
  console.log(totalPercentage);

  return {
    label: isNaN(totalPercentage)
      ? ""
      : `Total : ${totalPercentage.toFixed(2)}%`,
    data: categoryPercentages,
  };
};
