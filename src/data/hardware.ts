export interface HardwareProduct {
  name: string;
  description: string;
}

export interface HardwarePartner {
  id: "milesight" | "tektelic" | "agatel";
  name: string;
  url: string;
  tagline: string;
  description: string;
  logoFile: string;
  primaryColor: string;
  products: HardwareProduct[];
}

export const hardwarePartners: HardwarePartner[] = [
  {
    id: "milesight",
    name: "Milesight IoT",
    url: "https://www.milesight.com",
    tagline: "Global leader in IoT sensing and LoRaWAN connectivity products",
    description:
      "Milesight's comprehensive portfolio covers indoor and outdoor gateways, environment sensors, energy meters, agricultural sensors, occupancy detectors, and industrial controllers. Their devices are deployed in smart buildings, smart cities, agriculture, and industrial IoT applications worldwide.",
    logoFile: "/Milesight-Logo (3)(1).png",
    primaryColor: "#00A8B5",
    products: [
      { name: "UG67 Outdoor Gateway",    description: "IP67, 8-channel, 2000+ nodes, up to 15 km rural range" },
      { name: "UG65 Indoor Gateway",     description: "PoE-powered, embedded network server, BACnet/Modbus integration" },
      { name: "UG56 Industrial Gateway", description: "Compact, DIN-rail mount, ideal for equipment cabinet deployment" },
      { name: "EM500 Series",            description: "Environmental, soil, and level sensors for agriculture, cold chain, and industrial use" },
      { name: "EM300 Series",            description: "Indoor temperature, humidity, CO2, and leakage sensors for smart buildings" },
      { name: "WS523 Solenoid Valve",    description: "LoRaWAN automated irrigation control with confirmation feedback" },
    ],
  },
  {
    id: "tektelic",
    name: "TEKTELIC Communications",
    url: "https://www.tektelic.com",
    tagline: "Carrier-grade LoRaWAN hardware with 15+ years of wireless expertise",
    description:
      "TEKTELIC's gateway and sensor portfolio is engineered for mission-critical, enterprise deployments where reliability and uptime are non-negotiable. Their hardware powers some of the world's largest LoRaWAN networks.",
    logoFile: "/2- TEKTELIC logotype.png",
    primaryColor: "#254D90",
    products: [
      { name: "KONA Mega",    description: "Carrier-grade outdoor gateway for large-scale LoRaWAN network deployments" },
      { name: "KONA Micro",   description: "Indoor enterprise gateway with battery backup and dual-SIM cellular, covering 3–4 floors of concrete" },
      { name: "KONA Photon",  description: "Solar-powered, zero-footprint gateway for autonomous off-grid deployments" },
      { name: "TUNDRA",       description: "Temperature/humidity sensor rated -40°C to +70°C for cold chain and harsh environments" },
      { name: "BREEZE-V",     description: "Multi-sensor device monitoring CO2, temperature, humidity, light, pressure, and occupancy" },
      { name: "KIWI",         description: "Agriculture soil sensor with up to 11-year battery life" },
    ],
  },
  {
    id: "agatel",
    name: "Agatel",
    url: "https://www.agatel.co.uk",
    tagline: "Protocol conversion and connectivity bridging for industrial IoT integration",
    description:
      "Agatel specialises in protocol conversion, connectivity bridging, and industrial IoT integration products. Their solutions are critical to Anavera's ability to integrate legacy wired sensor infrastructure with modern LoRaWAN and cellular networks — making Anavera solutions backward-compatible with existing client investments.",
    logoFile: "/3- Agatel-new logo-RGB.png",
    primaryColor: "#00C9A7",
    products: [
      { name: "Modbus/BACnet Converters", description: "Bridge legacy wired meters and sensors to LoRaWAN without replacement" },
      { name: "LTE-M & NB-IoT Gateways", description: "Cellular backhaul for remote and mobile asset monitoring" },
      { name: "Industrial Edge Devices",  description: "Hardened IoT edge devices for harsh environment deployment" },
    ],
  },
];
