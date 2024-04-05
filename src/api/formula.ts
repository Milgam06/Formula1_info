import { API_SUFFIX, instance } from "./api";

export interface FormulaPropsType {
  sessionLatestStatus: boolean;
  sessionKey?: string;
}

export class FormulaDatas {
  async getIntervalStatus(driverNumber: string, props: FormulaPropsType) {
    try {
      const sessionKey = props.sessionLatestStatus
        ? "latest"
        : props.sessionKey;
      const res = await instance.get(
        API_SUFFIX.INTERVAL + driverNumber + "&session_key=" + sessionKey
      );
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  async getSessionStatus(props: FormulaPropsType) {
    try {
      const sessionKey = props.sessionLatestStatus
        ? "latest"
        : props.sessionKey;
      const res = await instance.get(API_SUFFIX.SESSION + sessionKey);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  async getLapStatus(driverNumber: string) {
    try {
      const res = await instance.get(API_SUFFIX.LAPS + driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  async getPositionStatus(driverNumber: string) {
    try {
      const res = await instance.get(API_SUFFIX.POSITION + driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  async getCarStatus(driverNumber: string) {
    try {
      const res = await instance.get(API_SUFFIX.CARS + driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
}
