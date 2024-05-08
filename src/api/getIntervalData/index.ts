import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface IntervalDataTypes {
  date: string;
  driver_number: number;
  gap_to_leader: number;
  interval: number;
  meeting_key: number;
  session_key: number;
}

/**
 * @param sessionLatestStatus: boolean
 * @param sessionKey: string
 * @param driverNumber: string
 * @returns IntervalDataTypes
 */
export const getIntervalData = async (
  props: FormulaPropsType
): Promise<IntervalDataTypes | undefined> => {
  try {
    if (props.driverNumber === undefined) {
      const res = await instance.get(API_SUFFIX.INTERVAL);
      console.log(res.data[0]);
      return res.data[0];
    } else if (props.driverNumber !== undefined) {
      const res = await instance.get(
        API_SUFFIX.INTERVAL + "&driver_number=" + props.driverNumber
      );
      console.log(res.data[0]);
      return res.data[0];
    }
  } catch (error) {
    console.error(error);
    return;
  }
};
