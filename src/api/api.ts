import axios from "axios";

export interface F1ResponseType {
  driver_number: number;
  session_key: string;
}

export const API_SUFFIX = {
  BASEURL: "https://api.openf1.org/v1", // base url
  INTERVAL: "/intervals?session_key=latest&driver_number=", // interval times
  LAPS: "/laps?session_key=latest&driver_number=", // lap times
  POSITION: "/positions?session_key=latest&driver_number=", // driver position
  SESSION: "/sessions?session_key=latest", // session info
  MEETING: "/meetings?", // meeting info
  STINTS: "/stints?session_key=latest&driver_number=", // pit stops info
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
