import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface DriverDataTypes {
  broadcast_name: string;
  country_code: string;
  driver_number: number;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  meeting_key: number;
  name_acronym: string;
  session_key: number;
  team_colour: string;
  team_name: string;
}

/**
 * @returns DriverDataTypes
 */
export const getDriverData = async (): Promise<DriverDataTypes | undefined> => {
  try {
    const res = await instance.get(API_SUFFIX.DRIVERS);
    console.log(res.data[0]);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
