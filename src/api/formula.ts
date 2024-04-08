import { API_SUFFIX, instance } from "./api";

export interface FormulaPropsType {
  driverNumber: string;
  sessionLatestStatus: boolean;
  sessionKey: string;
}

export class FormulaDatas {
  async getIntervalStatus(props: FormulaPropsType) {
    try {
      const sessionKey = props.sessionLatestStatus
        ? "latest"
        : props.sessionKey;
      const res = await instance.get(
        API_SUFFIX.INTERVAL + props.driverNumber + "&session_key=" + sessionKey
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

  async getLapStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.LAPS + props.driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  async getPositionStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.POSITION + props.driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  async getCarStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.CARS + props.driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
}
