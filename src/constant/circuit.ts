export interface CircuitType {
  id: number;
  name: string;
  country: string;
  circuitLength: string;
  //   circuitImage: string;
}
export const CIRCUIT_INFO: CircuitType[] = [
  {
    id: 1,
    name: "Autodromo Nazionale di Monza",
    country: "Italy",
    circuitLength: "5793",
  },
  {
    id: 2,
    name: "Circuit Gilles Villeneuve",
    country: "Canada",
    circuitLength: "4361",
  },
  {
    id: 3,
    name: "Silverstone Circuit",
    country: "United Kingdom",
    circuitLength: "5891",
  },
  {
    id: 4,
    name: "Suzuka Circuit",
    country: "Japan",
    circuitLength: "5807",
  },
  {
    id: 5,
    name: "Circuit de Monaco",
    country: "Monaco",
    circuitLength: "3337",
  },
  {
    id: 6,
    name: "Red Bull Ring",
    country: "Austria",
    circuitLength: "4318",
  },
  {
    id: 7,
    name: "Autodromo Jose Carlos Pace",
    country: "Brazil",
    circuitLength: "4309",
  },
  {
    id: 8,
    name: "Baku City Circuit",
    country: "Azerbaijan",
    circuitLength: "6003",
  },
  {
    id: 9,
    name: "Hungaroring",
    country: "Hungary",
    circuitLength: "4381",
  },
  {
    id: 10,
    name: "Albert Park Circuit",
    country: "Australia",
    circuitLength: "5278",
  },
  {
    id: 11,
    name: "Bahrain International Circuit",
    country: "Bahrain",
    circuitLength: "5412",
  },
  {
    id: 12,
    name: "Shanghai International Circuit",
    country: "China",
    circuitLength: "5451",
  },
  {
    id: 13,
    name: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
    circuitLength: "4909",
  },
  {
    id: 14,
    name: "Circuit de Catalunya",
    country: "Spain",
    circuitLength: "4675",
  },
  {
    id: 15,
    name: "Miami International Autodrome",
    country: "USA",
    circuitLength: "5412",
  },
  {
    id: 16,
    name: "Sochi Autodrom",
    country: "Russia",
    circuitLength: "5848",
  },
  {
    id: 17,
    name: "Circuit Paul Ricard",
    country: "France",
    circuitLength: "5842",
  },
  {
    id: 18,
    name: "Hockenheimring",
    country: "Germany",
    circuitLength: "4574",
  },
  {
    id: 19,
    name: "Yas Marina Circuit",
    country: "UAE",
    circuitLength: "5554",
  },
  {
    id: 20,
    name: "Circuit of the Americas",
    country: "USA",
    circuitLength: "5513",
  },
];
