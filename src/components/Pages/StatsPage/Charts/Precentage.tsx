import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { getPrecentage } from "../../../../utilis/function";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Precentage = () => {
  const stats = useSelector((state: RootState) => state.user.stats);
  const data = getPrecentage(stats);
  console.log(data);
  const options = {
    animationEnabled: true,
    title: {
      text: "Trivia Questions Performance",
    },
    subtitles: [
      {
        text: data.label,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "0'%'",
        dataPoints: data.data,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Precentage;
