import React from "react";
import Countdown from "react-countdown";

// const INITIAL_TIMER = 20;
interface TimerProps {
  score: number;
  changeQuestion: (score: number) => void;
}

const Timer = ({ score, changeQuestion }: TimerProps) => {
  //   const [timer, setTimer] = useState<number>(INITIAL_TIMER);
  //   useEffect(() => {
  //     const timeout = setTimeout

  //   }, [timer]);

  return <Countdown date={Date.now() + 10000} />;
};
export default Timer;
