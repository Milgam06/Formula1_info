import { API_SUFFIX, instance, FormulaPropsType } from "../api";

export interface SessionDataTypes {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
}

/**
 * @param sessionLatestStatus: boolean
 * @param sessionKey: string
 * @returns SessionDataTypes
 */
export const getSessionData = async (
  props: FormulaPropsType
): Promise<SessionDataTypes | undefined> => {
  try {
    const sessionKey = props.sessionLatestStatus ? "latest" : props.sessionKey;
    const res = await instance.get(API_SUFFIX.SESSION + sessionKey);
    return res.data[0];
  } catch (error) {
    console.error(error);
    return;
  }
};
