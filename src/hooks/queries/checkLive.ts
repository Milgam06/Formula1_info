import { useEffect } from "react";

import { getIntervalData } from "@/api";
import { useIntervalStore } from "@/store/interval";
import { compareDate } from "@/hooks";

/**
 * useIntervalLiveCheck
 * @summary check live session & set interval status
 */
export const useIntervalLiveCheck = () => {
  const { intervalStatus, trueIntervalStatus, falseIntervalStatus } =
    useIntervalStore();

  useEffect(() => {
    setInterval(async () => {
      const respone = await getIntervalData({});
      const diffInHour = compareDate({ ISODate: respone?.date });
      console.log(diffInHour, "diffInHour");
      if (diffInHour != null && parseFloat(diffInHour) <= 0.5) {
        trueIntervalStatus();
      } else {
        falseIntervalStatus();
      }
      console.log(intervalStatus, "intervalStatus");
    }, 12000);
  }, []);
};
