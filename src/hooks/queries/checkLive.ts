import { useState, useEffect } from "react";

import { getIntervalData, FormulaPropsType } from "@/api";
import { useIntervalStore, IntervalStore } from "@/store";

export const useIntervalLiveCheck = () => {
  const [liveCheck, setLiveCheck] = useState<boolean>(false);
  const { intervalStatus, switchIntervalStatus } = useIntervalStore();

  useEffect(() => {
    setInterval();
  }, []);
};
