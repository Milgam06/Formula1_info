export interface DriverInfoType {
  id: number;
  driverNumber: number;
  name: string;
  headshotUrl: string;
  team: string;
  teamColor: string;
  country: string;
}

export const DRIVER_INFO: DriverInfoType[] = [
  {
    id: 1,
    driverNumber: 44,
    name: "Lewis Hamilton",
    headshotUrl:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
    team: "Mercedes",
    teamColor: "#6CD3BF",
    country: "United Kingdom",
  },
  {
    id: 2,
    driverNumber: 63,
    name: "George Russell",
    headshotUrl:
      "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
    team: "Mercedes",
    teamColor: "#6CD3BF",
    country: "United Kingdom",
  },
  {
    id: 3,
    driverNumber: 1,
    name: "Max Verstappen",
    headshotUrl:
      "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
    team: "Red Bull Racing",
    teamColor: "#3671C6",
    country: "Netherlands",
  },
  {
    id: 4,
    driverNumber: 11,
    name: "Sergio Perez",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
    team: "Red Bull Racing",
    teamColor: "#3671C6",
    country: "Mexico",
  },
  {
    id: 5,
    driverNumber: 16,
    name: "Charles Leclerc",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png",
    team: "Ferrari",
    teamColor: "#E80020",
    country: "Monaco",
  },
  {
    id: 6,
    driverNumber: 55,
    name: "Carlos Sainz",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png",
    team: "Ferrari",
    teamColor: "#E80020",
    country: "Spain",
  },
  {
    id: 7,
    driverNumber: 4,
    name: "Lando Norris",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
    team: "McLaren",
    teamColor: "#FF8000",
    country: "United Kingdom",
  },
  {
    id: 8,
    driverNumber: 81,
    name: "Oscar Piastri",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
    team: "McLaren",
    teamColor: "#FF8000",
    country: "Australia",
  },
  {
    id: 9,
    driverNumber: 14,
    name: "Fernando Alonso",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png",
    team: "Astorn Martin",
    teamColor: "#229971",
    country: "Spain",
  },
  {
    id: 10,
    driverNumber: 18,
    name: "Lance Stroll",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png",
    team: "Astorn Martin",
    teamColor: "#229971",
    country: "Canada",
  },
  {
    id: 11,
    driverNumber: 22,
    name: "Yuki Tsunoda",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png",
    team: "RB",
    teamColor: "#6692FF",
    country: "Japan",
  },
  {
    id: 12,
    driverNumber: 3,
    name: "Daniel Ricciardo",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/1col/image.png",
    team: "RB",
    teamColor: "#6692FF",
    country: "Australia",
  },
  {
    id: 13,
    driverNumber: 27,
    name: "Nico Hulkenberg",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png",
    team: "Haas F1 Team",
    teamColor: "#B6BABD",
    country: "Germany",
  },
  {
    id: 14,
    driverNumber: 20,
    name: "Kevin Magnussen",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png",
    team: "Haas F1 Team",
    teamColor: "#B6BABD",
    country: "Denmark",
  },
  {
    id: 15,
    driverNumber: 23,
    name: "Alexandre Albon",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png",
    team: "Williams",
    teamColor: "#64C4FF",
    country: "Thailand",
  },
  {
    id: 16,
    driverNumber: 2,
    name: "Logan Sargeant",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png",
    team: "Williams",
    teamColor: "#64C4FF",
    country: "United States",
  },
  {
    id: 17,
    driverNumber: 31,
    name: "Esteban Ocon",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png",
    team: "Alpine",
    teamColor: "#0093cc",
    country: "France",
  },
  {
    id: 18,
    driverNumber: 10,
    name: "Pierre Gasly",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png",
    team: "Alpine",
    teamColor: "#0093cc",
    country: "France",
  },
  {
    id: 19,
    driverNumber: 24,
    name: "Zhou Guanyu",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png",
    team: "Kick Sauber",
    teamColor: "#52E252",
    country: "China",
  },
  {
    id: 20,
    driverNumber: 77,
    name: "Valtteri Bottas",
    headshotUrl:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png",
    team: "Kick Sauber",
    teamColor: "#52E252",
    country: "Finland",
  },
];
