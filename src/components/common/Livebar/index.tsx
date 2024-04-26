import { useState, useEffect } from "react";

import { useIntervalStore } from "@/store/interval";
import { getIntervalData } from "@/api";

export const Livebar: React.FC = () => {
  const { intervalStatus, switchIntervalStatus } = useIntervalStore();
  useEffect(() => {
    setInterval(async () => {
      const respone = await getIntervalData({ sessionLatestStatus: true });
      console.log(respone, "15s");
    }, 15000);
  }, []);
  return (
    <>
      <h1>asdf</h1>
    </>
  );
};
