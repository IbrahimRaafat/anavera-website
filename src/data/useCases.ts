export interface UseCase {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  industry: "industrial" | "healthcare" | "hospitality" | "agriculture" | "commercial";
  overview: string;
  challenges: string[];
  solution: string;
  features: string[];
  impactStats: { value: string; label: string }[];
  dashboardImage: string;
  dashboardCaption: string;
  devices: string;
  valueDelivered: { title: string; description: string; icon: string }[];
  hardware: ("milesight" | "tektelic" | "agatel")[];
}

export const useCases: UseCase[] = [
  {
    slug: "power-efficiency",
    number: "01",
    title: "Power Efficiency Monitoring",
    shortTitle: "Power Efficiency Monitoring",
    icon: "Zap",
    tagline: "Smart Energy Monitoring & Control",
    industry: "industrial",
    overview:
      "Energy costs represent one of the largest operational expenses for industrial facilities, commercial buildings, and utilities. Without real-time visibility, organizations waste up to 30% of consumed energy through inefficiencies, peak demand penalties, and undetected equipment faults. Anavera's Power Management IoT solution delivers granular, real-time energy intelligence — enabling organizations to monitor, analyze, and optimize every watt of consumed power.",
    challenges: [
      "High energy bills driven by inefficient consumption patterns and peak demand tariffs",
      "No real-time visibility across distributed assets — substations, generators, UPS units, and meters",
      "Manual meter reading processes prone to error and delay",
      "Inability to detect energy theft, faulty equipment, or abnormal consumption",
      "Lack of data for carbon reporting, sustainability compliance, and energy audits",
    ],
    solution:
      "Anavera deploys a network of LoRaWAN-connected smart energy meters, current transformers, and power quality sensors across the facility. Data is aggregated through Milesight UG67 or TEKTELIC KONA Mega gateways and streamed to the Anavera IoT platform in real time. The platform applies AI-driven anomaly detection, runs demand forecasting algorithms, and integrates with BMS and ERP systems to automate load shedding and scheduling. Wired legacy meters are bridged via Agatel protocol converters.",
    features: [
      "Real-time sub-metering at breaker, floor, and building level with 15-minute interval data",
      "AI-powered demand forecasting and peak load prediction to reduce tariff penalties",
      "Automated load management and scheduled power optimization via platform rules engine",
      "Energy theft and leakage detection through statistical anomaly algorithms",
      "ISO 50001 compliance dashboards with automated reporting and audit trails",
      "Integration with solar PV, battery storage, and generator systems",
      "Protocol converters bridging legacy Modbus/BACnet meters to LoRaWAN",
      "Carbon footprint calculation aligned with Scope 1, 2, and 3 reporting",
    ],
    impactStats: [
      { value: "Up to 35%", label: "Energy Cost Reduction" },
      { value: "90%",       label: "Less Manual Reading" },
      { value: "<2 sec",    label: "Alert Response Time" },
    ],
    dashboardImage: "/dashboards/power-management.png",
    dashboardCaption: "Anavera Power Management Dashboard — Live energy monitoring, demand forecasting, and AI optimization",
    devices:
      "Milesight EM300 series energy meters and CT clamps provide high-accuracy power measurement. TEKTELIC KONA Mega outdoor gateways cover large industrial campuses with up to 15 km range. Agatel protocol converters enable integration between wired Modbus energy meters and the LoRaWAN network.",
    valueDelivered: [
      { title: "Cost Savings",           icon: "TrendingDown",   description: "Significant reduction in energy bills through demand management and waste elimination." },
      { title: "Operational Efficiency", icon: "Settings2",      description: "Automated meter reading and reporting frees up engineering team resources." },
      { title: "Sustainability",         icon: "Leaf",           description: "Real-time carbon tracking enables credible ESG reporting and compliance." },
      { title: "Predictive Insight",     icon: "BrainCircuit",   description: "AI models surface inefficiencies before they become expensive problems." },
    ],
    hardware: ["milesight", "tektelic", "agatel"],
  },
  {
    slug: "fuel-monitoring",
    number: "02",
    title: "Tank level & pipeline monitoring",
    shortTitle: "Tank level & pipeline monitoring",
    icon: "Gauge",
    tagline: "Remote Tank Monitoring & Theft Prevention",
    industry: "industrial",
    overview:
      "Fuel theft, wastage, and supply disruption cost organizations millions annually. Generators, industrial machinery, fleet depots, and remote infrastructure all rely on reliable fuel supply — yet most organizations still rely on manual dipping or scheduled delivery without real-time insight. Anavera's Fuel Monitoring IoT solution provides continuous, accurate, and tamper-evident monitoring of fuel tanks across any number of remote sites.",
    challenges: [
      "Fuel theft and siphoning at remote and unattended sites with no detection mechanism",
      "Inefficient and costly fuel deliveries based on schedules rather than actual consumption",
      "Generator and machinery downtime caused by unexpected fuel exhaustion",
      "Manual tank dipping is labor-intensive, inaccurate, and creates safety risks",
      "No consolidated view across multiple sites and tank assets",
    ],
    solution:
      "Anavera integrates ultrasonic or pressure-based fuel level sensors with LoRaWAN connectivity, mounted non-intrusively on tank access points. Real-time fuel level data, consumption rates, and delivery events are transmitted to the Anavera platform where ML algorithms establish normal consumption baselines. Any sudden unexplained drop triggers an immediate theft or leak alert. The platform automates delivery scheduling based on actual consumption velocity.",
    features: [
      "Continuous real-time fuel level monitoring with 1% accuracy",
      "Theft detection via sudden-drop anomaly algorithms with instant SMS, email, and push alerts",
      "Consumption rate tracking with trend analysis and predictive refill forecasting",
      "Tamper alert for sensor interference or communication jamming detection",
      "Automated delivery order triggers based on configurable minimum threshold rules",
      "Integration with fleet and logistics management systems",
      "Multi-site consolidated dashboard with tank status, consumption KPIs, and audit logs",
      "Non-intrusive sensor installation — no tank modification required",
    ],
    impactStats: [
      { value: "99.9%", label: "Theft Detection Accuracy" },
      { value: "25%",   label: "Reduction in Fuel Costs" },
      { value: "0",     label: "Unplanned Dry-Run Stoppages" },
    ],
    dashboardImage: "/dashboards/fuel-monitoring.png",
    dashboardCaption: "Anavera Fuel Monitoring Dashboard — Live tank levels, consumption gauges, theft detection, and tank comparator",
    devices:
      "Milesight EM500 series ultrasonic level sensors provide non-contact fuel level measurement. TEKTELIC KONA Photon solar-powered gateways enable fully off-grid monitoring at remote sites. Agatel LTE-M routers provide cellular backhaul in areas without fixed internet.",
    valueDelivered: [
      { title: "Theft Prevention",  icon: "ShieldCheck",        description: "Immediate detection of unauthorized fuel removal protects asset value." },
      { title: "Cost Optimization", icon: "CircleDollarSign",   description: "Just-in-time delivery scheduling eliminates emergency refills and excess stock." },
      { title: "Uptime Assurance",  icon: "Clock",              description: "Predictive refill alerts ensure generators and machinery never run dry." },
      { title: "Audit Compliance",  icon: "ClipboardCheck",     description: "Complete digital audit trail of all fuel movements for regulatory compliance." },
    ],
    hardware: ["milesight", "tektelic", "agatel"],
  },
  {
    slug: "agriculture",
    number: "03",
    title: "Smart Irrigation & Agriculture",
    shortTitle: "Smart Irrigation & Agriculture",
    icon: "Droplets",
    tagline: "Precision Farming with AI-Driven Water Management",
    industry: "agriculture",
    overview:
      "Agriculture faces a dual crisis: growing demand for food production and shrinking water availability. Traditional irrigation systems waste up to 50% of applied water through over-irrigation, evaporation, and runoff. Anavera's Smart Irrigation solution applies precision sensing, LoRaWAN connectivity, and AI-driven decision intelligence to transform conventional farms into data-driven precision operations.",
    challenges: [
      "Excessive water usage from time-based irrigation schedules ignoring actual soil conditions",
      "Crop stress and yield loss from under-irrigation in specific zones or growth stages",
      "High labor costs from manual field inspections and equipment checks",
      "Inability to monitor large farm areas without wired infrastructure",
      "Lack of predictive insights on weather, disease risk, or pest pressure",
    ],
    solution:
      "Anavera deploys a network of soil moisture, temperature, electrical conductivity, and ambient environment sensors across crop fields, connected via LoRaWAN to Milesight UG67 or TEKTELIC KONA Mega gateways. Real-time sensor data feeds the Anavera platform's irrigation intelligence engine, which applies ML models trained on local crop data, weather APIs, and evapotranspiration algorithms to compute precise irrigation schedules. Automated solenoid valve controllers execute irrigation commands without human intervention.",
    features: [
      "Real-time soil moisture, temperature, salinity, and pH monitoring at multiple field depths",
      "AI-driven irrigation scheduling based on evapotranspiration models and weather forecasts",
      "Automated solenoid valve control with confirmation feedback",
      "Drone imagery and satellite data integration for crop health and NDVI mapping",
      "Fertigation optimization module to reduce fertilizer waste and chemical runoff",
      "Early warning system for frost, heat stress, disease pressure, and pest risk",
      "Long-range LoRaWAN coverage up to 15 km — covering entire large-scale farms",
      "Battery-powered sensors with up to 10-year lifespan for minimal maintenance",
    ],
    impactStats: [
      { value: "Up to 40%", label: "Water Savings" },
      { value: "30%+",      label: "Yield Improvement" },
      { value: "80%",       label: "Fewer Manual Checks" },
    ],
    dashboardImage: "/dashboards/agriculture.png",
    dashboardCaption: "Anavera Smart Agriculture Dashboard — Soil sensors, field zone map, AI irrigation schedule, and yield forecast",
    devices:
      "Milesight EM500-SMTC soil moisture, temperature, and EC sensors provide precision crop-root-zone data. TEKTELIC KIWI agriculture sensors monitor soil moisture tension across multiple depths with an 11-year battery life. Milesight WS523 LoRaWAN solenoid valve controllers execute automated irrigation commands.",
    valueDelivered: [
      { title: "Water Conservation", icon: "Droplets",    description: "AI-driven irrigation cuts water usage by up to 40%, reducing costs and environmental impact." },
      { title: "Higher Yields",      icon: "TrendingUp",  description: "Optimal growing conditions through precision soil management improve crop quality and volume." },
      { title: "Labor Savings",      icon: "Users",       description: "Automated sensing and irrigation eliminates manual field rounds." },
      { title: "Scalability",        icon: "Maximize2",   description: "LoRaWAN covers thousands of hectares with minimal infrastructure investment." },
    ],
    hardware: ["milesight", "tektelic"],
  },
  {
    slug: "cold-chain",
    number: "04",
    title: "Temp. Supply Chain",
    shortTitle: "Temp. Supply Chain",
    icon: "Thermometer",
    tagline: "Unbroken Temperature Integrity from Source to Destination",
    industry: "industrial",
    overview:
      "Cold chain integrity is non-negotiable in pharmaceuticals, food distribution, vaccines, and perishable logistics. A single temperature excursion can result in product spoilage worth millions, regulatory non-compliance, and patient safety risks. Anavera's Cold Chain IoT solution provides continuous, end-to-end temperature and humidity monitoring across refrigerated storage, transport, and distribution.",
    challenges: [
      "Temperature excursions in cold stores, refrigerated trucks, or during last-mile delivery",
      "Manual temperature logging that is error-prone, infrequent, and fails to capture transient spikes",
      "Regulatory compliance gaps — WHO, HACCP, FDA 21 CFR Part 11, GDP",
      "High product spoilage rates causing significant financial losses and waste",
      "Difficulty monitoring distributed assets across warehouses, vehicles, and retail simultaneously",
    ],
    solution:
      "Anavera deploys compact LoRaWAN temperature and humidity sensors inside refrigerated units, cold rooms, and vehicles. Data is transmitted continuously to the Anavera platform where excursion algorithms apply configurable multi-zone thresholds and alarm escalation logic. For mobile assets, Agatel LTE-M cellular trackers relay cold chain data in real time during transport. The platform maintains a tamper-evident, timestamped audit log meeting GDP, HACCP, and regulatory requirements.",
    features: [
      "Continuous temperature and humidity monitoring at configurable intervals (1-min to 60-min)",
      "Configurable multi-zone alarm thresholds with escalation to SMS, email, and third-party systems",
      "Mobile asset monitoring via cellular gateway integration for refrigerated vehicles",
      "Tamper-evident, timestamped audit logs — compliant with GDP, HACCP, FDA 21 CFR Part 11",
      "Automated excursion reports with mean kinetic temperature (MKT) calculations",
      "Predictive equipment failure detection based on compressor cycle anomaly analysis",
      "Integration with ERP, WMS, and quality management systems for traceability",
      "TEKTELIC TUNDRA sensors rated for -40°C to +70°C covering deep-freeze and ambient ranges",
    ],
    impactStats: [
      { value: "99.5%+",  label: "Monitoring Uptime" },
      { value: "<60 sec", label: "Excursion Alert Time" },
      { value: "100%",    label: "Regulatory Audit Readiness" },
    ],
    dashboardImage: "/dashboards/cold-chain.png",
    dashboardCaption: "Anavera Cold Chain Dashboard — Live temperature gauges, compliance status, and excursion monitoring",
    devices:
      "TEKTELIC TUNDRA LoRaWAN sensors operate reliably in extreme temperature ranges from -40°C to +70°C. Milesight EM300-TH temperature and humidity sensors provide compact, battery-powered monitoring for standard refrigerated environments. Agatel cellular data loggers with GPS provide real-time tracking of refrigerated vehicles.",
    valueDelivered: [
      { title: "Product Protection",    icon: "Package",        description: "Real-time alerts prevent spoilage and protect high-value pharmaceutical and food inventory." },
      { title: "Regulatory Compliance", icon: "ClipboardCheck", description: "Automated audit-ready logs eliminate compliance gaps and inspection risk." },
      { title: "Cost Reduction",        icon: "TrendingDown",   description: "Predictive equipment alerts prevent compressor failures before excursions occur." },
      { title: "Full Traceability",     icon: "Route",          description: "End-to-end chain of custody visibility from manufacturer to end point." },
    ],
    hardware: ["tektelic", "milesight", "agatel"],
  },
  {
    slug: "smart-office",
    number: "05",
    title: "Smart Office",
    shortTitle: "Smart Office",
    icon: "Building2",
    tagline: "Intelligent Workplace Management & Energy Efficiency",
    industry: "commercial",
    overview:
      "Modern organizations are reinventing the workplace with hybrid working, space optimization, employee wellness, and sustainability all on the agenda simultaneously. Most offices still run HVAC, lighting, and access on fixed schedules with no intelligence about how space is actually being used. Anavera's Smart Office IoT solution transforms any building into a responsive, data-driven environment that adapts to occupancy in real time.",
    challenges: [
      "Wasted energy from HVAC and lighting running in unoccupied zones outside working hours",
      "Poor space utilization — organizations paying for desks and meeting rooms nobody uses",
      "Indoor air quality (IAQ) issues impacting employee productivity, health, and satisfaction",
      "Lack of data to justify real estate decisions, consolidation, or workplace redesign",
      "Manual processes for hot-desk booking, visitor management, and facility maintenance",
    ],
    solution:
      "Anavera deploys a network of occupancy, CO2, temperature, humidity, light, and energy sensors throughout the office — all connected via LoRaWAN to indoor gateways such as the Milesight UG65 or TEKTELIC KONA Micro. The Anavera platform fuses sensor data to create a live digital twin of the office, automating HVAC and lighting controls through BACnet and Modbus integration with existing BMS infrastructure.",
    features: [
      "Real-time occupancy sensing across desks, rooms, and floors using PIR and ToF sensors",
      "CO2-driven ventilation control (DCV) with integration to HVAC via BACnet/Modbus",
      "Automated lighting control based on occupancy and daylight harvesting sensors",
      "Air quality monitoring (CO2, VOCs, PM2.5, temperature, humidity) with wellness dashboards",
      "Space utilization heatmaps and trend analytics for data-driven real estate decisions",
      "Hot-desk and meeting room booking integration with platform occupancy confirmation",
      "Predictive HVAC pre-conditioning based on calendar and historical occupancy ML models",
      "Seamless BACnet/Modbus integration with existing Honeywell, Schneider, or Siemens BMS",
    ],
    impactStats: [
      { value: "Up to 30%", label: "Energy Savings" },
      { value: "25%+",      label: "Space Optimization" },
      { value: "40%",       label: "HVAC Cost via DCV" },
    ],
    dashboardImage: "/dashboards/smart-office.png",
    dashboardCaption: "Anavera Smart Office Dashboard — Occupancy, IAQ, energy, CO₂ DCV, and space utilization analytics",
    devices:
      "TEKTELIC BREEZE-V multi-sensor devices monitor CO2, temperature, humidity, barometric pressure, light, and occupancy in a single unit. TEKTELIC VIVID sensors provide presence detection. Milesight VS121 people-counting sensors complete the occupancy picture. TEKTELIC KONA Micro gateways with battery backup provide enterprise-grade LoRaWAN coverage across multi-floor office buildings.",
    valueDelivered: [
      { title: "Energy Efficiency",   icon: "Zap",        description: "Demand-driven HVAC and lighting automation cuts energy bills by up to 30%." },
      { title: "Workplace Wellbeing", icon: "Heart",      description: "IAQ monitoring and CO2-driven ventilation improve productivity and health." },
      { title: "Space Optimization",  icon: "LayoutGrid", description: "Utilization analytics enable right-sizing of real estate, reducing overhead costs." },
      { title: "Employee Experience", icon: "Star",       description: "Smart room booking, ambient control, and wellness data improve satisfaction." },
    ],
    hardware: ["tektelic", "milesight"],
  },
  {
    slug: "hotel",
    number: "06",
    title: "Hotel Environment Monitoring",
    shortTitle: "Hotel Environment Monitoring",
    icon: "BedDouble",
    tagline: "Elevated Guest Experience & Operational Excellence",
    industry: "hospitality",
    overview:
      "The hospitality industry faces intense pressure to simultaneously improve guest satisfaction, reduce operating costs, and meet sustainability targets — all while managing hundreds of rooms and complex facilities infrastructure. Anavera's Smart Hotel IoT solution delivers a seamless connected hospitality experience: rooms that respond to preferences automatically, energy systems that optimize consumption, and operations teams with predictive maintenance intelligence.",
    challenges: [
      "High energy waste from HVAC and lighting running in unoccupied rooms around the clock",
      "Reactive maintenance resulting in guest complaints, negative reviews, and costly emergency repairs",
      "Inability to personalize guest room environments based on individual preferences",
      "Water leaks causing room damage, structural issues, and insurance claims",
      "Fragmented operational systems — PMS, BMS, CMMS — with no unified intelligence layer",
    ],
    solution:
      "Anavera integrates a suite of LoRaWAN-connected room sensors with the hotel's Property Management System (PMS), BMS, and CMMS through the Anavera IoT platform API layer. Occupancy sensors detect guest presence within seconds and trigger automated room conditioning. When guests check out, rooms return to eco-standby mode automatically. Water leak sensors protect each room and service corridor. Predictive maintenance models continuously analyze equipment telemetry.",
    features: [
      "Room occupancy detection via PIR, door contact, and key card integration",
      "Guest-preference learning: room temperature, lighting, and ambience profiles stored per guest",
      "Automated eco-mode on checkout — HVAC and lighting controlled via PMS checkout event",
      "Water leak detection under sinks, near showers, and in service corridors with instant alerts",
      "Predictive maintenance for HVAC units, lifts, kitchen equipment, and laundry machines",
      "Energy sub-metering per room, floor, and function zone with sustainability reporting",
      "Minibar temperature and food safety monitoring with automated alerts",
      "Seamless PMS integration with Opera, Protel, Mews, and other leading hotel platforms",
    ],
    impactStats: [
      { value: "40%",   label: "Room Energy Savings" },
      { value: "60%",   label: "Fewer Maintenance Incidents" },
      { value: "4.8/5", label: "Guest Satisfaction Uplift" },
    ],
    dashboardImage: "/dashboards/smart-hotel.png",
    dashboardCaption: "Anavera Smart Hotel Dashboard — Room occupancy, energy savings, guest comfort, and predictive maintenance",
    devices:
      "Milesight WS302 occupancy sensors and WS301 door/window contact sensors provide accurate room state detection. TEKTELIC COMFORT multi-sensors monitor ambient temperature, humidity, light levels, and water leak detection from a single device per room. TEKTELIC KONA Micro indoor gateways with battery backup ensure uninterrupted LoRaWAN coverage across all floors.",
    valueDelivered: [
      { title: "Guest Satisfaction", icon: "Star",        description: "Personalized, always-comfortable rooms drive positive reviews and return visits." },
      { title: "Energy Savings",     icon: "Zap",         description: "Automated eco-mode and demand-driven conditioning cut room energy costs by up to 40%." },
      { title: "Asset Protection",   icon: "Shield",      description: "Water leak sensors and predictive maintenance prevent costly damage and repairs." },
      { title: "Staff Efficiency",   icon: "Users",       description: "IoT-driven task automation reduces reactive workload for operations teams." },
    ],
    hardware: ["milesight", "tektelic", "agatel"],
  },
  {
    slug: "hospital",
    number: "07",
    title: "Hospital Environment Monitoring",
    shortTitle: "Hospital Environment Monitoring",
    icon: "HeartPulse",
    tagline: "Connected Healthcare Infrastructure for Patient Safety & Operational Efficiency",
    industry: "healthcare",
    overview:
      "Hospitals are among the most complex, high-stakes environments to manage — with patient safety, infection control, regulatory compliance, energy consumption, and equipment reliability all demanding simultaneous attention 24/7. A single HVAC failure in a sterile theater or a temperature excursion in a pharmacy refrigerator can have life-threatening consequences. Anavera's Smart Hospital IoT solution provides the intelligent infrastructure layer healthcare facilities need.",
    challenges: [
      "HVAC and air quality failures in operating theaters, ICUs, and isolation rooms threatening infection control",
      "Medication and vaccine storage temperature excursions risking patient safety and regulatory non-compliance",
      "High energy costs with no real-time visibility across complex, 24/7 operating building systems",
      "Asset tracking — wheelchairs, infusion pumps, ventilators — consuming excessive nursing time",
      "Water hygiene and Legionella risk management across large, complex water distribution systems",
    ],
    solution:
      "Anavera deploys a multi-layered IoT sensing network across the hospital — from environmental sensors in clinical zones to asset trackers on mobile medical equipment, energy meters on critical plant, and temperature loggers in all cold storage. LoRaWAN connectivity via TEKTELIC and Milesight gateways covers the entire facility including basement plant rooms and thick-walled clinical areas. The Anavera platform integrates with hospital CMMS, BMS, and LIS systems to close the loop between sensing data and maintenance workflows.",
    features: [
      "Operating theater and clean room environmental monitoring: temperature, humidity, and pressure differentials",
      "Pharmacy and blood bank refrigerator/freezer continuous monitoring with GDP-compliant audit trails",
      "Real-time indoor asset tracking for mobile medical equipment with zone-level location updates",
      "Water temperature monitoring for Legionella risk management and HTM 04-01 compliance",
      "Energy sub-metering across wards, theaters, catering, and plant rooms with automated ESOS reporting",
      "Predictive maintenance for critical HVAC plant, medical gas systems, and sterilization equipment",
      "Nurse call and patient environment monitoring integration for comfort and safety in wards",
      "Seamless CMMS integration with Maximo, Planon, and other healthcare asset management platforms",
    ],
    impactStats: [
      { value: "24/7", label: "Clinical Zone Monitoring" },
      { value: "100%", label: "Regulatory Audit Readiness" },
      { value: "35%",  label: "Energy Cost Reduction" },
    ],
    dashboardImage: "/dashboards/smart-hospital.png",
    dashboardCaption: "Anavera Smart Hospital Dashboard — Clinical compliance, asset tracking, cold chain, and energy monitoring",
    devices:
      "TEKTELIC TUNDRA sensors (rated -40°C to +70°C) provide continuous monitoring in deep-freeze and refrigerator zones across pharmacy and laboratory departments. TEKTELIC BREEZE-V multi-sensors monitor CO2, temperature, humidity, barometric pressure, occupancy, and light in clinical areas. Milesight EM300 series energy meters provide granular sub-metering. Agatel protocol converters integrate legacy BMS points and wired sensors seamlessly into the LoRaWAN network.",
    valueDelivered: [
      { title: "Patient Safety",        icon: "HeartPulse",     description: "Clinical environment monitoring ensures life-critical conditions are always within safe parameters." },
      { title: "Regulatory Compliance", icon: "ClipboardCheck", description: "Automated audit trails for CQC, MHRA, HACCP, and HTM standards reduce inspection risk." },
      { title: "Energy Efficiency",     icon: "Zap",            description: "Smart metering and BMS integration cut energy costs across 24/7 operations." },
      { title: "Asset Management",      icon: "MapPin",         description: "Real-time equipment location eliminates search time and improves clinical workflow." },
    ],
    hardware: ["tektelic", "milesight", "agatel"],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}
