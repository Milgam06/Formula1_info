import { API_SUFFIX, instance } from "./api";

export class FormulaDatas {
  async getIntervalStatus(driverNumber: string) {
    try {
      const res = await instance.get(API_SUFFIX.INTERVAL + driverNumber);
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  async getSessionStatus() {
    try {
      const res = await instance.get(API_SUFFIX.SESSION);
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
}
