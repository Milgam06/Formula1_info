import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface CarDataTypes {
  brake: number;
  data: string;
  driver_number: number;
  drs: number;
  meeting_key: number;
  n_gear: number;
  rpm: number;
  session_key: number;
  speed: number;
  throttle: number;
}

/**
 * @param sessionLatestStatus: boolean
 * @param sessionKey: string
 * @param driverNumber: string
 */
export const getCarData = async (
  props: FormulaPropsType
): Promise<CarDataTypes | undefined> => {
  try {
    const res = await instance.get(API_SUFFIX.CARS + props.driverNumber);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
