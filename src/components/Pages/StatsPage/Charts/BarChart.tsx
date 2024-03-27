import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { getCategoryTestCounts } from "../../../../utilis/function";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const stats = useSelector((state: RootState) => state.user.stats);
  const data = getCategoryTestCounts(stats);
  const options = {
    title: {
      text: "Category Preference Overview",
    },
    data: [
      {
        type: "column",
        dataPoints: data,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default BarChart;
