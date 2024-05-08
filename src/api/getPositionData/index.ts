import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface PositionDataTypes {
  date: string;
  driver_number: number;
  meeting_key: number;
  position: number;
  session_key: number;
}

/**
 * @param sessionLatestStatus: boolean
 * @param sessionKey: string
 * @param driverNumber: string
 * @returns PositionDataTypes
 */
export const getPositionData = async (
  props: FormulaPropsType
): Promise<PositionDataTypes | undefined> => {
  try {
    const res = await instance.get(API_SUFFIX.POSITION + props.driverNumber);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
