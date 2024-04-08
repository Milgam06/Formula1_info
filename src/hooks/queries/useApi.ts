import { useState, useEffect } from "react";

import { FormulaPropsType, FormulaDatas } from "@/api";

export class useFormula {
  private formulaDatas = new FormulaDatas();

  async fetchIntervalStatus(props: FormulaPropsType) {
    const [intervalData, setIntervalData] = useState<string[]>([]);
    try {
      const respone = await this.formulaDatas.getIntervalStatus();
    }
  }
}
