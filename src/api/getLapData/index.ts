import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface LapDataTypes {
  date_start: string;
  driver_number: number;
  duration_sector_1: number;
  duration_sector_2: number;
  duration_sector_3: number;
  i1_speed: number;
  i2_speed: number;
  is_pit_out_lap: boolean;
  lap_duration: number;
  lap_number: number;
  meeting_key: number;
  segments_sector_1: number[];
  segments_sector_2: number[];
  segments_sector_3: number[];
  session_key: number;
  st_speed: number;
}

/**
 * @param sessionLatestStatus: boolean
 * @param sessionKey: string
 * @param driverNumber: string
 */
export const getLapData = async (
  props: FormulaPropsType
): Promise<LapDataTypes | undefined> => {
  try {
    const res = await instance.get(API_SUFFIX.LAPS + props.driverNumber);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
