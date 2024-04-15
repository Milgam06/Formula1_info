import { useState, useEffect } from "react";

import { FormulaPropsType, FormulaDatas } from "@/api";

export class useFormula {
  private formulaDatas = new FormulaDatas();

  async fetchIntervalStatus(props: FormulaPropsType) {
    const [intervalData, setIntervalData] = useState<string[]>([]);
    try {
      const respone = await this.formulaDatas.getIntervalStatus({
        driverNumber: "1",
        sessionLatestStatus: true,
        sessionKey: "",
      });
      setIntervalData(respone);
      return intervalData;
    } catch (error) {
      console.error("Error fetching interval status", error);
    }
  }
}
