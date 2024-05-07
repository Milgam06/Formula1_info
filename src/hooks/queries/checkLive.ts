import { useState, useEffect } from "react";

import { getIntervalData } from "@/api";
import { useIntervalStore } from "@/store/interval";

/**
 * useIntervalLiveCheck
 * @summary check live session & set interval status
 */
export const useIntervalLiveCheck = () => {
  const [liveCheck, setLiveCheck] = useState<boolean>(false);
  const { intervalStatus, trueIntervalStatus, falseIntervalStatus } =
    useIntervalStore();

  useEffect(() => {
    setInterval(async () => {
      const respone = await getIntervalData({ sessionLatestStatus: true });
      console.log(respone, "15s");
      if (respone === undefined) {
        setLiveCheck(false);
        falseIntervalStatus();
      } else if (respone !== undefined) {
        setLiveCheck(true);
        trueIntervalStatus();
      }
      console.log(intervalStatus, liveCheck, "intervalStatus");
    }, 15000);
  }, []);
};
