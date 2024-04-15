import { API_SUFFIX, instance } from "./api";

export interface FormulaPropsType {
  driverNumber?: string;
  sessionLatestStatus?: boolean;
  sessionKey?: string | "";
}

export class FormulaDatas {
  FormulaState = {
    intervalData: null,
    sessionData: null,
    lapData: null,
    positionData: null,
    carData: null,
  };
  constructor() {
    this.FormulaState;
  }
  setState();

  /**
   * @param sessionLatestStatus: boolean
   * @param sessionKey: string
   * @param driverNumber: string
   */
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

  /**
   * @param sessionLatestStatus: boolean
   * @param sessionKey: string
   */
  async getSessionStatus(props: FormulaPropsType) {
    try {
      const sessionKey = props.sessionLatestStatus
        ? "latest"
        : props.sessionKey;
      const res = await instance.get(API_SUFFIX.SESSION + sessionKey);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  /**
   * @param sessionLatestStatus: boolean
   * @param sessionKey: string
   * @param driverNumber: string
   */
  async getLapStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.LAPS + props.driverNumber);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  /**
   * @param sessionLatestStatus: boolean
   * @param sessionKey: string
   * @param driverNumber: string
   */
  async getPositionStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.POSITION + props.driverNumber);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  /**
   * @param sessionLatestStatus: boolean
   * @param sessionKey: string
   * @param driverNumber: string
   */
  async getCarStatus(props: FormulaPropsType) {
    try {
      const res = await instance.get(API_SUFFIX.CARS + props.driverNumber);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
}
