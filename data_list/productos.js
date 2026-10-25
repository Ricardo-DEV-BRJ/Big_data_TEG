const productos = [
  {
    sku: "P001",
    name: "Compact Printer Air Advanced Digital",
    price: 265,
    cost: 174.99,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P002",
    name: "Tablet",
    price: 502,
    cost: 294.42,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P003",
    name: "Smart Blender Cooker",
    price: 227,
    cost: 150.1,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P004",
    name: "Advanced Router Rechargeable",
    price: 121,
    cost: 90.34,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P005",
    name: "Portable Mouse Monitor Phone",
    price: 1,
    cost: 0.77,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P006",
    name: "Radio",
    price: 426,
    cost: 292.29,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P007",
    name: "Ultra Projector Oven Thermostat Prime Advanced",
    price: 68,
    cost: 47.28,
    categoria: "Foto y video",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P008",
    name: "Webcam Stove Grill",
    price: 159,
    cost: 89.03,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P009",
    name: "Eco Radio",
    price: 454,
    cost: 271.13,
    categoria: "Audio y telefonía",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P010",
    name: "Ultra Powerbank Brush Charger Max",
    price: 845,
    cost: 518.65,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P011",
    name: "Wireless Dock",
    price: 257,
    cost: 149.06,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P012",
    name: "Fast Camera Router Fan Smart",
    price: 221,
    cost: 147.34,
    categoria: "Foto y video",
    marca: "Lente",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P013",
    name: "Heater Radio",
    price: 689,
    cost: 430.53,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P014",
    name: "Smart Trimmer Webcam Heater",
    price: 279,
    cost: 166.96,
    categoria: "Cuidado personal",
    marca: "Andina",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P015",
    name: "Webcam Dock Heater",
    price: 101,
    cost: 65.84,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P016",
    name: "Automatic Watch Lite Sense",
    price: 316,
    cost: 242.62,
    categoria: "Hogar",
    marca: "Hogaria",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P017",
    name: "Eco Iron Monitor Air",
    price: 982,
    cost: 641.97,
    categoria: "Hogar",
    marca: "Hogaria",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P018",
    name: "Digital Tablet Router Printer Lite",
    price: 3,
    cost: 1.8,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P019",
    name: "Eco Freezer Powerbank Watch",
    price: 340,
    cost: 228.33,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P020",
    name: "Cooler Fan",
    price: 529,
    cost: 341.91,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P021",
    name: "Portable Camera Plus Air Ultra",
    price: 197,
    cost: 137.28,
    categoria: "Foto y video",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P022",
    name: "Wireless Powerbank 360 Advanced Ultra",
    price: 677,
    cost: 487.79,
    categoria: "Audio y telefonía",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P023",
    name: "Rechargeable Lamp Speakerphone Headphones",
    price: 664,
    cost: 426.48,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P024",
    name: "Mini Scooter Microphone",
    price: 784,
    cost: 433.63,
    categoria: "Movilidad y deporte",
    marca: "Rueda",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P025",
    name: "Rechargeable Webcam Stove Grill",
    price: 900,
    cost: 530.47,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P026",
    name: "Mini Iron Drone Wireless Pro",
    price: 909,
    cost: 623.87,
    categoria: "Hogar",
    marca: "Hogaria",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P027",
    name: "Portable Freezer Phone Automatic Smart",
    price: 350,
    cost: 203.83,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P028",
    name: "Wireless Webcam Stove Grill",
    price: 858,
    cost: 574.74,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P029",
    name: "Clock Brush",
    price: 985,
    cost: 787.89,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P030",
    name: "Keyboard Toaster Monitor",
    price: 576,
    cost: 384.48,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P031",
    name: "Silent Printer Fan Shaver",
    price: 102,
    cost: 76.5,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P032",
    name: "Wireless Scooter Clean Mini",
    price: 283,
    cost: 184.19,
    categoria: "Movilidad y deporte",
    marca: "Rueda",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P033",
    name: "Advanced Microphone Cooler Eco",
    price: 904,
    cost: 627.54,
    categoria: "Audio y telefonía",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P034",
    name: "Automatic Brush Fast Eco",
    price: 407,
    cost: 272.17,
    categoria: "Cuidado personal",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P035",
    name: "Premium Bicycle Microphone",
    price: 480,
    cost: 274.29,
    categoria: "Movilidad y deporte",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P036",
    name: "Smart Phone Scooter Clean",
    price: 635,
    cost: 471.46,
    categoria: "Audio y telefonía",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P037",
    name: "Bicycle",
    price: 234,
    cost: 176.17,
    categoria: "Movilidad y deporte",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P038",
    name: "Ultra Dock Trimmer Automatic Edge",
    price: 640,
    cost: 480.61,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P039",
    name: "Wireless Tablet Router Printer Wireless Premium Air",
    price: 781,
    cost: 603.45,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P040",
    name: "Clean Printer Advanced Premium Sense",
    price: 913,
    cost: 667.3,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P041",
    name: "Silent Dock Fast",
    price: 100,
    cost: 74.17,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P042",
    name: "Ultra Speakerphone Oven Go Smart X",
    price: 999,
    cost: 580.02,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P043",
    name: "Rechargeable Projector Pro",
    price: 935,
    cost: 667.11,
    categoria: "Foto y video",
    marca: "Lente",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P044",
    name: "Eco Vacuum",
    price: 259,
    cost: 186,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P045",
    name: "Smart Grill Tablet Fridge Go Smart Smart",
    price: 488,
    cost: 285.44,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P046",
    name: "Digital Stove Silent Pro",
    price: 161,
    cost: 89.7,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P047",
    name: "Portable Powerbank X Air",
    price: 599,
    cost: 404.53,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P048",
    name: "Clock",
    price: 731,
    cost: 530.66,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P049",
    name: "Radio Treadmill",
    price: 511,
    cost: 353.74,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P050",
    name: "Ultra Cooler Treadmill Touch Pro Ultra",
    price: 214,
    cost: 164.47,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P051",
    name: "Mini Fridge Camera",
    price: 777,
    cost: 467.75,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P052",
    name: "Rechargeable Tablet Plus Portable Mini",
    price: 820,
    cost: 514.9,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P053",
    name: "Tablet",
    price: 408,
    cost: 301.28,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P054",
    name: "Wireless Light Toaster Lite Touch Eco",
    price: 791,
    cost: 613.1,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P055",
    name: "Scooter",
    price: 370,
    cost: 293.53,
    categoria: "Movilidad y deporte",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P056",
    name: "Advanced Camera Heater Webcam X Ultra Prime",
    price: 224,
    cost: 147.8,
    categoria: "Foto y video",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P057",
    name: "Ultra Keyboard Compact Eco",
    price: 514,
    cost: 332.14,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P058",
    name: "Portable Scale Speaker Powerbank Clean",
    price: 689,
    cost: 496.83,
    categoria: "Cuidado personal",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P059",
    name: "Oven Speaker Fan",
    price: 489,
    cost: 270.12,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P060",
    name: "Automatic Speaker Router Lamp Prime",
    price: 621,
    cost: 470.7,
    categoria: "Audio y telefonía",
    marca: "Pulsar",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P061",
    name: "Smart Webcam Projector Lock",
    price: 440,
    cost: 339.81,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P062",
    name: "Fast Fan",
    price: 982,
    cost: 760.86,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P063",
    name: "Automatic Cooler Edge",
    price: 124,
    cost: 97.39,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P064",
    name: "Advanced Freezer Advanced Advanced",
    price: 489,
    cost: 354.82,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P065",
    name: "Silent Trimmer Shaver Fast",
    price: 130,
    cost: 103.58,
    categoria: "Cuidado personal",
    marca: "Andina",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P066",
    name: "Treadmill",
    price: 731,
    cost: 472.69,
    categoria: "Movilidad y deporte",
    marca: "Rueda",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P067",
    name: "Mini Charger Lock Oven Sense Sense",
    price: 750,
    cost: 416.34,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P068",
    name: "Thermostat Trimmer",
    price: 206,
    cost: 149.9,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P069",
    name: "Clean Iron Premium Air Wireless",
    price: 293,
    cost: 165.55,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P070",
    name: "Compact Mouse Mouse Router Mini",
    price: 5,
    cost: 3.43,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P071",
    name: "Premium Lock Mini Advanced",
    price: 12,
    cost: 7.04,
    categoria: "Hogar",
    marca: "Hogaria",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P072",
    name: "Silent Webcam Webcam Treadmill Sense Portable Advanced",
    price: 148,
    cost: 90.81,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P073",
    name: "Compact Thermostat Oven",
    price: 685,
    cost: 433.89,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P074",
    name: "Wireless Watch Tablet Printer Automatic Eco Sense",
    price: 59,
    cost: 32.55,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P075",
    name: "Automatic Blender",
    price: 630,
    cost: 459.18,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P076",
    name: "Rechargeable Webcam Dock Heater",
    price: 800,
    cost: 454.27,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P077",
    name: "Clean Toaster Oven Air Touch",
    price: 365,
    cost: 280.23,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P078",
    name: "Brush",
    price: 273,
    cost: 197.25,
    categoria: "Cuidado personal",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P079",
    name: "Portable Kettle",
    price: 50,
    cost: 30.66,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P080",
    name: "Rechargeable Brush Compact",
    price: 748,
    cost: 440.91,
    categoria: "Cuidado personal",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P081",
    name: "Fast Heater Cooker Compact Silent",
    price: 367,
    cost: 236.66,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P082",
    name: "Mini Drone X Portable",
    price: 352,
    cost: 200.38,
    categoria: "Movilidad y deporte",
    marca: "Rueda",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P083",
    name: "Heater Keyboard",
    price: 103,
    cost: 79.67,
    categoria: "Climatización",
    marca: "Polar Air",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P084",
    name: "Wireless Fan Thermostat Max Automatic Max",
    price: 423,
    cost: 337.86,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P085",
    name: "Fast Keyboard",
    price: 998,
    cost: 755.96,
    categoria: "Computación",
    marca: "NovaTec",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P086",
    name: "Ultra Mixer Toaster Toaster Smart",
    price: 342,
    cost: 262.69,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P087",
    name: "Silent Speakerphone Scanner Monitor",
    price: 593,
    cost: 422.34,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P088",
    name: "Silent Scanner Monitor Treadmill",
    price: 30,
    cost: 17.18,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P089",
    name: "Fast Vacuum Cooler",
    price: 307,
    cost: 237.05,
    categoria: "Hogar",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P090",
    name: "Digital Trimmer",
    price: 541,
    cost: 425.34,
    categoria: "Cuidado personal",
    marca: "Andina",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P091",
    name: "Automatic Trimmer Sense",
    price: 405,
    cost: 272.75,
    categoria: "Cuidado personal",
    marca: "Lumi",
    proveedor: "Distribuidora Los Andes"
  },
  {
    sku: "P092",
    name: "Portable Scooter Wireless Digital",
    price: 519,
    cost: 393.52,
    categoria: "Movilidad y deporte",
    marca: "Rueda",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P093",
    name: "Fridge Cooker",
    price: 393,
    cost: 231.94,
    categoria: "Cocina",
    marca: "Kuchen",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P094",
    name: "Scanner",
    price: 472,
    cost: 328.9,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P095",
    name: "Ultra Radio Radio",
    price: 382,
    cost: 236.01,
    categoria: "Audio y telefonía",
    marca: "Ritmo",
    proveedor: "Importadora Orinoco"
  },
  {
    sku: "P096",
    name: "Router",
    price: 375,
    cost: 267.8,
    categoria: "Computación",
    marca: "Bitara",
    proveedor: "Tecno Suministros del Lago"
  },
  {
    sku: "P097",
    name: "Fast Thermostat Microphone Scooter",
    price: 289,
    cost: 176.84,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P098",
    name: "Eco Heater Toaster Stove Silent Sense",
    price: 232,
    cost: 132.75,
    categoria: "Climatización",
    marca: "Brisa",
    proveedor: "Distribuidora Caribe"
  },
  {
    sku: "P099",
    name: "Clean Blender Scale Lite",
    price: 241,
    cost: 156.8,
    categoria: "Cocina",
    marca: "Sazón",
    proveedor: "Comercial Ávila"
  },
  {
    sku: "P100",
    name: "Smart Lamp",
    price: 71,
    cost: 48.28,
    categoria: "Hogar",
    marca: "Hogaria",
    proveedor: "Comercial Ávila"
  }
];

module.exports = productos
