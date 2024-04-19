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
 */
export const getIntervalStatus = async (
  props: FormulaPropsType
): Promise<IntervalDataTypes | undefined> => {
  try {
    const sessionKey = props.sessionLatestStatus ? "latest" : props.sessionKey;
    const res = await instance.get(
      API_SUFFIX.INTERVAL + props.driverNumber + "&session_key=" + sessionKey
    );
    console.log(res.data[0]);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
