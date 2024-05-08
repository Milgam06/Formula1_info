import axios from "axios";

export interface FormulaPropsType {
  driverNumber?: string;
  sessionLatestStatus?: boolean;
  sessionKey?: string | "";
}

export const API_SUFFIX = {
  BASEURL: "https://api.openf1.org/v1", // base url
  DRIVERS: "/drivers?session_key=latest", // drivers info
  INTERVAL: "/intervals?session_key=latest", // interval times
  LAPS: "/laps?session_key=latest&driver_number=", // lap times
  POSITION: "/positions?session_key=latest&driver_number=", // driver position
  SESSION: "/sessions?session_key=", // session info
  MEETING: "/meetings?", // meeting info
  STINTS: "/stints?session_key=latest&driver_number=", // pit stops info
  CARS: "/car_data?session_key=latest&driver_number=", // car info
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // allow cors
  },
});
