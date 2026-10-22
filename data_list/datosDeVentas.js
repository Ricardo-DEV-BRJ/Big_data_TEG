const datosDeVentas = [
  {
    id: 1,
    cliente: "RUBEN GRATEROL",
    identificacion: "V-6669397",
    monto: "27.361,00"
  },
  {
    id: 2,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "67.200,30"
  },
  {
    id: 3,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "50.565,81"
  },
  {
    id: 4,
    cliente: "JOSE GERGORIO BARRIOS",
    identificacion: "V-13206190",
    monto: "152.359,40"
  },
  {
    id: 5,
    cliente: "KLEIVER ZUÑIGA",
    identificacion: "V-24618810",
    monto: "61.168,32"
  },
  {
    id: 6,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "26.402,52"
  },
  {
    id: 7,
    cliente: "RICARDO GONZALEZ",
    identificacion: "V-20429970",
    monto: "16.991,20"
  },
  {
    id: 8,
    cliente: "RAYMOND PEÑA",
    identificacion: "V-21366187",
    monto: "3.398,24"
  },
  {
    id: 9,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.769,94"
  },
  {
    id: 10,
    cliente: "YORSUANY CAMPOS",
    identificacion: "V-27565855",
    monto: "20.474,40"
  },
  {
    id: 11,
    cliente: "ALEXIS MARQUEZ",
    identificacion: "V-14148295",
    monto: "98.904,00"
  },
  {
    id: 12,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "77.581,82"
  },
  {
    id: 13,
    cliente: "GERARDO VASALLO",
    identificacion: "V-5789634",
    monto: "4.111,88"
  },
  {
    id: 14,
    cliente: "YURAIMA BRICEÑO",
    identificacion: "V-19669637",
    monto: "76.460,40"
  },
  {
    id: 15,
    cliente: "WILFREDO DABOIN",
    identificacion: "V-14928334",
    monto: "8.546,79"
  },
  {
    id: 16,
    cliente: "JESUS ALBERTO RONDON",
    identificacion: "V-13049587",
    monto: "8.547,00"
  },
  {
    id: 17,
    cliente: "ALEXANDER VERGARA",
    identificacion: "V-25485622",
    monto: "13.421,00"
  },
  {
    id: 18,
    cliente: "LUIS MORENO",
    identificacion: "V-19287704",
    monto: "1.704,84"
  },
  {
    id: 19,
    cliente: "RONY HERNANDEZ",
    identificacion: "V-13741063",
    monto: "153.833,23"
  },
  {
    id: 20,
    cliente: "ANDREA PIMENTEL",
    identificacion: "V-20767969",
    monto: "26.851,25"
  },
  {
    id: 21,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "25.299,83"
  },
  {
    id: 22,
    cliente: "CRISTIAN MARQUEZ",
    identificacion: "V-23776654",
    monto: "79.275,06"
  },
  {
    id: 23,
    cliente: "KEIBER PACHECO",
    identificacion: "V-23837822",
    monto: "84.602,68"
  },
  {
    id: 24,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.802,83"
  },
  {
    id: 25,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "134.858,60"
  },
  {
    id: 26,
    cliente: "FRANCISCO VITORA",
    identificacion: "V-22892692",
    monto: "1.024.320,00"
  },
  {
    id: 27,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "114.360,68"
  },
  {
    id: 28,
    cliente: "DANYER PEREZ",
    identificacion: "V-10036249",
    monto: "30.939,38"
  },
  {
    id: 29,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "9.217,80"
  },
  {
    id: 30,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.985,95"
  },
  {
    id: 31,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "134.127,53"
  },
  {
    id: 32,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "16.873,69"
  },
  {
    id: 33,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "44.382,00"
  },
  {
    id: 34,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "10.668,75"
  },
  {
    id: 35,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "5.121,00"
  },
  {
    id: 36,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "50.720,74"
  },
  {
    id: 37,
    cliente: "MANUEL RAMOS",
    identificacion: "V-17987135",
    monto: "844.900,00"
  },
  {
    id: 38,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "8.117,37"
  },
  {
    id: 39,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "6.835,68"
  },
  {
    id: 40,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "16.506,68"
  },
  {
    id: 41,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "313.217,44"
  },
  {
    id: 42,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "86.948,37"
  },
  {
    id: 43,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "12.987,79"
  },
  {
    id: 44,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "40.968,00"
  },
  {
    id: 45,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "18.750,00"
  },
  {
    id: 46,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "6.250,00"
  },
  {
    id: 47,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "7.262,91"
  },
  {
    id: 48,
    cliente: "BRAYAN AVENDAÑO",
    identificacion: "V-28561093",
    monto: "8.715,49"
  },
  {
    id: 49,
    cliente: "COUNTRY CLUB DEL COMERCIO DE VALERA",
    identificacion: "J-07067583-7",
    monto: "45.606,68"
  },
  {
    id: 50,
    cliente: "JOSE ALY GONZALEZ",
    identificacion: "V-10909932",
    monto: "15.225,00"
  },
  {
    id: 51,
    cliente: "ALEX QUINTERO",
    identificacion: "V-4657573",
    monto: "6.417,45"
  },
  {
    id: 52,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "7.674,37"
  },
  {
    id: 53,
    cliente: "AUXILIADORA VIERA",
    identificacion: "V-12039973",
    monto: "33.062,70"
  },
  {
    id: 54,
    cliente: "ADEIMAR MORENO",
    identificacion: "V-27804029",
    monto: "188.245,20"
  },
  {
    id: 55,
    cliente: "YOELVIS BARRETO",
    identificacion: "V-25006038",
    monto: "12.208,00"
  },
  {
    id: 56,
    cliente: "JOSE RIGO ALBERTO TORRES JEREZ",
    identificacion: "V-3737818",
    monto: "33.216,72"
  },
  {
    id: 57,
    cliente: "CARMEN PACHECO",
    identificacion: "V-4700091",
    monto: "20.450,27"
  },
  {
    id: 58,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "83.579,13"
  },
  {
    id: 59,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "10.558,84"
  },
  {
    id: 60,
    cliente: "JORGE HERNANDEZ",
    identificacion: "V-10397720",
    monto: "5.625,00"
  },
  {
    id: 61,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "13.234,00"
  },
  {
    id: 62,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "10.284,00"
  },
  {
    id: 63,
    cliente: "JOSE VASQUEZ",
    identificacion: "V-19428011",
    monto: "8.250,00"
  },
  {
    id: 64,
    cliente: "JESUS PAZ",
    identificacion: "V-28445711",
    monto: "6.341,80"
  },
  {
    id: 65,
    cliente: "WILLIAN PIRELA",
    identificacion: "V-18378658",
    monto: "22.341,99"
  },
  {
    id: 66,
    cliente: "ISAEL PEREZ",
    identificacion: "V-19610809",
    monto: "27.835,36"
  },
  {
    id: 67,
    cliente: "JOSE VASQUEZ",
    identificacion: "V-19428011",
    monto: "5.669,50"
  },
  {
    id: 68,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "68,95"
  },
  {
    id: 69,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "329,76"
  },
  {
    id: 70,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "333,10"
  },
  {
    id: 71,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "350,00"
  },
  {
    id: 72,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "122,78"
  },
  {
    id: 73,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "2.240,00"
  },
  {
    id: 74,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "245,86"
  },
  {
    id: 75,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "2.211,00"
  },
  {
    id: 76,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "492,72"
  },
  {
    id: 77,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "760,00"
  },
  {
    id: 78,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "291,00"
  },
  {
    id: 79,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.097,00"
  },
  {
    id: 80,
    cliente: "AGROPECUARIA LOS SAUCES, C.A.",
    identificacion: "J-31323644-6",
    monto: "134,40"
  },
  {
    id: 81,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "231,14"
  },
  {
    id: 82,
    cliente: "JUAN ANTONELO",
    identificacion: "V-12906459",
    monto: "2.202,52"
  },
  {
    id: 83,
    cliente: "JUAN ANTONELO",
    identificacion: "V-12906459",
    monto: "20,00"
  },
  {
    id: 84,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "175,00"
  },
  {
    id: 85,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "117,96"
  },
  {
    id: 86,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "42,21"
  },
  {
    id: 87,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "6,00"
  },
  {
    id: 88,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "136,50"
  },
  {
    id: 89,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "24,42"
  },
  {
    id: 90,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "84,00"
  },
  {
    id: 91,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "4.256,00"
  },
  {
    id: 92,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "5,34"
  },
  {
    id: 93,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "1.100,00"
  },
  {
    id: 94,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "52,50"
  },
  {
    id: 95,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "70,52"
  },
  {
    id: 96,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "8,67"
  },
  {
    id: 97,
    cliente: "MAXIMO UZCATEGUI",
    identificacion: "V-14148454",
    monto: "21.962,16"
  },
  {
    id: 98,
    cliente: "CESAR MANIAC CALDERON",
    identificacion: "V-17347530",
    monto: "1.051,38"
  },
  {
    id: 99,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "15.320,95"
  },
  {
    id: 100,
    cliente: "RAFAEL ROJO",
    identificacion: "V-8715352",
    monto: "1.291,40"
  },
  {
    id: 101,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "58.700,00"
  },
  {
    id: 102,
    cliente: "ALVARO GOMEZ",
    identificacion: "V-24136092",
    monto: "2.289,30"
  },
  {
    id: 103,
    cliente: "ALBERT MONTILLA",
    identificacion: "V-20430810",
    monto: "3.522,00"
  },
  {
    id: 104,
    cliente: "HENNRY MENDOZA",
    identificacion: "V-16535946",
    monto: "4.785,22"
  },
  {
    id: 105,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "19.166,72"
  },
  {
    id: 106,
    cliente: "EDUARDO NARANJO",
    identificacion: "V-25903449",
    monto: "5.635,20"
  },
  {
    id: 107,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "37.744,08"
  },
  {
    id: 108,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "1.502,72"
  },
  {
    id: 109,
    cliente: "JOSE CARRILLO",
    identificacion: "V-12045450",
    monto: "3.834,30"
  },
  {
    id: 110,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "3.372,90"
  },
  {
    id: 111,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "10.859,50"
  },
  {
    id: 112,
    cliente: "GERARDO VILLARREAL",
    identificacion: "V-15751660",
    monto: "2.465,40"
  },
  {
    id: 113,
    cliente: "GERARDO VILLARREAL",
    identificacion: "V-15751660",
    monto: "1.291,40"
  },
  {
    id: 114,
    cliente: "BIONETS MCORBE, C.A",
    identificacion: "J-50258102-2",
    monto: "7.044,00"
  },
  {
    id: 115,
    cliente: "LUIS ARAUJO",
    identificacion: "V-9081923",
    monto: "2.957,25"
  },
  {
    id: 116,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "83.130,60"
  },
  {
    id: 117,
    cliente: "GONZALO BARRIOS",
    identificacion: "V-11245777",
    monto: "414,02"
  },
  {
    id: 118,
    cliente: "CARLOS UTRILLA",
    identificacion: "V-13461805",
    monto: "3.105,11"
  },
  {
    id: 119,
    cliente: "GEOVANNY GODOY",
    identificacion: "V-4917341",
    monto: "3.105,11"
  },
  {
    id: 120,
    cliente: "MARIANO BRICEÑO",
    identificacion: "V-23250236",
    monto: "70.713,77"
  },
  {
    id: 121,
    cliente: "EDUARDO RANGEL",
    identificacion: "V-21063078",
    monto: "3.548,70"
  },
  {
    id: 122,
    cliente: "ITALO BRICEÑO",
    identificacion: "V-13391878",
    monto: "7.156,50"
  },
  {
    id: 123,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "3.572,36"
  },
  {
    id: 124,
    cliente: "KEIBER CARRILLO",
    identificacion: "V-27803386",
    monto: "7.097,40"
  },
  {
    id: 125,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "354.870,00"
  },
  {
    id: 126,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "177.435,00"
  },
  {
    id: 127,
    cliente: "AGRO COMERCIAL EMILY DE PEDRO LUIS CARRILLO TORRES, F.P",
    identificacion: "V-11315660",
    monto: "88.717,50"
  },
  {
    id: 128,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "295.725,00"
  },
  {
    id: 129,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "295.725,00"
  },
  {
    id: 130,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "55.596,30"
  },
  {
    id: 131,
    cliente: "OMAR BECERRA",
    identificacion: "V-11615964",
    monto: "4.613,31"
  },
  {
    id: 132,
    cliente: "JONNATHAN PEREZ",
    identificacion: "V-14328123",
    monto: "1.064,61"
  },
  {
    id: 133,
    cliente: "RAMON LAGUNA",
    identificacion: "V-17866864",
    monto: "2.484,09"
  },
  {
    id: 134,
    cliente: "EMILIO BARRIOS",
    identificacion: "V-19271805",
    monto: "10.054,65"
  },
  {
    id: 135,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "1.301,19"
  },
  {
    id: 136,
    cliente: "ARTURO OLIVAR",
    identificacion: "V-9320833",
    monto: "2.957,25"
  },
  {
    id: 137,
    cliente: "JOSE RAMON MONTILLA",
    identificacion: "V-12038731",
    monto: "7.525,61"
  },
  {
    id: 138,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "1.951,79"
  },
  {
    id: 139,
    cliente: "JOSE RAMIREZ",
    identificacion: "V-18984033",
    monto: "15.048,57"
  },
  {
    id: 140,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "20.611,22"
  },
  {
    id: 141,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "20.611,22"
  },
  {
    id: 142,
    cliente: "REINALDO MORENO",
    identificacion: "V-11129312",
    monto: "1.638,17"
  },
  {
    id: 143,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "23.828,00"
  },
  {
    id: 144,
    cliente: "OSCAR SANTIAGO",
    identificacion: "V-21208672",
    monto: "12.390,56"
  },
  {
    id: 145,
    cliente: "JONATHAN VILLARREAL",
    identificacion: "V-30302677",
    monto: "3.931,62"
  },
  {
    id: 146,
    cliente: "JONATHAN VILLARREAL",
    identificacion: "V-30302677",
    monto: "5.046,77"
  },
  {
    id: 147,
    cliente: "AGROPECUARIA PALMARITO, C.A",
    identificacion: "J-09030633-1",
    monto: "4.418,00"
  },
  {
    id: 148,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "628,96"
  },
  {
    id: 149,
    cliente: "ELADIO ANTONIO HERNANDEZ LINARES",
    identificacion: "V-11126544",
    monto: "6.887,49"
  },
  {
    id: 150,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "137.678,17"
  },
  {
    id: 151,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "109.156,02"
  },
  {
    id: 152,
    cliente: "AGRO COMERCIAL EMILY DE PEDRO LUIS CARRILLO TORRES, F.P",
    identificacion: "V-11315660",
    monto: "21.921,76"
  },
  {
    id: 153,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "3.931,62"
  },
  {
    id: 154,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "179.186,56"
  },
  {
    id: 155,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "8.637,65"
  },
  {
    id: 156,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "21.087,78"
  },
  {
    id: 157,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "18.228,42"
  },
  {
    id: 158,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "1.191,40"
  },
  {
    id: 159,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "3.574,20"
  },
  {
    id: 160,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "11.366,22"
  },
  {
    id: 161,
    cliente: "RENE MIGUEL BARRIOS",
    identificacion: "V-11897501",
    monto: "179,50"
  },
  {
    id: 162,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "2.034,39"
  },
  {
    id: 163,
    cliente: "YORVIN MENDOZA",
    identificacion: "V-27151273",
    monto: "1.196,70"
  },
  {
    id: 164,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "1.376,20"
  },
  {
    id: 165,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "6.866,66"
  },
  {
    id: 166,
    cliente: "CARLOS MORENO",
    identificacion: "V-27557408",
    monto: "15.078,42"
  },
  {
    id: 167,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "18.063,00"
  },
  {
    id: 168,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "9.874,44"
  },
  {
    id: 169,
    cliente: "ROBERTO LEAL",
    identificacion: "V-13523749",
    monto: "4.527,79"
  },
  {
    id: 170,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "24.348,92"
  },
  {
    id: 171,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "30.947,94"
  },
  {
    id: 172,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "433.257,13"
  },
  {
    id: 173,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "23.544,32"
  },
  {
    id: 174,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "7.493,37"
  },
  {
    id: 175,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "1.213,50"
  },
  {
    id: 176,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "3.761,85"
  },
  {
    id: 177,
    cliente: "JUAN BETANCOURT",
    identificacion: "V-13404619",
    monto: "91,01"
  },
  {
    id: 178,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "5.611,22"
  },
  {
    id: 179,
    cliente: "VICTOR VALERO",
    identificacion: "V-13633869",
    monto: "5.096,70"
  },
  {
    id: 180,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "4.259,38"
  },
  {
    id: 181,
    cliente: "YOANDRY AGUILAR",
    identificacion: "V-20402878",
    monto: "11.528,25"
  },
  {
    id: 182,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "1.698,90"
  },
  {
    id: 183,
    cliente: "SANTIAGO BECERRA",
    identificacion: "V-12939656",
    monto: "1.802,05"
  },
  {
    id: 184,
    cliente: "GEOVANNY GODOY",
    identificacion: "V-4917341",
    monto: "3.185,44"
  },
  {
    id: 185,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "16.382,25"
  },
  {
    id: 186,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "17.110,35"
  },
  {
    id: 187,
    cliente: "FREDY VILLARREAL",
    identificacion: "V-17605840",
    monto: "9.345,19"
  },
  {
    id: 188,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "8.070,99"
  },
  {
    id: 189,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "4.218,13"
  },
  {
    id: 190,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "2.002,27"
  },
  {
    id: 191,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "1.563,78"
  },
  {
    id: 192,
    cliente: "ALVEIRO ARIAS",
    identificacion: "V-12493528",
    monto: "12.621,38"
  },
  {
    id: 193,
    cliente: "HENNRY MENDOZA",
    identificacion: "V-16535946",
    monto: "3.206,96"
  },
  {
    id: 194,
    cliente: "YORVIN MENDOZA",
    identificacion: "V-27151273",
    monto: "1.221,70"
  },
  {
    id: 195,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "13.057,53"
  },
  {
    id: 196,
    cliente: "RODRIGO GONZALEZ",
    identificacion: "V-15188475",
    monto: "2.015,82"
  },
  {
    id: 197,
    cliente: "HILDEMARO ALBARRAN",
    identificacion: "V-13950615",
    monto: "3.927,77"
  },
  {
    id: 198,
    cliente: "ROBINSON LINARES",
    identificacion: "V-15752793",
    monto: "9.065,00"
  },
  {
    id: 199,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "22.479,28"
  },
  {
    id: 200,
    cliente: "JOSUE DAVID GARCIA",
    identificacion: "V-18456070",
    monto: "29.687,31"
  },
  {
    id: 201,
    cliente: "ESTEFANIA OCANTO",
    identificacion: "V-24135938",
    monto: "3.298,59"
  },
  {
    id: 202,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "4.334,59"
  },
  {
    id: 203,
    cliente: "JOSE LEAL",
    identificacion: "V-13765837",
    monto: "1.350,01"
  },
  {
    id: 204,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "1.572,35"
  },
  {
    id: 205,
    cliente: "DIMAS VILORIA",
    identificacion: "V-22622216",
    monto: "10.072,88"
  },
  {
    id: 206,
    cliente: "CARINA HERNANDEZ",
    identificacion: "V-14438238",
    monto: "11.532,22"
  },
  {
    id: 207,
    cliente: "JAVIER URBINA",
    identificacion: "V-10908225",
    monto: "7.720,49"
  },
  {
    id: 208,
    cliente: "BENITO RIVERA",
    identificacion: "V-17604571",
    monto: "1.105,56"
  },
  {
    id: 209,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "10.687,08"
  },
  {
    id: 210,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "13.080,00"
  },
  {
    id: 211,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "5.334,94"
  },
  {
    id: 212,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "644,91"
  },
  {
    id: 213,
    cliente: "KEIBER CARRILLO",
    identificacion: "V-27803386",
    monto: "11.915,48"
  },
  {
    id: 214,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "10.072,88"
  },
  {
    id: 215,
    cliente: "JOSE LEONARDO MANRIQUE",
    identificacion: "V-20394084",
    monto: "14.681,07"
  },
  {
    id: 216,
    cliente: "ALVARO VALERO",
    identificacion: "V-5789985",
    monto: "37.123,84"
  },
  {
    id: 217,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "7.803,81"
  },
  {
    id: 218,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "24.555,98"
  },
  {
    id: 219,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "8.547,03"
  },
  {
    id: 220,
    cliente: "CARLOS TORRES",
    identificacion: "V-12458856",
    monto: "4.087,72"
  },
  {
    id: 221,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "58.218,90"
  },
  {
    id: 222,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "1.238,70"
  },
  {
    id: 223,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "10.173,43"
  },
  {
    id: 224,
    cliente: "RAFAEL ZAMBRANO",
    identificacion: "V-3101285",
    monto: "13.006,35"
  },
  {
    id: 225,
    cliente: "FREDY BARVO",
    identificacion: "V-5789799",
    monto: "3.716,10"
  },
  {
    id: 226,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "28.428,18"
  },
  {
    id: 227,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "3.251,59"
  },
  {
    id: 228,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "8.051,55"
  },
  {
    id: 229,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "2.333,72"
  },
  {
    id: 230,
    cliente: "JOSE ALY GONZALEZ",
    identificacion: "V-10909932",
    monto: "33.399,83"
  },
  {
    id: 231,
    cliente: "WILMER GONZALEZ",
    identificacion: "V-15173469",
    monto: "9.525,02"
  },
  {
    id: 232,
    cliente: "OSCAR AVENDAÑO GONZALEZ",
    identificacion: "V-6669374",
    monto: "2.614,71"
  },
  {
    id: 233,
    cliente: "WILLIAN DIAZ",
    identificacion: "V-15043870",
    monto: "1.245,10"
  },
  {
    id: 234,
    cliente: "ROSALIA VILLEGAS",
    identificacion: "V-10035838",
    monto: "12.291,32"
  },
  {
    id: 235,
    cliente: "ISMAEL LINARES",
    identificacion: "V-26094618",
    monto: "18.813,00"
  },
  {
    id: 236,
    cliente: "JOSE OSCAR BECERRA",
    identificacion: "V-31008227",
    monto: "3.762,60"
  },
  {
    id: 237,
    cliente: "JULIAN AZUAJE",
    identificacion: "V-10907821",
    monto: "9.281,08"
  },
  {
    id: 238,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "17.488,54"
  },
  {
    id: 239,
    cliente: "DARWIN RIVAS",
    identificacion: "V-20709114",
    monto: "58.947,40"
  },
  {
    id: 240,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "7.901,48"
  },
  {
    id: 241,
    cliente: "ONESIMO CARRIZO",
    identificacion: "V-11321274",
    monto: "5.894,74"
  },
  {
    id: 242,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "50.605,71"
  },
  {
    id: 243,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "940,65"
  },
  {
    id: 244,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "5.769,32"
  },
  {
    id: 245,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "694,54"
  },
  {
    id: 246,
    cliente: "ALEXANDER VERGARA",
    identificacion: "V-19878078",
    monto: "473,55"
  },
  {
    id: 247,
    cliente: "ANTONIO RUIZ",
    identificacion: "V-9019852",
    monto: "694,54"
  },
  {
    id: 248,
    cliente: "JOSE BARRIOS",
    identificacion: "V-21062415",
    monto: "22.730,40"
  },
  {
    id: 249,
    cliente: "RAMON ATILIO BRICEÑO",
    identificacion: "V-2628497",
    monto: "786,72"
  },
  {
    id: 250,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-10396410",
    monto: "6.566,56"
  },
  {
    id: 251,
    cliente: "CARRIZO VILLEGAS TIBURCIO RAMON",
    identificacion: "V-9168341",
    monto: "2.209,90"
  },
  {
    id: 252,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1.136,52"
  },
  {
    id: 253,
    cliente: "JUAN ANTONIO MOLINA",
    identificacion: "V-15827449",
    monto: "3.559,08"
  },
  {
    id: 254,
    cliente: "JOSE LA CRUZ",
    identificacion: "V-9474807",
    monto: "31.262,70"
  },
  {
    id: 255,
    cliente: "JOSE LA CRUZ",
    identificacion: "V-9474807",
    monto: "1.906,65"
  },
  {
    id: 256,
    cliente: "HOMERO VALECILLOS",
    identificacion: "V-9497304",
    monto: "3.431,97"
  },
  {
    id: 257,
    cliente: "GABRIEL PINEDA",
    identificacion: "V-15216747",
    monto: "95,33"
  },
  {
    id: 258,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "13.219,44"
  },
  {
    id: 259,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "16.516,68"
  },
  {
    id: 260,
    cliente: "GERARDO VILLARREAL",
    identificacion: "V-15751660",
    monto: "10.679,77"
  },
  {
    id: 261,
    cliente: "VICTOR OLIVA",
    identificacion: "V-12041895",
    monto: "6.991,05"
  },
  {
    id: 262,
    cliente: "YORMAN TORRES",
    identificacion: "V-25882114",
    monto: "2.669,31"
  },
  {
    id: 263,
    cliente: "DARWIN DUQUE",
    identificacion: "V-15175794",
    monto: "10.677,24"
  },
  {
    id: 264,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "42.632,06"
  },
  {
    id: 265,
    cliente: "JULIO CESAR CORNELIS",
    identificacion: "V-18350702",
    monto: "33.791,24"
  },
  {
    id: 266,
    cliente: "BENEDICTO VARGAS",
    identificacion: "V-11129787",
    monto: "12.824,00"
  },
  {
    id: 267,
    cliente: "CARINA HERNANDEZ",
    identificacion: "V-14438238",
    monto: "28.868,10"
  },
  {
    id: 268,
    cliente: "FREDY SANCHEZ",
    identificacion: "V-24881352",
    monto: "8.207,36"
  },
  {
    id: 269,
    cliente: "MIGUEL FERNANDEZ",
    identificacion: "V-20708443",
    monto: "2.416,05"
  },
  {
    id: 270,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "4.613,54"
  },
  {
    id: 271,
    cliente: "CARINA HERNANDEZ",
    identificacion: "V-14438238",
    monto: "7.024,19"
  },
  {
    id: 272,
    cliente: "PABLO VILORIA",
    identificacion: "V-9328717",
    monto: "2.129,33"
  },
  {
    id: 273,
    cliente: "JOSE MARIN",
    identificacion: "V-11614377",
    monto: "12.905,00"
  },
  {
    id: 274,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "9.831,03"
  },
  {
    id: 275,
    cliente: "ANGELO VASQUEZ",
    identificacion: "V-29638227",
    monto: "12.905,00"
  },
  {
    id: 276,
    cliente: "EDGAR GOMEZ",
    identificacion: "V-23160178",
    monto: "6.452,50"
  },
  {
    id: 277,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "6.412,49"
  },
  {
    id: 278,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "7.909,48"
  },
  {
    id: 279,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "1.420,00"
  },
  {
    id: 280,
    cliente: "CESAR LOZADA",
    identificacion: "V-15825373",
    monto: "2.150,06"
  },
  {
    id: 281,
    cliente: "ANTONIO GONZALEZ",
    identificacion: "V-17866013",
    monto: "4.739,76"
  },
  {
    id: 282,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "671,16"
  },
  {
    id: 283,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "15.192,17"
  },
  {
    id: 284,
    cliente: "MIGUEL NAVA",
    identificacion: "V-17095654",
    monto: "12.356,65"
  },
  {
    id: 285,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "322,57"
  },
  {
    id: 286,
    cliente: "RUBEN VERGARA",
    identificacion: "V-29539207",
    monto: "3.902,10"
  },
  {
    id: 287,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "6.752,68"
  },
  {
    id: 288,
    cliente: "JHONNI BARRIOS",
    identificacion: "V-17345260",
    monto: "524,48"
  },
  {
    id: 289,
    cliente: "LUIS LINARES",
    identificacion: "V-29814101",
    monto: "5.971,21"
  },
  {
    id: 290,
    cliente: "LUIS LINARES",
    identificacion: "V-29814101",
    monto: "2.884,64"
  },
  {
    id: 291,
    cliente: "JESDUS BARRIOS",
    identificacion: "V-26234850",
    monto: "1.414,78"
  },
  {
    id: 292,
    cliente: "AGROPECUARIA MISISI, C.A",
    identificacion: "J-09021629-4",
    monto: "51.661,28"
  },
  {
    id: 293,
    cliente: "ALVEIRO ARIAS",
    identificacion: "V-12493528",
    monto: "6.162,64"
  },
  {
    id: 294,
    cliente: "ERICK GARCIA",
    identificacion: "V-15583271",
    monto: "1.311,20"
  },
  {
    id: 295,
    cliente: "AGROINSDUSTRIAS E INVERSIONES URBINA ZAMBRANO, C.A",
    identificacion: "J-41206796-6",
    monto: "40.162,05"
  },
  {
    id: 296,
    cliente: "HERMES URBINA",
    identificacion: "V-16739530",
    monto: "12.325,28"
  },
  {
    id: 297,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "458,92"
  },
  {
    id: 298,
    cliente: "CARLOS FLORES",
    identificacion: "V-12040741",
    monto: "4.334,82"
  },
  {
    id: 299,
    cliente: "AGROANDES, C.A",
    identificacion: "J-50049945-0",
    monto: "32.780,00"
  },
  {
    id: 300,
    cliente: "ALBERTO ABREU",
    identificacion: "V-12458482",
    monto: "28.474,02"
  },
  {
    id: 301,
    cliente: "EDUARDO ROMERO",
    identificacion: "V-26616469",
    monto: "30.092,04"
  },
  {
    id: 302,
    cliente: "CESAR RAMIREZ",
    identificacion: "V-10398661",
    monto: "344,85"
  },
  {
    id: 303,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "13.389,96"
  },
  {
    id: 304,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-9495105",
    monto: "13.230,00"
  },
  {
    id: 305,
    cliente: "YORGIS ARAUJO",
    identificacion: "V-20040652",
    monto: "3.585,33"
  },
  {
    id: 306,
    cliente: "CRISTIAN GARCIA",
    identificacion: "V-15952884",
    monto: "5.159,70"
  },
  {
    id: 307,
    cliente: "PEDRO ABREU",
    identificacion: "V-26412772",
    monto: "4.961,25"
  },
  {
    id: 308,
    cliente: "ELOYS CARRILLO",
    identificacion: "V-19813617",
    monto: "59.535,00"
  },
  {
    id: 309,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "13.097,70"
  },
  {
    id: 310,
    cliente: "JOSUE DAVID GARCIA",
    identificacion: "V-18456070",
    monto: "18.051,90"
  },
  {
    id: 311,
    cliente: "EDGAR GOMEZ",
    identificacion: "V-23160178",
    monto: "6.542,48"
  },
  {
    id: 312,
    cliente: "ANTONIO BRICEÑO",
    identificacion: "V-10398687",
    monto: "12.951,44"
  },
  {
    id: 313,
    cliente: "AGROTIENDA WL, C.A",
    identificacion: "J-50317700-4",
    monto: "24.033,60"
  },
  {
    id: 314,
    cliente: "JOSUE DAVID GARCIA",
    identificacion: "V-18456070",
    monto: "50.737,60"
  },
  {
    id: 315,
    cliente: "ANGEL ABREU",
    identificacion: "V-11897076",
    monto: "5.247,34"
  },
  {
    id: 316,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "4.713,26"
  },
  {
    id: 317,
    cliente: "COMERCIALIZADORA LAS MERCEDES",
    identificacion: "J-50091847-0",
    monto: "7.343,60"
  },
  {
    id: 318,
    cliente: "FRANCISCO GONZALEZ CRUZ",
    identificacion: "V-2807389",
    monto: "1.468,72"
  },
  {
    id: 319,
    cliente: "JOSE AGUSTIN VILLARREAL",
    identificacion: "V-9168273",
    monto: "1.026,77"
  },
  {
    id: 320,
    cliente: "GUSTAVO LOPEZ",
    identificacion: "V-17267496",
    monto: "3.605,04"
  },
  {
    id: 321,
    cliente: "HOMERO VALECILLOS",
    identificacion: "V-9497304",
    monto: "3.605,04"
  },
  {
    id: 322,
    cliente: "VICTOR OLIVA",
    identificacion: "V-12041895",
    monto: "7.396,40"
  },
  {
    id: 323,
    cliente: "JULIO CESAR CORNELIS",
    identificacion: "V-18350702",
    monto: "7.127,44"
  },
  {
    id: 324,
    cliente: "JULIO CESAR RANGEL GUERRA",
    identificacion: "V-9005347",
    monto: "699,30"
  },
  {
    id: 325,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "13.448,00"
  },
  {
    id: 326,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "136.577,88"
  },
  {
    id: 327,
    cliente: "JOEL GONZALEZ",
    identificacion: "V-15430562",
    monto: "1.210,32"
  },
  {
    id: 328,
    cliente: "ALIRIO GODOY",
    identificacion: "V-11612803",
    monto: "26.223,60"
  },
  {
    id: 329,
    cliente: "MARCOS PEÑA",
    identificacion: "V-17036015",
    monto: "941,36"
  },
  {
    id: 330,
    cliente: "MARCOS PEÑA",
    identificacion: "V-17036015",
    monto: "1.613,76"
  },
  {
    id: 331,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "4.215,95"
  },
  {
    id: 332,
    cliente: "MIGUEL VILLARTEAL",
    identificacion: "V-27415742",
    monto: "7.396,40"
  },
  {
    id: 333,
    cliente: "ALCALDIA DEL MUNICIPIO MIRANDA",
    identificacion: "G-20000603-0",
    monto: "16.339,32"
  },
  {
    id: 334,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "23.621,41"
  },
  {
    id: 335,
    cliente: "CARLOS VILLEGA",
    identificacion: "V-14800500",
    monto: "3.630,96"
  },
  {
    id: 336,
    cliente: "AGROPECUARIA LA GALERA JAJO",
    identificacion: "J-50322840-7",
    monto: "2.880,57"
  },
  {
    id: 337,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "6.992,96"
  },
  {
    id: 338,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "4.674,52"
  },
  {
    id: 339,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "5.675,18"
  },
  {
    id: 340,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "4.484,26"
  },
  {
    id: 341,
    cliente: "WALTER VALERA",
    identificacion: "V-20401137",
    monto: "718,89"
  },
  {
    id: 342,
    cliente: "TOMAS GONZALEZ ARAUJO",
    identificacion: "V-5356967",
    monto: "2.984,08"
  },
  {
    id: 343,
    cliente: "ERICK GARCIA",
    identificacion: "V-15583271",
    monto: "746,02"
  },
  {
    id: 344,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "7.053,28"
  },
  {
    id: 345,
    cliente: "CIRILO TORO",
    identificacion: "V-14983761",
    monto: "2.124,12"
  },
  {
    id: 346,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "12.885,80"
  },
  {
    id: 347,
    cliente: "CARMEN RODRIGUEZ",
    identificacion: "V-9166628",
    monto: "203,46"
  },
  {
    id: 348,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "508,65"
  },
  {
    id: 349,
    cliente: "MELI PEREZ",
    identificacion: "V-30258737",
    monto: "4.062,42"
  },
  {
    id: 350,
    cliente: "KEIBER CARRILLO",
    identificacion: "V-27803386",
    monto: "18.447,04"
  },
  {
    id: 351,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "2.712,80"
  },
  {
    id: 352,
    cliente: "MARCO VALERA",
    identificacion: "V-16014730",
    monto: "21.233,09"
  },
  {
    id: 353,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "12.207,60"
  },
  {
    id: 354,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "12.017,70"
  },
  {
    id: 355,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "2.524,26"
  },
  {
    id: 356,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "1.846,06"
  },
  {
    id: 357,
    cliente: "XAVIER VILORIA",
    identificacion: "V-2500590",
    monto: "1.232,01"
  },
  {
    id: 358,
    cliente: "XAVIER VILORIA",
    identificacion: "V-2500590",
    monto: "977,39"
  },
  {
    id: 359,
    cliente: "JESUS ALCON",
    identificacion: "V-24785087",
    monto: "1.683,75"
  },
  {
    id: 360,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "7.055,31"
  },
  {
    id: 361,
    cliente: "GENESIS BARRUETA",
    identificacion: "V-25681444",
    monto: "13.004,55"
  },
  {
    id: 362,
    cliente: "JONATHAN CASTRO",
    identificacion: "V-27022275",
    monto: "20.944,16"
  },
  {
    id: 363,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "4.195,68"
  },
  {
    id: 364,
    cliente: "KATRLI BENITEZ",
    identificacion: "V-23775098",
    monto: "13.689,00"
  },
  {
    id: 365,
    cliente: "RICARDO MORILLO",
    identificacion: "V-13461542",
    monto: "4.132,70"
  },
  {
    id: 366,
    cliente: "ALFREDO VIELMA",
    identificacion: "V-18350334",
    monto: "1.232,01"
  },
  {
    id: 367,
    cliente: "RAIZA ARGUELLO",
    identificacion: "V-8696785",
    monto: "2.262,79"
  },
  {
    id: 368,
    cliente: "GREGORIO BRICEÑO",
    identificacion: "V-20038733",
    monto: "6.106,66"
  },
  {
    id: 369,
    cliente: "JOSE VILLEGGAS",
    identificacion: "V-10397610",
    monto: "1.505,78"
  },
  {
    id: 370,
    cliente: "LUIS GUILLEN",
    identificacion: "V-12906634",
    monto: "2.464,02"
  },
  {
    id: 371,
    cliente: "MIGUEL VILLARTEAL",
    identificacion: "V-27415742",
    monto: "7.528,95"
  },
  {
    id: 372,
    cliente: "LISARDO REINALDO",
    identificacion: "V-10317335",
    monto: "54.756,00"
  },
  {
    id: 373,
    cliente: "WILMER REA",
    identificacion: "V-17830867",
    monto: "8.303,75"
  },
  {
    id: 374,
    cliente: "CARLOS NUÑEZ",
    identificacion: "V-15705544",
    monto: "3.821,97"
  },
  {
    id: 375,
    cliente: "MANUEL ARAUJO",
    identificacion: "V-11320945",
    monto: "10.266,75"
  },
  {
    id: 376,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "19.542,44"
  },
  {
    id: 377,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "13.372,78"
  },
  {
    id: 378,
    cliente: "MARTINA ARAUJO",
    identificacion: "V-10398399",
    monto: "26.343,11"
  },
  {
    id: 379,
    cliente: "ROSMEL ALIRIO VERDI",
    identificacion: "V-16317267",
    monto: "22.929,05"
  },
  {
    id: 380,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "6.707,61"
  },
  {
    id: 381,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "2.395,57"
  },
  {
    id: 382,
    cliente: "TOMAS GONZALEZ ARAUJO",
    identificacion: "V-5356967",
    monto: "5.044,40"
  },
  {
    id: 383,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "19.197,44"
  },
  {
    id: 384,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "9.931,35"
  },
  {
    id: 385,
    cliente: "ANTONI PARRA",
    identificacion: "V-18097722",
    monto: "1.642,68"
  },
  {
    id: 386,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "2.333,97"
  },
  {
    id: 387,
    cliente: "LUIS PEREZ",
    identificacion: "V-26482802",
    monto: "479,11"
  },
  {
    id: 388,
    cliente: "ERICH QUINTERO",
    identificacion: "V-18734380",
    monto: "14.373,45"
  },
  {
    id: 389,
    cliente: "ALEJANDRO ESPINOZA",
    identificacion: "V-31413628",
    monto: "13.689,00"
  },
  {
    id: 390,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "17.925,72"
  },
  {
    id: 391,
    cliente: "ALIGDO DUGARTE",
    identificacion: "V-19898514",
    monto: "22.799,03"
  },
  {
    id: 392,
    cliente: "JONNY ESTRADA",
    identificacion: "V-8717747",
    monto: "10.951,20"
  },
  {
    id: 393,
    cliente: "JONNY ESTRADA",
    identificacion: "V-8717747",
    monto: "205,33"
  },
  {
    id: 394,
    cliente: "RAMON ANTONIO CEGARRA PERDOMO",
    identificacion: "V-9313546",
    monto: "103,60"
  },
  {
    id: 395,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "14.918,04"
  },
  {
    id: 396,
    cliente: "KEIBER PACHECO",
    identificacion: "V-23837822",
    monto: "15.194,30"
  },
  {
    id: 397,
    cliente: "RAFAEL ISIDRO RIVAS",
    identificacion: "V-10909163",
    monto: "2.051,23"
  },
  {
    id: 398,
    cliente: "EDGAR GOMEZ",
    identificacion: "V-23160178",
    monto: "1.453,13"
  },
  {
    id: 399,
    cliente: "JOSE RIVAS",
    identificacion: "V-24565902",
    monto: "2.486,34"
  },
  {
    id: 400,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "1.243,17"
  },
  {
    id: 401,
    cliente: "FREDY VILLARREAL",
    identificacion: "V-17605840",
    monto: "5.874,70"
  },
  {
    id: 402,
    cliente: "PORFIDIO AVILA",
    identificacion: "V-17832693",
    monto: "26.244,70"
  },
  {
    id: 403,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "8.011,54"
  },
  {
    id: 404,
    cliente: "EDOXON ABREU",
    identificacion: "V-18348138",
    monto: "2.910,68"
  },
  {
    id: 405,
    cliente: "HENRY LUQUE",
    identificacion: "V-11316971",
    monto: "0,00"
  },
  {
    id: 406,
    cliente: "GERARDO ARAUJO",
    identificacion: "V-13404398",
    monto: "10.577,67"
  },
  {
    id: 407,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "2.065,91"
  },
  {
    id: 408,
    cliente: "JOSE LEONARDO MANRIQUE",
    identificacion: "V-20394084",
    monto: "11.520,04"
  },
  {
    id: 409,
    cliente: "LUIS MANUEL DELGADO",
    identificacion: "V-11617074",
    monto: "3.721,98"
  },
  {
    id: 410,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "32.759,00"
  },
  {
    id: 411,
    cliente: "INVERSIONES FERREDIAL, F.P DE CESAR MONTILLA",
    identificacion: "V-11953188",
    monto: "2.744,79"
  },
  {
    id: 412,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "6.586,65"
  },
  {
    id: 413,
    cliente: "DAIRIMAR RANGEL",
    identificacion: "V-30380264",
    monto: "1.533,40"
  },
  {
    id: 414,
    cliente: "ZULEIDI CASTELLANOS",
    identificacion: "V-31368996",
    monto: "1.184,90"
  },
  {
    id: 415,
    cliente: "AGROPECUARIA LA GALERA JAJO",
    identificacion: "J-50322840-7",
    monto: "19.746,00"
  },
  {
    id: 416,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-23782522",
    monto: "2.300,10"
  },
  {
    id: 417,
    cliente: "ALEXIS RODRIGUEZ",
    identificacion: "V-13404600",
    monto: "1.951,60"
  },
  {
    id: 418,
    cliente: "DEIVI TERAN",
    identificacion: "V-19147552",
    monto: "67.516,80"
  },
  {
    id: 419,
    cliente: "GUSTAVO MENDOZA",
    identificacion: "V-10396041",
    monto: "843,96"
  },
  {
    id: 420,
    cliente: "REINALDO MORENO",
    identificacion: "V-16882671",
    monto: "15.472,60"
  },
  {
    id: 421,
    cliente: "VICTOR VALECILLOS",
    identificacion: "V-23778693",
    monto: "4.641,78"
  },
  {
    id: 422,
    cliente: "GREGORY SANCHEZ",
    identificacion: "V-25832834",
    monto: "2.444,67"
  },
  {
    id: 423,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "13.451,32"
  },
  {
    id: 424,
    cliente: "ANGELO SANTIAGO",
    identificacion: "V-20707436",
    monto: "1.969,24"
  },
  {
    id: 425,
    cliente: "GERGORIO PLAZA",
    identificacion: "V-10912270",
    monto: "1.631,62"
  },
  {
    id: 426,
    cliente: "RONY HERNANDEZ",
    identificacion: "V-13741063",
    monto: "2.837,60"
  },
  {
    id: 427,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "28.376,00"
  },
  {
    id: 428,
    cliente: "RONY HERNANDEZ",
    identificacion: "V-13741063",
    monto: "1.447,18"
  },
  {
    id: 429,
    cliente: "PRADO SANTIAGO",
    identificacion: "V-10914386",
    monto: "3.481,74"
  },
  {
    id: 430,
    cliente: "GUSTAVO DOMINGUEZ",
    identificacion: "V-5769404",
    monto: "29.794,80"
  },
  {
    id: 431,
    cliente: "ALFREDO PAREDES",
    identificacion: "V-14459756",
    monto: "4.321,67"
  },
  {
    id: 432,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "13.689,00"
  },
  {
    id: 433,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "14.188,00"
  },
  {
    id: 434,
    cliente: "LUIS MATEUS",
    identificacion: "V-12907466",
    monto: "23.664,16"
  },
  {
    id: 435,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "780,34"
  },
  {
    id: 436,
    cliente: "ALBERT ROMERO",
    identificacion: "V-27363645",
    monto: "2.829,09"
  },
  {
    id: 437,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "38.307,60"
  },
  {
    id: 438,
    cliente: "JAVIER MONTILLA",
    identificacion: "V-18472353",
    monto: "8.666,04"
  },
  {
    id: 439,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-10396410",
    monto: "2.979,48"
  },
  {
    id: 440,
    cliente: "BERNI ANDRADE",
    identificacion: "V-19148954",
    monto: "2.979,48"
  },
  {
    id: 441,
    cliente: "CARMEN BARRIOS",
    identificacion: "V-15752465",
    monto: "851,28"
  },
  {
    id: 442,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "12.306,67"
  },
  {
    id: 443,
    cliente: "JESUS RAMIREZ",
    identificacion: "V-12040799",
    monto: "4.540,16"
  },
  {
    id: 444,
    cliente: "JOSE URDANETA",
    identificacion: "V-17598550",
    monto: "4.690,56"
  },
  {
    id: 445,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "4.977,15"
  },
  {
    id: 446,
    cliente: "VICTOR OLIVA",
    identificacion: "V-12041895",
    monto: "4.005,12"
  },
  {
    id: 447,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "1.693,59"
  },
  {
    id: 448,
    cliente: "FRANCIBELGARCIA",
    identificacion: "V-17605900",
    monto: "3.862,08"
  },
  {
    id: 449,
    cliente: "RAMON ARAUJO",
    identificacion: "V-9329736",
    monto: "41.624,64"
  },
  {
    id: 450,
    cliente: "DANIEL CASTELLANOS",
    identificacion: "V-25822441",
    monto: "2.238,58"
  },
  {
    id: 451,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "3.581,72"
  },
  {
    id: 452,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "16.073,41"
  },
  {
    id: 453,
    cliente: "JULIO BARRIOS",
    identificacion: "V-13049383",
    monto: "23.315,52"
  },
  {
    id: 454,
    cliente: "JORGE FIGUEROA",
    identificacion: "V-23478125",
    monto: "75.811,20"
  },
  {
    id: 455,
    cliente: "YOVANNY DSANTIAGO",
    identificacion: "V-16275929",
    monto: "4.248,28"
  },
  {
    id: 456,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "1.504,78"
  },
  {
    id: 457,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "17.164,80"
  },
  {
    id: 458,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "17.164,80"
  },
  {
    id: 459,
    cliente: "COMERCIALIZADORA EL MOVIMIENTO F.P DE DANIEL SEGOVIA",
    identificacion: "V-15337820",
    monto: "21.456,00"
  },
  {
    id: 460,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "12.508,20"
  },
  {
    id: 461,
    cliente: "WUENDER DOMINGUEZ",
    identificacion: "V-26114033",
    monto: "7.938,90"
  },
  {
    id: 462,
    cliente: "MIGUEL LOPÈZ",
    identificacion: "V-11798331",
    monto: "433,12"
  },
  {
    id: 463,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "27.593,44"
  },
  {
    id: 464,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "12.993,30"
  },
  {
    id: 465,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "1.518,77"
  },
  {
    id: 466,
    cliente: "OSCAR TIMAURE",
    identificacion: "V-15407001",
    monto: "26.751,80"
  },
  {
    id: 467,
    cliente: "NILSON ARISMENDI",
    identificacion: "V-15952697",
    monto: "1.443,70"
  },
  {
    id: 468,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "27.167,54"
  },
  {
    id: 469,
    cliente: "HARRY TELLES",
    identificacion: "V-16267632",
    monto: "649,66"
  },
  {
    id: 470,
    cliente: "JOSE VALERO",
    identificacion: "V-12042036",
    monto: "433,12"
  },
  {
    id: 471,
    cliente: "ANDREA MORENO",
    identificacion: "V-28206746",
    monto: "1.443,70"
  },
  {
    id: 472,
    cliente: "LUIS MANUEL DELGADO",
    identificacion: "V-11617074",
    monto: "0,00"
  },
  {
    id: 473,
    cliente: "FRANK DOERSCHILAG",
    identificacion: "V-14459719",
    monto: "2.630,42"
  },
  {
    id: 474,
    cliente: "JOSE CRISTOBASL UZCATEGUI",
    identificacion: "V-14310798",
    monto: "6.551,52"
  },
  {
    id: 475,
    cliente: "RONAL CARRILLO",
    identificacion: "V-25643232",
    monto: "27.285,93"
  },
  {
    id: 476,
    cliente: "JOSE VALERO",
    identificacion: "V-12042036",
    monto: "7.724,75"
  },
  {
    id: 477,
    cliente: "MAGALI SALAS",
    identificacion: "V-11324349",
    monto: "1.676,13"
  },
  {
    id: 478,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "17.128,20"
  },
  {
    id: 479,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1.894,75"
  },
  {
    id: 480,
    cliente: "LUIS ALFREDO CALDERA",
    identificacion: "V-5778930",
    monto: "3.732,66"
  },
  {
    id: 481,
    cliente: "ELVIA BECERRA",
    identificacion: "V-11317030",
    monto: "1.093,14"
  },
  {
    id: 482,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "1.603,25"
  },
  {
    id: 483,
    cliente: "DANIEL ANDRADE",
    identificacion: "V-18734234",
    monto: "8.162,00"
  },
  {
    id: 484,
    cliente: "JOSE BRICEÑO",
    identificacion: "V-12905969",
    monto: "4.561,98"
  },
  {
    id: 485,
    cliente: "FELIPE PEREZ",
    identificacion: "V-26412594",
    monto: "9.270,45"
  },
  {
    id: 486,
    cliente: "CARLOS VALERA",
    identificacion: "V-11613963",
    monto: "7.501,08"
  },
  {
    id: 487,
    cliente: "JOSE MORENO",
    identificacion: "V-13041839",
    monto: "2.426,82"
  },
  {
    id: 488,
    cliente: "JULIO CESAR RANGEL GUERRA",
    identificacion: "V-9005347",
    monto: "2.426,82"
  },
  {
    id: 489,
    cliente: "JOSE GONZALEZ",
    identificacion: "V-18097715",
    monto: "5.147,80"
  },
  {
    id: 490,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "3.382,84"
  },
  {
    id: 491,
    cliente: "MARIA ROMERO",
    identificacion: "V-18350262",
    monto: "8.295,32"
  },
  {
    id: 492,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "12.316,48"
  },
  {
    id: 493,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "8.312,64"
  },
  {
    id: 494,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "5.343,84"
  },
  {
    id: 495,
    cliente: "WILFREDO BARRETO",
    identificacion: "V-16276547",
    monto: "17.664,36"
  },
  {
    id: 496,
    cliente: "ROGELIO TORRES",
    identificacion: "V-5787530",
    monto: "1.110,33"
  },
  {
    id: 497,
    cliente: "MARCOS PEÑA",
    identificacion: "V-17036015",
    monto: "5.343,84"
  },
  {
    id: 498,
    cliente: "VICTOR OLIVA",
    identificacion: "V-12041895",
    monto: "2.732,78"
  },
  {
    id: 499,
    cliente: "JORGE FRANCO",
    identificacion: "V-15216958",
    monto: "20.707,38"
  },
  {
    id: 500,
    cliente: "LISARDO REINALDO",
    identificacion: "V-10317335",
    monto: "14.844,00"
  },
  {
    id: 501,
    cliente: "MARCOS LINARES",
    identificacion: "V-18378827",
    monto: "17.377,86"
  },
  {
    id: 502,
    cliente: "AURELIO GONZALEZ",
    identificacion: "V-12905462",
    monto: "890,64"
  },
  {
    id: 503,
    cliente: "ROSALINO VILLA",
    identificacion: "V-4317880",
    monto: "7.570,44"
  },
  {
    id: 504,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "31.172,40"
  },
  {
    id: 505,
    cliente: "CARLOS LINARES",
    identificacion: "V-12042776",
    monto: "556,65"
  },
  {
    id: 506,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "20.781,60"
  },
  {
    id: 507,
    cliente: "VICTOR OLIVA",
    identificacion: "V-12041895",
    monto: "3.886,20"
  },
  {
    id: 508,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "37.005,79"
  },
  {
    id: 509,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "4.035,69"
  },
  {
    id: 510,
    cliente: "ALIMPRO C.A",
    identificacion: "J-50025568",
    monto: "16.268,31"
  },
  {
    id: 511,
    cliente: "RAFAEL PAREDES",
    identificacion: "V-11128347",
    monto: "777,24"
  },
  {
    id: 512,
    cliente: "JOSE LEAL",
    identificacion: "V-13765837",
    monto: "7.174,56"
  },
  {
    id: 513,
    cliente: "JESUS BARRETO",
    identificacion: "V-19427386",
    monto: "11.957,60"
  },
  {
    id: 514,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "13.462,76"
  },
  {
    id: 515,
    cliente: "LUIS RIVERO",
    identificacion: "V-5792701",
    monto: "5.156,70"
  },
  {
    id: 516,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "34.058,23"
  },
  {
    id: 517,
    cliente: "ANGEL ABREU",
    identificacion: "V-11897076",
    monto: "2.073,50"
  },
  {
    id: 518,
    cliente: "LUISA DE MEO",
    identificacion: "V-14310516",
    monto: "15.080,00"
  },
  {
    id: 519,
    cliente: "MANUEL ROSARIO",
    identificacion: "V-4318390",
    monto: "14.326,00"
  },
  {
    id: 520,
    cliente: "JORGE BASTIDAS",
    identificacion: "V-26784498",
    monto: "4.071,60"
  },
  {
    id: 521,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "13.263,84"
  },
  {
    id: 522,
    cliente: "JOSE BALZA",
    identificacion: "V-23778848",
    monto: "1.745,24"
  },
  {
    id: 523,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "13.571,90"
  },
  {
    id: 524,
    cliente: "YORBIS GODOY",
    identificacion: "V-16275005",
    monto: "14.417,20"
  },
  {
    id: 525,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "2.353,80"
  },
  {
    id: 526,
    cliente: "ANDREA GARCIA",
    identificacion: "V-23755327",
    monto: "19.121,76"
  },
  {
    id: 527,
    cliente: "ANDREA GARCIA",
    identificacion: "V-23755327",
    monto: "8.457,59"
  },
  {
    id: 528,
    cliente: "JOSE BENITO VILLARREAL",
    identificacion: "V-11894447",
    monto: "2.504,04"
  },
  {
    id: 529,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "18.030,61"
  },
  {
    id: 530,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "2.579,92"
  },
  {
    id: 531,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "12.899,60"
  },
  {
    id: 532,
    cliente: "ANDREA GARCIA",
    identificacion: "V-23755327",
    monto: "19.121,76"
  },
  {
    id: 533,
    cliente: "ANDREA GARCIA",
    identificacion: "V-23755327",
    monto: "0,00"
  },
  {
    id: 534,
    cliente: "JOSE VALERO",
    identificacion: "V-12042036",
    monto: "1.833,84"
  },
  {
    id: 535,
    cliente: "YONNY MONTILLA",
    identificacion: "V-19271166",
    monto: "21.547,62"
  },
  {
    id: 536,
    cliente: "FRANKLIN CASTELLANOS",
    identificacion: "V-12047714",
    monto: "916,92"
  },
  {
    id: 537,
    cliente: "ALBERTO ABREU",
    identificacion: "V-12458482",
    monto: "8.988,88"
  },
  {
    id: 538,
    cliente: "ROSALINO VILLA",
    identificacion: "V-4317880",
    monto: "15.282,00"
  },
  {
    id: 539,
    cliente: "NESTOR GIL",
    identificacion: "V-5789268",
    monto: "35.197,50"
  },
  {
    id: 540,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "28.531,49"
  },
  {
    id: 541,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "3.056,40"
  },
  {
    id: 542,
    cliente: "MARCO VALERA",
    identificacion: "V-16014730",
    monto: "5.759,79"
  },
  {
    id: 543,
    cliente: "ELYS ANDRADE",
    identificacion: "V-14391781",
    monto: "6.858,56"
  },
  {
    id: 544,
    cliente: "OSCAR MOLINA",
    identificacion: "V-15826771",
    monto: "2.597,94"
  },
  {
    id: 545,
    cliente: "MARCELO BRICEÑO",
    identificacion: "V-14929407",
    monto: "4.346,20"
  },
  {
    id: 546,
    cliente: "ORACIO ARAUJO",
    identificacion: "V-17391045",
    monto: "4.584,60"
  },
  {
    id: 547,
    cliente: "YORGIS ARAUJO",
    identificacion: "V-20040652",
    monto: "4.786,32"
  },
  {
    id: 548,
    cliente: "NESTOR HERNANDEZ",
    identificacion: "V-16065084",
    monto: "2.541,15"
  },
  {
    id: 549,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "924,06"
  },
  {
    id: 550,
    cliente: "MIGUEL NAVA",
    identificacion: "V-17095654",
    monto: "14.630,95"
  },
  {
    id: 551,
    cliente: "ALEXIS VILORIA",
    identificacion: "V-14982970",
    monto: "5.159,33"
  },
  {
    id: 552,
    cliente: "ANDERSON GONZALEZ",
    identificacion: "V-23777351",
    monto: "1.848,12"
  },
  {
    id: 553,
    cliente: "JAVIER MORENO",
    identificacion: "V-16882672",
    monto: "40.042,60"
  },
  {
    id: 554,
    cliente: "JORGE FIGUEROA",
    identificacion: "V-23478125",
    monto: "32.342,10"
  },
  {
    id: 555,
    cliente: "RAMON BRICEÑO",
    identificacion: "V-13050717",
    monto: "14.667,91"
  },
  {
    id: 556,
    cliente: "ELVIS CARRILLO",
    identificacion: "V-29718068",
    monto: "3.234,21"
  },
  {
    id: 557,
    cliente: "FRANKLIN CASTELLANOS",
    identificacion: "V-12047714",
    monto: "5.236,34"
  },
  {
    id: 558,
    cliente: "ALEXIS PEÑA",
    identificacion: "V-30535580",
    monto: "4.158,27"
  },
  {
    id: 559,
    cliente: "MARIA ARAUJO",
    identificacion: "V-10399443",
    monto: "8.445,91"
  },
  {
    id: 560,
    cliente: "JUAN CARLOS BRICEÑO",
    identificacion: "V-16738776",
    monto: "4.158,27"
  },
  {
    id: 561,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "15.401,00"
  },
  {
    id: 562,
    cliente: "BENJAMIN ZAPATA",
    identificacion: "V-18441607",
    monto: "5.284,09"
  },
  {
    id: 563,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "2.368,68"
  },
  {
    id: 564,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "1.184,34"
  },
  {
    id: 565,
    cliente: "DIMAS VILORIA",
    identificacion: "V-22622216",
    monto: "3.080,20"
  },
  {
    id: 566,
    cliente: "JOSE GODOY",
    identificacion: "V-11895716",
    monto: "16.017,04"
  },
  {
    id: 567,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "28.719,34"
  },
  {
    id: 568,
    cliente: "MARCOS PEÑA",
    identificacion: "V-17036015",
    monto: "2.557,17"
  },
  {
    id: 569,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "18.451,91"
  },
  {
    id: 570,
    cliente: "MARILU AZUAJE",
    identificacion: "V-10913956",
    monto: "116,23"
  },
  {
    id: 571,
    cliente: "LUIS ALFREDO CALDERA",
    identificacion: "V-5778930",
    monto: "5.346,81"
  },
  {
    id: 572,
    cliente: "FAUSTINIANO QUINTERO",
    identificacion: "V-11896872",
    monto: "2.780,34"
  },
  {
    id: 573,
    cliente: "STARLY TERAN",
    identificacion: "V-20400546",
    monto: "15.807,96"
  },
  {
    id: 574,
    cliente: "CARLOS FLORES",
    identificacion: "V-12040741",
    monto: "23.247,00"
  },
  {
    id: 575,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "23.247,00"
  },
  {
    id: 576,
    cliente: "LUIS VERA",
    identificacion: "V-14149174",
    monto: "1.876,44"
  },
  {
    id: 577,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "15.637,00"
  },
  {
    id: 578,
    cliente: "JEAN CARLOS VARGAS",
    identificacion: "V-15943615",
    monto: "16.262,48"
  },
  {
    id: 579,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "781,85"
  },
  {
    id: 580,
    cliente: "JOSE TORO",
    identificacion: "V-24882620",
    monto: "5.316,58"
  },
  {
    id: 581,
    cliente: "GUSTAVO DOMINGUEZ",
    identificacion: "V-5769404",
    monto: "18.764,40"
  },
  {
    id: 582,
    cliente: "JHONY RUIZ",
    identificacion: "V-15293420",
    monto: "2.322,09"
  },
  {
    id: 583,
    cliente: "TERESA DE LINARES",
    identificacion: "V-9681481",
    monto: "2.971,04"
  },
  {
    id: 584,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "5.887,33"
  },
  {
    id: 585,
    cliente: "VICENTE MORENO",
    identificacion: "V-9001241",
    monto: "2.580,12"
  },
  {
    id: 586,
    cliente: "GUILLERMO CAÑIZALES",
    identificacion: "V-5756079",
    monto: "18.646,84"
  },
  {
    id: 587,
    cliente: "JORGE FRANCO",
    identificacion: "V-15216958",
    monto: "3.548,90"
  },
  {
    id: 588,
    cliente: "JUAN NIEVES",
    identificacion: "V-11610593",
    monto: "15.773,00"
  },
  {
    id: 589,
    cliente: "EDUARD GUERRA",
    identificacion: "V-27022695",
    monto: "3.154,60"
  },
  {
    id: 590,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "7.436,94"
  },
  {
    id: 591,
    cliente: "JESUS VILORIA",
    identificacion: "V-11196696",
    monto: "276,03"
  },
  {
    id: 592,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "2.681,41"
  },
  {
    id: 593,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "5.801,31"
  },
  {
    id: 594,
    cliente: "CARRIZO VILLEGAS TIBURCIO RAMON",
    identificacion: "V-9168341",
    monto: "1.577,30"
  },
  {
    id: 595,
    cliente: "JUAN GODOY",
    identificacion: "V-23596761",
    monto: "9.435,42"
  },
  {
    id: 596,
    cliente: "HARRY TELLES",
    identificacion: "V-16267632",
    monto: "709,78"
  },
  {
    id: 597,
    cliente: "JAVIER ANDRADE",
    identificacion: "V-13405211",
    monto: "9.306,07"
  },
  {
    id: 598,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "2.916,36"
  },
  {
    id: 599,
    cliente: "GRACIANO BASTIDAS",
    identificacion: "V-2615192",
    monto: "1.271,44"
  },
  {
    id: 600,
    cliente: "LUIS ARAUJO",
    identificacion: "V-9081923",
    monto: "1.589,30"
  },
  {
    id: 601,
    cliente: "ELIO GONZALEZ",
    identificacion: "V-26235818",
    monto: "34.169,95"
  },
  {
    id: 602,
    cliente: "MANUEL BARRUETA",
    identificacion: "V-27268126",
    monto: "855,04"
  },
  {
    id: 603,
    cliente: "JOSE PORTILLO",
    identificacion: "V-14983431",
    monto: "3.445,60"
  },
  {
    id: 604,
    cliente: "JOSE PORTILLO",
    identificacion: "V-14983431",
    monto: "4.351,50"
  },
  {
    id: 605,
    cliente: "JOSE RIVAS",
    identificacion: "V-24565902",
    monto: "826,44"
  },
  {
    id: 606,
    cliente: "JUAN ARAUJO",
    identificacion: "V-18458359",
    monto: "3.629,96"
  },
  {
    id: 607,
    cliente: "ANGEL GODOY",
    identificacion: "V-9325662",
    monto: "17.911,40"
  },
  {
    id: 608,
    cliente: "DANI HERNANDEZ",
    identificacion: "V-18734829",
    monto: "15.098,35"
  },
  {
    id: 609,
    cliente: "ELVIS ARAUJO",
    identificacion: "V-18985523",
    monto: "15.098,35"
  },
  {
    id: 610,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "2.923,40"
  },
  {
    id: 611,
    cliente: "HUMBERTO VERGARA",
    identificacion: "V-20134476",
    monto: "2.382,68"
  },
  {
    id: 612,
    cliente: "ALEXIS BRICEÑO",
    identificacion: "V-13523910",
    monto: "962,70"
  },
  {
    id: 613,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "5.204,99"
  },
  {
    id: 614,
    cliente: "ROXANA ARAUJO",
    identificacion: "V-22892331",
    monto: "7.152,86"
  },
  {
    id: 615,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "16.550,41"
  },
  {
    id: 616,
    cliente: "GABRIEL BRICEÑO",
    identificacion: "V-18096958",
    monto: "3.561,99"
  },
  {
    id: 617,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "4.813,50"
  },
  {
    id: 618,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "2.467,72"
  },
  {
    id: 619,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "12.069,05"
  },
  {
    id: 620,
    cliente: "ROXANA ARAUJO",
    identificacion: "V-22892331",
    monto: "3.181,72"
  },
  {
    id: 621,
    cliente: "PEDRO RODRIGUEZ",
    identificacion: "V-10910965",
    monto: "1.925,40"
  },
  {
    id: 622,
    cliente: "REGULO SANTIAGO",
    identificacion: "V-5779961",
    monto: "15.242,75"
  },
  {
    id: 623,
    cliente: "BENEDICTO VARGAS",
    identificacion: "V-11129787",
    monto: "8.022,50"
  },
  {
    id: 624,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "2.888,10"
  },
  {
    id: 625,
    cliente: "WALTER VALERA",
    identificacion: "V-20401137",
    monto: "23.132,07"
  },
  {
    id: 626,
    cliente: "LUIS ARAUJO",
    identificacion: "V-9081923",
    monto: "1.123,15"
  },
  {
    id: 627,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "86.651,02"
  },
  {
    id: 628,
    cliente: "ARMANDO CASTELLANOS",
    identificacion: "V-9000738",
    monto: "1.283,60"
  },
  {
    id: 629,
    cliente: "FAUSTINIANO QUINTERO",
    identificacion: "V-11896872",
    monto: "641,80"
  },
  {
    id: 630,
    cliente: "ERWIN MALDONADO",
    identificacion: "V-18458645",
    monto: "962,70"
  },
  {
    id: 631,
    cliente: "RAMON VERGARA",
    identificacion: "V-15709608",
    monto: "7.629,39"
  },
  {
    id: 632,
    cliente: "GREGORIA CAÑIZALEZ",
    identificacion: "V-12907032",
    monto: "18.119,62"
  },
  {
    id: 633,
    cliente: "ADALBERTO DOMINGUEZ",
    identificacion: "V-15407268",
    monto: "3.369,45"
  },
  {
    id: 634,
    cliente: "ISRAEL PEÑA",
    identificacion: "V-23252947",
    monto: "6.137,21"
  },
  {
    id: 635,
    cliente: "LUIS VILLA",
    identificacion: "V-14928941",
    monto: "882,47"
  },
  {
    id: 636,
    cliente: "RODRIGO GONZALEZ",
    identificacion: "V-15188475",
    monto: "2.998,80"
  },
  {
    id: 637,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "1.123,14"
  },
  {
    id: 638,
    cliente: "LUIS MATEUS",
    identificacion: "V-12907466",
    monto: "14.132,43"
  },
  {
    id: 639,
    cliente: "CARLOS VENEGAS",
    identificacion: "V-21208520",
    monto: "9.578,86"
  },
  {
    id: 640,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "10.021,68"
  },
  {
    id: 641,
    cliente: "LUZ MARINA NUÑEZ",
    identificacion: "V-13048340",
    monto: "3.443,26"
  },
  {
    id: 642,
    cliente: "CARLOS CALDERA",
    identificacion: "V-9048646",
    monto: "160,45"
  },
  {
    id: 643,
    cliente: "FREDY GIL",
    identificacion: "V-13404371",
    monto: "22.864,38"
  },
  {
    id: 644,
    cliente: "JOSE BRICEÑO",
    identificacion: "V-12047376",
    monto: "1.133,24"
  },
  {
    id: 645,
    cliente: "PEDRO VALECILLO",
    identificacion: "V-9318313",
    monto: "1.618,90"
  },
  {
    id: 646,
    cliente: "DANIEL MORILLO",
    identificacion: "V-20709541",
    monto: "16.189,00"
  },
  {
    id: 647,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "8.721,02"
  },
  {
    id: 648,
    cliente: "RENY SUAREZ",
    identificacion: "V-16716032",
    monto: "3.399,69"
  },
  {
    id: 649,
    cliente: "OVIDIO COLS",
    identificacion: "V-4322150",
    monto: "178,08"
  },
  {
    id: 650,
    cliente: "EDILIO SAEZ",
    identificacion: "V-11126098",
    monto: "34.806,35"
  },
  {
    id: 651,
    cliente: "YOVANNY DSANTIAGO",
    identificacion: "V-16275929",
    monto: "9.933,56"
  },
  {
    id: 652,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-23782522",
    monto: "654,60"
  },
  {
    id: 653,
    cliente: "PRADO SANTIAGO",
    identificacion: "V-10914386",
    monto: "16.201,35"
  },
  {
    id: 654,
    cliente: "REINALDO PEÑA",
    identificacion: "V-13632426",
    monto: "13.092,00"
  },
  {
    id: 655,
    cliente: "ANTONIO MORENO",
    identificacion: "V-15188269",
    monto: "13.484,76"
  },
  {
    id: 656,
    cliente: "PRADO SANTIAGO",
    identificacion: "V-10914386",
    monto: "10.800,90"
  },
  {
    id: 657,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "9.819,00"
  },
  {
    id: 658,
    cliente: "LUZ MARINA NUÑEZ",
    identificacion: "V-13048340",
    monto: "2.127,45"
  },
  {
    id: 659,
    cliente: "YONATAN RODRIGUEZ",
    identificacion: "V-18036049",
    monto: "9.000,75"
  },
  {
    id: 660,
    cliente: "FEDERICO ESCALONA",
    identificacion: "V-5779229",
    monto: "900,08"
  },
  {
    id: 661,
    cliente: "GERARDO ARAUJO",
    identificacion: "V-13404398",
    monto: "3.336,82"
  },
  {
    id: 662,
    cliente: "FRANCISCO RODRIGUEZ",
    identificacion: "V-25998357",
    monto: "2.863,88"
  },
  {
    id: 663,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "7.324,97"
  },
  {
    id: 664,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "5.523,19"
  },
  {
    id: 665,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "1.823,06"
  },
  {
    id: 666,
    cliente: "JOSE RONDON",
    identificacion: "V-11322428",
    monto: "6.235,96"
  },
  {
    id: 667,
    cliente: "YAJAIRA PERDOMO",
    identificacion: "V-3906997",
    monto: "1.902,21"
  },
  {
    id: 668,
    cliente: "OSCAR TIMAURE",
    identificacion: "V-15407001",
    monto: "12.405,75"
  },
  {
    id: 669,
    cliente: "LUIS ARAUJO",
    identificacion: "V-9081923",
    monto: "2.811,97"
  },
  {
    id: 670,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "4.631,48"
  },
  {
    id: 671,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "3.308,20"
  },
  {
    id: 672,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "13.967,22"
  },
  {
    id: 673,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "2.585,36"
  },
  {
    id: 674,
    cliente: "DIMAS VILORIA",
    identificacion: "V-22622216",
    monto: "11.247,88"
  },
  {
    id: 675,
    cliente: "PASCUAL VASQUEZ",
    identificacion: "V-9100888",
    monto: "3.118,00"
  },
  {
    id: 676,
    cliente: "JOSE PORTILLO",
    identificacion: "V-14983431",
    monto: "6.755,34"
  },
  {
    id: 677,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "55.028,03"
  },
  {
    id: 678,
    cliente: "RENE MIGUEL BARRIOS",
    identificacion: "V-11897501",
    monto: "499,74"
  },
  {
    id: 679,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "1.855,70"
  },
  {
    id: 680,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "1.832,38"
  },
  {
    id: 681,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "4.997,40"
  },
  {
    id: 682,
    cliente: "JOSE PEREZ",
    identificacion: "V-12906091",
    monto: "999,48"
  },
  {
    id: 683,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "16.658,00"
  },
  {
    id: 684,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "27.319,12"
  },
  {
    id: 685,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "8.352,33"
  },
  {
    id: 686,
    cliente: "JUAN MOLINA",
    identificacion: "V-26114649",
    monto: "1.665,80"
  },
  {
    id: 687,
    cliente: "WILMER GARCIA",
    identificacion: "V-13376711",
    monto: "2.998,44"
  },
  {
    id: 688,
    cliente: "JOSE PEREZ",
    identificacion: "V-87159379",
    monto: "9.161,90"
  },
  {
    id: 689,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "2.365,44"
  },
  {
    id: 690,
    cliente: "DANIEL MORILLO",
    identificacion: "V-20709541",
    monto: "16.658,00"
  },
  {
    id: 691,
    cliente: "JOSE IDROBO",
    identificacion: "V-9329600",
    monto: "2.915,15"
  },
  {
    id: 692,
    cliente: "LUIS MOLINA",
    identificacion: "V-17037994",
    monto: "8.495,58"
  },
  {
    id: 693,
    cliente: "`ROBER TERAN",
    identificacion: "V-20705786",
    monto: "12.448,52"
  },
  {
    id: 694,
    cliente: "ORLANDO MORENO",
    identificacion: "V-18734068",
    monto: "1.394,27"
  },
  {
    id: 695,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "3.816,35"
  },
  {
    id: 696,
    cliente: "JOSE GONZALEZ",
    identificacion: "V-18097715",
    monto: "4.247,79"
  },
  {
    id: 697,
    cliente: "GREGORY SANCHEZ",
    identificacion: "V-25832834",
    monto: "3.621,45"
  },
  {
    id: 698,
    cliente: "CARLOS QUINTERO",
    identificacion: "V-19643165",
    monto: "11.342,44"
  },
  {
    id: 699,
    cliente: "ALFREDO TERAN",
    identificacion: "V-11126500",
    monto: "16.658,00"
  },
  {
    id: 700,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "11.903,92"
  },
  {
    id: 701,
    cliente: "VICTOR TERAN",
    identificacion: "V-25822870",
    monto: "1.852,61"
  },
  {
    id: 702,
    cliente: "JORGE FIGUEROA",
    identificacion: "V-23478125",
    monto: "38.736,60"
  },
  {
    id: 703,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "10.519,50"
  },
  {
    id: 704,
    cliente: "ALEXANDER MENDOZA",
    identificacion: "V-14711353",
    monto: "14.652,54"
  },
  {
    id: 705,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "7.009,64"
  },
  {
    id: 706,
    cliente: "DANIEL MARQUEZ",
    identificacion: "V-25919316",
    monto: "2.315,77"
  },
  {
    id: 707,
    cliente: "ADONIS DUGARTE",
    identificacion: "V-23782919",
    monto: "5.052,60"
  },
  {
    id: 708,
    cliente: "JOEL MATERAN",
    identificacion: "V-26002189",
    monto: "11.292,56"
  },
  {
    id: 709,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "16.505,16"
  },
  {
    id: 710,
    cliente: "TERESA DE LINARES",
    identificacion: "V-9681481",
    monto: "1.515,78"
  },
  {
    id: 711,
    cliente: "LUIS RIVERO",
    identificacion: "V-5792701",
    monto: "3.722,08"
  },
  {
    id: 712,
    cliente: "WILFREDO BARRETO",
    identificacion: "V-16276547",
    monto: "18.526,20"
  },
  {
    id: 713,
    cliente: "LUIS RIVERO",
    identificacion: "V-5792701",
    monto: "31.999,80"
  },
  {
    id: 714,
    cliente: "WILLIAN VELASQUEZ",
    identificacion: "V-18034028",
    monto: "12.748,50"
  },
  {
    id: 715,
    cliente: "JOSE RAUL QUINTERO",
    identificacion: "V-11707006",
    monto: "50.994,00"
  },
  {
    id: 716,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "2.549,70"
  },
  {
    id: 717,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "5.908,50"
  },
  {
    id: 718,
    cliente: "YONATHAN CONTRERAS",
    identificacion: "V-25485441",
    monto: "43.834,44"
  },
  {
    id: 719,
    cliente: "WILMER",
    identificacion: "V-17095521",
    monto: "7.674,60"
  },
  {
    id: 720,
    cliente: "RAUL RAMOS",
    identificacion: "V-20026557",
    monto: "16.148,10"
  },
  {
    id: 721,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "8.074,05"
  },
  {
    id: 722,
    cliente: "JOSE AVILA",
    identificacion: "V-12719032",
    monto: "72.259,44"
  },
  {
    id: 723,
    cliente: "JESUS GONZALEZ",
    identificacion: "V-19287494",
    monto: "8.953,38"
  },
  {
    id: 724,
    cliente: "JULIAN AZUAJE",
    identificacion: "V-10907821",
    monto: "13.061,00"
  },
  {
    id: 725,
    cliente: "RENZO OJEDA",
    identificacion: "V-19270147",
    monto: "326,51"
  },
  {
    id: 726,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "18.061,43"
  },
  {
    id: 727,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "2.921,45"
  },
  {
    id: 728,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "9.358,95"
  },
  {
    id: 729,
    cliente: "JOSE TERAN",
    identificacion: "V-12331782",
    monto: "1.577,56"
  },
  {
    id: 730,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "10.629,42"
  },
  {
    id: 731,
    cliente: "DAVID MORILLO",
    identificacion: "V-31602923",
    monto: "6.039,20"
  },
  {
    id: 732,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "22.782,52"
  },
  {
    id: 733,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "3.141,22"
  },
  {
    id: 734,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "19.285,14"
  },
  {
    id: 735,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "14.225,84"
  },
  {
    id: 736,
    cliente: "YULMEDR LA C RUZ",
    identificacion: "V-19287306",
    monto: "8.687,00"
  },
  {
    id: 737,
    cliente: "WILMER LUCENA",
    identificacion: "V-17597197",
    monto: "2.258,62"
  },
  {
    id: 738,
    cliente: "JOSE ARAUJO",
    identificacion: "V-16266397",
    monto: "4.018,61"
  },
  {
    id: 739,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "5.438,06"
  },
  {
    id: 740,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-14310888",
    monto: "2.606,10"
  },
  {
    id: 741,
    cliente: "REINALDO BARRUETA",
    identificacion: "V-14459037",
    monto: "34.251,75"
  },
  {
    id: 742,
    cliente: "ALEXIS SANTIAGO",
    identificacion: "V-9320014",
    monto: "3.161,70"
  },
  {
    id: 743,
    cliente: "JOSE PORTILLO",
    identificacion: "V-14983431",
    monto: "2.803,37"
  },
  {
    id: 744,
    cliente: "ONEIVER SAEZ",
    identificacion: "V-30116703",
    monto: "6.674,70"
  },
  {
    id: 745,
    cliente: "RAMON RODRIGUEZ",
    identificacion: "V-9312736",
    monto: "263,48"
  },
  {
    id: 746,
    cliente: "FRANCISCO PORTILLO",
    identificacion: "V-4317301",
    monto: "8.782,50"
  },
  {
    id: 747,
    cliente: "JEAN PORTILLO",
    identificacion: "V-18377217",
    monto: "16.686,75"
  },
  {
    id: 748,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "2.517,06"
  },
  {
    id: 749,
    cliente: "REIMUNDO LINARES",
    identificacion: "V-8716648",
    monto: "15.597,72"
  },
  {
    id: 750,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "9.485,13"
  },
  {
    id: 751,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "3.952,20"
  },
  {
    id: 752,
    cliente: "JORGE FIGUEROA",
    identificacion: "V-23478125",
    monto: "40.399,50"
  },
  {
    id: 753,
    cliente: "CARLOS VENEGAS",
    identificacion: "V-21208520",
    monto: "13.173,75"
  },
  {
    id: 754,
    cliente: "CARLOS LINARES",
    identificacion: "V-12042776",
    monto: "395,22"
  },
  {
    id: 755,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "5.041,15"
  },
  {
    id: 756,
    cliente: "MARIA CALEDRA",
    identificacion: "V-28323237",
    monto: "16.686,75"
  },
  {
    id: 757,
    cliente: "ROSALINO VILLA",
    identificacion: "V-4317880",
    monto: "16.872,95"
  },
  {
    id: 758,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "13.473,50"
  },
  {
    id: 759,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "799,26"
  },
  {
    id: 760,
    cliente: "ALFREDO TERAN",
    identificacion: "V-11126500",
    monto: "9.768,55"
  },
  {
    id: 761,
    cliente: "JUAN CARLOS TERAN",
    identificacion: "V-12906558",
    monto: "38.186,15"
  },
  {
    id: 762,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "15.228,29"
  },
  {
    id: 763,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "3.019,37"
  },
  {
    id: 764,
    cliente: "DIONIX ALBARRAN",
    identificacion: "V-29585281",
    monto: "81.700,60"
  },
  {
    id: 765,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "25.694,01"
  },
  {
    id: 766,
    cliente: "FRANCISCO ESPINOZA",
    identificacion: "V-30475083",
    monto: "20.425,15"
  },
  {
    id: 767,
    cliente: "PEDRFO UZCATEGUI",
    identificacion: "V-23837938",
    monto: "2.433,26"
  },
  {
    id: 768,
    cliente: "MARIBEL BARRETO",
    identificacion: "V-14150015",
    monto: "21.531,60"
  },
  {
    id: 769,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "46.956,83"
  },
  {
    id: 770,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "4.126,90"
  },
  {
    id: 771,
    cliente: "ENRIQUE BRICEÑO",
    identificacion: "V-10914466",
    monto: "18.840,15"
  },
  {
    id: 772,
    cliente: "JESUS RIVERA",
    identificacion: "V-26324121",
    monto: "11.483,52"
  },
  {
    id: 773,
    cliente: "FREDY UZCATEGUI",
    identificacion: "V-31168184",
    monto: "53.829,00"
  },
  {
    id: 774,
    cliente: "YERICSON ROJAS",
    identificacion: "V-28584217",
    monto: "4.697,42"
  },
  {
    id: 775,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "62.800,50"
  },
  {
    id: 776,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "18.840,15"
  },
  {
    id: 777,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "80.743,50"
  },
  {
    id: 778,
    cliente: "ELADIO FRANCO",
    identificacion: "V-12042585",
    monto: "10.406,94"
  },
  {
    id: 779,
    cliente: "ALFREDO HERNANDEZ",
    identificacion: "V-12542668",
    monto: "3.836,21"
  },
  {
    id: 780,
    cliente: "YONNI OLMOS",
    identificacion: "V-18035451",
    monto: "15.619,38"
  },
  {
    id: 781,
    cliente: "MANUEL DIAZ",
    identificacion: "V-25171493",
    monto: "1.495,73"
  },
  {
    id: 782,
    cliente: "MANUEL DIAZ",
    identificacion: "V-25171493",
    monto: "1.631,70"
  },
  {
    id: 783,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "8.702,40"
  },
  {
    id: 784,
    cliente: "JOSE LEONARDO MANRIQUE",
    identificacion: "V-20394084",
    monto: "6.301,99"
  },
  {
    id: 785,
    cliente: "LUIS RANGEL",
    identificacion: "V-25767491",
    monto: "6.301,99"
  },
  {
    id: 786,
    cliente: "PEDRO MATOS",
    identificacion: "V-27676425",
    monto: "2.121,24"
  },
  {
    id: 787,
    cliente: "MARIA COSTA",
    identificacion: "V-28345628",
    monto: "997,15"
  },
  {
    id: 788,
    cliente: "FRANCISCO AZUAJE",
    identificacion: "V-18377644",
    monto: "2.175,60"
  },
  {
    id: 789,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "3.747,48"
  },
  {
    id: 790,
    cliente: "REGULO SANTIAGO",
    identificacion: "V-5779961",
    monto: "53.110,60"
  },
  {
    id: 791,
    cliente: "JOSE OLIVAR",
    identificacion: "V-14310691",
    monto: "18.314,00"
  },
  {
    id: 792,
    cliente: "JHONY RANGEL",
    identificacion: "V-18802056",
    monto: "3.521,78"
  },
  {
    id: 793,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "5.860,48"
  },
  {
    id: 794,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "36.675,59"
  },
  {
    id: 795,
    cliente: "MANUEL RAMOS",
    identificacion: "V-17987135",
    monto: "36.628,00"
  },
  {
    id: 796,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "4.578,50"
  },
  {
    id: 797,
    cliente: "JORGE FIGUEROA",
    identificacion: "V-23478125",
    monto: "21.061,10"
  },
  {
    id: 798,
    cliente: "ALFREDO HERNANDEZ",
    identificacion: "V-12542668",
    monto: "3.915,53"
  },
  {
    id: 799,
    cliente: "ORACIO ARAUJO",
    identificacion: "V-17391045",
    monto: "5.860,48"
  },
  {
    id: 800,
    cliente: "FRANCISCO RIVILLAS",
    identificacion: "V-18648510",
    monto: "1.815,07"
  },
  {
    id: 801,
    cliente: "`ROBER TERAN",
    identificacion: "V-20705786",
    monto: "66.373,20"
  },
  {
    id: 802,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "7.720,05"
  },
  {
    id: 803,
    cliente: "ANGELA HERNANDEZ",
    identificacion: "V-9370642",
    monto: "370,80"
  },
  {
    id: 804,
    cliente: "HERMES URBINA",
    identificacion: "V-16739530",
    monto: "13.905,00"
  },
  {
    id: 805,
    cliente: "RAMON ARAUJO",
    identificacion: "V-9329736",
    monto: "19.149,97"
  },
  {
    id: 806,
    cliente: "ALFREDO HERNANDEZ",
    identificacion: "V-12542668",
    monto: "5.131,87"
  },
  {
    id: 807,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "15.924,01"
  },
  {
    id: 808,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "108.644,40"
  },
  {
    id: 809,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "27.346,50"
  },
  {
    id: 810,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "11.908,23"
  },
  {
    id: 811,
    cliente: "ERWIN MALDONADO",
    identificacion: "V-18458645",
    monto: "5.932,80"
  },
  {
    id: 812,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "16.081,60"
  },
  {
    id: 813,
    cliente: "JORGE VASQUEZ",
    identificacion: "V-29633610",
    monto: "1.873,90"
  },
  {
    id: 814,
    cliente: "JOSE FELICIANO BARRIOS",
    identificacion: "V-9175576",
    monto: "2.060,20"
  },
  {
    id: 815,
    cliente: "MARBELIS OSUNA",
    identificacion: "V-27051334",
    monto: "28.655,36"
  },
  {
    id: 816,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "21.163,77"
  },
  {
    id: 817,
    cliente: "LUIS VERGARA",
    identificacion: "V-26234859",
    monto: "3.923,73"
  },
  {
    id: 818,
    cliente: "PEDRO VILLARREAL",
    identificacion: "V-15583592",
    monto: "14.327,68"
  },
  {
    id: 819,
    cliente: "YEFERSON MEJIA",
    identificacion: "V-25919900",
    monto: "561,88"
  },
  {
    id: 820,
    cliente: "SILVERIO MONTESINOS",
    identificacion: "V-12044118",
    monto: "6.364,11"
  },
  {
    id: 821,
    cliente: "ALEXIS VILORIA",
    identificacion: "V-14982970",
    monto: "2.931,09"
  },
  {
    id: 822,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "43.076,70"
  },
  {
    id: 823,
    cliente: "JHONY RANGEL",
    identificacion: "V-18802056",
    monto: "8.376,54"
  },
  {
    id: 824,
    cliente: "RAFAEL MORA",
    identificacion: "V-9178145",
    monto: "17.983,50"
  },
  {
    id: 825,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "488,39"
  },
  {
    id: 826,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "23.437,23"
  },
  {
    id: 827,
    cliente: "JESUS SANTIAGO",
    identificacion: "V-16883394",
    monto: "5.137,60"
  },
  {
    id: 828,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "4.545,09"
  },
  {
    id: 829,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "38.274,00"
  },
  {
    id: 830,
    cliente: "LUZ MARINA NUÑEZ",
    identificacion: "V-13048340",
    monto: "28.705,50"
  },
  {
    id: 831,
    cliente: "LUZ MARINA NUÑEZ",
    identificacion: "V-13048340",
    monto: "6.889,32"
  },
  {
    id: 832,
    cliente: "ARMANDO AVENDAÑO",
    identificacion: "V-21208639",
    monto: "16.457,82"
  },
  {
    id: 833,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "18.524,62"
  },
  {
    id: 834,
    cliente: "GREGORIA CAÑIZALEZ",
    identificacion: "V-12907032",
    monto: "10.525,35"
  },
  {
    id: 835,
    cliente: "ENRRIQUE GIL",
    identificacion: "V-29994029",
    monto: "23.301,21"
  },
  {
    id: 836,
    cliente: "ENRRIQUE GIL",
    identificacion: "V-29994029",
    monto: "10.027,78"
  },
  {
    id: 837,
    cliente: "ANTONIO MORENO",
    identificacion: "V-11131851",
    monto: "1.530,96"
  },
  {
    id: 838,
    cliente: "JESUS ALBERTO RONDON",
    identificacion: "V-13049587",
    monto: "8.901,47"
  },
  {
    id: 839,
    cliente: "MIGUEL JEREZ",
    identificacion: "V-16882225",
    monto: "3.160,45"
  },
  {
    id: 840,
    cliente: "JESUS GONZALEZ",
    identificacion: "V-19287494",
    monto: "4.175,28"
  },
  {
    id: 841,
    cliente: "ANTONIO ROJO",
    identificacion: "V-16882455",
    monto: "2.416,25"
  },
  {
    id: 842,
    cliente: "JOSE LA CRUZ",
    identificacion: "V-9474807",
    monto: "724,88"
  },
  {
    id: 843,
    cliente: "JHONY RANGEL",
    identificacion: "V-18802056",
    monto: "5.340,88"
  },
  {
    id: 844,
    cliente: "ATILIO DUARTE",
    identificacion: "V-5763200",
    monto: "2.126,30"
  },
  {
    id: 845,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "10.438,20"
  },
  {
    id: 846,
    cliente: "JOSE CARRILLO",
    identificacion: "V-21208607",
    monto: "3.866,00"
  },
  {
    id: 847,
    cliente: "FRANKLIN VILLA",
    identificacion: "V-17605447",
    monto: "44.459,00"
  },
  {
    id: 848,
    cliente: "JUAN TOVAR",
    identificacion: "V-19270652",
    monto: "75.734,96"
  },
  {
    id: 849,
    cliente: "EDIXON ALBARRAN",
    identificacion: "V-24135770",
    monto: "8.623,11"
  },
  {
    id: 850,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "5.957,51"
  },
  {
    id: 851,
    cliente: "RAFAEL SALCEDO",
    identificacion: "V-4060517",
    monto: "1.034,83"
  },
  {
    id: 852,
    cliente: "FRANCISCO SOTO",
    identificacion: "V-15216613",
    monto: "19.134,50"
  },
  {
    id: 853,
    cliente: "WILMER MARQUEZ",
    identificacion: "V-25919468",
    monto: "15.268,54"
  },
  {
    id: 854,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "57.145,78"
  },
  {
    id: 855,
    cliente: "GERGORIO PLAZA",
    identificacion: "V-10912270",
    monto: "3.416,88"
  },
  {
    id: 856,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-20040636",
    monto: "16.703,63"
  },
  {
    id: 857,
    cliente: "LUZ MARINA NUÑEZ",
    identificacion: "V-13048340",
    monto: "3.444,21"
  },
  {
    id: 858,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "3.319,25"
  },
  {
    id: 859,
    cliente: "JUAN TOVAR",
    identificacion: "V-19270652",
    monto: "36.332,11"
  },
  {
    id: 860,
    cliente: "JUAN TOVAR",
    identificacion: "V-19270652",
    monto: "3.412,97"
  },
  {
    id: 861,
    cliente: "MIGUEL TERAN",
    identificacion: "V-14004571",
    monto: "4.881,25"
  },
  {
    id: 862,
    cliente: "ALFREDO BARRIOS",
    identificacion: "V-4919714",
    monto: "431.502,50"
  },
  {
    id: 863,
    cliente: "WILFREDO BARRETO",
    identificacion: "V-16276547",
    monto: "56.427,25"
  },
  {
    id: 864,
    cliente: "FRANCISCO JAVIER RONDON MATOS",
    identificacion: "V-9329350",
    monto: "1.469,50"
  },
  {
    id: 865,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "49.509,75"
  },
  {
    id: 866,
    cliente: "JOSE RONDON",
    identificacion: "V-19287932",
    monto: "26.549,85"
  },
  {
    id: 867,
    cliente: "ALEXIS VILORIA",
    identificacion: "V-14982970",
    monto: "5.785,35"
  },
  {
    id: 868,
    cliente: "GEOVANU RIVAS",
    identificacion: "V-19813979",
    monto: "4.676,80"
  },
  {
    id: 869,
    cliente: "RAMON ARAUJO",
    identificacion: "V-9329736",
    monto: "6.976,74"
  },
  {
    id: 870,
    cliente: "FORTUNATO RAMIREZ",
    identificacion: "V-11897369",
    monto: "14.527,45"
  },
  {
    id: 871,
    cliente: "EMILIO MARQUEZ",
    identificacion: "V-9162061",
    monto: "7.044,51"
  },
  {
    id: 872,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "11.620,06"
  },
  {
    id: 873,
    cliente: "ALEXIS PLAZA",
    identificacion: "V-16066206",
    monto: "2.588,44"
  },
  {
    id: 874,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "86.668,60"
  },
  {
    id: 875,
    cliente: "ARTURO DURAN",
    identificacion: "V-21209256",
    monto: "23.694,09"
  },
  {
    id: 876,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "9.955,50"
  },
  {
    id: 877,
    cliente: "DARWIN RIVAS",
    identificacion: "V-20709114",
    monto: "19.911,00"
  },
  {
    id: 878,
    cliente: "CARLOS MONTILLA",
    identificacion: "V-15217751",
    monto: "32.074,03"
  },
  {
    id: 879,
    cliente: "LA AGROPECUARIA M&M CA",
    identificacion: "J-50047549-7",
    monto: "33.619,30"
  },
  {
    id: 880,
    cliente: "RAFAEL ANGEL",
    identificacion: "V-27557344",
    monto: "16.591,04"
  },
  {
    id: 881,
    cliente: "YRAIDA ALBARRAN",
    identificacion: "V-11316627",
    monto: "8.058,80"
  },
  {
    id: 882,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "4.230,87"
  },
  {
    id: 883,
    cliente: "JESUS ALBERTO RONDON",
    identificacion: "V-13049587",
    monto: "2.014,70"
  },
  {
    id: 884,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "16.397,64"
  },
  {
    id: 885,
    cliente: "HERNAN PERDOMO",
    identificacion: "V-16883810",
    monto: "7.101,81"
  },
  {
    id: 886,
    cliente: "FRANCISCO ALTUVE",
    identificacion: "V-12796235",
    monto: "10.476,44"
  },
  {
    id: 887,
    cliente: "ANDRES DIAZ PACHECO",
    identificacion: "V-11618556",
    monto: "6.044,10"
  },
  {
    id: 888,
    cliente: "KARELIS DOMINGUEZ",
    identificacion: "V-18349689",
    monto: "10.476,44"
  },
  {
    id: 889,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "27.382,66"
  },
  {
    id: 890,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "30.561,00"
  },
  {
    id: 891,
    cliente: "MANUEL RAMOS",
    identificacion: "V-17987135",
    monto: "152.805,00"
  },
  {
    id: 892,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "50.323,78"
  },
  {
    id: 893,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "407,48"
  },
  {
    id: 894,
    cliente: "ELVA GODOY",
    identificacion: "V-9165995",
    monto: "1.974,24"
  },
  {
    id: 895,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "2.801,43"
  },
  {
    id: 896,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "1.222,44"
  },
  {
    id: 897,
    cliente: "HENDRI AZUAJE",
    identificacion: "V-29541982",
    monto: "5.704,72"
  },
  {
    id: 898,
    cliente: "JUAN LOAIZA",
    identificacion: "V-10688167",
    monto: "11.694,68"
  },
  {
    id: 899,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "55.337,83"
  },
  {
    id: 900,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "8.360,89"
  },
  {
    id: 901,
    cliente: "RAFAEL ANGEL",
    identificacion: "V-27557344",
    monto: "2.682,06"
  },
  {
    id: 902,
    cliente: "HENRRY GODOY",
    identificacion: "V-10404065",
    monto: "2.468,16"
  },
  {
    id: 903,
    cliente: "NELSON UZCATEGUI",
    identificacion: "V-20401304",
    monto: "6.620,84"
  },
  {
    id: 904,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "17.250,38"
  },
  {
    id: 905,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "3.496,56"
  },
  {
    id: 906,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "8.794,88"
  },
  {
    id: 907,
    cliente: "JEAN CARLOS BUITRIAGO",
    identificacion: "V-13260666",
    monto: "267,38"
  },
  {
    id: 908,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "9.771,86"
  },
  {
    id: 909,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "13.825,81"
  },
  {
    id: 910,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "10.810,28"
  },
  {
    id: 911,
    cliente: "JOSE VILORIA",
    identificacion: "V-12721151",
    monto: "2.494,68"
  },
  {
    id: 912,
    cliente: "JORGE GUDIÑO",
    identificacion: "V-27022047",
    monto: "1.247,34"
  },
  {
    id: 913,
    cliente: "FRANKLIN JEREZ",
    identificacion: "V-27051255",
    monto: "19.364,95"
  },
  {
    id: 914,
    cliente: "GERARDO VILLARREAL",
    identificacion: "V-15751660",
    monto: "11.088,85"
  },
  {
    id: 915,
    cliente: "JOSE LA CRUZ",
    identificacion: "V-9474807",
    monto: "311,83"
  },
  {
    id: 916,
    cliente: "LUS ROSALES",
    identificacion: "V-16267037",
    monto: "15.589,66"
  },
  {
    id: 917,
    cliente: "ANTONIO BRICEÑO",
    identificacion: "V-21208655",
    monto: "2.821,07"
  },
  {
    id: 918,
    cliente: "JOSE BARROETA",
    identificacion: "V-17266291",
    monto: "18.502,21"
  },
  {
    id: 919,
    cliente: "MARIA CALEDRA",
    identificacion: "V-28323237",
    monto: "12.652,19"
  },
  {
    id: 920,
    cliente: "WILLIAN FLORES",
    identificacion: "V-11879410",
    monto: "31.542,00"
  },
  {
    id: 921,
    cliente: "DUGLAS PAREDES",
    identificacion: "V-11322679",
    monto: "9.462,60"
  },
  {
    id: 922,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "11.704,18"
  },
  {
    id: 923,
    cliente: "EDILIO SAEZ",
    identificacion: "V-11126098",
    monto: "28.009,30"
  },
  {
    id: 924,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "8.154,66"
  },
  {
    id: 925,
    cliente: "DARWIN ANDRADE",
    identificacion: "V-26554346",
    monto: "21.238,28"
  },
  {
    id: 926,
    cliente: "ALONSO DELGADO",
    identificacion: "V-4318720",
    monto: "2.523,36"
  },
  {
    id: 927,
    cliente: "EDILIO SAEZ",
    identificacion: "V-11126098",
    monto: "2.872,42"
  },
  {
    id: 928,
    cliente: "JOSE UZCATEGUI",
    identificacion: "V-8715245",
    monto: "16.952,78"
  },
  {
    id: 929,
    cliente: "CARLOS LINARES",
    identificacion: "V-12042776",
    monto: "662,38"
  },
  {
    id: 930,
    cliente: "ARELIS MACHADO",
    identificacion: "V-10429001",
    monto: "10.514,00"
  },
  {
    id: 931,
    cliente: "ROBINSON QUINTERO",
    identificacion: "V-25309900",
    monto: "6.308,40"
  },
  {
    id: 932,
    cliente: "SUGEYLE BENCOMO",
    identificacion: "V-14718649",
    monto: "3.505,92"
  },
  {
    id: 933,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "10.624,00"
  },
  {
    id: 934,
    cliente: "KEILA RAMIREZ",
    identificacion: "V-28750612",
    monto: "3.029,96"
  },
  {
    id: 935,
    cliente: "ORLANDO ARIAS",
    identificacion: "V-12655760",
    monto: "4.160,36"
  },
  {
    id: 936,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "3.295,56"
  },
  {
    id: 937,
    cliente: "MARIA RODRIGUEZ",
    identificacion: "V-13260087",
    monto: "2.303,28"
  },
  {
    id: 938,
    cliente: "OSCAR TIMAURE",
    identificacion: "V-15407001",
    monto: "9.935,56"
  },
  {
    id: 939,
    cliente: "DIMAS VILORIA",
    identificacion: "V-22622216",
    monto: "3.824,64"
  },
  {
    id: 940,
    cliente: "ROXANA BRICEÑO",
    identificacion: "V-17267281",
    monto: "350,59"
  },
  {
    id: 941,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "5.736,96"
  },
  {
    id: 942,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "1.835,83"
  },
  {
    id: 943,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "2.124,80"
  },
  {
    id: 944,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "21.442,00"
  },
  {
    id: 945,
    cliente: "FELIPE RAMIREZ",
    identificacion: "V-9179866",
    monto: "804,05"
  },
  {
    id: 946,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "34.307,20"
  },
  {
    id: 947,
    cliente: "ALLAM CHADAD",
    identificacion: "V-21063052",
    monto: "13.802,18"
  },
  {
    id: 948,
    cliente: "MARIO VASQUEZ",
    identificacion: "V-31168498",
    monto: "3.634,41"
  },
  {
    id: 949,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "4.350,58"
  },
  {
    id: 950,
    cliente: "MARITZA MORILLO",
    identificacion: "V-20430900",
    monto: "6.207,45"
  },
  {
    id: 951,
    cliente: "MARITZA MORILLO",
    identificacion: "V-20430900",
    monto: "4.138,30"
  },
  {
    id: 952,
    cliente: "GUILLERMO BRICEÑO",
    identificacion: "V-12044983",
    monto: "7.708,40"
  },
  {
    id: 953,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "3.036,19"
  },
  {
    id: 954,
    cliente: "JUAN CARLOS BRICEÑO",
    identificacion: "V-16738776",
    monto: "48.120,70"
  },
  {
    id: 955,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-20040636",
    monto: "1.828,33"
  },
  {
    id: 956,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "38.567,94"
  },
  {
    id: 957,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "16.413,84"
  },
  {
    id: 958,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "3.652,33"
  },
  {
    id: 959,
    cliente: "ALI RUIZ",
    identificacion: "V-9418756",
    monto: "432,74"
  },
  {
    id: 960,
    cliente: "YENNY BRICEÑO",
    identificacion: "V-15188792",
    monto: "2.163,70"
  },
  {
    id: 961,
    cliente: "YENNY BRICEÑO",
    identificacion: "V-15188792",
    monto: "519,29"
  },
  {
    id: 962,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "43.274,00"
  },
  {
    id: 963,
    cliente: "YULIMAR VILLEGAS",
    identificacion: "V-18397544",
    monto: "960,68"
  },
  {
    id: 964,
    cliente: "LUIS VALERA",
    identificacion: "V-11864179",
    monto: "2.834,45"
  },
  {
    id: 965,
    cliente: "HERNAN PERDOMO",
    identificacion: "V-16883810",
    monto: "5.084,70"
  },
  {
    id: 966,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "7.129,39"
  },
  {
    id: 967,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "12.982,20"
  },
  {
    id: 968,
    cliente: "JOSE ALARCON",
    identificacion: "V-18802532",
    monto: "5.437,38"
  },
  {
    id: 969,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "10.818,50"
  },
  {
    id: 970,
    cliente: "SUGEYLE BENCOMO",
    identificacion: "V-14718649",
    monto: "6.348,30"
  },
  {
    id: 971,
    cliente: "LUIS VARGAS",
    identificacion: "V-17865328",
    monto: "3.942,26"
  },
  {
    id: 972,
    cliente: "JOSE BRICEÑO",
    identificacion: "V-22351358",
    monto: "4.056,90"
  },
  {
    id: 973,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "40.501,06"
  },
  {
    id: 974,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "6.981,44"
  },
  {
    id: 975,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "6.981,44"
  },
  {
    id: 976,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "15.926,41"
  },
  {
    id: 977,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "3.975,06"
  },
  {
    id: 978,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "5.910,22"
  },
  {
    id: 979,
    cliente: "ADOLFO CARREÑO",
    identificacion: "V-5500428",
    monto: "8.598,08"
  },
  {
    id: 980,
    cliente: "SILVIO DAVILA",
    identificacion: "V-14929203",
    monto: "5.890,59"
  },
  {
    id: 981,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "9.250,40"
  },
  {
    id: 982,
    cliente: "FRANCISCO SOTO",
    identificacion: "V-15216613",
    monto: "18.020,84"
  },
  {
    id: 983,
    cliente: "JOSE GREGORIUO ARAUJO",
    identificacion: "V-9317943",
    monto: "12.752,46"
  },
  {
    id: 984,
    cliente: "NERIO ABREU",
    identificacion: "V-17094854",
    monto: "20.778,07"
  },
  {
    id: 985,
    cliente: "JEAN CARLOS VARGAS",
    identificacion: "V-15943615",
    monto: "3.166,14"
  },
  {
    id: 986,
    cliente: "DARWIN RAMIREZ",
    identificacion: "V-20040275",
    monto: "2.365,80"
  },
  {
    id: 987,
    cliente: "MARTIN MORENO",
    identificacion: "V-12042908",
    monto: "7.035,84"
  },
  {
    id: 988,
    cliente: "MARTIN MORENO",
    identificacion: "V-12042908",
    monto: "4.861,33"
  },
  {
    id: 989,
    cliente: "YORJANI AZUAJE",
    identificacion: "V-21120512",
    monto: "4.397,40"
  },
  {
    id: 990,
    cliente: "LUIS RANGEL",
    identificacion: "V-12905426",
    monto: "2.365,80"
  },
  {
    id: 991,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "5.936,49"
  },
  {
    id: 992,
    cliente: "JOSE VASQUEZ",
    identificacion: "V-19428011",
    monto: "2.198,70"
  },
  {
    id: 993,
    cliente: "JOSE JEREZ",
    identificacion: "V-16066215",
    monto: "11.327,69"
  },
  {
    id: 994,
    cliente: "PEDRFO UZCATEGUI",
    identificacion: "V-23837938",
    monto: "3.878,51"
  },
  {
    id: 995,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "7.244,72"
  },
  {
    id: 996,
    cliente: "LUIS UZCATEGUI",
    identificacion: "V-20430790",
    monto: "5.496,74"
  },
  {
    id: 997,
    cliente: "JOSE GREGORIUO ARAUJO",
    identificacion: "V-9317943",
    monto: "12.752,46"
  },
  {
    id: 998,
    cliente: "CORPVENCA INTERNACIONAL, C.A",
    identificacion: "J-30048236-7",
    monto: "11.299,87"
  },
  {
    id: 999,
    cliente: "JAIRO CASTELLANOS",
    identificacion: "V-9164409",
    monto: "12.195,70"
  },
  {
    id: 1000,
    cliente: "ROBINSON QUINTERO",
    identificacion: "V-25309900",
    monto: "6.652,20"
  },
  {
    id: 1001,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "3.326,10"
  },
  {
    id: 1002,
    cliente: "ALLAM CHADAD",
    identificacion: "V-21063052",
    monto: "2.024,49"
  },
  {
    id: 1003,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "3.352,71"
  },
  {
    id: 1004,
    cliente: "BLANCA MERY ROSARIO",
    identificacion: "V-13377891",
    monto: "3.769,60"
  },
  {
    id: 1005,
    cliente: "JOSEFINA VILLEGAS",
    identificacion: "V-13404559",
    monto: "5.591,25"
  },
  {
    id: 1006,
    cliente: "ALFREDO CASTELLANOS",
    identificacion: "V-11615008",
    monto: "1.341,90"
  },
  {
    id: 1007,
    cliente: "JOSE CARMONA",
    identificacion: "V-16015677",
    monto: "2.301,36"
  },
  {
    id: 1008,
    cliente: "CARLOS ANGEL",
    identificacion: "V-10032307",
    monto: "1.341,90"
  },
  {
    id: 1009,
    cliente: "XAVIER VILORIA",
    identificacion: "V-2500590",
    monto: "2.759,84"
  },
  {
    id: 1010,
    cliente: "VICTOR PEREZ",
    identificacion: "V-9328568",
    monto: "2.630,12"
  },
  {
    id: 1011,
    cliente: "VICTOR RIVAS",
    identificacion: "V-13404518",
    monto: "4.712,33"
  },
  {
    id: 1012,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "13.615,82"
  },
  {
    id: 1013,
    cliente: "JOHAN QUEVEDO",
    identificacion: "V-16276331",
    monto: "4.906,96"
  },
  {
    id: 1014,
    cliente: "JOSE MORENO",
    identificacion: "V-9171802",
    monto: "6.969,64"
  },
  {
    id: 1015,
    cliente: "RICARDO DE JESUS GARCIA",
    identificacion: "V-11320818",
    monto: "14.109,48"
  },
  {
    id: 1016,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "22.400,00"
  },
  {
    id: 1017,
    cliente: "YOSMER MANZANILLA",
    identificacion: "V-14459649",
    monto: "447,92"
  },
  {
    id: 1018,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "7.166,72"
  },
  {
    id: 1019,
    cliente: "JESUS PEÑA",
    identificacion: "V-16065728",
    monto: "4.703,16"
  },
  {
    id: 1020,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "70.547,40"
  },
  {
    id: 1021,
    cliente: "YONELVIS OCANTO",
    identificacion: "V-27415145",
    monto: "32.250,24"
  },
  {
    id: 1022,
    cliente: "DANIEL LINARES",
    identificacion: "V-25882122",
    monto: "7.643,75"
  },
  {
    id: 1023,
    cliente: "JEAN CARLOS GIL",
    identificacion: "V-17865745",
    monto: "2.015,64"
  },
  {
    id: 1024,
    cliente: "JOAN VILLEGAS",
    identificacion: "V-18946844",
    monto: "7.390,68"
  },
  {
    id: 1025,
    cliente: "FABIOLA SANTIAGO",
    identificacion: "V-29994231",
    monto: "9.990,86"
  },
  {
    id: 1026,
    cliente: "CRISTIAN GARCIA",
    identificacion: "V-15952884",
    monto: "6.512,76"
  },
  {
    id: 1027,
    cliente: "CRISTIAN GARCIA",
    identificacion: "V-15952884",
    monto: "2.629,30"
  },
  {
    id: 1028,
    cliente: "GUISBEL PAREDES",
    identificacion: "V-12796858",
    monto: "2.221,38"
  },
  {
    id: 1029,
    cliente: "LUIS HERNANDEZ",
    identificacion: "V-16715581",
    monto: "51.607,40"
  },
  {
    id: 1030,
    cliente: "JESUS CHACON",
    identificacion: "V-16376566",
    monto: "538,51"
  },
  {
    id: 1031,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "2.479,40"
  },
  {
    id: 1032,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "4.828,66"
  },
  {
    id: 1033,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "4.936,36"
  },
  {
    id: 1034,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "16.465,00"
  },
  {
    id: 1035,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "27.320,51"
  },
  {
    id: 1036,
    cliente: "JESUS MORENO",
    identificacion: "V-13462172",
    monto: "68.563,80"
  },
  {
    id: 1037,
    cliente: "JORGE BARRIOS",
    identificacion: "V-17267469",
    monto: "6.677,55"
  },
  {
    id: 1038,
    cliente: "JORGE BARRIOS",
    identificacion: "V-17267469",
    monto: "2.692,56"
  },
  {
    id: 1039,
    cliente: "JORGE BARRIOS",
    identificacion: "V-17267469",
    monto: "3.365,70"
  },
  {
    id: 1040,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "7.055,26"
  },
  {
    id: 1041,
    cliente: "JESUS MORENO",
    identificacion: "V-13462172",
    monto: "37.315,96"
  },
  {
    id: 1042,
    cliente: "FRANCISCO JAVIER RONDON MATOS",
    identificacion: "V-9329350",
    monto: "2.790,44"
  },
  {
    id: 1043,
    cliente: "RAFAEL PEREZ",
    identificacion: "V-4315912",
    monto: "30.676,80"
  },
  {
    id: 1044,
    cliente: "LUIS RIVERO",
    identificacion: "V-5792701",
    monto: "33.808,75"
  },
  {
    id: 1045,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "15.376,84"
  },
  {
    id: 1046,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "5.092,45"
  },
  {
    id: 1047,
    cliente: "JOSE GARCIA",
    identificacion: "V-11133709",
    monto: "14.340,84"
  },
  {
    id: 1048,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "4.362,33"
  },
  {
    id: 1049,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "29.864,98"
  },
  {
    id: 1050,
    cliente: "MAXIMINO GONZALEZ",
    identificacion: "V-3906906",
    monto: "1.251,58"
  },
  {
    id: 1051,
    cliente: "JOSE ALBERTO RIVERA",
    identificacion: "V-9016572",
    monto: "3.087,99"
  },
  {
    id: 1052,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "50.063,20"
  },
  {
    id: 1053,
    cliente: "KELVIN OJEDA",
    identificacion: "V-21207916",
    monto: "682,68"
  },
  {
    id: 1054,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "23.577,49"
  },
  {
    id: 1055,
    cliente: "PROSPERO CASTILLO",
    identificacion: "V-10907985",
    monto: "216,18"
  },
  {
    id: 1056,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "21.265,48"
  },
  {
    id: 1057,
    cliente: "CARLOS MORENO",
    identificacion: "V-4918518",
    monto: "1.599,36"
  },
  {
    id: 1058,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "91.620,48"
  },
  {
    id: 1059,
    cliente: "JOSE TERAN",
    identificacion: "V-12331782",
    monto: "25.132,80"
  },
  {
    id: 1060,
    cliente: "ALEXIS BRICEÑO",
    identificacion: "V-13765573",
    monto: "7.311,36"
  },
  {
    id: 1061,
    cliente: "FRANCISCO SOTO",
    identificacion: "V-15216613",
    monto: "2.284,80"
  },
  {
    id: 1062,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "28.605,69"
  },
  {
    id: 1063,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "7.952,74"
  },
  {
    id: 1064,
    cliente: "ESPERANZA VILORIA",
    identificacion: "V-24136846",
    monto: "4.145,04"
  },
  {
    id: 1065,
    cliente: "JESUS CHACON",
    identificacion: "V-16376566",
    monto: "762,46"
  },
  {
    id: 1066,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "46.274,69"
  },
  {
    id: 1067,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "13.352,38"
  },
  {
    id: 1068,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "13.035,85"
  },
  {
    id: 1069,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "25.415,50"
  },
  {
    id: 1070,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "47.596,30"
  },
  {
    id: 1071,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-18984376",
    monto: "17.120,80"
  },
  {
    id: 1072,
    cliente: "ALBERTO MORILLO",
    identificacion: "V-9163381",
    monto: "36.968,00"
  },
  {
    id: 1073,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "22.093,00"
  },
  {
    id: 1074,
    cliente: "ALISAUL GARCIA",
    identificacion: "V-5791234",
    monto: "4.600,22"
  },
  {
    id: 1075,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "37.254,50"
  },
  {
    id: 1076,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "1.478,72"
  },
  {
    id: 1077,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "1.559,59"
  },
  {
    id: 1078,
    cliente: "REINALDO BRICEÑO",
    identificacion: "V-4062851",
    monto: "25.415,50"
  },
  {
    id: 1079,
    cliente: "NEOMAR ROJO CASTELLANOS",
    identificacion: "V-15043245",
    monto: "10.399,05"
  },
  {
    id: 1080,
    cliente: "MARCOS GIL",
    identificacion: "V-5783689",
    monto: "5.777,25"
  },
  {
    id: 1081,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.210,46"
  },
  {
    id: 1082,
    cliente: "JORGE BRICEÑO",
    identificacion: "V-16738280",
    monto: "24.726,63"
  },
  {
    id: 1083,
    cliente: "CARLOS LINARES",
    identificacion: "V-12042776",
    monto: "998,32"
  },
  {
    id: 1084,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "3.142,82"
  },
  {
    id: 1085,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "7.122,19"
  },
  {
    id: 1086,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "32.572,13"
  },
  {
    id: 1087,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "11.186,88"
  },
  {
    id: 1088,
    cliente: "MIGUEL VALERO",
    identificacion: "V-9169104",
    monto: "932,24"
  },
  {
    id: 1089,
    cliente: "NORIS CORREA",
    identificacion: "V-17036142",
    monto: "5.301,89"
  },
  {
    id: 1090,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "26.586,13"
  },
  {
    id: 1091,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "4.631,49"
  },
  {
    id: 1092,
    cliente: "JOSE GARCIA",
    identificacion: "V-11133709",
    monto: "3.762,65"
  },
  {
    id: 1093,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "6.306,12"
  },
  {
    id: 1094,
    cliente: "LEONARDO NAVAS",
    identificacion: "V-4660915",
    monto: "7.020,81"
  },
  {
    id: 1095,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "16.087,62"
  },
  {
    id: 1096,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "15.541,08"
  },
  {
    id: 1097,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "7.473,92"
  },
  {
    id: 1098,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "972,36"
  },
  {
    id: 1099,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "4.279,33"
  },
  {
    id: 1100,
    cliente: "YORMAN JOSE BARRIOS OVIEDO",
    identificacion: "V-23776453",
    monto: "3.875,36"
  },
  {
    id: 1101,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "2.430,90"
  },
  {
    id: 1102,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "88.076,25"
  },
  {
    id: 1103,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "23.051,42"
  },
  {
    id: 1104,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "16.206,03"
  },
  {
    id: 1105,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "25.142,83"
  },
  {
    id: 1106,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "14.132,12"
  },
  {
    id: 1107,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "6.602,20"
  },
  {
    id: 1108,
    cliente: "LEWIS MORILLO",
    identificacion: "V-18260548",
    monto: "2.544,31"
  },
  {
    id: 1109,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-20040636",
    monto: "6.337,13"
  },
  {
    id: 1110,
    cliente: "MARCO MERIÑO",
    identificacion: "V-15940216",
    monto: "34.050,24"
  },
  {
    id: 1111,
    cliente: "ANTONIO MORENO",
    identificacion: "V-15188269",
    monto: "4.419,45"
  },
  {
    id: 1112,
    cliente: "HECTOR MORENO",
    identificacion: "V-14799568",
    monto: "13.525,52"
  },
  {
    id: 1113,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "14.265,64"
  },
  {
    id: 1114,
    cliente: "PEDRO VALERA",
    identificacion: "V-27022166",
    monto: "27.192,90"
  },
  {
    id: 1115,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "4.256,28"
  },
  {
    id: 1116,
    cliente: "JESUS HERNANDEZ",
    identificacion: "V-13378421",
    monto: "39.602,32"
  },
  {
    id: 1117,
    cliente: "JESUS HERNANDEZ",
    identificacion: "V-13378421",
    monto: "3.546,90"
  },
  {
    id: 1118,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "3.156,74"
  },
  {
    id: 1119,
    cliente: "CIPRIANO CASTELLANOS",
    identificacion: "V-19148045",
    monto: "29.321,04"
  },
  {
    id: 1120,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "7.566,72"
  },
  {
    id: 1121,
    cliente: "LISANDRO MONTILLA",
    identificacion: "V-15216912",
    monto: "16.567,00"
  },
  {
    id: 1122,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "9.592,02"
  },
  {
    id: 1123,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "1.601,04"
  },
  {
    id: 1124,
    cliente: "CARLOS CALDERA",
    identificacion: "V-9048646",
    monto: "48.040,62"
  },
  {
    id: 1125,
    cliente: "JOSE CAMACHO",
    identificacion: "V-10910817",
    monto: "23.684,00"
  },
  {
    id: 1126,
    cliente: "JOSE PRADA",
    identificacion: "V-11321798",
    monto: "3.386,81"
  },
  {
    id: 1127,
    cliente: "JOSE RONDON",
    identificacion: "V-19287932",
    monto: "2.842,08"
  },
  {
    id: 1128,
    cliente: "JAIRO AGUILAR",
    identificacion: "V-13926432",
    monto: "41.735,94"
  },
  {
    id: 1129,
    cliente: "MARIA DIAZ",
    identificacion: "V-9167480",
    monto: "49.366,92"
  },
  {
    id: 1130,
    cliente: "EDILIO SAEZ",
    identificacion: "V-11126098",
    monto: "18.070,88"
  },
  {
    id: 1131,
    cliente: "JOSE ALBERTO ARAUJO",
    identificacion: "V-16535746",
    monto: "473,68"
  },
  {
    id: 1132,
    cliente: "LEONARDO ABREU",
    identificacion: "V-18924015",
    monto: "1.184,20"
  },
  {
    id: 1133,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-15952003",
    monto: "21.415,07"
  },
  {
    id: 1134,
    cliente: "ANTONI AVILA",
    identificacion: "V-30140368",
    monto: "18.878,52"
  },
  {
    id: 1135,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "5.943,76"
  },
  {
    id: 1136,
    cliente: "FLOR BRICEÑO",
    identificacion: "V-16739586",
    monto: "13.523,23"
  },
  {
    id: 1137,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "17.317,72"
  },
  {
    id: 1138,
    cliente: "ELIO AVILA",
    identificacion: "V-14557778",
    monto: "7.608,00"
  },
  {
    id: 1139,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "9.053,52"
  },
  {
    id: 1140,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "15.481,41"
  },
  {
    id: 1141,
    cliente: "RAFAEL BARRIOS",
    identificacion: "V-11615260",
    monto: "12.496,64"
  },
  {
    id: 1142,
    cliente: "YULMEDR LA C RUZ",
    identificacion: "V-19287306",
    monto: "34.089,39"
  },
  {
    id: 1143,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "5.558,60"
  },
  {
    id: 1144,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "9.612,80"
  },
  {
    id: 1145,
    cliente: "RAFAEL RUZA",
    identificacion: "V-18097986",
    monto: "14.349,51"
  },
  {
    id: 1146,
    cliente: "DANIEL CASTELLANOS",
    identificacion: "V-25822441",
    monto: "1.542,85"
  },
  {
    id: 1147,
    cliente: "JAVIER VAZQUEZ",
    identificacion: "V-18457326",
    monto: "1.201,60"
  },
  {
    id: 1148,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1.802,40"
  },
  {
    id: 1149,
    cliente: "REINALDO BRICEÑO",
    identificacion: "V-4062851",
    monto: "13.820,79"
  },
  {
    id: 1150,
    cliente: "ELVIS ARAUJO",
    identificacion: "V-18985523",
    monto: "4.602,15"
  },
  {
    id: 1151,
    cliente: "KEILA SANTIAGVO",
    identificacion: "V-16376868",
    monto: "7.690,24"
  },
  {
    id: 1152,
    cliente: "JESUS RAMIREZ",
    identificacion: "V-12040799",
    monto: "1.441,92"
  },
  {
    id: 1153,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "144.948,00"
  },
  {
    id: 1154,
    cliente: "RAFAEL SALAZAR",
    identificacion: "V-10399772",
    monto: "13.286,90"
  },
  {
    id: 1155,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "13.289,33"
  },
  {
    id: 1156,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "6.039,25"
  },
  {
    id: 1157,
    cliente: "ELVIS ARAUJO",
    identificacion: "V-18985523",
    monto: "12.356,81"
  },
  {
    id: 1158,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "144.948,00"
  },
  {
    id: 1159,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "1.676,56"
  },
  {
    id: 1160,
    cliente: "ANTONI AVILA",
    identificacion: "V-30140368",
    monto: "2.431,10"
  },
  {
    id: 1161,
    cliente: "JOSE ARAUJO",
    identificacion: "V-10038124",
    monto: "6.515,35"
  },
  {
    id: 1162,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "4.660,42"
  },
  {
    id: 1163,
    cliente: "GUSTAVO MENDOZA",
    identificacion: "V-10396041",
    monto: "4.429,46"
  },
  {
    id: 1164,
    cliente: "JOHAN QUEVEDO",
    identificacion: "V-16276331",
    monto: "5.326,54"
  },
  {
    id: 1165,
    cliente: "JOSE AVILA",
    identificacion: "V-12719032",
    monto: "2.285,24"
  },
  {
    id: 1166,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "87.519,60"
  },
  {
    id: 1167,
    cliente: "ALEXANDER SEGOVIA",
    identificacion: "V-30536041",
    monto: "2.530,78"
  },
  {
    id: 1168,
    cliente: "MARIO ANDRADE",
    identificacion: "V-7879897",
    monto: "4.512,12"
  },
  {
    id: 1169,
    cliente: "MARIO ANDRADE",
    identificacion: "V-7879897",
    monto: "2.525,91"
  },
  {
    id: 1170,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "12.923,73"
  },
  {
    id: 1171,
    cliente: "JHONNY PEREZ",
    identificacion: "V-9320962",
    monto: "7.779,52"
  },
  {
    id: 1172,
    cliente: "RAFAEL RIVAS",
    identificacion: "V-11617661",
    monto: "7.293,30"
  },
  {
    id: 1173,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "39.140,71"
  },
  {
    id: 1174,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "18.162,75"
  },
  {
    id: 1175,
    cliente: "ROBERTO GALLO",
    identificacion: "V-9317242",
    monto: "2.431,10"
  },
  {
    id: 1176,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "116.692,80"
  },
  {
    id: 1177,
    cliente: "ANGELO ALDANA",
    identificacion: "V-27151483",
    monto: "29.173,20"
  },
  {
    id: 1178,
    cliente: "ALIRIO VALERA",
    identificacion: "V-5784797",
    monto: "9.238,18"
  },
  {
    id: 1179,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "43.127,72"
  },
  {
    id: 1180,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "24.999,00"
  },
  {
    id: 1181,
    cliente: "GABRIEL RIVERA",
    identificacion: "V-5757749",
    monto: "7.293,30"
  },
  {
    id: 1182,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "70.280,67"
  },
  {
    id: 1183,
    cliente: "JOSE PORTILLO",
    identificacion: "V-14983431",
    monto: "12.155,50"
  },
  {
    id: 1184,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "4.893,80"
  },
  {
    id: 1185,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "6.089,25"
  },
  {
    id: 1186,
    cliente: "ALEXIS AGUILAR",
    identificacion: "V-9324825",
    monto: "4.437,85"
  },
  {
    id: 1187,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "3.682,78"
  },
  {
    id: 1188,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "16.397,12"
  },
  {
    id: 1189,
    cliente: "EMMA MENDOZA",
    identificacion: "V-11617865",
    monto: "9.012,10"
  },
  {
    id: 1190,
    cliente: "JESUS SANTIAGO",
    identificacion: "V-16883394",
    monto: "6.610,49"
  },
  {
    id: 1191,
    cliente: "YOANDRY ABREU",
    identificacion: "V-26046689",
    monto: "6.293,84"
  },
  {
    id: 1192,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1.826,80"
  },
  {
    id: 1193,
    cliente: "ALEXANDER JOSE VILLEGAS MONTILLA",
    identificacion: "V-21207839",
    monto: "13.842,29"
  },
  {
    id: 1194,
    cliente: "WILLIAN GUTIERREZ",
    identificacion: "V-18168029",
    monto: "28.134,75"
  },
  {
    id: 1195,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "4.751,10"
  },
  {
    id: 1196,
    cliente: "JOSE ALBERTO ARAUJO",
    identificacion: "V-16535746",
    monto: "489,30"
  },
  {
    id: 1197,
    cliente: "YOEL SALCEDO",
    identificacion: "V-13207084",
    monto: "1.712,54"
  },
  {
    id: 1198,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "5.237,96"
  },
  {
    id: 1199,
    cliente: "MANUEL PEREZ",
    identificacion: "V-5794981",
    monto: "3.075,26"
  },
  {
    id: 1200,
    cliente: "DARWIN DUQUE",
    identificacion: "V-15175794",
    monto: "6.157,84"
  },
  {
    id: 1201,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "3.669,75"
  },
  {
    id: 1202,
    cliente: "YOSMER SUAREZ",
    identificacion: "V-19794688",
    monto: "39.810,82"
  },
  {
    id: 1203,
    cliente: "LUIS TORRES",
    identificacion: "V-13896589",
    monto: "17.528,55"
  },
  {
    id: 1204,
    cliente: "ANTONIO PERNIA",
    identificacion: "V-11614848",
    monto: "2.242,97"
  },
  {
    id: 1205,
    cliente: "ANTONIO ALVARES",
    identificacion: "V-11603596",
    monto: "2.948,04"
  },
  {
    id: 1206,
    cliente: "JORGE URRIETA",
    identificacion: "V-26311035",
    monto: "5.694,63"
  },
  {
    id: 1207,
    cliente: "ANDERSON GARCIA",
    identificacion: "V-21207272",
    monto: "11.448,30"
  },
  {
    id: 1208,
    cliente: "MIGUEL DIAZ",
    identificacion: "V-21064483",
    monto: "20.144,94"
  },
  {
    id: 1209,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "2.535,31"
  },
  {
    id: 1210,
    cliente: "RAMON MEJIAS",
    identificacion: "V-16533680",
    monto: "60.959,45"
  },
  {
    id: 1211,
    cliente: "PEDRO BASTIDAS",
    identificacion: "V-20040055",
    monto: "14.093,62"
  },
  {
    id: 1212,
    cliente: "PEDRO BASTIDAS",
    identificacion: "V-20040055",
    monto: "2.843,95"
  },
  {
    id: 1213,
    cliente: "JESUS GOMEZ",
    identificacion: "V-18036041",
    monto: "80.614,86"
  },
  {
    id: 1214,
    cliente: "ALEXANDER MORILLO",
    identificacion: "V-7860426",
    monto: "74.190,00"
  },
  {
    id: 1215,
    cliente: "ALEXANDER MORILLO",
    identificacion: "V-7860426",
    monto: "1.098,01"
  },
  {
    id: 1216,
    cliente: "ALEXANDER MORILLO",
    identificacion: "V-7860426",
    monto: "2.225,70"
  },
  {
    id: 1217,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "4.575,05"
  },
  {
    id: 1218,
    cliente: "VAERIA MONTILLA",
    identificacion: "V-31897685",
    monto: "13.087,11"
  },
  {
    id: 1219,
    cliente: "ALFREDO RINCON",
    identificacion: "V-10435856",
    monto: "8.655,50"
  },
  {
    id: 1220,
    cliente: "DEYSI COLMENARES",
    identificacion: "V-12457977",
    monto: "11.726,96"
  },
  {
    id: 1221,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "4.555,27"
  },
  {
    id: 1222,
    cliente: "ANDREINA MORILLO",
    identificacion: "V-19102220",
    monto: "2.660,95"
  },
  {
    id: 1223,
    cliente: "ROBIN GRATEROL",
    identificacion: "V-21061948",
    monto: "14.954,22"
  },
  {
    id: 1224,
    cliente: "MARIBEL BARRETO",
    identificacion: "V-14150015",
    monto: "7.419,00"
  },
  {
    id: 1225,
    cliente: "CIPRIANO CASTELLANO",
    identificacion: "V-19748188",
    monto: "34.990,48"
  },
  {
    id: 1226,
    cliente: "CIPRIANO CASTELLANO",
    identificacion: "V-19748188",
    monto: "2.841,48"
  },
  {
    id: 1227,
    cliente: "HECTOR MATOS",
    identificacion: "V-18456277",
    monto: "5.381,25"
  },
  {
    id: 1228,
    cliente: "FRANCISCO TORRES",
    identificacion: "V-15293606",
    monto: "1.360,15"
  },
  {
    id: 1229,
    cliente: "ISMAR LOMEILLI",
    identificacion: "V-30024790",
    monto: "15.777,74"
  },
  {
    id: 1230,
    cliente: "EVELYN CASTILLO",
    identificacion: "V-17038377",
    monto: "2.876,10"
  },
  {
    id: 1231,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "9.648,99"
  },
  {
    id: 1232,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "11.598,58"
  },
  {
    id: 1233,
    cliente: "CESAR GODOY",
    identificacion: "V-25555756",
    monto: "15.814,48"
  },
  {
    id: 1234,
    cliente: "YOSMER MENDOZA",
    identificacion: "V-31095014",
    monto: "17.813,52"
  },
  {
    id: 1235,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "9.171,49"
  },
  {
    id: 1236,
    cliente: "GERARDO PEÑA",
    identificacion: "V-12348714",
    monto: "7.075,92"
  },
  {
    id: 1237,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "22.148,14"
  },
  {
    id: 1238,
    cliente: "GERARDO PEÑA",
    identificacion: "V-12348714",
    monto: "14.151,84"
  },
  {
    id: 1239,
    cliente: "ANTONIO ARAUJO",
    identificacion: "V-2808011",
    monto: "1.819,16"
  },
  {
    id: 1240,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "10.092,60"
  },
  {
    id: 1241,
    cliente: "YOBANY GUERRERO",
    identificacion: "V-16740355",
    monto: "12.460,00"
  },
  {
    id: 1242,
    cliente: "JESUS HERNANDEZ",
    identificacion: "V-13378421",
    monto: "2.492,00"
  },
  {
    id: 1243,
    cliente: "AIDE VILLA",
    identificacion: "V-8718410",
    monto: "1.704,54"
  },
  {
    id: 1244,
    cliente: "JOSE ALARCON",
    identificacion: "V-13633629",
    monto: "2.863,31"
  },
  {
    id: 1245,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "3.885,03"
  },
  {
    id: 1246,
    cliente: "LISANDRO MONTILLA",
    identificacion: "V-15216912",
    monto: "2.290,14"
  },
  {
    id: 1247,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "1.517,64"
  },
  {
    id: 1248,
    cliente: "ALVARO RANGEL",
    identificacion: "V-9175797",
    monto: "6.085,46"
  },
  {
    id: 1249,
    cliente: "PEDRO BAPTISTA",
    identificacion: "V-18377080",
    monto: "6.230,00"
  },
  {
    id: 1250,
    cliente: "Solanyela Uzcátegui",
    identificacion: "V-21062755",
    monto: "4.540,42"
  },
  {
    id: 1251,
    cliente: "JOSE CAÑIZALEZ",
    identificacion: "V-9441381",
    monto: "515,84"
  },
  {
    id: 1252,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "2.639,03"
  },
  {
    id: 1253,
    cliente: "MERGUIN LA CRUZ",
    identificacion: "V-17605924",
    monto: "1.889,20"
  },
  {
    id: 1254,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "9.332,52"
  },
  {
    id: 1255,
    cliente: "FERREAGRICOLA LAS ROSAS, F.P DE YORMAN GUSTAVO BRICEÑO",
    identificacion: "V-08720768",
    monto: "93.703,08"
  },
  {
    id: 1256,
    cliente: "CESAR GODOY",
    identificacion: "V-25555756",
    monto: "21.413,17"
  },
  {
    id: 1257,
    cliente: "ALBES BENITO RAMIREZ RAMIREZ",
    identificacion: "V-4657502",
    monto: "1.511,34"
  },
  {
    id: 1258,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "47.859,10"
  },
  {
    id: 1259,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "2.518,90"
  },
  {
    id: 1260,
    cliente: "HERNAN PERDOMO",
    identificacion: "V-16883810",
    monto: "4.828,73"
  },
  {
    id: 1261,
    cliente: "JOSE DAVIDA ARAUJO",
    identificacion: "V-20656725",
    monto: "25.487,00"
  },
  {
    id: 1262,
    cliente: "JOSE DAVIDA ARAUJO",
    identificacion: "V-20656725",
    monto: "25.487,00"
  },
  {
    id: 1263,
    cliente: "ALEXIS MOLINA",
    identificacion: "V-13764705",
    monto: "53.522,72"
  },
  {
    id: 1264,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.643,73"
  },
  {
    id: 1265,
    cliente: "YOANDRY ABREU",
    identificacion: "V-26046689",
    monto: "18.095,83"
  },
  {
    id: 1266,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "207.113,80"
  },
  {
    id: 1267,
    cliente: "GREGORIO ACUÑA",
    identificacion: "V-27619928",
    monto: "20.555,27"
  },
  {
    id: 1268,
    cliente: "EDUDIS CASTRO",
    identificacion: "V-19669241",
    monto: "20.118,54"
  },
  {
    id: 1269,
    cliente: "FRANKLIN VILLA",
    identificacion: "V-17605447",
    monto: "29.661,95"
  },
  {
    id: 1270,
    cliente: "JOSE RIVAS",
    identificacion: "V-24565902",
    monto: "31.183,74"
  },
  {
    id: 1271,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "9.045,60"
  },
  {
    id: 1272,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "26.865,99"
  },
  {
    id: 1273,
    cliente: "HENRY HERNANDEZ",
    identificacion: "V-11894506",
    monto: "1.346,40"
  },
  {
    id: 1274,
    cliente: "FRANCO CAÑIZALEZ",
    identificacion: "V-9179003",
    monto: "760,89"
  },
  {
    id: 1275,
    cliente: "JOSE GREGORIO ABREU",
    identificacion: "V-26100947",
    monto: "19.161,61"
  },
  {
    id: 1276,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "16.765,45"
  },
  {
    id: 1277,
    cliente: "JAVIER SORIANO",
    identificacion: "V-24566294",
    monto: "3.868,95"
  },
  {
    id: 1278,
    cliente: "JAIRO MONTILLA",
    identificacion: "V-10915399",
    monto: "4.441,56"
  },
  {
    id: 1279,
    cliente: "EDUARDO HERNANDEZ",
    identificacion: "V-19285084",
    monto: "16.435,32"
  },
  {
    id: 1280,
    cliente: "TONY ROJO",
    identificacion: "V-12722873",
    monto: "1.310,28"
  },
  {
    id: 1281,
    cliente: "ARELIS MACHADO",
    identificacion: "V-10429001",
    monto: "8.965,65"
  },
  {
    id: 1282,
    cliente: "WILMER",
    identificacion: "V-17095521",
    monto: "6.461,15"
  },
  {
    id: 1283,
    cliente: "ALFONZO USCATEGUI",
    identificacion: "V-17094986",
    monto: "21.854,41"
  },
  {
    id: 1284,
    cliente: "ALEXIS AGUILAR",
    identificacion: "V-9324825",
    monto: "2.660,32"
  },
  {
    id: 1285,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "9.265,24"
  },
  {
    id: 1286,
    cliente: "ROSA RONDON",
    identificacion: "V-5499455",
    monto: "532,06"
  },
  {
    id: 1287,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "4.943,21"
  },
  {
    id: 1288,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "55.953,11"
  },
  {
    id: 1289,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "39.315,00"
  },
  {
    id: 1290,
    cliente: "MANUEL SANTIAGO",
    identificacion: "V-20706590",
    monto: "60.673,53"
  },
  {
    id: 1291,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "7.155,33"
  },
  {
    id: 1292,
    cliente: "MANUEL SANTIAGO",
    identificacion: "V-20706590",
    monto: "18.084,90"
  },
  {
    id: 1293,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "18.042,96"
  },
  {
    id: 1294,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "15.843,95"
  },
  {
    id: 1295,
    cliente: "VICTOR BRICEÑO",
    identificacion: "V-23778165",
    monto: "2.725,84"
  },
  {
    id: 1296,
    cliente: "ARNOLDO BRICEÑO",
    identificacion: "V-12498787",
    monto: "35.645,60"
  },
  {
    id: 1297,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "114.784,08"
  },
  {
    id: 1298,
    cliente: "CARLOS MORENO",
    identificacion: "V-4918518",
    monto: "4.696,86"
  },
  {
    id: 1299,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "13.356,38"
  },
  {
    id: 1300,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-16738775",
    monto: "27.566,24"
  },
  {
    id: 1301,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "12.484,32"
  },
  {
    id: 1302,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "42.823,12"
  },
  {
    id: 1303,
    cliente: "EDGAR CARDOZA",
    identificacion: "V-17267820",
    monto: "28.374,67"
  },
  {
    id: 1304,
    cliente: "WILIAMS JOSE BASTIDAS",
    identificacion: "V-23254909",
    monto: "3.843,37"
  },
  {
    id: 1305,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.007,71"
  },
  {
    id: 1306,
    cliente: "JOSE GREGORIO FRANCO",
    identificacion: "V-24139550",
    monto: "1.060,24"
  },
  {
    id: 1307,
    cliente: "JOSE GREGORIO FRANCO",
    identificacion: "V-24139550",
    monto: "217,34"
  },
  {
    id: 1308,
    cliente: "ENDER PEREZ",
    identificacion: "V-14807536",
    monto: "9.756,80"
  },
  {
    id: 1309,
    cliente: "UNIDAD DE PRODUCCION SOCIAL AGRICOLA LA ORQUIDEA",
    identificacion: "J-50025514-4",
    monto: "101.745,00"
  },
  {
    id: 1310,
    cliente: "CRISTIAN GARCIA",
    identificacion: "V-15952884",
    monto: "5.403,20"
  },
  {
    id: 1311,
    cliente: "JOSE ARANGUREN",
    identificacion: "V-14460701",
    monto: "17.403,75"
  },
  {
    id: 1312,
    cliente: "LUIS MIGUEL BETENCOURT",
    identificacion: "V-26412975",
    monto: "1.903,70"
  },
  {
    id: 1313,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "6.693,50"
  },
  {
    id: 1314,
    cliente: "JUNIOR DURAN",
    identificacion: "V-21063617",
    monto: "5.435,32"
  },
  {
    id: 1315,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "10.265,54"
  },
  {
    id: 1316,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "17.601,35"
  },
  {
    id: 1317,
    cliente: "INVERSIONES EL SEMBRADOR, F.P DE WALTER CONTRERAS",
    identificacion: "V-12796290",
    monto: "31.140,85"
  },
  {
    id: 1318,
    cliente: "ASOCIACION COOPERATIVA EL VIGUUG",
    identificacion: "J-30852211-2",
    monto: "128.852,72"
  },
  {
    id: 1319,
    cliente: "ERNEIDIN GOMEZ",
    identificacion: "V-30236439",
    monto: "3.617,76"
  },
  {
    id: 1320,
    cliente: "JESDUS BARRIOS",
    identificacion: "V-26234850",
    monto: "7.720,23"
  },
  {
    id: 1321,
    cliente: "JUAN LOAIZA",
    identificacion: "V-10688167",
    monto: "4.776,74"
  },
  {
    id: 1322,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "46.018,06"
  },
  {
    id: 1323,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "14.785,14"
  },
  {
    id: 1324,
    cliente: "VIL ALBARRAN",
    identificacion: "V-17267699",
    monto: "12.794,81"
  },
  {
    id: 1325,
    cliente: "JULIO TERAN",
    identificacion: "V-26094213",
    monto: "4.199,95"
  },
  {
    id: 1326,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "68.940,40"
  },
  {
    id: 1327,
    cliente: "JORGE URRIETA",
    identificacion: "V-26311035",
    monto: "12.629,64"
  },
  {
    id: 1328,
    cliente: "RICARDO TORO",
    identificacion: "V-20039844",
    monto: "3.601,50"
  },
  {
    id: 1329,
    cliente: "ALEXANDER VALERO",
    identificacion: "V-13765802",
    monto: "27.214,38"
  },
  {
    id: 1330,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "18.684,51"
  },
  {
    id: 1331,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "17.301,84"
  },
  {
    id: 1332,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "4.984,81"
  },
  {
    id: 1333,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "3.737,24"
  },
  {
    id: 1334,
    cliente: "FRANCISCO SOTO",
    identificacion: "V-15216613",
    monto: "3.376,10"
  },
  {
    id: 1335,
    cliente: "DANI RIVERA",
    identificacion: "V-20040678",
    monto: "1.641,54"
  },
  {
    id: 1336,
    cliente: "JOSE URBINA",
    identificacion: "V-8722461",
    monto: "7.780,90"
  },
  {
    id: 1337,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "2.879,20"
  },
  {
    id: 1338,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "13.254,30"
  },
  {
    id: 1339,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "3.778,08"
  },
  {
    id: 1340,
    cliente: "ARNOLDO BRICEÑO",
    identificacion: "V-12498787",
    monto: "45.547,20"
  },
  {
    id: 1341,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "15.662,72"
  },
  {
    id: 1342,
    cliente: "ARNOLDO BRICEÑO",
    identificacion: "V-12498787",
    monto: "11.992,52"
  },
  {
    id: 1343,
    cliente: "JOSE GREGORIO BAPTISTA",
    identificacion: "V-9375637",
    monto: "12.711,60"
  },
  {
    id: 1344,
    cliente: "JEAN CARLOS GIL",
    identificacion: "V-17865745",
    monto: "29.465,60"
  },
  {
    id: 1345,
    cliente: "CONJUNTO RESINDECIAL LA PUERTA",
    identificacion: "J-31053018-1",
    monto: "6.801,70"
  },
  {
    id: 1346,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "6.835,24"
  },
  {
    id: 1347,
    cliente: "LUIS TORRES",
    identificacion: "V-13896589",
    monto: "5.359,17"
  },
  {
    id: 1348,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "2.795,60"
  },
  {
    id: 1349,
    cliente: "ANDRES PEREZ",
    identificacion: "V-15216759",
    monto: "1.395,00"
  },
  {
    id: 1350,
    cliente: "WILMER REA",
    identificacion: "V-17830867",
    monto: "5.893,12"
  },
  {
    id: 1351,
    cliente: "EMIRO VALECILLO",
    identificacion: "V-14799170",
    monto: "10.838,54"
  },
  {
    id: 1352,
    cliente: "DILSIA LAMOS",
    identificacion: "V-16065100",
    monto: "10.064,16"
  },
  {
    id: 1353,
    cliente: "JESUS LAMUS",
    identificacion: "V-17832600",
    monto: "369,02"
  },
  {
    id: 1354,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "17.685,12"
  },
  {
    id: 1355,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "9.673,14"
  },
  {
    id: 1356,
    cliente: "GUILLERMO HERNANDEZ",
    identificacion: "V-15294692",
    monto: "1.130,04"
  },
  {
    id: 1357,
    cliente: "MARCOS GIL",
    identificacion: "V-5783689",
    monto: "0,00"
  },
  {
    id: 1358,
    cliente: "MAIKOL PERDOMO",
    identificacion: "V-21208053",
    monto: "5.650,20"
  },
  {
    id: 1359,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "30.612,83"
  },
  {
    id: 1360,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "16.894,20"
  },
  {
    id: 1361,
    cliente: "MARIA CALEDRA",
    identificacion: "V-28323237",
    monto: "172.331,10"
  },
  {
    id: 1362,
    cliente: "JESUS YANEL PEREZ",
    identificacion: "V-14148503",
    monto: "12.843,00"
  },
  {
    id: 1363,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "5.199,99"
  },
  {
    id: 1364,
    cliente: "JOSE ROSARIO",
    identificacion: "V-25302292",
    monto: "753,46"
  },
  {
    id: 1365,
    cliente: "YORJANI AZUAJE",
    identificacion: "V-21205121",
    monto: "34.504,86"
  },
  {
    id: 1366,
    cliente: "AURELIO GONZALEZ",
    identificacion: "V-12905462",
    monto: "5.756,52"
  },
  {
    id: 1367,
    cliente: "FRANK GONZALEZ",
    identificacion: "V-30671744",
    monto: "5.137,20"
  },
  {
    id: 1368,
    cliente: "PAQUITA ABREU",
    identificacion: "V-9167417",
    monto: "753,46"
  },
  {
    id: 1369,
    cliente: "MARIA VENEGAS",
    identificacion: "V-9164757",
    monto: "0,00"
  },
  {
    id: 1370,
    cliente: "PABLO JOSE ROJO",
    identificacion: "V-14273763",
    monto: "12.843,00"
  },
  {
    id: 1371,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "10.548,38"
  },
  {
    id: 1372,
    cliente: "ARNOLDO BRICEÑO",
    identificacion: "V-12498787",
    monto: "59.677,14"
  },
  {
    id: 1373,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "105.318,90"
  },
  {
    id: 1374,
    cliente: "TAMER MISLIH",
    identificacion: "V-17864274",
    monto: "3.559,47"
  },
  {
    id: 1375,
    cliente: "WILFREDO GIL",
    identificacion: "V-13896924",
    monto: "1.191,30"
  },
  {
    id: 1376,
    cliente: "YORJANI AZUAJE",
    identificacion: "V-21205121",
    monto: "39.480,13"
  },
  {
    id: 1377,
    cliente: "YORJANI AZUAJE",
    identificacion: "V-21120512",
    monto: "2.451,82"
  },
  {
    id: 1378,
    cliente: "JHOAN NUÑEZ",
    identificacion: "V-20789293",
    monto: "5.244,30"
  },
  {
    id: 1379,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "46.787,90"
  },
  {
    id: 1380,
    cliente: "JULIO CESAR RANGEL GUERRA",
    identificacion: "V-9005347",
    monto: "1.678,18"
  },
  {
    id: 1381,
    cliente: "VICTOR MORENO",
    identificacion: "V-9323652",
    monto: "64.097,00"
  },
  {
    id: 1382,
    cliente: "PEDRO RODRIGUEZ",
    identificacion: "V-10910965",
    monto: "5.244,30"
  },
  {
    id: 1383,
    cliente: "CARLOS MELO",
    identificacion: "V-10208761",
    monto: "9.020,16"
  },
  {
    id: 1384,
    cliente: "FRANCISCO ABREU",
    identificacion: "V-10403852",
    monto: "16.898,30"
  },
  {
    id: 1385,
    cliente: "FRANCISCO ABREU",
    identificacion: "V-10403852",
    monto: "33.796,60"
  },
  {
    id: 1386,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "224.141,39"
  },
  {
    id: 1387,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "36.191,50"
  },
  {
    id: 1388,
    cliente: "RUBEN VERGARA",
    identificacion: "V-29539207",
    monto: "3.595,26"
  },
  {
    id: 1389,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "19.173,05"
  },
  {
    id: 1390,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "93.470,08"
  },
  {
    id: 1391,
    cliente: "ENRRIQUE GIL",
    identificacion: "V-29994029",
    monto: "35.089,64"
  },
  {
    id: 1392,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "17.544,82"
  },
  {
    id: 1393,
    cliente: "AVELINDA DUARTE",
    identificacion: "V-20039701",
    monto: "3.784,47"
  },
  {
    id: 1394,
    cliente: "JOSE ARTURO OLIVA",
    identificacion: "V-11133213",
    monto: "29.497,00"
  },
  {
    id: 1395,
    cliente: "JOSE BENITO VILLARREAL",
    identificacion: "V-11894447",
    monto: "17.830,94"
  },
  {
    id: 1396,
    cliente: "ISMAILIA ABREU",
    identificacion: "V-13523014",
    monto: "18.653,91"
  },
  {
    id: 1397,
    cliente: "WILNEIBER MENDAEZ",
    identificacion: "V-12721011",
    monto: "20.057,96"
  },
  {
    id: 1398,
    cliente: "FRACISCO BARRIOS",
    identificacion: "V-17267473",
    monto: "13.267,73"
  },
  {
    id: 1399,
    cliente: "JOSE BARRIOS",
    identificacion: "V-5105379",
    monto: "10.433,06"
  },
  {
    id: 1400,
    cliente: "WILLIAM PEÑA",
    identificacion: "V-23778886",
    monto: "3.639,93"
  },
  {
    id: 1401,
    cliente: "JAIRO DUQUE",
    identificacion: "V-10513636",
    monto: "3.173,88"
  },
  {
    id: 1402,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "36.272,46"
  },
  {
    id: 1403,
    cliente: "ARMANDO BARRUETA",
    identificacion: "V-11897297",
    monto: "598,79"
  },
  {
    id: 1404,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "24.411,72"
  },
  {
    id: 1405,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "19.173,05"
  },
  {
    id: 1406,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "24.547,41"
  },
  {
    id: 1407,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "33.331,61"
  },
  {
    id: 1408,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "16.813,29"
  },
  {
    id: 1409,
    cliente: "RAUL OSUNA",
    identificacion: "V-14459735",
    monto: "32.795,40"
  },
  {
    id: 1410,
    cliente: "EDGARDO TERAN",
    identificacion: "V-28261117",
    monto: "47.106,12"
  },
  {
    id: 1411,
    cliente: "DANIEL TERAN",
    identificacion: "V-11130919",
    monto: "19.677,24"
  },
  {
    id: 1412,
    cliente: "ANDRES BUSTOS",
    identificacion: "V-11315576",
    monto: "141.318,36"
  },
  {
    id: 1413,
    cliente: "WILMER RAMIREZ",
    identificacion: "V-12797668",
    monto: "34.882,38"
  },
  {
    id: 1414,
    cliente: "JOSE TERAN",
    identificacion: "V-12331782",
    monto: "88.249,44"
  },
  {
    id: 1415,
    cliente: "ALFREDO SUAREZ",
    identificacion: "V-10906666",
    monto: "8.008,04"
  },
  {
    id: 1416,
    cliente: "GILBERTO UZCATEGUI",
    identificacion: "V-5280075",
    monto: "4.624,15"
  },
  {
    id: 1417,
    cliente: "REINALDO BRICEÑO",
    identificacion: "V-4062851",
    monto: "36.924,62"
  },
  {
    id: 1418,
    cliente: "CARLOS BLANCO",
    identificacion: "V-19459389",
    monto: "1.192,56"
  },
  {
    id: 1419,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "14.698,30"
  },
  {
    id: 1420,
    cliente: "MANUEL DIAZ",
    identificacion: "V-25171493",
    monto: "4.603,26"
  },
  {
    id: 1421,
    cliente: "JOSE LAMUS",
    identificacion: "V-27676979",
    monto: "51.876,36"
  },
  {
    id: 1422,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "11.753,43"
  },
  {
    id: 1423,
    cliente: "DARWIN RAMIREZ",
    identificacion: "V-20040275",
    monto: "1.657,54"
  },
  {
    id: 1424,
    cliente: "ALFREDO HERNANDEZ",
    identificacion: "V-12542668",
    monto: "6.603,02"
  },
  {
    id: 1425,
    cliente: "JORGE AZUAJE",
    identificacion: "V-18924432",
    monto: "32.150,14"
  },
  {
    id: 1426,
    cliente: "JORGE AZUAJE",
    identificacion: "V-18924432",
    monto: "19.589,05"
  },
  {
    id: 1427,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "96.583,56"
  },
  {
    id: 1428,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "243.864,80"
  },
  {
    id: 1429,
    cliente: "JESDUS BARRIOS",
    identificacion: "V-26234850",
    monto: "8.256,83"
  },
  {
    id: 1430,
    cliente: "LILIANA DELGADO",
    identificacion: "V-13926391",
    monto: "1.258,33"
  },
  {
    id: 1431,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "13.290,15"
  },
  {
    id: 1432,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "5.024,18"
  },
  {
    id: 1433,
    cliente: "ALEXIS BRICEÑO",
    identificacion: "V-13523910",
    monto: "72.702,74"
  },
  {
    id: 1434,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "41.765,53"
  },
  {
    id: 1435,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "8.269,02"
  },
  {
    id: 1436,
    cliente: "NELY BRICEÑO",
    identificacion: "V-13633632",
    monto: "45.872,63"
  },
  {
    id: 1437,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "411,32"
  },
  {
    id: 1438,
    cliente: "JESUS AVENDAÑO",
    identificacion: "V-10030257",
    monto: "79.521,48"
  },
  {
    id: 1439,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "23.253,12"
  },
  {
    id: 1440,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "8.506,67"
  },
  {
    id: 1441,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "31.442,80"
  },
  {
    id: 1442,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "60.936,00"
  },
  {
    id: 1443,
    cliente: "JOSE BASTIDAS",
    identificacion: "V-5786786",
    monto: "22.680,38"
  },
  {
    id: 1444,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "3.366,71"
  },
  {
    id: 1445,
    cliente: "ANTONI MAURO",
    identificacion: "V-23838988",
    monto: "3.924,28"
  },
  {
    id: 1446,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "18.417,91"
  },
  {
    id: 1447,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "26.827,07"
  },
  {
    id: 1448,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "16.400,28"
  },
  {
    id: 1449,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "199.632,40"
  },
  {
    id: 1450,
    cliente: "ALEXIS RODRIGUEZ",
    identificacion: "V-13404600",
    monto: "19.377,11"
  },
  {
    id: 1451,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "1.978,39"
  },
  {
    id: 1452,
    cliente: "GILMER RAMIREZ",
    identificacion: "V-10911122",
    monto: "10.785,60"
  },
  {
    id: 1453,
    cliente: "ITALO RUIZ",
    identificacion: "V-11896667",
    monto: "115.264,20"
  },
  {
    id: 1454,
    cliente: "GREGORIO RUIZ",
    identificacion: "V-13404010",
    monto: "64.343,25"
  },
  {
    id: 1455,
    cliente: "MICHEL ATTAR",
    identificacion: "V-23838423",
    monto: "19.793,12"
  },
  {
    id: 1456,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "12.970,45"
  },
  {
    id: 1457,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "30.717,40"
  },
  {
    id: 1458,
    cliente: "ARGENIS MORENO",
    identificacion: "V-30536338",
    monto: "35.010,05"
  },
  {
    id: 1459,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "2.403,60"
  },
  {
    id: 1460,
    cliente: "MANUEL RIVERA",
    identificacion: "V-30536337",
    monto: "60.091,20"
  },
  {
    id: 1461,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "146.312,28"
  },
  {
    id: 1462,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "87.488,57"
  },
  {
    id: 1463,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "15.728,10"
  },
  {
    id: 1464,
    cliente: "RAFAEL PACHECO",
    identificacion: "V-9012310",
    monto: "5.613,84"
  },
  {
    id: 1465,
    cliente: "LUIS LINARES",
    identificacion: "V-29814101",
    monto: "9.627,74"
  },
  {
    id: 1466,
    cliente: "OWRAYAN NIEKEELSSON",
    identificacion: "V-21209227",
    monto: "61.140,99"
  },
  {
    id: 1467,
    cliente: "NATALIA PACHECO",
    identificacion: "V-15752623",
    monto: "4.862,20"
  },
  {
    id: 1468,
    cliente: "ASOCIACION COOPERATIVA EL VIGUUG",
    identificacion: "J-30852211-2",
    monto: "74.202,48"
  },
  {
    id: 1469,
    cliente: "WILMER PEÑA",
    identificacion: "V-20038524",
    monto: "12.091,59"
  },
  {
    id: 1470,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "315.064,26"
  },
  {
    id: 1471,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "98.501,06"
  },
  {
    id: 1472,
    cliente: "RODOLFO MANZANILLA",
    identificacion: "V-18348054",
    monto: "1.665,44"
  },
  {
    id: 1473,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "472.990,96"
  },
  {
    id: 1474,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-23782522",
    monto: "60.289,52"
  },
  {
    id: 1475,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "20.272,20"
  },
  {
    id: 1476,
    cliente: "WILLIAN ABREU",
    identificacion: "V-20655737",
    monto: "2.847,46"
  },
  {
    id: 1477,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "24.326,64"
  },
  {
    id: 1478,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "55.445,09"
  },
  {
    id: 1479,
    cliente: "MARCO ROMAN",
    identificacion: "V-11798042",
    monto: "264,61"
  },
  {
    id: 1480,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "25.868,74"
  },
  {
    id: 1481,
    cliente: "MAXIMO MATHEUS",
    identificacion: "V-4325290",
    monto: "3.803,74"
  },
  {
    id: 1482,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "16.065,01"
  },
  {
    id: 1483,
    cliente: "AMARILIS BENCOMO",
    identificacion: "V-16740578",
    monto: "158.227,88"
  },
  {
    id: 1484,
    cliente: "JOSE GREGORIO ANGULO",
    identificacion: "V-11318487",
    monto: "1.984,56"
  },
  {
    id: 1485,
    cliente: "DEIVID CAMACHO",
    identificacion: "V-23593189",
    monto: "1.905,18"
  },
  {
    id: 1486,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "15.684,64"
  },
  {
    id: 1487,
    cliente: "RAMON ARAUJO",
    identificacion: "V-9329736",
    monto: "3.615,21"
  },
  {
    id: 1488,
    cliente: "AURELIO GONZALEZ",
    identificacion: "V-12905462",
    monto: "6.119,06"
  },
  {
    id: 1489,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "7.444,00"
  },
  {
    id: 1490,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "8.269,00"
  },
  {
    id: 1491,
    cliente: "FRANKLIN BRICEÑO",
    identificacion: "V-13049841",
    monto: "11.560,05"
  },
  {
    id: 1492,
    cliente: "GERMAN DELGADO",
    identificacion: "V-14151096",
    monto: "148.842,00"
  },
  {
    id: 1493,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "35.675,78"
  },
  {
    id: 1494,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "60.581,73"
  },
  {
    id: 1495,
    cliente: "JEAN CARLOS GIL",
    identificacion: "V-17865745",
    monto: "9.095,90"
  },
  {
    id: 1496,
    cliente: "ORLANDO ABREU",
    identificacion: "V-9326996",
    monto: "26.052,75"
  },
  {
    id: 1497,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "2.480,70"
  },
  {
    id: 1498,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "148.671,00"
  },
  {
    id: 1499,
    cliente: "GREGORIO PEÑA",
    identificacion: "V-25374148",
    monto: "6.846,70"
  },
  {
    id: 1500,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "109.025,40"
  },
  {
    id: 1501,
    cliente: "JHONY BRICEÑO",
    identificacion: "V-15407313",
    monto: "10.945,49"
  },
  {
    id: 1502,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "1.377,19"
  },
  {
    id: 1503,
    cliente: "JOSE GREGORIO LOBO",
    identificacion: "V-10912049",
    monto: "25.137,76"
  },
  {
    id: 1504,
    cliente: "MANUEL PEREZ",
    identificacion: "V-5794981",
    monto: "2.546,85"
  },
  {
    id: 1505,
    cliente: "JESUS RIVERA",
    identificacion: "V-26324121",
    monto: "8.340,00"
  },
  {
    id: 1506,
    cliente: "ADEIMAR MORENO",
    identificacion: "V-27804029",
    monto: "145.367,20"
  },
  {
    id: 1507,
    cliente: "GABRIEL AVENDAÑO",
    identificacion: "V-13405099",
    monto: "123.704,24"
  },
  {
    id: 1508,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "7.228,71"
  },
  {
    id: 1509,
    cliente: "MANUEL TERAN",
    identificacion: "V-13206625",
    monto: "31.309,91"
  },
  {
    id: 1510,
    cliente: "DARNEIS LOBO",
    identificacion: "V-21365060",
    monto: "37.993,70"
  },
  {
    id: 1511,
    cliente: "JOSE TERAN",
    identificacion: "V-9049657",
    monto: "88.801,20"
  },
  {
    id: 1512,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "14.493,90"
  },
  {
    id: 1513,
    cliente: "CARLOS PAREDES",
    identificacion: "V-18619113",
    monto: "36.836,81"
  },
  {
    id: 1514,
    cliente: "OWRAYAN NIEKEELSSON",
    identificacion: "V-21209227",
    monto: "36.383,60"
  },
  {
    id: 1515,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "13.541,06"
  },
  {
    id: 1516,
    cliente: "PLINIO VALERO",
    identificacion: "V-25374504",
    monto: "7.276,72"
  },
  {
    id: 1517,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-12630730",
    monto: "264.304,00"
  },
  {
    id: 1518,
    cliente: "ANTONIO GONZALEZ",
    identificacion: "V-17866013",
    monto: "29.768,40"
  },
  {
    id: 1519,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "28.622,97"
  },
  {
    id: 1520,
    cliente: "RAUL BRICEÑO",
    identificacion: "V-5767220",
    monto: "20.837,88"
  },
  {
    id: 1521,
    cliente: "LILIANA VAENDAÑO",
    identificacion: "V-19794051",
    monto: "8.280,93"
  },
  {
    id: 1522,
    cliente: "ARSENIO BARRUETA SANCHEZ",
    identificacion: "V-5755198",
    monto: "23.770,66"
  },
  {
    id: 1523,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "74.374,48"
  },
  {
    id: 1524,
    cliente: "CARLOS ABREU",
    identificacion: "V-23234310",
    monto: "43.739,80"
  },
  {
    id: 1525,
    cliente: "RAFAEL HERNANDEZ",
    identificacion: "V-11895086",
    monto: "538,34"
  },
  {
    id: 1526,
    cliente: "JOSE RAUL QUINTERO",
    identificacion: "V-11707006",
    monto: "18.562,50"
  },
  {
    id: 1527,
    cliente: "KEIBER PACHECO",
    identificacion: "V-23837822",
    monto: "21.005,19"
  },
  {
    id: 1528,
    cliente: "ARGENIS MORENO",
    identificacion: "V-30536338",
    monto: "84.115,00"
  },
  {
    id: 1529,
    cliente: "EDGARDO TERAN",
    identificacion: "V-28261117",
    monto: "25.570,96"
  },
  {
    id: 1530,
    cliente: "DAVID BOSCAN",
    identificacion: "V-28515641",
    monto: "5.484,30"
  },
  {
    id: 1531,
    cliente: "DANI HERNANDEZ",
    identificacion: "V-18734829",
    monto: "20.860,52"
  },
  {
    id: 1532,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "2.186,99"
  },
  {
    id: 1533,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "64.438,50"
  },
  {
    id: 1534,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "18.517,59"
  },
  {
    id: 1535,
    cliente: "LUZ MARINA GARCIA",
    identificacion: "V-11317690",
    monto: "4.578,52"
  },
  {
    id: 1536,
    cliente: "LUZ MARINA GARCIA",
    identificacion: "V-11317690",
    monto: "315,41"
  },
  {
    id: 1537,
    cliente: "LUZ MARINA GARCIA",
    identificacion: "V-11317690",
    monto: "2.326,57"
  },
  {
    id: 1538,
    cliente: "JOSE MARIN",
    identificacion: "V-11614377",
    monto: "518,90"
  },
  {
    id: 1539,
    cliente: "MIGUELINA VILLEGAS",
    identificacion: "V-17864697",
    monto: "17.011,76"
  },
  {
    id: 1540,
    cliente: "YOVANNY RIVAS",
    identificacion: "V-11086701",
    monto: "847,88"
  },
  {
    id: 1541,
    cliente: "ELSO SUAREZ",
    identificacion: "V-13049569",
    monto: "11.638,94"
  },
  {
    id: 1542,
    cliente: "PEDRO VILLARREAL",
    identificacion: "V-15583592",
    monto: "2.034,90"
  },
  {
    id: 1543,
    cliente: "OSWALDO UZACTEGUI",
    identificacion: "V-5789385",
    monto: "11.870,25"
  },
  {
    id: 1544,
    cliente: "ENRRIQUE GIL",
    identificacion: "V-29994029",
    monto: "44.089,50"
  },
  {
    id: 1545,
    cliente: "MARIO RANGEL",
    identificacion: "V-26482453",
    monto: "10.587,98"
  },
  {
    id: 1546,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "11.870,25"
  },
  {
    id: 1547,
    cliente: "ALBERTO ABREU",
    identificacion: "V-12458482",
    monto: "33.965,87"
  },
  {
    id: 1548,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "38.675,00"
  },
  {
    id: 1549,
    cliente: "OSCAR SANTIAGO",
    identificacion: "V-21208672",
    monto: "37.306,50"
  },
  {
    id: 1550,
    cliente: "FRANKLIN JEREZ",
    identificacion: "V-27051255",
    monto: "159.069,57"
  },
  {
    id: 1551,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "8.139,60"
  },
  {
    id: 1552,
    cliente: "JOSE MORILLO",
    identificacion: "V-19812070",
    monto: "51.466,03"
  },
  {
    id: 1553,
    cliente: "JOSE MORILLO",
    identificacion: "V-19812070",
    monto: "47.632,40"
  },
  {
    id: 1554,
    cliente: "SHENGS NATURAL PRODUCTS, C.A",
    identificacion: "J-40350415-6",
    monto: "232.383,20"
  },
  {
    id: 1555,
    cliente: "MARIA RIVAS",
    identificacion: "V-13765854",
    monto: "17.770,48"
  },
  {
    id: 1556,
    cliente: "CIPRIANO CASTELLANO",
    identificacion: "V-19748188",
    monto: "21.187,88"
  },
  {
    id: 1557,
    cliente: "CIPRIANO CASTELLANO",
    identificacion: "V-19748188",
    monto: "3.152,50"
  },
  {
    id: 1558,
    cliente: "FRANCISCO ROMERO",
    identificacion: "V-13926979",
    monto: "24.396,80"
  },
  {
    id: 1559,
    cliente: "RAFAEL MORENO",
    identificacion: "V-9326371",
    monto: "17.770,48"
  },
  {
    id: 1560,
    cliente: "JOSE GIL",
    identificacion: "V-17347681",
    monto: "6.130,82"
  },
  {
    id: 1561,
    cliente: "TOMAS GONZALEZ ARAUJO",
    identificacion: "V-5356967",
    monto: "6.834,80"
  },
  {
    id: 1562,
    cliente: "ALEJO MEJIA",
    identificacion: "V-13118003",
    monto: "1.384,04"
  },
  {
    id: 1563,
    cliente: "CARLOS MENDEZ",
    identificacion: "V-7792274",
    monto: "25.162,37"
  },
  {
    id: 1564,
    cliente: "HECTOR ABREU",
    identificacion: "V-18802513",
    monto: "10.725,00"
  },
  {
    id: 1565,
    cliente: "ENRIQUE LABASTIDAS",
    identificacion: "V-12941972",
    monto: "42.057,70"
  },
  {
    id: 1566,
    cliente: "ENDER SANTIAGO",
    identificacion: "V-13996708",
    monto: "137.037,84"
  },
  {
    id: 1567,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "22.718,87"
  },
  {
    id: 1568,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "163.683,37"
  },
  {
    id: 1569,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "4.135,06"
  },
  {
    id: 1570,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "37.860,65"
  },
  {
    id: 1571,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "30.318,75"
  },
  {
    id: 1572,
    cliente: "JORGE VARGAS",
    identificacion: "V-21028426",
    monto: "90.033,68"
  },
  {
    id: 1573,
    cliente: "JOSELIN MONTILLA",
    identificacion: "V-28532134",
    monto: "153.783,00"
  },
  {
    id: 1574,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "7.962,50"
  },
  {
    id: 1575,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "8.577,67"
  },
  {
    id: 1576,
    cliente: "LUIS PEREZ",
    identificacion: "V-15043855",
    monto: "8.140,34"
  },
  {
    id: 1577,
    cliente: "ALEXANDER MORILLO",
    identificacion: "V-7860426",
    monto: "59.944,74"
  },
  {
    id: 1578,
    cliente: "JOSE CAÑIZALEZ",
    identificacion: "V-9441381",
    monto: "6.426,26"
  },
  {
    id: 1579,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-88719917",
    monto: "343.461,47"
  },
  {
    id: 1580,
    cliente: "RODOLFO PEÑA",
    identificacion: "V-18096938",
    monto: "36.615,06"
  },
  {
    id: 1581,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "25.577,17"
  },
  {
    id: 1582,
    cliente: "MAXIMO BRICEÑO",
    identificacion: "V-13048850",
    monto: "2.239,32"
  },
  {
    id: 1583,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "15.762,50"
  },
  {
    id: 1584,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "23.581,71"
  },
  {
    id: 1585,
    cliente: "JOSE BARRETO",
    identificacion: "V-5779873",
    monto: "1.894,80"
  },
  {
    id: 1586,
    cliente: "TONY ROJO",
    identificacion: "V-12722873",
    monto: "1.471,06"
  },
  {
    id: 1587,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "5.759,38"
  },
  {
    id: 1588,
    cliente: "LUIS LINARES",
    identificacion: "V-29814101",
    monto: "3.031,25"
  },
  {
    id: 1589,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "7.923,73"
  },
  {
    id: 1590,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "88.852,40"
  },
  {
    id: 1591,
    cliente: "DOMINGO OSUNA",
    identificacion: "V-9328120",
    monto: "39.618,65"
  },
  {
    id: 1592,
    cliente: "FARID ALANDETE",
    identificacion: "V-24262818",
    monto: "28.146,47"
  },
  {
    id: 1593,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "2.756,00"
  },
  {
    id: 1594,
    cliente: "JOSE BARRETO",
    identificacion: "V-5779873",
    monto: "15.792,34"
  },
  {
    id: 1595,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "14.293,72"
  },
  {
    id: 1596,
    cliente: "OSWALDO CALDERA",
    identificacion: "V-13404615",
    monto: "26.182,76"
  },
  {
    id: 1597,
    cliente: "WILLIAM PEÑA",
    identificacion: "V-23778886",
    monto: "4.358,05"
  },
  {
    id: 1598,
    cliente: "RAMON ATILIO BRICEÑO",
    identificacion: "V-2628497",
    monto: "7.121,02"
  },
  {
    id: 1599,
    cliente: "ADJAM HAMADE",
    identificacion: "V-16883697",
    monto: "36.870,26"
  },
  {
    id: 1600,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "263.550,15"
  },
  {
    id: 1601,
    cliente: "LUIS MARIO PLAZA",
    identificacion: "V-27179836",
    monto: "24.506,49"
  },
  {
    id: 1602,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "44.231,64"
  },
  {
    id: 1603,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "41.685,71"
  },
  {
    id: 1604,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "41.341,20"
  },
  {
    id: 1605,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "7.500,00"
  },
  {
    id: 1606,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "205.998,00"
  },
  {
    id: 1607,
    cliente: "DANY TEREAN",
    identificacion: "V-14309506",
    monto: "3.637,50"
  },
  {
    id: 1608,
    cliente: "YOSMER MENDOZA",
    identificacion: "V-31095014",
    monto: "4.850,00"
  },
  {
    id: 1609,
    cliente: "RICARDO VERGARA",
    identificacion: "V-31898161",
    monto: "27.887,50"
  },
  {
    id: 1610,
    cliente: "RAFAEL BRICEÑO",
    identificacion: "V-27304782",
    monto: "32.680,08"
  },
  {
    id: 1611,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "59.364,07"
  },
  {
    id: 1612,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "27.020,44"
  },
  {
    id: 1613,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "9.554,97"
  },
  {
    id: 1614,
    cliente: "RUBEN GARCIA",
    identificacion: "V-24138530",
    monto: "642,43"
  },
  {
    id: 1615,
    cliente: "ROMULO ARAUJO",
    identificacion: "V-10030394",
    monto: "3.375,37"
  },
  {
    id: 1616,
    cliente: "JOSE BLANCO",
    identificacion: "V-15941131",
    monto: "36.211,32"
  },
  {
    id: 1617,
    cliente: "ALBIN AVILA",
    identificacion: "V-21206090",
    monto: "28.705,21"
  },
  {
    id: 1618,
    cliente: "CARLOS ARAUJO",
    identificacion: "V-8659927",
    monto: "322,95"
  },
  {
    id: 1619,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "26.237,76"
  },
  {
    id: 1620,
    cliente: "BERTA VALERA",
    identificacion: "V-8721732",
    monto: "8.783,24"
  },
  {
    id: 1621,
    cliente: "JOSE DELGADO",
    identificacion: "V-28542072",
    monto: "4.514,10"
  },
  {
    id: 1622,
    cliente: "WUENDER DOMINGUEZ",
    identificacion: "V-26114033",
    monto: "1.399,72"
  },
  {
    id: 1623,
    cliente: "PRADO SANTIAGO",
    identificacion: "V-10914386",
    monto: "13.510,80"
  },
  {
    id: 1624,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "35.333,29"
  },
  {
    id: 1625,
    cliente: "JESUS ROMAN",
    identificacion: "V-17094172",
    monto: "7.698,46"
  },
  {
    id: 1626,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "261.491,54"
  },
  {
    id: 1627,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "17.562,83"
  },
  {
    id: 1628,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "22.465,50"
  },
  {
    id: 1629,
    cliente: "CARMEN GIL",
    identificacion: "V-5505840",
    monto: "5.361,19"
  },
  {
    id: 1630,
    cliente: "LEWIS MORILLO",
    identificacion: "V-18260548",
    monto: "4.959,10"
  },
  {
    id: 1631,
    cliente: "INVERSIONES CONTICINIO EXPRESS, C.A",
    identificacion: "J-40841276-4",
    monto: "8.853,02"
  },
  {
    id: 1632,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "49.876,20"
  },
  {
    id: 1633,
    cliente: "LUISMER CARRILLO",
    identificacion: "V-04247846",
    monto: "11.820,72"
  },
  {
    id: 1634,
    cliente: "LUISMER CARRILLO",
    identificacion: "V-04247846",
    monto: "705,42"
  },
  {
    id: 1635,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "37.034,55"
  },
  {
    id: 1636,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "43.471,67"
  },
  {
    id: 1637,
    cliente: "JOSE GODOY",
    identificacion: "V-11895716",
    monto: "23.451,68"
  },
  {
    id: 1638,
    cliente: "EDUARDO LEAL",
    identificacion: "v-25303801",
    monto: "8.394,48"
  },
  {
    id: 1639,
    cliente: "ALBIN AVILA",
    identificacion: "V-21206090",
    monto: "6.413,00"
  },
  {
    id: 1640,
    cliente: "TONY BAPTISTA",
    identificacion: "V-23837296",
    monto: "941,74"
  },
  {
    id: 1641,
    cliente: "ALBERT LOBO",
    identificacion: "V-20656969",
    monto: "33.194,12"
  },
  {
    id: 1642,
    cliente: "MARCOS TULIO ALDANA",
    identificacion: "V-8717736",
    monto: "12.968,11"
  },
  {
    id: 1643,
    cliente: "MARCOS TULIO ALDANA",
    identificacion: "V-8717736",
    monto: "51.199,20"
  },
  {
    id: 1644,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "9.614,08"
  },
  {
    id: 1645,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-13765471",
    monto: "14.222,00"
  },
  {
    id: 1646,
    cliente: "MARCOS TULIO ALDANA",
    identificacion: "V-8717736",
    monto: "2.954,61"
  },
  {
    id: 1647,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "43.823,58"
  },
  {
    id: 1648,
    cliente: "AMARILIS BENCOMO",
    identificacion: "V-16740578",
    monto: "17.465,00"
  },
  {
    id: 1649,
    cliente: "ANTONI MAURO",
    identificacion: "V-23838988",
    monto: "3.305,88"
  },
  {
    id: 1650,
    cliente: "ISMAR LOMEILLI",
    identificacion: "V-30024790",
    monto: "127.998,00"
  },
  {
    id: 1651,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "15.251,17"
  },
  {
    id: 1652,
    cliente: "JORGE MORENO",
    identificacion: "V-26368218",
    monto: "810,88"
  },
  {
    id: 1653,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "7.516,19"
  },
  {
    id: 1654,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "3.243,50"
  },
  {
    id: 1655,
    cliente: "NICOLAS LAGUNA",
    identificacion: "V-5770893",
    monto: "2.915,52"
  },
  {
    id: 1656,
    cliente: "FLOR BRICEÑO",
    identificacion: "V-16739586",
    monto: "26.331,81"
  },
  {
    id: 1657,
    cliente: "JEAN CARLOS GIL",
    identificacion: "V-17865745",
    monto: "39.252,72"
  },
  {
    id: 1658,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "11.407,46"
  },
  {
    id: 1659,
    cliente: "JUANA AGUILAR",
    identificacion: "V-31581469",
    monto: "1.187,54"
  },
  {
    id: 1660,
    cliente: "ALEJANDRO CELLA",
    identificacion: "V-14719253",
    monto: "50.189,44"
  },
  {
    id: 1661,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "109.560,00"
  },
  {
    id: 1662,
    cliente: "REYSEL PERDOMO",
    identificacion: "V-30867722",
    monto: "3.048,52"
  },
  {
    id: 1663,
    cliente: "EDGAR CARDOZA",
    identificacion: "V-17267820",
    monto: "9.575,70"
  },
  {
    id: 1664,
    cliente: "RAFAEL SALCEDO",
    identificacion: "V-4060517",
    monto: "16.151,40"
  },
  {
    id: 1665,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "27.039,37"
  },
  {
    id: 1666,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "29.569,32"
  },
  {
    id: 1667,
    cliente: "ROBINSON QUINTERO",
    identificacion: "V-25309900",
    monto: "40.802,72"
  },
  {
    id: 1668,
    cliente: "LILIANA VAENDAÑO",
    identificacion: "V-19794051",
    monto: "28.919,20"
  },
  {
    id: 1669,
    cliente: "YOHAN CASTELLANOS",
    identificacion: "V-23304548",
    monto: "2.711,18"
  },
  {
    id: 1670,
    cliente: "YOHAN CASTELLANOS",
    identificacion: "V-23304548",
    monto: "1.445,96"
  },
  {
    id: 1671,
    cliente: "GRAN DAVID CA",
    identificacion: "J-31493584-4",
    monto: "93.987,40"
  },
  {
    id: 1672,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "18.538,54"
  },
  {
    id: 1673,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "31.606,00"
  },
  {
    id: 1674,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "14.188,39"
  },
  {
    id: 1675,
    cliente: "FRANCISCO MORENO",
    identificacion: "V-16881404",
    monto: "52.020,73"
  },
  {
    id: 1676,
    cliente: "JOSE PAREDES",
    identificacion: "V-17830342",
    monto: "25.304,28"
  },
  {
    id: 1677,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "74.154,16"
  },
  {
    id: 1678,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "20.886,26"
  },
  {
    id: 1679,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "34.341,55"
  },
  {
    id: 1680,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "11.563,97"
  },
  {
    id: 1681,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "16.170,00"
  },
  {
    id: 1682,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "155.858,82"
  },
  {
    id: 1683,
    cliente: "JESUS RAMIREZ",
    identificacion: "V-12040799",
    monto: "2.785,64"
  },
  {
    id: 1684,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "49.835,17"
  },
  {
    id: 1685,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "49.457,76"
  },
  {
    id: 1686,
    cliente: "JOSE GONZALES",
    identificacion: "V-12569511",
    monto: "4.600,30"
  },
  {
    id: 1687,
    cliente: "JOSE DAVIDA ARAUJO",
    identificacion: "V-20656725",
    monto: "36.366,00"
  },
  {
    id: 1688,
    cliente: "JOSE PEREZ",
    identificacion: "V-12906091",
    monto: "12.728,10"
  },
  {
    id: 1689,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "4.600,30"
  },
  {
    id: 1690,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "2.363,79"
  },
  {
    id: 1691,
    cliente: "NANCY TORRES",
    identificacion: "V-5762875",
    monto: "727,32"
  },
  {
    id: 1692,
    cliente: "JOSE TERAN",
    identificacion: "V-12331782",
    monto: "20.219,50"
  },
  {
    id: 1693,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "6.030,60"
  },
  {
    id: 1694,
    cliente: "WILLIAN DIAZ",
    identificacion: "V-15043870",
    monto: "774,59"
  },
  {
    id: 1695,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "27.012,67"
  },
  {
    id: 1696,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "19.794,10"
  },
  {
    id: 1697,
    cliente: "SOGEL SALLAN",
    identificacion: "V-12722087",
    monto: "101.824,80"
  },
  {
    id: 1698,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "41.457,24"
  },
  {
    id: 1699,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "4.029,36"
  },
  {
    id: 1700,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "26.848,18"
  },
  {
    id: 1701,
    cliente: "ALIRIO SANTIAGO",
    identificacion: "V-5755115",
    monto: "1.895,32"
  },
  {
    id: 1702,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "3.400,00"
  },
  {
    id: 1703,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "7.695,13"
  },
  {
    id: 1704,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "789,72"
  },
  {
    id: 1705,
    cliente: "YADIXA ZAMBRANO",
    identificacion: "V-9495847",
    monto: "734,62"
  },
  {
    id: 1706,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "7.963,28"
  },
  {
    id: 1707,
    cliente: "JORGE LUIS VARGAS",
    identificacion: "V-21208426",
    monto: "9.322,33"
  },
  {
    id: 1708,
    cliente: "LUIS MARIO PLAZA",
    identificacion: "V-27179836",
    monto: "48.605,25"
  },
  {
    id: 1709,
    cliente: "GENESIS DURAN",
    identificacion: "V-24409750",
    monto: "33.194,14"
  },
  {
    id: 1710,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "2.108,36"
  },
  {
    id: 1711,
    cliente: "ARISTIDES BARRIENTOS",
    identificacion: "V-5791998",
    monto: "4.850,27"
  },
  {
    id: 1712,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "31.221,35"
  },
  {
    id: 1713,
    cliente: "ALIRIO SANTIAGO",
    identificacion: "V-5755115",
    monto: "10.530,00"
  },
  {
    id: 1714,
    cliente: "MARCOS TULIO ALDANA",
    identificacion: "V-8717736",
    monto: "13.162,50"
  },
  {
    id: 1715,
    cliente: "EZEQUIEL SANCHEZ",
    identificacion: "V-6701788",
    monto: "42.564,71"
  },
  {
    id: 1716,
    cliente: "LUILLY BAGNONI",
    identificacion: "V-19794546",
    monto: "4.120,88"
  },
  {
    id: 1717,
    cliente: "RAMON MONTILLA",
    identificacion: "V-13261815",
    monto: "3.712,00"
  },
  {
    id: 1718,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "45.037,94"
  },
  {
    id: 1719,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "20.917,90"
  },
  {
    id: 1720,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "140.695,00"
  },
  {
    id: 1721,
    cliente: "PEDRO BASTIDAS",
    identificacion: "V-20040055",
    monto: "11.807,27"
  },
  {
    id: 1722,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-15294167",
    monto: "64.793,75"
  },
  {
    id: 1723,
    cliente: "ARGENIS BASTIDAS",
    identificacion: "V-30024657",
    monto: "23.625,00"
  },
  {
    id: 1724,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "28.593,00"
  },
  {
    id: 1725,
    cliente: "MARYELIS HERNANDEZ",
    identificacion: "V-29874581",
    monto: "106.046,84"
  },
  {
    id: 1726,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "8.133,75"
  },
  {
    id: 1727,
    cliente: "FRANKLIN VILLAREAL",
    identificacion: "V-26311755",
    monto: "16.291,00"
  },
  {
    id: 1728,
    cliente: "FRANKLIN VILLAREAL",
    identificacion: "V-26311755",
    monto: "76.545,00"
  },
  {
    id: 1729,
    cliente: "DANIEL TORRES",
    identificacion: "V-17347175",
    monto: "18.631,55"
  },
  {
    id: 1730,
    cliente: "DANIEL TORRES",
    identificacion: "V-17347175",
    monto: "6.471,88"
  },
  {
    id: 1731,
    cliente: "KELVIL SERRANO",
    identificacion: "V-28445168",
    monto: "5.205,72"
  },
  {
    id: 1732,
    cliente: "JESUS CHACON",
    identificacion: "V-16376566",
    monto: "1.332,90"
  },
  {
    id: 1733,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-15431896",
    monto: "24.066,25"
  },
  {
    id: 1734,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-15431896",
    monto: "18.549,53"
  },
  {
    id: 1735,
    cliente: "GRABIEL RIVERA",
    identificacion: "V-11316343",
    monto: "18.475,47"
  },
  {
    id: 1736,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "22.615,39"
  },
  {
    id: 1737,
    cliente: "OSCAR BRICEÑO",
    identificacion: "V-5755985",
    monto: "10.086,50"
  },
  {
    id: 1738,
    cliente: "JOEL PAREDES",
    identificacion: "V-21064749",
    monto: "9.885,70"
  },
  {
    id: 1739,
    cliente: "JOSE MORENO",
    identificacion: "V-26114294",
    monto: "12.497,23"
  },
  {
    id: 1740,
    cliente: "GABRIEL RIVAS",
    identificacion: "V-20429372",
    monto: "3.794,56"
  },
  {
    id: 1741,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "59.906,91"
  },
  {
    id: 1742,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "358.917,65"
  },
  {
    id: 1743,
    cliente: "FRANKLIN BENCOMO",
    identificacion: "V-14459332",
    monto: "1.481,00"
  },
  {
    id: 1744,
    cliente: "OSCAR MORENO",
    identificacion: "V-11614442",
    monto: "37.098,00"
  },
  {
    id: 1745,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "14.958,82"
  },
  {
    id: 1746,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "20.550,87"
  },
  {
    id: 1747,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "21.377,72"
  },
  {
    id: 1748,
    cliente: "JUAN CARLOS KELLY",
    identificacion: "V-12041321",
    monto: "6.325,87"
  },
  {
    id: 1749,
    cliente: "FRANKLIN BENCOMO",
    identificacion: "V-14459332",
    monto: "5.875,63"
  },
  {
    id: 1750,
    cliente: "ASOCIACION CIVIL CASA DE RETIRO JUAN PABLO II",
    identificacion: "J-30790973-0",
    monto: "27.005,76"
  },
  {
    id: 1751,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "33.944,74"
  },
  {
    id: 1752,
    cliente: "JESUS ROMAN",
    identificacion: "V-17094172",
    monto: "8.251,76"
  },
  {
    id: 1753,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "31.581,72"
  },
  {
    id: 1754,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "65.485,20"
  },
  {
    id: 1755,
    cliente: "RUBEN GARCIA",
    identificacion: "V-24138530",
    monto: "14.148,02"
  },
  {
    id: 1756,
    cliente: "EDUARDO RONDON",
    identificacion: "V-16533368",
    monto: "33.081,76"
  },
  {
    id: 1757,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "109.676,94"
  },
  {
    id: 1758,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "5.326,14"
  },
  {
    id: 1759,
    cliente: "OSMIC AGUILAR",
    identificacion: "V-12192827",
    monto: "62.273,52"
  },
  {
    id: 1760,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "15.933,16"
  },
  {
    id: 1761,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "59.607,45"
  },
  {
    id: 1762,
    cliente: "ROBERTO GALLO",
    identificacion: "V-9317242",
    monto: "6.590,00"
  },
  {
    id: 1763,
    cliente: "ASOCIACION CIVIL CASA DE RETIRO JUAN PABLO II",
    identificacion: "J-30790973-0",
    monto: "27.249,12"
  },
  {
    id: 1764,
    cliente: "HENRY HERNANDEZ",
    identificacion: "V-11894506",
    monto: "1.328,40"
  },
  {
    id: 1765,
    cliente: "JORDANO GONZALEZ",
    identificacion: "V-24786933",
    monto: "36.075,00"
  },
  {
    id: 1766,
    cliente: "STARLY TERAN",
    identificacion: "V-20400546",
    monto: "20.056,31"
  },
  {
    id: 1767,
    cliente: "JAVIER TORRES",
    identificacion: "V-15752377",
    monto: "66.419,73"
  },
  {
    id: 1768,
    cliente: "EDUAR LINARES",
    identificacion: "V-19271541",
    monto: "11.169,39"
  },
  {
    id: 1769,
    cliente: "JAVIER TORRES",
    identificacion: "V-15752377",
    monto: "7.856,82"
  },
  {
    id: 1770,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "22.294,94"
  },
  {
    id: 1771,
    cliente: "SIMON VALERA",
    identificacion: "V-16651232",
    monto: "121.238,79"
  },
  {
    id: 1772,
    cliente: "JOSE MARIA ARAUJO",
    identificacion: "V-5771182",
    monto: "46.486,00"
  },
  {
    id: 1773,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "135.462,84"
  },
  {
    id: 1774,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "135.462,84"
  },
  {
    id: 1775,
    cliente: "HUGO RANGEL",
    identificacion: "V-10256491",
    monto: "483.888,16"
  },
  {
    id: 1776,
    cliente: "MARIELA MARQUEZ",
    identificacion: "V-11618001",
    monto: "2.286,66"
  },
  {
    id: 1777,
    cliente: "NELY BRICEÑO",
    identificacion: "V-13633632",
    monto: "26.678,00"
  },
  {
    id: 1778,
    cliente: "NELY BRICEÑO",
    identificacion: "V-13633632",
    monto: "11.397,13"
  },
  {
    id: 1779,
    cliente: "BLAS ANTONIO SUAREZ",
    identificacion: "V-13449065",
    monto: "14.714,66"
  },
  {
    id: 1780,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "77.799,78"
  },
  {
    id: 1781,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "354,43"
  },
  {
    id: 1782,
    cliente: "MIGUEL GARCES",
    identificacion: "V-25485846",
    monto: "20.923,61"
  },
  {
    id: 1783,
    cliente: "LEONARDO TORRES",
    identificacion: "V-10909014",
    monto: "25.953,60"
  },
  {
    id: 1784,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "6.097,76"
  },
  {
    id: 1785,
    cliente: "LUIS PALMA",
    identificacion: "V-11896855",
    monto: "6.122,08"
  },
  {
    id: 1786,
    cliente: "ALIRIO SANTIAGO",
    identificacion: "V-5755115",
    monto: "6.872,00"
  },
  {
    id: 1787,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "23.773,29"
  },
  {
    id: 1788,
    cliente: "RICHRAD VILLARREAL",
    identificacion: "V-23593432",
    monto: "47.352,94"
  },
  {
    id: 1789,
    cliente: "JOSE GIL",
    identificacion: "V-17347681",
    monto: "22.383,85"
  },
  {
    id: 1790,
    cliente: "ALBA PEREZ",
    identificacion: "V-21367008",
    monto: "4.021,44"
  },
  {
    id: 1791,
    cliente: "DALIA ZERPA",
    identificacion: "V-14719512",
    monto: "1.683,57"
  },
  {
    id: 1792,
    cliente: "DALIA ZERPA",
    identificacion: "V-14719512",
    monto: "585,42"
  },
  {
    id: 1793,
    cliente: "JAVIER MENDEZ",
    identificacion: "V-14151267",
    monto: "1.530,52"
  },
  {
    id: 1794,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "3.612,03"
  },
  {
    id: 1795,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "73.256,58"
  },
  {
    id: 1796,
    cliente: "HUMBERTO LINARES",
    identificacion: "V-11610042",
    monto: "137.796,45"
  },
  {
    id: 1797,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "11.074,00"
  },
  {
    id: 1798,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "24.163,08"
  },
  {
    id: 1799,
    cliente: "YOENDRI MORENO",
    identificacion: "V-29539704",
    monto: "7.890,84"
  },
  {
    id: 1800,
    cliente: "GILBERTO UZCATEGUI",
    identificacion: "V-5280075",
    monto: "14.650,58"
  },
  {
    id: 1801,
    cliente: "REINALDO BRICEÑO",
    identificacion: "V-4062851",
    monto: "53.568,20"
  },
  {
    id: 1802,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "8.510,31"
  },
  {
    id: 1803,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "10.436,11"
  },
  {
    id: 1804,
    cliente: "SHENGS NATURAL PRODUCTS, C.A",
    identificacion: "J-40350415-6",
    monto: "22.531,22"
  },
  {
    id: 1805,
    cliente: "RAMON ROMAN",
    identificacion: "V-5780848",
    monto: "3.743,13"
  },
  {
    id: 1806,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "0,00"
  },
  {
    id: 1807,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-15293806",
    monto: "2.200,12"
  },
  {
    id: 1808,
    cliente: "GABRIEL MOLINA",
    identificacion: "V-15217299",
    monto: "8.510,31"
  },
  {
    id: 1809,
    cliente: "HUMBERTO LINARES",
    identificacion: "V-11610042",
    monto: "4.802,50"
  },
  {
    id: 1810,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "38.492,57"
  },
  {
    id: 1811,
    cliente: "ANYER PRIMERA",
    identificacion: "V-17333929",
    monto: "4.736,96"
  },
  {
    id: 1812,
    cliente: "ANYER PRIMERA",
    identificacion: "V-17333929",
    monto: "765,26"
  },
  {
    id: 1813,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "32.217,44"
  },
  {
    id: 1814,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "59.001,56"
  },
  {
    id: 1815,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "42.657,11"
  },
  {
    id: 1816,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "104.225,55"
  },
  {
    id: 1817,
    cliente: "JOSE AVILA",
    identificacion: "V-12719032",
    monto: "167.592,45"
  },
  {
    id: 1818,
    cliente: "JESUS SANTELIS",
    identificacion: "V-25302864",
    monto: "40.453,35"
  },
  {
    id: 1819,
    cliente: "PEDRO JEREZ",
    identificacion: "V-16066214",
    monto: "7.705,40"
  },
  {
    id: 1820,
    cliente: "WILLIAN ROMERO",
    identificacion: "V-13261056",
    monto: "15.041,26"
  },
  {
    id: 1821,
    cliente: "LUIS CARRILLO",
    identificacion: "V-14799885",
    monto: "6.241,37"
  },
  {
    id: 1822,
    cliente: "RAFAEL UZCATEGUI",
    identificacion: "V-5348085",
    monto: "52.011,45"
  },
  {
    id: 1823,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "46.586,84"
  },
  {
    id: 1824,
    cliente: "CARLOS RODRIGUEZ",
    identificacion: "V-14928503",
    monto: "13.099,18"
  },
  {
    id: 1825,
    cliente: "RAFAEL UZCATEGUI",
    identificacion: "V-5348085",
    monto: "6.088,13"
  },
  {
    id: 1826,
    cliente: "HERNAN MATOS",
    identificacion: "V-12499572",
    monto: "2.332,44"
  },
  {
    id: 1827,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-15294167",
    monto: "9.174,26"
  },
  {
    id: 1828,
    cliente: "JESUS SANTELIS",
    identificacion: "V-25302864",
    monto: "44.316,36"
  },
  {
    id: 1829,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-15294167",
    monto: "4.151,76"
  },
  {
    id: 1830,
    cliente: "CARLOS LINARES",
    identificacion: "V-12042776",
    monto: "932,97"
  },
  {
    id: 1831,
    cliente: "VICENTE GONZALEZ",
    identificacion: "V-14309441",
    monto: "13.605,90"
  },
  {
    id: 1832,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "223.812,28"
  },
  {
    id: 1833,
    cliente: "FRANCISCO AZUAJE",
    identificacion: "V-18377644",
    monto: "22.546,92"
  },
  {
    id: 1834,
    cliente: "YUSGLEDY SEGOVIA",
    identificacion: "V-25373453",
    monto: "56.792,64"
  },
  {
    id: 1835,
    cliente: "GONZALO VASQUEZ",
    identificacion: "V-17509752",
    monto: "2.332,44"
  },
  {
    id: 1836,
    cliente: "JOSE ANDRADE",
    identificacion: "V-13243824",
    monto: "22.741,29"
  },
  {
    id: 1837,
    cliente: "CARLOS ALVARES",
    identificacion: "V-25373240",
    monto: "55.500,00"
  },
  {
    id: 1838,
    cliente: "JORGE LUIS VALECILLOS SAEZ",
    identificacion: "V-11618826",
    monto: "123.685,27"
  },
  {
    id: 1839,
    cliente: "MANUEL ROSARIO",
    identificacion: "V-4318390",
    monto: "80.017,24"
  },
  {
    id: 1840,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "22.831,97"
  },
  {
    id: 1841,
    cliente: "DANNY TORRES",
    identificacion: "V-17265501",
    monto: "10.969,31"
  },
  {
    id: 1842,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "144.684,00"
  },
  {
    id: 1843,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "114.456,46"
  },
  {
    id: 1844,
    cliente: "HUMBERTO LINARES",
    identificacion: "V-11610042",
    monto: "40.914,19"
  },
  {
    id: 1845,
    cliente: "JOSE LUIS GIL",
    identificacion: "V-1003210",
    monto: "22.831,97"
  },
  {
    id: 1846,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "786,44"
  },
  {
    id: 1847,
    cliente: "YOSMAR BECERRA",
    identificacion: "V-25374268",
    monto: "6.756,88"
  },
  {
    id: 1848,
    cliente: "CARLA GARCIA",
    identificacion: "V-16065458",
    monto: "10.978,70"
  },
  {
    id: 1849,
    cliente: "JESUS ROMERO",
    identificacion: "V-17265420",
    monto: "21.145,47"
  },
  {
    id: 1850,
    cliente: "JUAN CARLOS FARIAS",
    identificacion: "V-15294849",
    monto: "5.576,20"
  },
  {
    id: 1851,
    cliente: "PEDRO VILLARREAL",
    identificacion: "V-15583592",
    monto: "4.647,86"
  },
  {
    id: 1852,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "2.359,32"
  },
  {
    id: 1853,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "6.402,00"
  },
  {
    id: 1854,
    cliente: "JOSE RIVAS",
    identificacion: "V-12540708",
    monto: "24.576,25"
  },
  {
    id: 1855,
    cliente: "ANDERSON ASUAJE",
    identificacion: "V-18925939",
    monto: "65.651,98"
  },
  {
    id: 1856,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "9.315,00"
  },
  {
    id: 1857,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "4.623,13"
  },
  {
    id: 1858,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "25.249,39"
  },
  {
    id: 1859,
    cliente: "ALIRIO SANTIAGO",
    identificacion: "V-5755115",
    monto: "14.508,00"
  },
  {
    id: 1860,
    cliente: "MARCOS TULIO ALDANA",
    identificacion: "V-8717736",
    monto: "10.979,70"
  },
  {
    id: 1861,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "9.949,14"
  },
  {
    id: 1862,
    cliente: "FELIPE RAMIREZ",
    identificacion: "V-9179866",
    monto: "1.902,60"
  },
  {
    id: 1863,
    cliente: "MILAGROS TORRES",
    identificacion: "V-5765972",
    monto: "1.585,52"
  },
  {
    id: 1864,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "75.312,20"
  },
  {
    id: 1865,
    cliente: "ARTURO MACIAS",
    identificacion: "V-9170929",
    monto: "3.171,04"
  },
  {
    id: 1866,
    cliente: "ZAIDA LEON",
    identificacion: "V-14780845",
    monto: "10.956,40"
  },
  {
    id: 1867,
    cliente: "SANDRO FLORES",
    identificacion: "V-12458456",
    monto: "17.615,12"
  },
  {
    id: 1868,
    cliente: "RAFAEL HOYOS",
    identificacion: "V-12549080",
    monto: "64.255,92"
  },
  {
    id: 1869,
    cliente: "BERNI ANDRADE",
    identificacion: "V-19148954",
    monto: "9.984,00"
  },
  {
    id: 1870,
    cliente: "BERNI ANDRADE",
    identificacion: "V-19148954",
    monto: "6.120,00"
  },
  {
    id: 1871,
    cliente: "EDUAR LINARES",
    identificacion: "V-19271541",
    monto: "17.427,82"
  },
  {
    id: 1872,
    cliente: "RENE MIGUEL BARRIOS",
    identificacion: "V-11897501",
    monto: "3.963,80"
  },
  {
    id: 1873,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "9.984,00"
  },
  {
    id: 1874,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "39.717,28"
  },
  {
    id: 1875,
    cliente: "NELY BRICEÑO",
    identificacion: "V-13633632",
    monto: "27.912,50"
  },
  {
    id: 1876,
    cliente: "MARIO TORRES",
    identificacion: "V-10310945",
    monto: "4.067,24"
  },
  {
    id: 1877,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "11.930,12"
  },
  {
    id: 1878,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "34.890,65"
  },
  {
    id: 1879,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "2.448,32"
  },
  {
    id: 1880,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "22.888,26"
  },
  {
    id: 1881,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "20.695,15"
  },
  {
    id: 1882,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "42.332,83"
  },
  {
    id: 1883,
    cliente: "JORGE LUIS VALECILLOS SAEZ",
    identificacion: "V-11618826",
    monto: "129.007,11"
  },
  {
    id: 1884,
    cliente: "ANDRES DIAZ PACHECO",
    identificacion: "V-11618556",
    monto: "2.816,30"
  },
  {
    id: 1885,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-20040636",
    monto: "4.425,63"
  },
  {
    id: 1886,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "1.609,32"
  },
  {
    id: 1887,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "3.787,50"
  },
  {
    id: 1888,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "31.409,88"
  },
  {
    id: 1889,
    cliente: "YOSMAR BECERRA",
    identificacion: "V-25374268",
    monto: "16.319,06"
  },
  {
    id: 1890,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "62.913,87"
  },
  {
    id: 1891,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "12.245,62"
  },
  {
    id: 1892,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "35.294,00"
  },
  {
    id: 1893,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "14.823,68"
  },
  {
    id: 1894,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "5.743,78"
  },
  {
    id: 1895,
    cliente: "CHALBAUD PEREZ",
    identificacion: "V-12046722",
    monto: "4.500,00"
  },
  {
    id: 1896,
    cliente: "MAIRA MENDEZ",
    identificacion: "V-14139086",
    monto: "16.700,42"
  },
  {
    id: 1897,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "22.238,32"
  },
  {
    id: 1898,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "143.200,61"
  },
  {
    id: 1899,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "5.837,04"
  },
  {
    id: 1900,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "18.992,30"
  },
  {
    id: 1901,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "25.505,87"
  },
  {
    id: 1902,
    cliente: "JESUS CHACON",
    identificacion: "V-16376566",
    monto: "1.783,54"
  },
  {
    id: 1903,
    cliente: "SHENGS NATURAL PRODUCTS, C.A",
    identificacion: "J-40350415-6",
    monto: "62.626,50"
  },
  {
    id: 1904,
    cliente: "JOSE BARRIOS",
    identificacion: "V-5105379",
    monto: "24.936,89"
  },
  {
    id: 1905,
    cliente: "FRACISCO BARRIOS",
    identificacion: "V-17267473",
    monto: "20.794,03"
  },
  {
    id: 1906,
    cliente: "ISRAEL PEÑA",
    identificacion: "V-23252947",
    monto: "40.211,33"
  },
  {
    id: 1907,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "39.933,02"
  },
  {
    id: 1908,
    cliente: "CARLOS ANDARA",
    identificacion: "V-16066540",
    monto: "2.411,83"
  },
  {
    id: 1909,
    cliente: "FRANCISCO AZUAJE",
    identificacion: "V-18377644",
    monto: "55.113,42"
  },
  {
    id: 1910,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "20.680,64"
  },
  {
    id: 1911,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "33.778,48"
  },
  {
    id: 1912,
    cliente: "EDUARDO HERNANDEZ",
    identificacion: "V-19285084",
    monto: "39.138,00"
  },
  {
    id: 1913,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "9.041,88"
  },
  {
    id: 1914,
    cliente: "JOSE BARRIOS",
    identificacion: "V-5357480",
    monto: "17.444,00"
  },
  {
    id: 1915,
    cliente: "JOSE BARRIOS",
    identificacion: "V-5357480",
    monto: "9.277,76"
  },
  {
    id: 1916,
    cliente: "MICHEL ATTAR",
    identificacion: "V-23838423",
    monto: "9.035,68"
  },
  {
    id: 1917,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "81.691,91"
  },
  {
    id: 1918,
    cliente: "LISBETH ARAUJO",
    identificacion: "V-15293121",
    monto: "10.134,17"
  },
  {
    id: 1919,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "16.534,84"
  },
  {
    id: 1920,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-16738775",
    monto: "13.574,70"
  },
  {
    id: 1921,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "2.444,28"
  },
  {
    id: 1922,
    cliente: "DEIVI TERAN",
    identificacion: "V-19147552",
    monto: "8.221,80"
  },
  {
    id: 1923,
    cliente: "JESUS VILORIA",
    identificacion: "V-4324812",
    monto: "6.321,00"
  },
  {
    id: 1924,
    cliente: "JORGE LUIS URRIETA",
    identificacion: "V-11619572",
    monto: "47.275,35"
  },
  {
    id: 1925,
    cliente: "JORGE LUIS URRIETA",
    identificacion: "V-11619572",
    monto: "6.248,57"
  },
  {
    id: 1926,
    cliente: "CARLOS ZOTO",
    identificacion: "V-12326807",
    monto: "122.385,81"
  },
  {
    id: 1927,
    cliente: "CARLOS ZOTO",
    identificacion: "V-12326807",
    monto: "9.438,63"
  },
  {
    id: 1928,
    cliente: "ALVARO EUGENIO",
    identificacion: "V-22892995",
    monto: "36.303,77"
  },
  {
    id: 1929,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "15.856,61"
  },
  {
    id: 1930,
    cliente: "ALVARO EUGENIO",
    identificacion: "V-22892995",
    monto: "4.110,90"
  },
  {
    id: 1931,
    cliente: "YOANDER VERGARA",
    identificacion: "V-30235738",
    monto: "91.261,90"
  },
  {
    id: 1932,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "122.950,55"
  },
  {
    id: 1933,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "46.547,72"
  },
  {
    id: 1934,
    cliente: "JOSE LUIS GIL",
    identificacion: "V-1003210",
    monto: "24.048,76"
  },
  {
    id: 1935,
    cliente: "EVER GODOY",
    identificacion: "V-18149161",
    monto: "15.128,11"
  },
  {
    id: 1936,
    cliente: "DANIEL DURAN",
    identificacion: "V-21265626",
    monto: "22.527,73"
  },
  {
    id: 1937,
    cliente: "JOSE VILORIA",
    identificacion: "V-26757197",
    monto: "38.023,14"
  },
  {
    id: 1938,
    cliente: "GERARDO QUINTERO",
    identificacion: "V-9164668",
    monto: "36.644,00"
  },
  {
    id: 1939,
    cliente: "GUSTAVO MENDOZA",
    identificacion: "V-10396041",
    monto: "6.380,00"
  },
  {
    id: 1940,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "165.456,40"
  },
  {
    id: 1941,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "16.785,99"
  },
  {
    id: 1942,
    cliente: "DENNYS GODOY",
    identificacion: "V-15826419",
    monto: "17.547,87"
  },
  {
    id: 1943,
    cliente: "YOVANY MORENO",
    identificacion: "V-14983042",
    monto: "16.255,99"
  },
  {
    id: 1944,
    cliente: "JUAN MORILLO",
    identificacion: "V-20402385",
    monto: "31.675,50"
  },
  {
    id: 1945,
    cliente: "RAFEL GODOY",
    identificacion: "V-25194074",
    monto: "278.905,40"
  },
  {
    id: 1946,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "67.897,61"
  },
  {
    id: 1947,
    cliente: "ARSENIO BARRUETA SANCHEZ",
    identificacion: "V-5755198",
    monto: "12.218,87"
  },
  {
    id: 1948,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "7.607,05"
  },
  {
    id: 1949,
    cliente: "ENRIQUE VILLARREAL",
    identificacion: "V-9174626",
    monto: "4.173,60"
  },
  {
    id: 1950,
    cliente: "RAFAEL UZCATEGUI",
    identificacion: "V-5348085",
    monto: "4.221,19"
  },
  {
    id: 1951,
    cliente: "ORLANDO MORENO",
    identificacion: "V-18734068",
    monto: "45.583,86"
  },
  {
    id: 1952,
    cliente: "JESUS TABORDA",
    identificacion: "V-13260934",
    monto: "2.627,00"
  },
  {
    id: 1953,
    cliente: "JOSE VERGARA",
    identificacion: "V-24135872",
    monto: "6.686,10"
  },
  {
    id: 1954,
    cliente: "MARCO MERIÑO",
    identificacion: "V-15940216",
    monto: "16.799,60"
  },
  {
    id: 1955,
    cliente: "VICTOR MONTOLLA",
    identificacion: "V-25374051",
    monto: "2.948,33"
  },
  {
    id: 1956,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "43.100,10"
  },
  {
    id: 1957,
    cliente: "JOSE GIL",
    identificacion: "V-10032106",
    monto: "1.175,98"
  },
  {
    id: 1958,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "155.060,40"
  },
  {
    id: 1959,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "89.128,20"
  },
  {
    id: 1960,
    cliente: "RAMON HERNANDEZ",
    identificacion: "V-16534685",
    monto: "16.894,72"
  },
  {
    id: 1961,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "11.969,71"
  },
  {
    id: 1962,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "152.457,00"
  },
  {
    id: 1963,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "70.854,72"
  },
  {
    id: 1964,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "2.519,94"
  },
  {
    id: 1965,
    cliente: "JOSE ARAUJO",
    identificacion: "V-12499164",
    monto: "24.569,42"
  },
  {
    id: 1966,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "2.465,34"
  },
  {
    id: 1967,
    cliente: "GUSTAVO MONTILLA",
    identificacion: "V-33352026",
    monto: "2.519,94"
  },
  {
    id: 1968,
    cliente: "FRACISCO BARRIOS",
    identificacion: "V-17267473",
    monto: "9.480,00"
  },
  {
    id: 1969,
    cliente: "BENITO VERGARA",
    identificacion: "V-23594303",
    monto: "13.078,50"
  },
  {
    id: 1970,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "4.345,00"
  },
  {
    id: 1971,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "255.077,14"
  },
  {
    id: 1972,
    cliente: "FERNANDO MONTILLA",
    identificacion: "V-5790238",
    monto: "13.453,75"
  },
  {
    id: 1973,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "3.737,86"
  },
  {
    id: 1974,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "7.706,56"
  },
  {
    id: 1975,
    cliente: "JORGE LUIS VARGAS",
    identificacion: "V-21208426",
    monto: "209.231,82"
  },
  {
    id: 1976,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "24.679,98"
  },
  {
    id: 1977,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "14.019,07"
  },
  {
    id: 1978,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "29.390,92"
  },
  {
    id: 1979,
    cliente: "HECTOR PEÑA",
    identificacion: "V-2626600",
    monto: "14.343,92"
  },
  {
    id: 1980,
    cliente: "ENDER SANTIAGO",
    identificacion: "V-13996708",
    monto: "278.440,80"
  },
  {
    id: 1981,
    cliente: "CLEMENTE MORENO",
    identificacion: "V-12042446",
    monto: "7.611,88"
  },
  {
    id: 1982,
    cliente: "CLEMENTE MORENO",
    identificacion: "V-12042446",
    monto: "6.707,89"
  },
  {
    id: 1983,
    cliente: "JEAN CARLOS GIL",
    identificacion: "V-17865745",
    monto: "17.761,14"
  },
  {
    id: 1984,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "12.909,09"
  },
  {
    id: 1985,
    cliente: "LUIS ROJO",
    identificacion: "V-26641602",
    monto: "1.098,23"
  },
  {
    id: 1986,
    cliente: "JOSE GREGORIO CAMPO",
    identificacion: "V-17094998",
    monto: "7.754,00"
  },
  {
    id: 1987,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "61.361,63"
  },
  {
    id: 1988,
    cliente: "JOSE ARMANDO AVENDAÑO",
    identificacion: "V-11318494",
    monto: "72.363,90"
  },
  {
    id: 1989,
    cliente: "JORGE MORENO",
    identificacion: "V-26368218",
    monto: "1.702,68"
  },
  {
    id: 1990,
    cliente: "ALBERTO ENRIQUE CASTELLANOS",
    identificacion: "V-15709290",
    monto: "32.717,57"
  },
  {
    id: 1991,
    cliente: "KEVIN REA",
    identificacion: "V-25302058",
    monto: "10.586,41"
  },
  {
    id: 1992,
    cliente: "JUNIOR RANGEL",
    identificacion: "V-25485542",
    monto: "5.959,38"
  },
  {
    id: 1993,
    cliente: "VICTOR RAMOS",
    identificacion: "V-11857653",
    monto: "5.550,51"
  },
  {
    id: 1994,
    cliente: "CARRIZO VILLEGAS TIBURCIO RAMON",
    identificacion: "V-9168341",
    monto: "3.294,69"
  },
  {
    id: 1995,
    cliente: "CARRIZO VILLEGAS TIBURCIO RAMON",
    identificacion: "V-9168341",
    monto: "2.693,63"
  },
  {
    id: 1996,
    cliente: "ANTONIO MARTINEZ TERAN",
    identificacion: "V-4321487",
    monto: "7.274,81"
  },
  {
    id: 1997,
    cliente: "ROSMEL ALIRIO VERDI",
    identificacion: "V-16317267",
    monto: "4.493,27"
  },
  {
    id: 1998,
    cliente: "JESUS RAMIREZ",
    identificacion: "V-12040799",
    monto: "7.234,26"
  },
  {
    id: 1999,
    cliente: "JUAN DE DIOS VALERO",
    identificacion: "V-9081797",
    monto: "3.423,44"
  },
  {
    id: 2000,
    cliente: "JOSE ALARCON",
    identificacion: "V-18802532",
    monto: "16.175,80"
  },
  {
    id: 2001,
    cliente: "JOSE BARRETO",
    identificacion: "V-20039879",
    monto: "21.285,24"
  },
  {
    id: 2002,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "4.279,30"
  },
  {
    id: 2003,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "11.998,00"
  },
  {
    id: 2004,
    cliente: "GEOVANI UZCATEGUI",
    identificacion: "V-12907945",
    monto: "4.750,02"
  },
  {
    id: 2005,
    cliente: "JESUS ALBERTO AVENDAÑO GONZALEZ",
    identificacion: "V-13261049",
    monto: "4.227,76"
  },
  {
    id: 2006,
    cliente: "LUIS VALERA",
    identificacion: "V-17037593",
    monto: "9.414,46"
  },
  {
    id: 2007,
    cliente: "CARMEN BARRIOS",
    identificacion: "V-15752465",
    monto: "2.781,55"
  },
  {
    id: 2008,
    cliente: "ALBERTO ENRIQUE CASTELLANOS",
    identificacion: "V-15709290",
    monto: "40.704,70"
  },
  {
    id: 2009,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "75.338,60"
  },
  {
    id: 2010,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "150.853,95"
  },
  {
    id: 2011,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "77.581,80"
  },
  {
    id: 2012,
    cliente: "REINALDO BRICEÑO",
    identificacion: "V-4062851",
    monto: "90.512,37"
  },
  {
    id: 2013,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "35.299,81"
  },
  {
    id: 2014,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "16.495,54"
  },
  {
    id: 2015,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "2.293,00"
  },
  {
    id: 2016,
    cliente: "JOSE AVILA",
    identificacion: "V-20400053",
    monto: "99.740,32"
  },
  {
    id: 2017,
    cliente: "JESUS MONTAÑA",
    identificacion: "V-16276844",
    monto: "9.800,00"
  },
  {
    id: 2018,
    cliente: "ARGENIS VERGARA",
    identificacion: "V-11316351",
    monto: "4.952,31"
  },
  {
    id: 2019,
    cliente: "JOSE MARQUES",
    identificacion: "V-5790164",
    monto: "14.654,38"
  },
  {
    id: 2020,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "866,33"
  },
  {
    id: 2021,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "9.529,66"
  },
  {
    id: 2022,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "44.752,09"
  },
  {
    id: 2023,
    cliente: "MARIELA TORREALBA",
    identificacion: "V-14928146",
    monto: "1.221,52"
  },
  {
    id: 2024,
    cliente: "ELIANET ARAQUE",
    identificacion: "V-16266161",
    monto: "2.490,71"
  },
  {
    id: 2025,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "12.886,70"
  },
  {
    id: 2026,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "269.208,36"
  },
  {
    id: 2027,
    cliente: "OMAYRA MONATILLA",
    identificacion: "V-12723960",
    monto: "2.772,28"
  },
  {
    id: 2028,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "93.080,94"
  },
  {
    id: 2029,
    cliente: "JUAN LOAIZA",
    identificacion: "V-10688167",
    monto: "22.741,23"
  },
  {
    id: 2030,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "79.962,60"
  },
  {
    id: 2031,
    cliente: "WILSON PINEDA",
    identificacion: "V-19072462",
    monto: "39.176,47"
  },
  {
    id: 2032,
    cliente: "LISBETH ARAUJO",
    identificacion: "V-15293121",
    monto: "7.903,00"
  },
  {
    id: 2033,
    cliente: "OSWALDO JEREZ",
    identificacion: "V-2625834",
    monto: "88.630,17"
  },
  {
    id: 2034,
    cliente: "OSWALDO JEREZ",
    identificacion: "V-2625834",
    monto: "7.580,41"
  },
  {
    id: 2035,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "9.529,66"
  },
  {
    id: 2036,
    cliente: "JHOAN NUÑEZ",
    identificacion: "V-20789293",
    monto: "2.599,00"
  },
  {
    id: 2037,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "17.181,20"
  },
  {
    id: 2038,
    cliente: "MAXIMO BRICEÑO",
    identificacion: "V-13048850",
    monto: "6.497,40"
  },
  {
    id: 2039,
    cliente: "GREGORIO JESUS PEÑA",
    identificacion: "V-25832812",
    monto: "112.111,82"
  },
  {
    id: 2040,
    cliente: "EVERT ESCALONA",
    identificacion: "V-17597483",
    monto: "115.455,36"
  },
  {
    id: 2041,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "10.495,62"
  },
  {
    id: 2042,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "19.061,06"
  },
  {
    id: 2043,
    cliente: "ANTONIO ROMERO",
    identificacion: "V-9320152",
    monto: "122.147,72"
  },
  {
    id: 2044,
    cliente: "DANIEL LINARES",
    identificacion: "V-16652326",
    monto: "1.744,96"
  },
  {
    id: 2045,
    cliente: "DANIEL LINARES",
    identificacion: "V-16652326",
    monto: "2.181,21"
  },
  {
    id: 2046,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "4.434,38"
  },
  {
    id: 2047,
    cliente: "SANDRO FLORES",
    identificacion: "V-12458456",
    monto: "154.516,00"
  },
  {
    id: 2048,
    cliente: "ITALO RUIZ",
    identificacion: "V-11896667",
    monto: "17.013,42"
  },
  {
    id: 2049,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "311.475,36"
  },
  {
    id: 2050,
    cliente: "FELIX CASTELLANOS",
    identificacion: "V-26046661",
    monto: "30.536,93"
  },
  {
    id: 2051,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "3.271,81"
  },
  {
    id: 2052,
    cliente: "DANIEL LINARES",
    identificacion: "V-25882122",
    monto: "872,48"
  },
  {
    id: 2053,
    cliente: "ALVARO EUGENIO",
    identificacion: "V-22892995",
    monto: "61.078,00"
  },
  {
    id: 2054,
    cliente: "CARLOS GARCIA",
    identificacion: "V-15188343",
    monto: "30.536,93"
  },
  {
    id: 2055,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "2.024,15"
  },
  {
    id: 2056,
    cliente: "MANUEL QUINTERO",
    identificacion: "V-11798825",
    monto: "21.812,10"
  },
  {
    id: 2057,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "57.429,54"
  },
  {
    id: 2058,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "75.220,00"
  },
  {
    id: 2059,
    cliente: "JEAN CARLOS HERNANDEZ",
    identificacion: "V-16951334",
    monto: "32.273,81"
  },
  {
    id: 2060,
    cliente: "ANTONIO ROMERO",
    identificacion: "V-9320152",
    monto: "184.046,10"
  },
  {
    id: 2061,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "8.303,98"
  },
  {
    id: 2062,
    cliente: "VICTOR TORRES",
    identificacion: "V-13897684",
    monto: "11.305,70"
  },
  {
    id: 2063,
    cliente: "JOSE LUIS GIL",
    identificacion: "V-1003210",
    monto: "32.956,99"
  },
  {
    id: 2064,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "85.449,99"
  },
  {
    id: 2065,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "13.685,19"
  },
  {
    id: 2066,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "582,81"
  },
  {
    id: 2067,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "12.660,13"
  },
  {
    id: 2068,
    cliente: "ANDRES MAMBEL",
    identificacion: "V-11898345",
    monto: "4.890,00"
  },
  {
    id: 2069,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "10.758,00"
  },
  {
    id: 2070,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-15952003",
    monto: "8.819,32"
  },
  {
    id: 2071,
    cliente: "JESUS TABORDA",
    identificacion: "V-13260934",
    monto: "25.796,49"
  },
  {
    id: 2072,
    cliente: "JESUS TABORDA",
    identificacion: "V-13260934",
    monto: "36.857,56"
  },
  {
    id: 2073,
    cliente: "JESUS TABORDA",
    identificacion: "V-13260934",
    monto: "6.834,97"
  },
  {
    id: 2074,
    cliente: "ADELSO HERNANDEZ",
    identificacion: "V-12041205",
    monto: "12.197,16"
  },
  {
    id: 2075,
    cliente: "ORLANDO JAVIER ERIZE PEREZ",
    identificacion: "V-5759252",
    monto: "7.716,90"
  },
  {
    id: 2076,
    cliente: "PEDRO LINARES",
    identificacion: "V-4920057",
    monto: "49.728,98"
  },
  {
    id: 2077,
    cliente: "JOSE ARAUJO",
    identificacion: "V-11322853",
    monto: "25.249,69"
  },
  {
    id: 2078,
    cliente: "GREGORIO JESUS PEÑA",
    identificacion: "V-25832812",
    monto: "36.535,21"
  },
  {
    id: 2079,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "89.943,32"
  },
  {
    id: 2080,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "9.543,36"
  },
  {
    id: 2081,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "30.584,85"
  },
  {
    id: 2082,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "13.741,02"
  },
  {
    id: 2083,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "16.099,16"
  },
  {
    id: 2084,
    cliente: "CARMEN VOLCANES",
    identificacion: "V-10032630",
    monto: "7.483,98"
  },
  {
    id: 2085,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "137.711,55"
  },
  {
    id: 2086,
    cliente: "JOSE MARQUES",
    identificacion: "V-5790164",
    monto: "15.191,36"
  },
  {
    id: 2087,
    cliente: "REINALDO BARRUETA",
    identificacion: "V-14459037",
    monto: "55.932,87"
  },
  {
    id: 2088,
    cliente: "JUAN CARRIZO",
    identificacion: "V-11896268",
    monto: "2.685,38"
  },
  {
    id: 2089,
    cliente: "ARTURO DURAN",
    identificacion: "V-21209256",
    monto: "4.882,00"
  },
  {
    id: 2090,
    cliente: "YORMELIS MACIAS",
    identificacion: "V-25173489",
    monto: "14.172,64"
  },
  {
    id: 2091,
    cliente: "EDUAR LINARES",
    identificacion: "V-19271541",
    monto: "9.517,85"
  },
  {
    id: 2092,
    cliente: "GUIDO PEREZ",
    identificacion: "V-5763690",
    monto: "3.574,44"
  },
  {
    id: 2093,
    cliente: "RAFAEL APONTE",
    identificacion: "V-13764264",
    monto: "2.091,04"
  },
  {
    id: 2094,
    cliente: "HECTOR MORENO",
    identificacion: "V-28096278",
    monto: "29.042,31"
  },
  {
    id: 2095,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "145.211,55"
  },
  {
    id: 2096,
    cliente: "YOVANY MORENO",
    identificacion: "V-14983042",
    monto: "1.787,22"
  },
  {
    id: 2097,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "18.122,50"
  },
  {
    id: 2098,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "10.258,64"
  },
  {
    id: 2099,
    cliente: "RAMON BRICEÑO",
    identificacion: "V-5357899",
    monto: "14.253,07"
  },
  {
    id: 2100,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "250.208,00"
  },
  {
    id: 2101,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "49.148,50"
  },
  {
    id: 2102,
    cliente: "EMILER PALENCIA",
    identificacion: "V-12683901",
    monto: "1.644,24"
  },
  {
    id: 2103,
    cliente: "JOSE CASTILLO",
    identificacion: "V-19150304",
    monto: "20.704,93"
  },
  {
    id: 2104,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "58.494,55"
  },
  {
    id: 2105,
    cliente: "JOSE ROSARIO",
    identificacion: "V-25302292",
    monto: "8.265,89"
  },
  {
    id: 2106,
    cliente: "JOSE ROSARIO",
    identificacion: "V-25302292",
    monto: "5.196,34"
  },
  {
    id: 2107,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "30.857,09"
  },
  {
    id: 2108,
    cliente: "LUIS PEREZ",
    identificacion: "V-26482802",
    monto: "3.574,44"
  },
  {
    id: 2109,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "714,88"
  },
  {
    id: 2110,
    cliente: "CARLOS QUINTERO",
    identificacion: "V-19643165",
    monto: "25.467,87"
  },
  {
    id: 2111,
    cliente: "MARINO PACHECO",
    identificacion: "V-12722850",
    monto: "8.936,10"
  },
  {
    id: 2112,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "45.104,94"
  },
  {
    id: 2113,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "202.313,71"
  },
  {
    id: 2114,
    cliente: "RICARDO MORILLO",
    identificacion: "V-13461542",
    monto: "3.147,54"
  },
  {
    id: 2115,
    cliente: "RICARDO MORILLO",
    identificacion: "V-13461542",
    monto: "1.156,79"
  },
  {
    id: 2116,
    cliente: "GUSTAVO VILLEGAS",
    identificacion: "V-17828057",
    monto: "36.855,80"
  },
  {
    id: 2117,
    cliente: "NORYS HERNANDEZ",
    identificacion: "V-9328847",
    monto: "5.828,79"
  },
  {
    id: 2118,
    cliente: "JUAN RAMIREZ",
    identificacion: "V-16065056",
    monto: "29.143,96"
  },
  {
    id: 2119,
    cliente: "CARLOS RIOS",
    identificacion: "V-19270456",
    monto: "126.127,80"
  },
  {
    id: 2120,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "30.937,44"
  },
  {
    id: 2121,
    cliente: "HECTOR PEÑA",
    identificacion: "V-2626600",
    monto: "15.244,54"
  },
  {
    id: 2122,
    cliente: "ANDERSON GARCIA",
    identificacion: "V-21207272",
    monto: "44.605,03"
  },
  {
    id: 2123,
    cliente: "ALIRIO LUCENA",
    identificacion: "V-16464582",
    monto: "45.200,00"
  },
  {
    id: 2124,
    cliente: "HECTOR ABREU",
    identificacion: "V-18802513",
    monto: "4.894,34"
  },
  {
    id: 2125,
    cliente: "JORGE ARAUJO",
    identificacion: "V-17266697",
    monto: "26.610,00"
  },
  {
    id: 2126,
    cliente: "GUSTAVO MATHEUS",
    identificacion: "V-13462675",
    monto: "5.508,39"
  },
  {
    id: 2127,
    cliente: "JORGE NAVAS",
    identificacion: "V-17037889",
    monto: "10.164,00"
  },
  {
    id: 2128,
    cliente: "FUNDO LA COROMOTO DE YURIARY PACHECO",
    identificacion: "V-11615198",
    monto: "203.178,24"
  },
  {
    id: 2129,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "28.797,12"
  },
  {
    id: 2130,
    cliente: "ARSENIO GEREZ",
    identificacion: "V-9171582",
    monto: "50.794,56"
  },
  {
    id: 2131,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "81.910,62"
  },
  {
    id: 2132,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "27.165,60"
  },
  {
    id: 2133,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "108.362,40"
  },
  {
    id: 2134,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "621,84"
  },
  {
    id: 2135,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "54.831,03"
  },
  {
    id: 2136,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "4.293,00"
  },
  {
    id: 2137,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "14.613,68"
  },
  {
    id: 2138,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "50.669,85"
  },
  {
    id: 2139,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "96.884,00"
  },
  {
    id: 2140,
    cliente: "JESUS PAREDES",
    identificacion: "V-5102421",
    monto: "9.703,88"
  },
  {
    id: 2141,
    cliente: "GILBERTO UZCATEGUI",
    identificacion: "V-5280075",
    monto: "6.870,00"
  },
  {
    id: 2142,
    cliente: "JORGE LUIS VARGAS",
    identificacion: "V-21208426",
    monto: "75.405,59"
  },
  {
    id: 2143,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "60.093,00"
  },
  {
    id: 2144,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "8.868,36"
  },
  {
    id: 2145,
    cliente: "JOSE LAMUS",
    identificacion: "V-27676979",
    monto: "79.399,32"
  },
  {
    id: 2146,
    cliente: "MARIA ROSALES",
    identificacion: "V-20707860",
    monto: "58.262,00"
  },
  {
    id: 2147,
    cliente: "AGROPECUARIA MI CONUQUITO QUERIDO, C.A",
    identificacion: "J-50095550-2",
    monto: "10.398,01"
  },
  {
    id: 2148,
    cliente: "SILVERIO MONTESINO",
    identificacion: "V-12044218",
    monto: "8.536,03"
  },
  {
    id: 2149,
    cliente: "RAMON ATILIO BRICEÑO",
    identificacion: "V-2628497",
    monto: "10.015,60"
  },
  {
    id: 2150,
    cliente: "YORVIN MENDOZA",
    identificacion: "V-27151273",
    monto: "4.324,92"
  },
  {
    id: 2151,
    cliente: "JUAN DE LA CRUZ ALARCON",
    identificacion: "V-14799707",
    monto: "17.072,05"
  },
  {
    id: 2152,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "78.851,52"
  },
  {
    id: 2153,
    cliente: "MERLIS PEÑA",
    identificacion: "V-17697757",
    monto: "16.234,39"
  },
  {
    id: 2154,
    cliente: "HUGO ALBERTO CONTRERAS QUINTERO",
    identificacion: "V-9498576",
    monto: "91.506,20"
  },
  {
    id: 2155,
    cliente: "AUXILIADORA VIERA",
    identificacion: "V-12039973",
    monto: "4.552,55"
  },
  {
    id: 2156,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "10.015,60"
  },
  {
    id: 2157,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "41.136,83"
  },
  {
    id: 2158,
    cliente: "FLOR BRICEÑO",
    identificacion: "V-16739586",
    monto: "10.698,49"
  },
  {
    id: 2159,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "10.925,29"
  },
  {
    id: 2160,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "20.155,52"
  },
  {
    id: 2161,
    cliente: "FARINA CAMPOS",
    identificacion: "V-10038404",
    monto: "2.193,96"
  },
  {
    id: 2162,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "1.462,64"
  },
  {
    id: 2163,
    cliente: "MARIA BRICEÑO",
    identificacion: "V-13262320",
    monto: "13.255,00"
  },
  {
    id: 2164,
    cliente: "JESUS UZCATEGUI",
    identificacion: "V-14151999",
    monto: "28.903,38"
  },
  {
    id: 2165,
    cliente: "NIXON MASCAREÑO",
    identificacion: "V-15584087",
    monto: "1.096,98"
  },
  {
    id: 2166,
    cliente: "JOSE TORRES",
    identificacion: "V-5786909",
    monto: "9.141,60"
  },
  {
    id: 2167,
    cliente: "JOSE TORRES",
    identificacion: "V-5786909",
    monto: "2.745,00"
  },
  {
    id: 2168,
    cliente: "JOHAN CASTELLANOS",
    identificacion: "V-14983507",
    monto: "3.199,00"
  },
  {
    id: 2169,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "31.081,14"
  },
  {
    id: 2170,
    cliente: "OTO HUMBERTO MONTESINO",
    identificacion: "V-13896738",
    monto: "3.656,61"
  },
  {
    id: 2171,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "4.854,14"
  },
  {
    id: 2172,
    cliente: "MANUEL ROSARIO",
    identificacion: "V-4318390",
    monto: "34.006,43"
  },
  {
    id: 2173,
    cliente: "PEDRO RANGEL",
    identificacion: "V-24138288",
    monto: "3.935,43"
  },
  {
    id: 2174,
    cliente: "CARLOS VALERO",
    identificacion: "V-10037198",
    monto: "23.625,00"
  },
  {
    id: 2175,
    cliente: "YOVANNY RIVAS",
    identificacion: "V-11086701",
    monto: "12.820,97"
  },
  {
    id: 2176,
    cliente: "WILMER GARCIA",
    identificacion: "V-13376711",
    monto: "37.159,72"
  },
  {
    id: 2177,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "77.530,86"
  },
  {
    id: 2178,
    cliente: "RICHAR RIVERA",
    identificacion: "V-17266485",
    monto: "6.496,66"
  },
  {
    id: 2179,
    cliente: "GREGORIO JESUS PEÑA",
    identificacion: "V-25832812",
    monto: "88.913,94"
  },
  {
    id: 2180,
    cliente: "JOSE AZUAJE",
    identificacion: "V-10398951",
    monto: "4.594,52"
  },
  {
    id: 2181,
    cliente: "ALIRIO LUCENA",
    identificacion: "V-16464582",
    monto: "68.365,38"
  },
  {
    id: 2182,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "57.431,55"
  },
  {
    id: 2183,
    cliente: "PEDRO LINARES",
    identificacion: "V-4920057",
    monto: "8.610,14"
  },
  {
    id: 2184,
    cliente: "RUBEN GARCIA",
    identificacion: "V-24138530",
    monto: "26.252,64"
  },
  {
    id: 2185,
    cliente: "JOSE DELGADO",
    identificacion: "V-4921456",
    monto: "13.194,85"
  },
  {
    id: 2186,
    cliente: "FREDY VASQUEZ",
    identificacion: "V-21063737",
    monto: "7.315,00"
  },
  {
    id: 2187,
    cliente: "WILMER SALAS",
    identificacion: "V-9016257",
    monto: "4.364,80"
  },
  {
    id: 2188,
    cliente: "JOSE CARRILLO",
    identificacion: "V-12045450",
    monto: "5.565,63"
  },
  {
    id: 2189,
    cliente: "ANDERSON ASUAJE",
    identificacion: "V-18925939",
    monto: "11.867,67"
  },
  {
    id: 2190,
    cliente: "JOSE PEREZ",
    identificacion: "V-4917886",
    monto: "925,34"
  },
  {
    id: 2191,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "75.396,49"
  },
  {
    id: 2192,
    cliente: "JULIO RODRIGUEZ",
    identificacion: "V-2613999",
    monto: "1.110,40"
  },
  {
    id: 2193,
    cliente: "DANIEL ESPINOZA",
    identificacion: "V-18035547",
    monto: "8.730,56"
  },
  {
    id: 2194,
    cliente: "CARLOS BRAVO",
    identificacion: "V-14151121",
    monto: "21.976,76"
  },
  {
    id: 2195,
    cliente: "JESUS UZCATEGUI",
    identificacion: "V-14151999",
    monto: "16.048,00"
  },
  {
    id: 2196,
    cliente: "MARBELIS OSUNA",
    identificacion: "V-27051334",
    monto: "37.013,50"
  },
  {
    id: 2197,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "39.190,59"
  },
  {
    id: 2198,
    cliente: "RAMIRO BUITRAGO",
    identificacion: "V-31029588",
    monto: "26.127,06"
  },
  {
    id: 2199,
    cliente: "HUGO ALBERTO CONTRERAS QUINTERO",
    identificacion: "V-9498576",
    monto: "43.245,65"
  },
  {
    id: 2200,
    cliente: "DANIEL VASQUEZ",
    identificacion: "V-24881012",
    monto: "10.178,00"
  },
  {
    id: 2201,
    cliente: "JEFERSON BRICEÑO",
    identificacion: "V-27512401",
    monto: "4.311,40"
  },
  {
    id: 2202,
    cliente: "JORGE GUDIÑO",
    identificacion: "V-27022047",
    monto: "10.281,00"
  },
  {
    id: 2203,
    cliente: "JORGE GUDIÑO",
    identificacion: "V-27022047",
    monto: "10.281,00"
  },
  {
    id: 2204,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "89.727,45"
  },
  {
    id: 2205,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "119.845,21"
  },
  {
    id: 2206,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "8.916,75"
  },
  {
    id: 2207,
    cliente: "EUGENIO PEREZ",
    identificacion: "V-10396553",
    monto: "3.611,49"
  },
  {
    id: 2208,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-15952003",
    monto: "37.328,11"
  },
  {
    id: 2209,
    cliente: "ROSA GIL",
    identificacion: "V-21207277",
    monto: "4.819,38"
  },
  {
    id: 2210,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "5.257,50"
  },
  {
    id: 2211,
    cliente: "HUGO ALBERTO CONTRERAS QUINTERO",
    identificacion: "V-9498576",
    monto: "25.854,39"
  },
  {
    id: 2212,
    cliente: "YOSCAR VALERA",
    identificacion: "V-26235072",
    monto: "4.450,89"
  },
  {
    id: 2213,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "13.249,60"
  },
  {
    id: 2214,
    cliente: "HENRRY BECERRA",
    identificacion: "V-11322571",
    monto: "3.818,39"
  },
  {
    id: 2215,
    cliente: "EDUARDO HERNANDEZ",
    identificacion: "V-19285084",
    monto: "86.399,04"
  },
  {
    id: 2216,
    cliente: "AUXILIADORA VIERA",
    identificacion: "V-12039973",
    monto: "18.272,07"
  },
  {
    id: 2217,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.061,46"
  },
  {
    id: 2218,
    cliente: "ROQUE BARONE",
    identificacion: "V-11894730",
    monto: "2.061,44"
  },
  {
    id: 2219,
    cliente: "MANUEL ROSARIO",
    identificacion: "V-4318390",
    monto: "98.575,45"
  },
  {
    id: 2220,
    cliente: "MISAEL TORRES",
    identificacion: "V-11323679",
    monto: "6.090,69"
  },
  {
    id: 2221,
    cliente: "WILFREDO BARRETO",
    identificacion: "V-16276547",
    monto: "53.513,85"
  },
  {
    id: 2222,
    cliente: "LUIS PEREZ",
    identificacion: "V-26482802",
    monto: "7.027,72"
  },
  {
    id: 2223,
    cliente: "JEAN RIVAS",
    identificacion: "V-19101192",
    monto: "10.958,55"
  },
  {
    id: 2224,
    cliente: "PEDRO ARAUJO",
    identificacion: "V-5495699",
    monto: "23.097,75"
  },
  {
    id: 2225,
    cliente: "JESUS GRATEROL",
    identificacion: "V-26324088",
    monto: "2.693,96"
  },
  {
    id: 2226,
    cliente: "GEOVANI VENEGAS",
    identificacion: "V-13049372",
    monto: "13.240,12"
  },
  {
    id: 2227,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "62.438,73"
  },
  {
    id: 2228,
    cliente: "HAIDE CEGARRA",
    identificacion: "V-11619426",
    monto: "2.830,20"
  },
  {
    id: 2229,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "12.448,86"
  },
  {
    id: 2230,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "1.886,80"
  },
  {
    id: 2231,
    cliente: "RICHARD INFANTE",
    identificacion: "V-23781644",
    monto: "29.816,18"
  },
  {
    id: 2232,
    cliente: "JUAN GIL",
    identificacion: "V-15825219",
    monto: "9.487,50"
  },
  {
    id: 2233,
    cliente: "JOSE TORREALBA",
    identificacion: "V-19609187",
    monto: "3.844,36"
  },
  {
    id: 2234,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.075,48"
  },
  {
    id: 2235,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "95.231,60"
  },
  {
    id: 2236,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "92.972,16"
  },
  {
    id: 2237,
    cliente: "WILLIAN PARRAGA",
    identificacion: "V-8720258",
    monto: "32.269,03"
  },
  {
    id: 2238,
    cliente: "JESUS PEÑA",
    identificacion: "V-16065728",
    monto: "20.962,36"
  },
  {
    id: 2239,
    cliente: "RAMIRO BUITRAGO",
    identificacion: "V-31029588",
    monto: "39.670,19"
  },
  {
    id: 2240,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "8.254,76"
  },
  {
    id: 2241,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "8.867,97"
  },
  {
    id: 2242,
    cliente: "JAZMIN MANZANILLA",
    identificacion: "V-12940591",
    monto: "39.151,10"
  },
  {
    id: 2243,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "15.547,24"
  },
  {
    id: 2244,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "943,40"
  },
  {
    id: 2245,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "6.679,28"
  },
  {
    id: 2246,
    cliente: "ANGEL ABREU",
    identificacion: "V-11897076",
    monto: "15.626,46"
  },
  {
    id: 2247,
    cliente: "GERWIN CAÑIZALEZ",
    identificacion: "V-16015655",
    monto: "10.377,40"
  },
  {
    id: 2248,
    cliente: "JOSE RIVAS",
    identificacion: "V-24565902",
    monto: "7.547,20"
  },
  {
    id: 2249,
    cliente: "ARGENIS VERGARA",
    identificacion: "V-11316351",
    monto: "10.608,53"
  },
  {
    id: 2250,
    cliente: "ROXI ARAUJO",
    identificacion: "V-19713736",
    monto: "38.349,25"
  },
  {
    id: 2251,
    cliente: "MARTIN CANELONES",
    identificacion: "V-17865324",
    monto: "36.594,50"
  },
  {
    id: 2252,
    cliente: "SHENGS NATURAL PRODUCTS, C.A",
    identificacion: "J-40350415-6",
    monto: "81.342,40"
  },
  {
    id: 2253,
    cliente: "JOSE CASTILLO",
    identificacion: "V-19150304",
    monto: "20.962,36"
  },
  {
    id: 2254,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "18.028,38"
  },
  {
    id: 2255,
    cliente: "FRANCISCO RODRIGUEZ",
    identificacion: "V-12691163",
    monto: "46.000,00"
  },
  {
    id: 2256,
    cliente: "ORLANDO PEREZ",
    identificacion: "V-14929275",
    monto: "2.358,50"
  },
  {
    id: 2257,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "43.863,42"
  },
  {
    id: 2258,
    cliente: "MINERVA ANDRADES",
    identificacion: "V-4704208",
    monto: "5.438,71"
  },
  {
    id: 2259,
    cliente: "MARILU GUEDES",
    identificacion: "V-20400975",
    monto: "48.653,85"
  },
  {
    id: 2260,
    cliente: "ANTONIO VERGARA",
    identificacion: "V-26123337",
    monto: "11.960,00"
  },
  {
    id: 2261,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "49.282,48"
  },
  {
    id: 2262,
    cliente: "JHONY RANGEL",
    identificacion: "V-18802056",
    monto: "12.699,73"
  },
  {
    id: 2263,
    cliente: "YORJANI AZUAJE",
    identificacion: "V-21205121",
    monto: "40.572,76"
  },
  {
    id: 2264,
    cliente: "GREGORIO PEÑA",
    identificacion: "V-25374148",
    monto: "2.369,00"
  },
  {
    id: 2265,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "14.917,43"
  },
  {
    id: 2266,
    cliente: "YUSGLEDY SEGOVIA",
    identificacion: "V-25373453",
    monto: "94.730,92"
  },
  {
    id: 2267,
    cliente: "JOSE GODOY",
    identificacion: "V-24617552",
    monto: "19.461,84"
  },
  {
    id: 2268,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "18.888,16"
  },
  {
    id: 2269,
    cliente: "JOSE GODOY",
    identificacion: "V-24617552",
    monto: "40.278,97"
  },
  {
    id: 2270,
    cliente: "JOSE LAMUS",
    identificacion: "V-27676979",
    monto: "48.230,77"
  },
  {
    id: 2271,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "38.625,00"
  },
  {
    id: 2272,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "353.330,56"
  },
  {
    id: 2273,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "70.920,00"
  },
  {
    id: 2274,
    cliente: "TONI LINARES",
    identificacion: "V-15042874",
    monto: "3.790,96"
  },
  {
    id: 2275,
    cliente: "RIHARD CIRA",
    identificacion: "V-14982595",
    monto: "27.194,71"
  },
  {
    id: 2276,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "55.442,82"
  },
  {
    id: 2277,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "241.685,54"
  },
  {
    id: 2278,
    cliente: "ALBERTO ENRIQUE CASTELLANOS",
    identificacion: "V-15709290",
    monto: "9.055,66"
  },
  {
    id: 2279,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "19.902,56"
  },
  {
    id: 2280,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-23782522",
    monto: "66.341,82"
  },
  {
    id: 2281,
    cliente: "ANDRES DIAZ PACHECO",
    identificacion: "V-11618556",
    monto: "181.890,26"
  },
  {
    id: 2282,
    cliente: "DARIO VILLASMIL",
    identificacion: "V-15188978",
    monto: "758,26"
  },
  {
    id: 2283,
    cliente: "DOUGLAS GIL",
    identificacion: "V-13745215",
    monto: "2.903,00"
  },
  {
    id: 2284,
    cliente: "AGROINSDUSTRIAS E INVERSIONES URBINA ZAMBRANO, C.A",
    identificacion: "J-41206796-6",
    monto: "38.609,00"
  },
  {
    id: 2285,
    cliente: "VICTOR BLANCO",
    identificacion: "V-18616791",
    monto: "27.724,18"
  },
  {
    id: 2286,
    cliente: "GUILLERMO BRICEÑO",
    identificacion: "V-12044983",
    monto: "227.666,65"
  },
  {
    id: 2287,
    cliente: "ARGENIS AVILA",
    identificacion: "V-19794768",
    monto: "10.037,57"
  },
  {
    id: 2288,
    cliente: "GILLERMO BRACHO",
    identificacion: "V-12712153",
    monto: "80.565,99"
  },
  {
    id: 2289,
    cliente: "CALIXTO HERNANDEZ",
    identificacion: "V-23226030",
    monto: "12.227,08"
  },
  {
    id: 2290,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "22.079,83"
  },
  {
    id: 2291,
    cliente: "JOSE ANDRADE",
    identificacion: "V-17596956",
    monto: "95.731,84"
  },
  {
    id: 2292,
    cliente: "AGROPECUARIA LA GALERA JAJO",
    identificacion: "J-50322840-7",
    monto: "24.575,91"
  },
  {
    id: 2293,
    cliente: "ANTONIO VERGARA",
    identificacion: "V-26123337",
    monto: "9.869,99"
  },
  {
    id: 2294,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "2.843,51"
  },
  {
    id: 2295,
    cliente: "ANTONY MENDOZA",
    identificacion: "V-18458380",
    monto: "6.701,19"
  },
  {
    id: 2296,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "48.819,09"
  },
  {
    id: 2297,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "85.330,77"
  },
  {
    id: 2298,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "132.736,75"
  },
  {
    id: 2299,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "63.827,41"
  },
  {
    id: 2300,
    cliente: "JOSE FERNANDEZ",
    identificacion: "V-9498165",
    monto: "9.817,78"
  },
  {
    id: 2301,
    cliente: "OTO HUMBERTO MONTESINO",
    identificacion: "V-13896738",
    monto: "3.792,48"
  },
  {
    id: 2302,
    cliente: "GIOVANY MENDOZA",
    identificacion: "V-13050217",
    monto: "805,90"
  },
  {
    id: 2303,
    cliente: "ERLINDA BERRIOS",
    identificacion: "V-21063406",
    monto: "13.206,71"
  },
  {
    id: 2304,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "91.631,03"
  },
  {
    id: 2305,
    cliente: "CARLOS GIL",
    identificacion: "V-4665884",
    monto: "3.792,48"
  },
  {
    id: 2306,
    cliente: "LUIS ARAUJO",
    identificacion: "V-9081923",
    monto: "37.432,50"
  },
  {
    id: 2307,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "31.759,00"
  },
  {
    id: 2308,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "23.229,60"
  },
  {
    id: 2309,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "40.515,42"
  },
  {
    id: 2310,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "22.246,63"
  },
  {
    id: 2311,
    cliente: "ANDRES GIL",
    identificacion: "V-15751897",
    monto: "38.544,05"
  },
  {
    id: 2312,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "71.500,32"
  },
  {
    id: 2313,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "22.517,85"
  },
  {
    id: 2314,
    cliente: "AGROPECUARIA MI CONUQUITO QUERIDO, C.A",
    identificacion: "J-50095550-2",
    monto: "13.610,26"
  },
  {
    id: 2315,
    cliente: "FINCA EL TABLON 2, C.A",
    identificacion: "J-31198886-6",
    monto: "35.554,50"
  },
  {
    id: 2316,
    cliente: "PLINIO VALERO",
    identificacion: "V-25374504",
    monto: "54.903,61"
  },
  {
    id: 2317,
    cliente: "FELIPE CARRIZO FRANCO",
    identificacion: "V-21366197",
    monto: "7.731,00"
  },
  {
    id: 2318,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-21367768",
    monto: "66.368,40"
  },
  {
    id: 2319,
    cliente: "WILIAMS LINARES",
    identificacion: "V-19148462",
    monto: "8.059,02"
  },
  {
    id: 2320,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "5.400,00"
  },
  {
    id: 2321,
    cliente: "ENDER PEREZ",
    identificacion: "V-14807536",
    monto: "15.659,61"
  },
  {
    id: 2322,
    cliente: "FRAN FERNANDEZ",
    identificacion: "V-19795966",
    monto: "66.434,73"
  },
  {
    id: 2323,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "20.932,94"
  },
  {
    id: 2324,
    cliente: "ANGEL CASTELLANOS",
    identificacion: "V-16377436",
    monto: "87.651,14"
  },
  {
    id: 2325,
    cliente: "JOSE MONTILLA",
    identificacion: "V-11031075",
    monto: "46.467,95"
  },
  {
    id: 2326,
    cliente: "ALEXIS ZABALA",
    identificacion: "V-10398045",
    monto: "60.503,07"
  },
  {
    id: 2327,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "4.935,15"
  },
  {
    id: 2328,
    cliente: "MARCO VALERA",
    identificacion: "V-16014730",
    monto: "14.182,54"
  },
  {
    id: 2329,
    cliente: "RAMON ATILIO BRICEÑO",
    identificacion: "V-2628497",
    monto: "26.857,91"
  },
  {
    id: 2330,
    cliente: "DIEGO ARAUJO",
    identificacion: "V-31590302",
    monto: "9.609,31"
  },
  {
    id: 2331,
    cliente: "MANUEL ROSARIO",
    identificacion: "V-4318390",
    monto: "87.651,14"
  },
  {
    id: 2332,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "27.590,66"
  },
  {
    id: 2333,
    cliente: "ARGENIS DUARTE",
    identificacion: "V-7149576",
    monto: "7.140,56"
  },
  {
    id: 2334,
    cliente: "JOSE LINO RONDON GONZALEZ",
    identificacion: "V-9002042",
    monto: "14.601,40"
  },
  {
    id: 2335,
    cliente: "ALEJANDRINA RIVAS",
    identificacion: "V-9156244",
    monto: "3.796,27"
  },
  {
    id: 2336,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "13.751,99"
  },
  {
    id: 2337,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "24.809,42"
  },
  {
    id: 2338,
    cliente: "ALI GONZALEZ",
    identificacion: "V-14148401",
    monto: "32.904,68"
  },
  {
    id: 2339,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "19.446,39"
  },
  {
    id: 2340,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "3.938,00"
  },
  {
    id: 2341,
    cliente: "ROBERTO HERNANDEZ",
    identificacion: "V-19609930",
    monto: "15.604,02"
  },
  {
    id: 2342,
    cliente: "LUIS VERA",
    identificacion: "V-14149174",
    monto: "10.450,18"
  },
  {
    id: 2343,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "14.844,01"
  },
  {
    id: 2344,
    cliente: "EMPRENDIMIENTO AVILIO STANISLAO",
    identificacion: "J-50752458-2",
    monto: "256.505,40"
  },
  {
    id: 2345,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "25.158,24"
  },
  {
    id: 2346,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "12.654,24"
  },
  {
    id: 2347,
    cliente: "DARWIN DUQUE",
    identificacion: "V-15175794",
    monto: "5.594,85"
  },
  {
    id: 2348,
    cliente: "ISMAR CARRILLO",
    identificacion: "V-17267518",
    monto: "10.450,22"
  },
  {
    id: 2349,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "4.389,10"
  },
  {
    id: 2350,
    cliente: "ALBERT MONTILLA",
    identificacion: "V-20430810",
    monto: "18.777,15"
  },
  {
    id: 2351,
    cliente: "LUIS HERNANDEZ",
    identificacion: "V-16715581",
    monto: "22.562,97"
  },
  {
    id: 2352,
    cliente: "JOSE OLIVAR",
    identificacion: "V-10908686",
    monto: "1.900,05"
  },
  {
    id: 2353,
    cliente: "JOSE OLIVAR",
    identificacion: "V-14310691",
    monto: "7.908,75"
  },
  {
    id: 2354,
    cliente: "FRANCIBELGARCIA",
    identificacion: "V-17605900",
    monto: "20.187,92"
  },
  {
    id: 2355,
    cliente: "JOSE ALBERTO ARAUJO",
    identificacion: "V-16535746",
    monto: "1.900,04"
  },
  {
    id: 2356,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "12.336,01"
  },
  {
    id: 2357,
    cliente: "RAFAEL HOYOS",
    identificacion: "V-12549080",
    monto: "39.985,90"
  },
  {
    id: 2358,
    cliente: "JUAN RAMIREZ",
    identificacion: "V-16065056",
    monto: "5.949,50"
  },
  {
    id: 2359,
    cliente: "JOSE DAVIDA ARAUJO",
    identificacion: "V-20656725",
    monto: "99.951,60"
  },
  {
    id: 2360,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "39.091,20"
  },
  {
    id: 2361,
    cliente: "WILFREDO DABOIN",
    identificacion: "V-14928334",
    monto: "10.975,64"
  },
  {
    id: 2362,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "27.843,66"
  },
  {
    id: 2363,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "20.642,39"
  },
  {
    id: 2364,
    cliente: "YESENIA MONTILLA",
    identificacion: "V-25374644",
    monto: "2.665,38"
  },
  {
    id: 2365,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "16.658,60"
  },
  {
    id: 2366,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "172.770,18"
  },
  {
    id: 2367,
    cliente: "JESUS PEÑA",
    identificacion: "V-16065728",
    monto: "8.790,98"
  },
  {
    id: 2368,
    cliente: "LUIS ARAUJO",
    identificacion: "V-20656078",
    monto: "38.065,00"
  },
  {
    id: 2369,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-15952003",
    monto: "8.337,52"
  },
  {
    id: 2370,
    cliente: "WILLIAN GUTIERREZ",
    identificacion: "V-18168029",
    monto: "214.393,50"
  },
  {
    id: 2371,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "14.626,40"
  },
  {
    id: 2372,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "53.089,11"
  },
  {
    id: 2373,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "24.059,72"
  },
  {
    id: 2374,
    cliente: "JESUS OLIVAR",
    identificacion: "V-19643942",
    monto: "43.923,44"
  },
  {
    id: 2375,
    cliente: "JHONNY ANDRADE",
    identificacion: "V-16066300",
    monto: "123.871,80"
  },
  {
    id: 2376,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-23782522",
    monto: "33.350,10"
  },
  {
    id: 2377,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "37.637,00"
  },
  {
    id: 2378,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "16.479,72"
  },
  {
    id: 2379,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "26.545,70"
  },
  {
    id: 2380,
    cliente: "ALFREDO BARRIOS",
    identificacion: "V-4919714",
    monto: "259.654,35"
  },
  {
    id: 2381,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "8.961,65"
  },
  {
    id: 2382,
    cliente: "RAMON AVENDAÑO",
    identificacion: "V-18097688",
    monto: "3.101,47"
  },
  {
    id: 2383,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-18456592",
    monto: "1.827,48"
  },
  {
    id: 2384,
    cliente: "STARLY TERAN",
    identificacion: "V-20400546",
    monto: "192.729,93"
  },
  {
    id: 2385,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.385,74"
  },
  {
    id: 2386,
    cliente: "MARIXA PARRA",
    identificacion: "V-9171313",
    monto: "4.532,91"
  },
  {
    id: 2387,
    cliente: "STARLY TERAN",
    identificacion: "V-20400546",
    monto: "7.815,70"
  },
  {
    id: 2388,
    cliente: "CARLOS RIOS",
    identificacion: "V-19270456",
    monto: "24.954,89"
  },
  {
    id: 2389,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "2.862,89"
  },
  {
    id: 2390,
    cliente: "ELVIS CAMACHO",
    identificacion: "V-14391674",
    monto: "148.423,54"
  },
  {
    id: 2391,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "763,44"
  },
  {
    id: 2392,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "21.400,13"
  },
  {
    id: 2393,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "5.248,64"
  },
  {
    id: 2394,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "17.560,00"
  },
  {
    id: 2395,
    cliente: "MIGUEL RIVAS",
    identificacion: "V-24136010",
    monto: "5.501,54"
  },
  {
    id: 2396,
    cliente: "CONJUNTO RESINDECIAL LA PUERTA",
    identificacion: "J-31053018-1",
    monto: "6.494,01"
  },
  {
    id: 2397,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "14.777,34"
  },
  {
    id: 2398,
    cliente: "OFELIA DE HERNANDEZ",
    identificacion: "V-5501495",
    monto: "2.862,90"
  },
  {
    id: 2399,
    cliente: "FRANCISCO ANTONIO CARREÑO",
    identificacion: "V-5790430",
    monto: "18.470,48"
  },
  {
    id: 2400,
    cliente: "ROBER UZCATEGUI",
    identificacion: "V-18350539",
    monto: "53.984,75"
  },
  {
    id: 2401,
    cliente: "PEDRO PIÑA",
    identificacion: "V-5174421",
    monto: "9.161,28"
  },
  {
    id: 2402,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "6.540,00"
  },
  {
    id: 2403,
    cliente: "JACINTO VILLARREAL",
    identificacion: "V-14929388",
    monto: "17.114,25"
  },
  {
    id: 2404,
    cliente: "JOSE RAMON MONTILLA",
    identificacion: "V-12038731",
    monto: "33.400,50"
  },
  {
    id: 2405,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "46.235,81"
  },
  {
    id: 2406,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.204,43"
  },
  {
    id: 2407,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "11.440,00"
  },
  {
    id: 2408,
    cliente: "EXER GOMEZ",
    identificacion: "V-28002642",
    monto: "17.696,47"
  },
  {
    id: 2409,
    cliente: "OSCAR COLMENARES",
    identificacion: "V-25485295",
    monto: "35.970,00"
  },
  {
    id: 2410,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "13.212,28"
  },
  {
    id: 2411,
    cliente: "JOSE HOYOS",
    identificacion: "V-5500327",
    monto: "381,72"
  },
  {
    id: 2412,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "20.447,30"
  },
  {
    id: 2413,
    cliente: "ISIDRO ARAUJO",
    identificacion: "V-10403314",
    monto: "12.883,05"
  },
  {
    id: 2414,
    cliente: "DEVID PEREZ",
    identificacion: "V-8723552",
    monto: "9.423,71"
  },
  {
    id: 2415,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "5.783,06"
  },
  {
    id: 2416,
    cliente: "RUBEN VERGARA",
    identificacion: "V-29539207",
    monto: "3.888,77"
  },
  {
    id: 2417,
    cliente: "JOSE GRATEROL",
    identificacion: "V-11320202",
    monto: "151.452,18"
  },
  {
    id: 2418,
    cliente: "OLINTO MORENO",
    identificacion: "V-29917166",
    monto: "14.860,00"
  },
  {
    id: 2419,
    cliente: "JAVIER UZCATEGUI",
    identificacion: "V-5785213",
    monto: "104.615,30"
  },
  {
    id: 2420,
    cliente: "ARTURO ECHEGARIA",
    identificacion: "V-18378208",
    monto: "50.151,15"
  },
  {
    id: 2421,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "7.492,50"
  },
  {
    id: 2422,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "78.695,10"
  },
  {
    id: 2423,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "18.100,00"
  },
  {
    id: 2424,
    cliente: "JAVIER MATOS",
    identificacion: "V-19576243",
    monto: "4.059,86"
  },
  {
    id: 2425,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "74.032,00"
  },
  {
    id: 2426,
    cliente: "CARMEN VALERA",
    identificacion: "V-20402765",
    monto: "4.578,00"
  },
  {
    id: 2427,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.206,65"
  },
  {
    id: 2428,
    cliente: "SOGEL SALLAN",
    identificacion: "V-12722087",
    monto: "9.074,96"
  },
  {
    id: 2429,
    cliente: "JOSE VERGARA",
    identificacion: "V-10036518",
    monto: "32.118,30"
  },
  {
    id: 2430,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "24.079,66"
  },
  {
    id: 2431,
    cliente: "ORLANDO RIVAS",
    identificacion: "V-13705263",
    monto: "4.537,48"
  },
  {
    id: 2432,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "39.961,52"
  },
  {
    id: 2433,
    cliente: "CLAUDIO ANGARITA",
    identificacion: "V-11610126",
    monto: "18.918,31"
  },
  {
    id: 2434,
    cliente: "LEONARDO BRICEÑO",
    identificacion: "V-16881117",
    monto: "114.859,20"
  },
  {
    id: 2435,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "27.279,12"
  },
  {
    id: 2436,
    cliente: "CALIXTO HERNANDEZ",
    identificacion: "V-23226030",
    monto: "15.793,18"
  },
  {
    id: 2437,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "15.242,81"
  },
  {
    id: 2438,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "29.978,25"
  },
  {
    id: 2439,
    cliente: "RAUL JOSE CALDERON AZUAJE",
    identificacion: "V-16465816",
    monto: "19.243,70"
  },
  {
    id: 2440,
    cliente: "WILFRESO AYALA",
    identificacion: "V-16534225",
    monto: "63.722,93"
  },
  {
    id: 2441,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "5.264,38"
  },
  {
    id: 2442,
    cliente: "JOSE MENDOZA",
    identificacion: "V-93189249",
    monto: "7.718,00"
  },
  {
    id: 2443,
    cliente: "PEDRO DUARTE",
    identificacion: "V-12796217",
    monto: "16.254,95"
  },
  {
    id: 2444,
    cliente: "MACARIO BRAVO",
    identificacion: "V-10316579",
    monto: "7.385,00"
  },
  {
    id: 2445,
    cliente: "LUIS VILORIA",
    identificacion: "V-4325825",
    monto: "959,56"
  },
  {
    id: 2446,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.797,80"
  },
  {
    id: 2447,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.797,80"
  },
  {
    id: 2448,
    cliente: "YONATHAN TORRES",
    identificacion: "V-25604850",
    monto: "24.694,28"
  },
  {
    id: 2449,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "50.376,90"
  },
  {
    id: 2450,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.216,58"
  },
  {
    id: 2451,
    cliente: "MAXIMO BRICEÑO",
    identificacion: "V-13048850",
    monto: "7.751,01"
  },
  {
    id: 2452,
    cliente: "JOSE GUILLEN",
    identificacion: "V-15953642",
    monto: "35.983,31"
  },
  {
    id: 2453,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "35.359,98"
  },
  {
    id: 2454,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "40.813,00"
  },
  {
    id: 2455,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "40.813,00"
  },
  {
    id: 2456,
    cliente: "HEIDY CARMONA",
    identificacion: "V-13049503",
    monto: "9.115,82"
  },
  {
    id: 2457,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "5.997,25"
  },
  {
    id: 2458,
    cliente: "DUGLAS PEDOMO",
    identificacion: "V-12797792",
    monto: "29.026,69"
  },
  {
    id: 2459,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "56.906,71"
  },
  {
    id: 2460,
    cliente: "JOSE MONTILLA",
    identificacion: "V-9494393",
    monto: "22.890,31"
  },
  {
    id: 2461,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "27.304,28"
  },
  {
    id: 2462,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "117.959,56"
  },
  {
    id: 2463,
    cliente: "WILIAMS RODRIGUEZ",
    identificacion: "V-13376069",
    monto: "101.113,63"
  },
  {
    id: 2464,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "7.312,50"
  },
  {
    id: 2465,
    cliente: "WILFRESO AYALA",
    identificacion: "V-16534225",
    monto: "167.923,00"
  },
  {
    id: 2466,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "4.797,80"
  },
  {
    id: 2467,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "103.133,26"
  },
  {
    id: 2468,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "16.857,13"
  },
  {
    id: 2469,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "1.536,84"
  },
  {
    id: 2470,
    cliente: "JOSE NIEVES TIRADO ROMERO",
    identificacion: "V-9175397",
    monto: "3.914,12"
  },
  {
    id: 2471,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "75.871,48"
  },
  {
    id: 2472,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.218,80"
  },
  {
    id: 2473,
    cliente: "LEONARDO SANCHEZ",
    identificacion: "V-24565010",
    monto: "15.310,69"
  },
  {
    id: 2474,
    cliente: "ANTONIO HERNABDEZ",
    identificacion: "V-4662443",
    monto: "1.440,78"
  },
  {
    id: 2475,
    cliente: "LEONARDO BRICEÑO",
    identificacion: "V-14835366",
    monto: "81.452,09"
  },
  {
    id: 2476,
    cliente: "RAFAEL PERDOMO",
    identificacion: "V-23782071",
    monto: "40.750,71"
  },
  {
    id: 2477,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "9.100,93"
  },
  {
    id: 2478,
    cliente: "JOSE PIRELA",
    identificacion: "V-19899286",
    monto: "8.920,00"
  },
  {
    id: 2479,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "13.874,71"
  },
  {
    id: 2480,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-15294167",
    monto: "6.872,52"
  },
  {
    id: 2481,
    cliente: "VANESA QUESADA",
    identificacion: "V-17605330",
    monto: "58.124,21"
  },
  {
    id: 2482,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "5.050,00"
  },
  {
    id: 2483,
    cliente: "DIKS ANDY SALAZAR",
    identificacion: "V-16282191",
    monto: "11.068,06"
  },
  {
    id: 2484,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "26.266,04"
  },
  {
    id: 2485,
    cliente: "JEAN CARLOS ROMAN",
    identificacion: "V-16276851",
    monto: "1.924,88"
  },
  {
    id: 2486,
    cliente: "YURLEY NVASQUEZ",
    identificacion: "V-17347716",
    monto: "5.661,25"
  },
  {
    id: 2487,
    cliente: "ORLANDO SANTIAGO",
    identificacion: "V-5357923",
    monto: "82.461,93"
  },
  {
    id: 2488,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "26.982,01"
  },
  {
    id: 2489,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "21.318,04"
  },
  {
    id: 2490,
    cliente: "RODRIGO GONZALEZ",
    identificacion: "V-10038719",
    monto: "2.887,32"
  },
  {
    id: 2491,
    cliente: "JOSE GODOY",
    identificacion: "V-24617552",
    monto: "7.218,30"
  },
  {
    id: 2492,
    cliente: "FRANKLIN LINARES",
    identificacion: "V-10404542",
    monto: "54.878,32"
  },
  {
    id: 2493,
    cliente: "PEDRO PIÑA",
    identificacion: "V-5174421",
    monto: "9.239,40"
  },
  {
    id: 2494,
    cliente: "RODRIGO GONZALEZ",
    identificacion: "V-10038719",
    monto: "20.677,32"
  },
  {
    id: 2495,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "17.440,44"
  },
  {
    id: 2496,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "5.052,81"
  },
  {
    id: 2497,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.406,10"
  },
  {
    id: 2498,
    cliente: "ALEXANDER CORREA",
    identificacion: "V-13799289",
    monto: "5.293,42"
  },
  {
    id: 2499,
    cliente: "COUNTRY CLUB DEL COMERCIO DE VALERA",
    identificacion: "J-07067583-7",
    monto: "137.715,54"
  },
  {
    id: 2500,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "6.544,59"
  },
  {
    id: 2501,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "9.143,18"
  },
  {
    id: 2502,
    cliente: "ESMERALDA GIL",
    identificacion: "V-17267599",
    monto: "63.068,69"
  },
  {
    id: 2503,
    cliente: "JOEL VIERA",
    identificacion: "V-27022056",
    monto: "50.528,10"
  },
  {
    id: 2504,
    cliente: "RICHARD CAÑIZALEZ",
    identificacion: "V-13377874",
    monto: "50.528,10"
  },
  {
    id: 2505,
    cliente: "ARGENIS MORENO",
    identificacion: "V-30536338",
    monto: "5.216,42"
  },
  {
    id: 2506,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "4.530,63"
  },
  {
    id: 2507,
    cliente: "NELSON ORTEGANO",
    identificacion: "V-12458444",
    monto: "4.777,16"
  },
  {
    id: 2508,
    cliente: "ROMER RUIZ",
    identificacion: "V-14800433",
    monto: "3.912,85"
  },
  {
    id: 2509,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "110.790,00"
  },
  {
    id: 2510,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "12.042,50"
  },
  {
    id: 2511,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "9.634,00"
  },
  {
    id: 2512,
    cliente: "AURELIO GONZALEZ",
    identificacion: "V-12905462",
    monto: "59.300,00"
  },
  {
    id: 2513,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "19.374,60"
  },
  {
    id: 2514,
    cliente: "RUBEN ANTONIO MELENDEZ",
    identificacion: "V-14310044",
    monto: "37.803,81"
  },
  {
    id: 2515,
    cliente: "ERWIN RIVAS",
    identificacion: "V-23777461",
    monto: "9.080,72"
  },
  {
    id: 2516,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "69.441,88"
  },
  {
    id: 2517,
    cliente: "SALVADOR UZCATEGUI",
    identificacion: "V-11898640",
    monto: "73.492,80"
  },
  {
    id: 2518,
    cliente: "YEFERSON DAVID",
    identificacion: "V-29994770",
    monto: "5.310,36"
  },
  {
    id: 2519,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "2.413,80"
  },
  {
    id: 2520,
    cliente: "COOPERATIVA LA MONTAÑA, R.L",
    identificacion: "J-30196598-1",
    monto: "540.880,00"
  },
  {
    id: 2521,
    cliente: "JOSE MONTILLA",
    identificacion: "V-10315136",
    monto: "8.916,58"
  },
  {
    id: 2522,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "81.171,27"
  },
  {
    id: 2523,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "5.566,22"
  },
  {
    id: 2524,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "32.129,73"
  },
  {
    id: 2525,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "5.281,25"
  },
  {
    id: 2526,
    cliente: "JESUS PEÑA",
    identificacion: "V-16065728",
    monto: "3.934,49"
  },
  {
    id: 2527,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "1.993,80"
  },
  {
    id: 2528,
    cliente: "ELIO GONZALEZ",
    identificacion: "V-26235818",
    monto: "36.250,50"
  },
  {
    id: 2529,
    cliente: "RAMON GIL",
    identificacion: "V-9313888",
    monto: "7.718,00"
  },
  {
    id: 2530,
    cliente: "JRS DE JOSE SARACHE, F.P",
    identificacion: "V-12541670",
    monto: "27.550,38"
  },
  {
    id: 2531,
    cliente: "JRS DE JOSE SARACHE, F.P",
    identificacion: "V-12541670",
    monto: "28.275,39"
  },
  {
    id: 2532,
    cliente: "ROBERTO MONTILLA",
    identificacion: "V-24139380",
    monto: "7.733,44"
  },
  {
    id: 2533,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "15.665,05"
  },
  {
    id: 2534,
    cliente: "GUILLERMO GARCIA",
    identificacion: "V-9318437",
    monto: "36.250,50"
  },
  {
    id: 2535,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "9.666,80"
  },
  {
    id: 2536,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "47.726,32"
  },
  {
    id: 2537,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "49.300,00"
  },
  {
    id: 2538,
    cliente: "YOANDRY ARAUJO",
    identificacion: "V-17696365",
    monto: "42.676,20"
  },
  {
    id: 2539,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-15294167",
    monto: "12.953,52"
  },
  {
    id: 2540,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "65.250,90"
  },
  {
    id: 2541,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "135.335,20"
  },
  {
    id: 2542,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "252.316,76"
  },
  {
    id: 2543,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "5.316,74"
  },
  {
    id: 2544,
    cliente: "DEIVI BAPTISTA",
    identificacion: "V-19899214",
    monto: "11.633,80"
  },
  {
    id: 2545,
    cliente: "DEIVI BAPTISTA",
    identificacion: "V-19899214",
    monto: "1.208,35"
  },
  {
    id: 2546,
    cliente: "JESUS VALERO",
    identificacion: "V-15042436",
    monto: "4.354,83"
  },
  {
    id: 2547,
    cliente: "JUANA DOMINGUEZ",
    identificacion: "V-12722944",
    monto: "5.579,02"
  },
  {
    id: 2548,
    cliente: "CIPRIANO CASTELLANOS RIVERA",
    identificacion: "V-9013842",
    monto: "38.133,73"
  },
  {
    id: 2549,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "21.198,35"
  },
  {
    id: 2550,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "10.112,88"
  },
  {
    id: 2551,
    cliente: "ALEXIS BRICEÑO",
    identificacion: "V-13523910",
    monto: "136.462,46"
  },
  {
    id: 2552,
    cliente: "JOSE ROJAS",
    identificacion: "V-11133018",
    monto: "6.467,51"
  },
  {
    id: 2553,
    cliente: "JOSE CAMACHO",
    identificacion: "V-10910817",
    monto: "82.257,00"
  },
  {
    id: 2554,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "4.364,51"
  },
  {
    id: 2555,
    cliente: "ANGEL ABREU",
    identificacion: "V-11897076",
    monto: "20.804,34"
  },
  {
    id: 2556,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "9.453,22"
  },
  {
    id: 2557,
    cliente: "FERMIN MAMBEL",
    identificacion: "V-11897587",
    monto: "9.825,00"
  },
  {
    id: 2558,
    cliente: "JOSE BRAVO",
    identificacion: "V-11126953",
    monto: "40.161,00"
  },
  {
    id: 2559,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "55.412,79"
  },
  {
    id: 2560,
    cliente: "JOSE BRAVO",
    identificacion: "V-11126953",
    monto: "2.322,60"
  },
  {
    id: 2561,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "60.483,75"
  },
  {
    id: 2562,
    cliente: "SALVADOR CAMACHO",
    identificacion: "V-23442954",
    monto: "2.733,87"
  },
  {
    id: 2563,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "15.430,61"
  },
  {
    id: 2564,
    cliente: "EDUARDO RONDON",
    identificacion: "V-16533368",
    monto: "18.590,29"
  },
  {
    id: 2565,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "91.969,73"
  },
  {
    id: 2566,
    cliente: "JOSE LEOPOLDO VALERO",
    identificacion: "V-11318913",
    monto: "14.449,96"
  },
  {
    id: 2567,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "20.065,88"
  },
  {
    id: 2568,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.847,40"
  },
  {
    id: 2569,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "7.852,79"
  },
  {
    id: 2570,
    cliente: "PEDRO DUARTE",
    identificacion: "V-12796217",
    monto: "1.551,16"
  },
  {
    id: 2571,
    cliente: "HENRY MORALES",
    identificacion: "V-9170270",
    monto: "8.240,58"
  },
  {
    id: 2572,
    cliente: "ARTURO LUQUE",
    identificacion: "V-28002198",
    monto: "27.819,23"
  },
  {
    id: 2573,
    cliente: "JOEL VIERA",
    identificacion: "V-27022056",
    monto: "126.032,40"
  },
  {
    id: 2574,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "4.372,36"
  },
  {
    id: 2575,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "38.090,07"
  },
  {
    id: 2576,
    cliente: "OLMER ARAUJO",
    identificacion: "V-25822853",
    monto: "101.795,40"
  },
  {
    id: 2577,
    cliente: "OLMER ARAUJO",
    identificacion: "V-25822853",
    monto: "13.708,44"
  },
  {
    id: 2578,
    cliente: "OLMER ARAUJO",
    identificacion: "V-25822853",
    monto: "5.332,14"
  },
  {
    id: 2579,
    cliente: "ALBERTO BARRIOS",
    identificacion: "V-17017750",
    monto: "17.906,30"
  },
  {
    id: 2580,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "64.906,68"
  },
  {
    id: 2581,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "28.357,29"
  },
  {
    id: 2582,
    cliente: "ROSALIA VILLEGAS",
    identificacion: "V-10035838",
    monto: "208.328,25"
  },
  {
    id: 2583,
    cliente: "EMILIO MARTINEZ",
    identificacion: "V-24565908",
    monto: "4.510,00"
  },
  {
    id: 2584,
    cliente: "PERMARI VALERO",
    identificacion: "V-26784342",
    monto: "4.508,08"
  },
  {
    id: 2585,
    cliente: "RAFEL GODOY",
    identificacion: "V-25194074",
    monto: "124.093,44"
  },
  {
    id: 2586,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "14.471,40"
  },
  {
    id: 2587,
    cliente: "MICHEL ATTAR",
    identificacion: "V-23838423",
    monto: "36.423,36"
  },
  {
    id: 2588,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "43.083,94"
  },
  {
    id: 2589,
    cliente: "MIGUEL GRATEROL",
    identificacion: "V-31029822",
    monto: "853,14"
  },
  {
    id: 2590,
    cliente: "FRACISCO BARRIOS",
    identificacion: "V-17267473",
    monto: "31.643,83"
  },
  {
    id: 2591,
    cliente: "ALEXANDER GONZALEZ",
    identificacion: "V-14781366",
    monto: "17.906,30"
  },
  {
    id: 2592,
    cliente: "ELIO GONZALEZ",
    identificacion: "V-26235818",
    monto: "8.725,32"
  },
  {
    id: 2593,
    cliente: "MAGALI BENCOMO",
    identificacion: "V-4918857",
    monto: "29.520,00"
  },
  {
    id: 2594,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "88.293,71"
  },
  {
    id: 2595,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "50.189,98"
  },
  {
    id: 2596,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "164.729,20"
  },
  {
    id: 2597,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "12.118,50"
  },
  {
    id: 2598,
    cliente: "ENRIQUE RONDON",
    identificacion: "V-14718547",
    monto: "6.560,00"
  },
  {
    id: 2599,
    cliente: "RAMON ALBORNOS",
    identificacion: "V-5102326",
    monto: "8.622,54"
  },
  {
    id: 2600,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "75.302,22"
  },
  {
    id: 2601,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "24.746,73"
  },
  {
    id: 2602,
    cliente: "Yenny Carolina Rangel Briceño",
    identificacion: "V-18349459",
    monto: "87.341,40"
  },
  {
    id: 2603,
    cliente: "JOSE TORRES",
    identificacion: "V-10038258",
    monto: "5.337,53"
  },
  {
    id: 2604,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "2.850,00"
  },
  {
    id: 2605,
    cliente: "GONZALO VASQUEZ",
    identificacion: "V-9011229",
    monto: "6.065,38"
  },
  {
    id: 2606,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "33.264,57"
  },
  {
    id: 2607,
    cliente: "JESUS ANDRADE",
    identificacion: "V-23477313",
    monto: "10.137,00"
  },
  {
    id: 2608,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "108.126,83"
  },
  {
    id: 2609,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "35.848,79"
  },
  {
    id: 2610,
    cliente: "LEONARDO SANCHEZ",
    identificacion: "V-24565010",
    monto: "20.190,00"
  },
  {
    id: 2611,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "16.497,82"
  },
  {
    id: 2612,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "31.539,95"
  },
  {
    id: 2613,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "1.552,74"
  },
  {
    id: 2614,
    cliente: "NERIO BARRUETA",
    identificacion: "V-16533014",
    monto: "7.646,00"
  },
  {
    id: 2615,
    cliente: "DUGLAS PEDOMO",
    identificacion: "V-12797792",
    monto: "104.324,44"
  },
  {
    id: 2616,
    cliente: "YULMEDR LA C RUZ",
    identificacion: "V-19287306",
    monto: "213.641,16"
  },
  {
    id: 2617,
    cliente: "JHONI PICHARDO",
    identificacion: "V-29814916",
    monto: "22.423,56"
  },
  {
    id: 2618,
    cliente: "GILBERTO UZCATEGUI",
    identificacion: "V-5280075",
    monto: "7.876,44"
  },
  {
    id: 2619,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "55.099,46"
  },
  {
    id: 2620,
    cliente: "JESUS COLINA",
    identificacion: "V-9179530",
    monto: "5.605,89"
  },
  {
    id: 2621,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "182.179,20"
  },
  {
    id: 2622,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "43.758,00"
  },
  {
    id: 2623,
    cliente: "ALBERT LEON",
    identificacion: "V-20789913",
    monto: "9.145,42"
  },
  {
    id: 2624,
    cliente: "AUXILIADORA VIERA",
    identificacion: "V-12039973",
    monto: "14.002,56"
  },
  {
    id: 2625,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "19.934,20"
  },
  {
    id: 2626,
    cliente: "MARIA BASTIDAS",
    identificacion: "V-13405092",
    monto: "15.270,00"
  },
  {
    id: 2627,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "7.956,00"
  },
  {
    id: 2628,
    cliente: "ANDERSON ASUAJE",
    identificacion: "V-18925939",
    monto: "12.655,79"
  },
  {
    id: 2629,
    cliente: "EMILIO MARTINEZ",
    identificacion: "V-24565908",
    monto: "8.299,63"
  },
  {
    id: 2630,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "972,40"
  },
  {
    id: 2631,
    cliente: "ALVARO RANGEL",
    identificacion: "V-9175797",
    monto: "8.610,00"
  },
  {
    id: 2632,
    cliente: "PEDRO BASTIDAS",
    identificacion: "V-20040055",
    monto: "7.793,92"
  },
  {
    id: 2633,
    cliente: "ANDERSON ASUAJE",
    identificacion: "V-18925939",
    monto: "59.155,85"
  },
  {
    id: 2634,
    cliente: "PEDRO CASTELLANOS",
    identificacion: "V-21367768",
    monto: "114.263,74"
  },
  {
    id: 2635,
    cliente: "CARLOS GARCIA",
    identificacion: "V-15188343",
    monto: "3.166,28"
  },
  {
    id: 2636,
    cliente: "FELIPE CARRIZO FRANCO",
    identificacion: "V-21366197",
    monto: "8.524,60"
  },
  {
    id: 2637,
    cliente: "ORLANDO MORENO",
    identificacion: "V-18734068",
    monto: "92.401,79"
  },
  {
    id: 2638,
    cliente: "HENRY ALARCON",
    identificacion: "V-15751219",
    monto: "16.196,74"
  },
  {
    id: 2639,
    cliente: "VICTOR OCANTO",
    identificacion: "V-17265887",
    monto: "6.560,00"
  },
  {
    id: 2640,
    cliente: "KENIA ARAUJO",
    identificacion: "V-21061791",
    monto: "9.742,40"
  },
  {
    id: 2641,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "22.475,71"
  },
  {
    id: 2642,
    cliente: "DANIEL MONTILLA",
    identificacion: "V-15583195",
    monto: "5.385,05"
  },
  {
    id: 2643,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "8.665,03"
  },
  {
    id: 2644,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "3.348,52"
  },
  {
    id: 2645,
    cliente: "JAVIER BRICEÑO",
    identificacion: "V-5793192",
    monto: "15.247,03"
  },
  {
    id: 2646,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "8.811,90"
  },
  {
    id: 2647,
    cliente: "JOSE IDROBO",
    identificacion: "V-9329600",
    monto: "2.937,30"
  },
  {
    id: 2648,
    cliente: "NESTOR SANTIAGO",
    identificacion: "V-17391183",
    monto: "11.289,02"
  },
  {
    id: 2649,
    cliente: "WILLIAN QUEVEDO",
    identificacion: "V-11610193",
    monto: "4.405,95"
  },
  {
    id: 2650,
    cliente: "ANTONY MENDOZA",
    identificacion: "V-18458380",
    monto: "9.061,26"
  },
  {
    id: 2651,
    cliente: "ALBERTO BARRIOS",
    identificacion: "V-17017750",
    monto: "36.167,96"
  },
  {
    id: 2652,
    cliente: "YOBER ALBISO",
    identificacion: "V-27259748",
    monto: "23.743,18"
  },
  {
    id: 2653,
    cliente: "GILBERT UZCATEGUI",
    identificacion: "V-21063709",
    monto: "572,77"
  },
  {
    id: 2654,
    cliente: "ADALBERTO MALDONADO",
    identificacion: "V-14149831",
    monto: "2.912,82"
  },
  {
    id: 2655,
    cliente: "HECTOR VIERA",
    identificacion: "V-9495596",
    monto: "13.591,00"
  },
  {
    id: 2656,
    cliente: "YAMILET VILLEGAS",
    identificacion: "V-13377539",
    monto: "20.433,82"
  },
  {
    id: 2657,
    cliente: "WILLIAN QUEVEDO",
    identificacion: "V-11610193",
    monto: "2.912,82"
  },
  {
    id: 2658,
    cliente: "MAGALY PAREDES",
    identificacion: "V-5495528",
    monto: "4.650,73"
  },
  {
    id: 2659,
    cliente: "MALDOMERO MUJICA",
    identificacion: "V-24881099",
    monto: "73.429,00"
  },
  {
    id: 2660,
    cliente: "JORGE LEON",
    identificacion: "V-19794298",
    monto: "18.067,50"
  },
  {
    id: 2661,
    cliente: "HUMBERTO LINARES",
    identificacion: "V-11610042",
    monto: "165.620,80"
  },
  {
    id: 2662,
    cliente: "PEDRO LINARES",
    identificacion: "V-4920057",
    monto: "8.665,03"
  },
  {
    id: 2663,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "51.402,75"
  },
  {
    id: 2664,
    cliente: "PEDRO RODRIGUEZ",
    identificacion: "V-10910965",
    monto: "8.665,03"
  },
  {
    id: 2665,
    cliente: "ANA MALDONADO",
    identificacion: "V-12387689",
    monto: "8.623,00"
  },
  {
    id: 2666,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "15.665,60"
  },
  {
    id: 2667,
    cliente: "GEOVANY MALPÌCA",
    identificacion: "V-30535576",
    monto: "749,01"
  },
  {
    id: 2668,
    cliente: "HUMBERTO LINARES",
    identificacion: "V-11610042",
    monto: "19.710,00"
  },
  {
    id: 2669,
    cliente: "JESUS TERAN",
    identificacion: "V-16463605",
    monto: "9.041,99"
  },
  {
    id: 2670,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "26.925,28"
  },
  {
    id: 2671,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "20.610,06"
  },
  {
    id: 2672,
    cliente: "WILIAMS GUDIÑO",
    identificacion: "V-15043329",
    monto: "27.449,05"
  },
  {
    id: 2673,
    cliente: "ROBERT PERDOMO",
    identificacion: "V-18376630",
    monto: "18.083,98"
  },
  {
    id: 2674,
    cliente: "CARLOS UTRILLA",
    identificacion: "V-13461805",
    monto: "11.462,04"
  },
  {
    id: 2675,
    cliente: "EVERT ESCALONA",
    identificacion: "V-17597483",
    monto: "90.515,29"
  },
  {
    id: 2676,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "152.151,40"
  },
  {
    id: 2677,
    cliente: "JOSE UZCATEGUI",
    identificacion: "V-8715245",
    monto: "71.609,56"
  },
  {
    id: 2678,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "31.218,76"
  },
  {
    id: 2679,
    cliente: "ITALO RUIZ",
    identificacion: "V-11896667",
    monto: "20.483,68"
  },
  {
    id: 2680,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "54.051,41"
  },
  {
    id: 2681,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "4.900,40"
  },
  {
    id: 2682,
    cliente: "MAECELLA CERVI",
    identificacion: "V-3212476",
    monto: "39.971,31"
  },
  {
    id: 2683,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "16.406,54"
  },
  {
    id: 2684,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "39.095,42"
  },
  {
    id: 2685,
    cliente: "ROBERTO GALLO",
    identificacion: "V-9317242",
    monto: "10.725,18"
  },
  {
    id: 2686,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "35.232,27"
  },
  {
    id: 2687,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "220.289,42"
  },
  {
    id: 2688,
    cliente: "JESUS ENRIQUE BASTIDAS PARRA",
    identificacion: "V-17266859",
    monto: "87.792,04"
  },
  {
    id: 2689,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "45.312,02"
  },
  {
    id: 2690,
    cliente: "BENITO ROSALES",
    identificacion: "V-16533364",
    monto: "8.870,00"
  },
  {
    id: 2691,
    cliente: "Solanyela Uzcátegui",
    identificacion: "V-21062755",
    monto: "14.253,75"
  },
  {
    id: 2692,
    cliente: "JAVIER ROJO",
    identificacion: "V-17717382",
    monto: "1.850.000,00"
  },
  {
    id: 2693,
    cliente: "ARTURO DURAN",
    identificacion: "V-21209256",
    monto: "15.455,65"
  },
  {
    id: 2694,
    cliente: "JAVIER ROJO",
    identificacion: "V-17717382",
    monto: "30.071,51"
  },
  {
    id: 2695,
    cliente: "OSWALDO JEREZ",
    identificacion: "V-2625834",
    monto: "5.427,18"
  },
  {
    id: 2696,
    cliente: "VICTOR PARRA",
    identificacion: "V-20751548",
    monto: "108.543,60"
  },
  {
    id: 2697,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "9.428,49"
  },
  {
    id: 2698,
    cliente: "DAVID VALERA",
    identificacion: "V-17865700",
    monto: "83.874,00"
  },
  {
    id: 2699,
    cliente: "DAVID VALERA",
    identificacion: "V-17865700",
    monto: "20.968,65"
  },
  {
    id: 2700,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "1.726,83"
  },
  {
    id: 2701,
    cliente: "MANUEL DURAN",
    identificacion: "V-28281690",
    monto: "88.541,97"
  },
  {
    id: 2702,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "1.726,83"
  },
  {
    id: 2703,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "18.891,52"
  },
  {
    id: 2704,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-19102237",
    monto: "10.880,58"
  },
  {
    id: 2705,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "29.064,56"
  },
  {
    id: 2706,
    cliente: "GONZALO GONZALEZ",
    identificacion: "V-15293120",
    monto: "3.974,64"
  },
  {
    id: 2707,
    cliente: "REYES AVENDAÑO",
    identificacion: "V-5357268",
    monto: "31.369,85"
  },
  {
    id: 2708,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "9.494,42"
  },
  {
    id: 2709,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "26.948,07"
  },
  {
    id: 2710,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "45.633,85"
  },
  {
    id: 2711,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "215.691,99"
  },
  {
    id: 2712,
    cliente: "OSCAR MENDEZ",
    identificacion: "V-21206122",
    monto: "21.115,27"
  },
  {
    id: 2713,
    cliente: "ENRRIQUE GIL",
    identificacion: "V-29994029",
    monto: "12.420,75"
  },
  {
    id: 2714,
    cliente: "MARIO RANGEL",
    identificacion: "V-26482453",
    monto: "3.214,49"
  },
  {
    id: 2715,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "286.279,52"
  },
  {
    id: 2716,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "32.340,00"
  },
  {
    id: 2717,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "15.997,92"
  },
  {
    id: 2718,
    cliente: "JOSE RUL RIVERO",
    identificacion: "V-23594946",
    monto: "7.627,50"
  },
  {
    id: 2719,
    cliente: "DANIEL ARAUJO",
    identificacion: "V-4058845",
    monto: "2.999,16"
  },
  {
    id: 2720,
    cliente: "ROBERTO ARAUJO",
    identificacion: "V-11323347",
    monto: "6.780,00"
  },
  {
    id: 2721,
    cliente: "GERARDO ARAUJO",
    identificacion: "V-13404398",
    monto: "26.666,02"
  },
  {
    id: 2722,
    cliente: "JORGE MATERAN",
    identificacion: "V-11618678",
    monto: "6.098,29"
  },
  {
    id: 2723,
    cliente: "NELSON ABREU",
    identificacion: "V-19287140",
    monto: "3.499,00"
  },
  {
    id: 2724,
    cliente: "NELSON ABREU",
    identificacion: "V-19287140",
    monto: "2.849,20"
  },
  {
    id: 2725,
    cliente: "GUSTAVO PERNIA",
    identificacion: "V-10318696",
    monto: "3.002,76"
  },
  {
    id: 2726,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-19643118",
    monto: "655,60"
  },
  {
    id: 2727,
    cliente: "JESUS PEÑA",
    identificacion: "V-16065728",
    monto: "10.534,68"
  },
  {
    id: 2728,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "14.178,03"
  },
  {
    id: 2729,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "31.864,00"
  },
  {
    id: 2730,
    cliente: "EDDYN MENDOZA",
    identificacion: "V-17283679",
    monto: "4.754,37"
  },
  {
    id: 2731,
    cliente: "EDDYN MENDOZA",
    identificacion: "V-17283679",
    monto: "4.754,37"
  },
  {
    id: 2732,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "5.500,00"
  },
  {
    id: 2733,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "1.601,48"
  },
  {
    id: 2734,
    cliente: "ROSA GIL",
    identificacion: "V-21207277",
    monto: "122.555,28"
  },
  {
    id: 2735,
    cliente: "JUNIOR LINARES",
    identificacion: "V-19881568",
    monto: "75.804,91"
  },
  {
    id: 2736,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "33.900,00"
  },
  {
    id: 2737,
    cliente: "JUNIOR LINARES",
    identificacion: "V-19881568",
    monto: "4.882,84"
  },
  {
    id: 2738,
    cliente: "JOHAN ARAUJO",
    identificacion: "V-15690509",
    monto: "17.200,81"
  },
  {
    id: 2739,
    cliente: "RUBEN GARCIA",
    identificacion: "V-24138530",
    monto: "12.771,73"
  },
  {
    id: 2740,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "38.785,65"
  },
  {
    id: 2741,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "5.755,28"
  },
  {
    id: 2742,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "6.255,75"
  },
  {
    id: 2743,
    cliente: "MARIO VERA",
    identificacion: "V-23782504",
    monto: "41.022,71"
  },
  {
    id: 2744,
    cliente: "RAFAEL BRICEÑO",
    identificacion: "V-2687057",
    monto: "153.871,95"
  },
  {
    id: 2745,
    cliente: "RENE MIGUEL BARRIOS",
    identificacion: "V-11897501",
    monto: "4.661,00"
  },
  {
    id: 2746,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "29.351,97"
  },
  {
    id: 2747,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "10.129,30"
  },
  {
    id: 2748,
    cliente: "EDUARD CASTELLANOS",
    identificacion: "V-20655638",
    monto: "10.534,68"
  },
  {
    id: 2749,
    cliente: "SILVERIO MONTESINO",
    identificacion: "V-12044218",
    monto: "5.085,00"
  },
  {
    id: 2750,
    cliente: "PEDRFO UZCATEGUI",
    identificacion: "V-23837938",
    monto: "4.661,00"
  },
  {
    id: 2751,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "22.216,06"
  },
  {
    id: 2752,
    cliente: "ANDRES DIAZ PACHECO",
    identificacion: "V-11618556",
    monto: "53.437,46"
  },
  {
    id: 2753,
    cliente: "JACINTO ANTONIO OLIVARES",
    identificacion: "V-9310667",
    monto: "4.796,65"
  },
  {
    id: 2754,
    cliente: "RAFAEL INCIARTE",
    identificacion: "V-10412793",
    monto: "272.035,09"
  },
  {
    id: 2755,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "11.693,71"
  },
  {
    id: 2756,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "9.982,07"
  },
  {
    id: 2757,
    cliente: "WILLIAN GUTIERREZ",
    identificacion: "V-18168029",
    monto: "71.949,69"
  },
  {
    id: 2758,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "4.165,51"
  },
  {
    id: 2759,
    cliente: "YOEL ESCALONA",
    identificacion: "V-17865815",
    monto: "31.316,62"
  },
  {
    id: 2760,
    cliente: "FABIANA RANGEL",
    identificacion: "V-26114290",
    monto: "4.291,74"
  },
  {
    id: 2761,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "32.638,00"
  },
  {
    id: 2762,
    cliente: "CIPRIANO CASTELLANOS RIVERA",
    identificacion: "V-9013842",
    monto: "66.469,21"
  },
  {
    id: 2763,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "77.402,70"
  },
  {
    id: 2764,
    cliente: "NELSON ROSALES",
    identificacion: "V-27677075",
    monto: "1.514,73"
  },
  {
    id: 2765,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "5.004,60"
  },
  {
    id: 2766,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "4.544,19"
  },
  {
    id: 2767,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "27.300,49"
  },
  {
    id: 2768,
    cliente: "OSMAN REYES",
    identificacion: "V-18802153",
    monto: "11.946,18"
  },
  {
    id: 2769,
    cliente: "SILVERIO MONTESINO",
    identificacion: "V-12044218",
    monto: "10.380,00"
  },
  {
    id: 2770,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "53.433,31"
  },
  {
    id: 2771,
    cliente: "EDGAR MANZANILLA",
    identificacion: "V-18271423",
    monto: "813,76"
  },
  {
    id: 2772,
    cliente: "MAURO TROMPETERO",
    identificacion: "V-18377541",
    monto: "124.592,02"
  },
  {
    id: 2773,
    cliente: "JOSE ROJAS",
    identificacion: "V-11133018",
    monto: "3.560,20"
  },
  {
    id: 2774,
    cliente: "ANTONIO CAMACHO",
    identificacion: "V-13048814",
    monto: "46.791,20"
  },
  {
    id: 2775,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "131.778,26"
  },
  {
    id: 2776,
    cliente: "JOSE ALY GONZALEZ",
    identificacion: "V-10909932",
    monto: "27.680,00"
  },
  {
    id: 2777,
    cliente: "LEOPOLDO DELGADO",
    identificacion: "V-12498747",
    monto: "24.721,00"
  },
  {
    id: 2778,
    cliente: "JOHON CARVAJAL",
    identificacion: "V-84589450",
    monto: "6.103,20"
  },
  {
    id: 2779,
    cliente: "ADRIAN MORENO",
    identificacion: "V-19898876",
    monto: "10.044,85"
  },
  {
    id: 2780,
    cliente: "DANIEL AVENDAÑO",
    identificacion: "V-14460076",
    monto: "3.051,60"
  },
  {
    id: 2781,
    cliente: "GILMER RAMIREZ",
    identificacion: "V-10911122",
    monto: "23.143,89"
  },
  {
    id: 2782,
    cliente: "ALEXIS PERDOMO",
    identificacion: "V-12499916",
    monto: "2.268,50"
  },
  {
    id: 2783,
    cliente: "JESUS ENRIQUE BASTIDAS PARRA",
    identificacion: "V-17266859",
    monto: "13.949,68"
  },
  {
    id: 2784,
    cliente: "ARNOLDO BRICEÑO",
    identificacion: "V-12498787",
    monto: "4.341,72"
  },
  {
    id: 2785,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "98.210,99"
  },
  {
    id: 2786,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "52.866,80"
  },
  {
    id: 2787,
    cliente: "JAIRO AGUILAR",
    identificacion: "V-13926432",
    monto: "45.460,31"
  },
  {
    id: 2788,
    cliente: "ARTURO AVENDAÑO",
    identificacion: "V-12540119",
    monto: "15.665,93"
  },
  {
    id: 2789,
    cliente: "JUNIOR PEREZ",
    identificacion: "V-17346592",
    monto: "19.195,00"
  },
  {
    id: 2790,
    cliente: "YOVANY MORENO",
    identificacion: "V-14983042",
    monto: "16.559,81"
  },
  {
    id: 2791,
    cliente: "YOVANY MORENO",
    identificacion: "V-14983042",
    monto: "4.908,69"
  },
  {
    id: 2792,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "23.550,00"
  },
  {
    id: 2793,
    cliente: "LUIS RIVAS",
    identificacion: "V-12540548",
    monto: "4.829,10"
  },
  {
    id: 2794,
    cliente: "ENMANUEL GOMEZ",
    identificacion: "V-20430707",
    monto: "412,14"
  },
  {
    id: 2795,
    cliente: "JUAN PACHECO",
    identificacion: "V-12931602",
    monto: "90.292,00"
  },
  {
    id: 2796,
    cliente: "ANDREINA GRATEROL",
    identificacion: "V-19287121",
    monto: "34.259,46"
  },
  {
    id: 2797,
    cliente: "RAFAEL INCIARTE",
    identificacion: "V-10412793",
    monto: "27.850,58"
  },
  {
    id: 2798,
    cliente: "ROLDAN RONDON",
    identificacion: "V-11896981",
    monto: "13.410,14"
  },
  {
    id: 2799,
    cliente: "GABRIEEL AVENDAÑO",
    identificacion: "V-14718483",
    monto: "20.365,07"
  },
  {
    id: 2800,
    cliente: "GABRIEL RIVERA",
    identificacion: "V-5757749",
    monto: "8.995,04"
  },
  {
    id: 2801,
    cliente: "WILLIAN PARGAS",
    identificacion: "V-25171302",
    monto: "5.697,56"
  },
  {
    id: 2802,
    cliente: "ROSARIO SUAREZ",
    identificacion: "V-12045289",
    monto: "13.482,50"
  },
  {
    id: 2803,
    cliente: "JUAN CARRIZO",
    identificacion: "V-11896268",
    monto: "9.147,17"
  },
  {
    id: 2804,
    cliente: "JOSE AVENDAÑO",
    identificacion: "V-5357541",
    monto: "127.718,88"
  },
  {
    id: 2805,
    cliente: "EDGAR FAJARDO",
    identificacion: "V-18924326",
    monto: "15.686,72"
  },
  {
    id: 2806,
    cliente: "LUIS PEREZ",
    identificacion: "V-15043855",
    monto: "2.071,84"
  },
  {
    id: 2807,
    cliente: "LUIS PEREZ",
    identificacion: "V-15043855",
    monto: "3.107,76"
  },
  {
    id: 2808,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "37.930,20"
  },
  {
    id: 2809,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "2.279,02"
  },
  {
    id: 2810,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "94.527,70"
  },
  {
    id: 2811,
    cliente: "JOSE MENDOZA",
    identificacion: "V-5501039",
    monto: "22.147,97"
  },
  {
    id: 2812,
    cliente: "JESUS PINEDA",
    identificacion: "V-28753522",
    monto: "7.251,44"
  },
  {
    id: 2813,
    cliente: "JAVIER MONTILLA",
    identificacion: "V-18472353",
    monto: "1.559,06"
  },
  {
    id: 2814,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "78.564,18"
  },
  {
    id: 2815,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "175.862,92"
  },
  {
    id: 2816,
    cliente: "RAMON PALENCIA",
    identificacion: "V-13450106",
    monto: "8.018,04"
  },
  {
    id: 2817,
    cliente: "LISANDRO PEREZ",
    identificacion: "V-15824757",
    monto: "13.482,50"
  },
  {
    id: 2818,
    cliente: "OMAR RIVAS",
    identificacion: "V-5356286",
    monto: "5.345,36"
  },
  {
    id: 2819,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "5.542,50"
  },
  {
    id: 2820,
    cliente: "JOSE SANTOS",
    identificacion: "V-12907038",
    monto: "11.395,12"
  },
  {
    id: 2821,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "2.279,02"
  },
  {
    id: 2822,
    cliente: "ROGELIO TORRES",
    identificacion: "V-5787530",
    monto: "2.071,84"
  },
  {
    id: 2823,
    cliente: "CESAR MEDOZA",
    identificacion: "V-19287262",
    monto: "13.482,50"
  },
  {
    id: 2824,
    cliente: "ANDREINA OLLARVES",
    identificacion: "V-20429374",
    monto: "1.294,90"
  },
  {
    id: 2825,
    cliente: "BETTY HERNANDEZ",
    identificacion: "V-17267989",
    monto: "5.972,08"
  },
  {
    id: 2826,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "9.323,28"
  },
  {
    id: 2827,
    cliente: "SERGIO MARQUEZ",
    identificacion: "V-20134157",
    monto: "6.733,48"
  },
  {
    id: 2828,
    cliente: "LUIS DAVILA",
    identificacion: "V-23725711",
    monto: "49.677,54"
  },
  {
    id: 2829,
    cliente: "LUIS LINARES",
    identificacion: "V-29814101",
    monto: "5.080,63"
  },
  {
    id: 2830,
    cliente: "JORGE LUIS VALECILLOS SAEZ",
    identificacion: "V-11618826",
    monto: "35.779,80"
  },
  {
    id: 2831,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "53.821,23"
  },
  {
    id: 2832,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "1.885,38"
  },
  {
    id: 2833,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "10.833,19"
  },
  {
    id: 2834,
    cliente: "JOEL MATERAN",
    identificacion: "V-26002189",
    monto: "90.901,98"
  },
  {
    id: 2835,
    cliente: "JOEL MATERAN",
    identificacion: "V-26002189",
    monto: "6.008,34"
  },
  {
    id: 2836,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "17.222,17"
  },
  {
    id: 2837,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "79.403,26"
  },
  {
    id: 2838,
    cliente: "JOEL MATERAN",
    identificacion: "V-26002189",
    monto: "50.501,10"
  },
  {
    id: 2839,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "42.050,00"
  },
  {
    id: 2840,
    cliente: "JESUS FERNANDEZ",
    identificacion: "V-11611031",
    monto: "22.023,66"
  },
  {
    id: 2841,
    cliente: "JESUS FERNANDEZ",
    identificacion: "V-11611031",
    monto: "7.470,00"
  },
  {
    id: 2842,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "2.279,02"
  },
  {
    id: 2843,
    cliente: "CONSEJO COMUNAL EL ALBA",
    identificacion: "J-29953484-6",
    monto: "192.505,03"
  },
  {
    id: 2844,
    cliente: "YOSMAR ARAUJO",
    identificacion: "V-18615023",
    monto: "47.170,63"
  },
  {
    id: 2845,
    cliente: "JOSE BAVARESCO",
    identificacion: "V-18260553",
    monto: "15.538,80"
  },
  {
    id: 2846,
    cliente: "JOSE LEONARDO MANRIQUE",
    identificacion: "V-20394084",
    monto: "21.966,77"
  },
  {
    id: 2847,
    cliente: "GERMAN LINARES",
    identificacion: "V-23262626",
    monto: "5.209,10"
  },
  {
    id: 2848,
    cliente: "JESUS RAMIREZ",
    identificacion: "V-12040799",
    monto: "31.166,05"
  },
  {
    id: 2849,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "7.084,38"
  },
  {
    id: 2850,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "5.209,10"
  },
  {
    id: 2851,
    cliente: "MARIA JULIA RIVERO",
    identificacion: "V-5775171",
    monto: "13.022,75"
  },
  {
    id: 2852,
    cliente: "MAURO TROMPETERO",
    identificacion: "V-18377541",
    monto: "235.920,26"
  },
  {
    id: 2853,
    cliente: "EUCARI ARAUJO",
    identificacion: "V-19643103",
    monto: "3.490,10"
  },
  {
    id: 2854,
    cliente: "FRANKLIN GUANDA",
    identificacion: "V-17391679",
    monto: "40.334,07"
  },
  {
    id: 2855,
    cliente: "ANGEL BLANCO",
    identificacion: "V-9154467",
    monto: "3.490,10"
  },
  {
    id: 2856,
    cliente: "JOSE PALOMINO",
    identificacion: "V-9313790",
    monto: "12.179,33"
  },
  {
    id: 2857,
    cliente: "ABRAHAM CALDERAS",
    identificacion: "V-31814851",
    monto: "47.444,48"
  },
  {
    id: 2858,
    cliente: "CECILIA VARGAS",
    identificacion: "E-85005516",
    monto: "10.782,84"
  },
  {
    id: 2859,
    cliente: "CARLOS MELENDEZ",
    identificacion: "V-27565184",
    monto: "14.705,29"
  },
  {
    id: 2860,
    cliente: "OMAIRA VALERO",
    identificacion: "V-10037278",
    monto: "3.490,10"
  },
  {
    id: 2861,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "17.019,27"
  },
  {
    id: 2862,
    cliente: "JAVIER UZCATEGUI",
    identificacion: "V-5785213",
    monto: "96.948,25"
  },
  {
    id: 2863,
    cliente: "JAVIER UZCATEGUI",
    identificacion: "V-5785213",
    monto: "4.053,21"
  },
  {
    id: 2864,
    cliente: "JOSE BENITO VILLARREAL",
    identificacion: "V-11894447",
    monto: "4.189,36"
  },
  {
    id: 2865,
    cliente: "MAECELLA CERVI",
    identificacion: "V-3212476",
    monto: "22.989,11"
  },
  {
    id: 2866,
    cliente: "ANTONIO MORENO",
    identificacion: "V-11131851",
    monto: "7.855,05"
  },
  {
    id: 2867,
    cliente: "ANTONIO MORENO",
    identificacion: "V-15188269",
    monto: "43.988,00"
  },
  {
    id: 2868,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "57.204,92"
  },
  {
    id: 2869,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "45.821,10"
  },
  {
    id: 2870,
    cliente: "JESUS YANEL PEREZ",
    identificacion: "V-14148503",
    monto: "20.321,38"
  },
  {
    id: 2871,
    cliente: "RAFAEL PACHECO",
    identificacion: "V-9012310",
    monto: "7.376,18"
  },
  {
    id: 2872,
    cliente: "JAVIER FROILAN",
    identificacion: "V-10910873",
    monto: "88.440,00"
  },
  {
    id: 2873,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "43.835,62"
  },
  {
    id: 2874,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "5.268,70"
  },
  {
    id: 2875,
    cliente: "RAFAEL CERRADO",
    identificacion: "V-17391163",
    monto: "37.900,00"
  },
  {
    id: 2876,
    cliente: "MARISOL COLMENARES",
    identificacion: "V-11617370",
    monto: "54.689,94"
  },
  {
    id: 2877,
    cliente: "CARLOS QUINTERO",
    identificacion: "V-14719822",
    monto: "6.059,01"
  },
  {
    id: 2878,
    cliente: "MIGUEL SULBARAN",
    identificacion: "V-6320962",
    monto: "3.530,03"
  },
  {
    id: 2879,
    cliente: "RAFAEL BRICEÑO",
    identificacion: "V-2687057",
    monto: "101.706,00"
  },
  {
    id: 2880,
    cliente: "YORDY LOBO",
    identificacion: "V-25170219",
    monto: "21.074,80"
  },
  {
    id: 2881,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "44.295,04"
  },
  {
    id: 2882,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "63.577,42"
  },
  {
    id: 2883,
    cliente: "CARLOS BASTIDAS",
    identificacion: "V-9174977",
    monto: "15.326,15"
  },
  {
    id: 2884,
    cliente: "GREGORIO MOLINA",
    identificacion: "V-15952806",
    monto: "9.798,33"
  },
  {
    id: 2885,
    cliente: "ANDERSON FAJARDO",
    identificacion: "V-17605205",
    monto: "4.350,10"
  },
  {
    id: 2886,
    cliente: "DANIEL ARAUJO",
    identificacion: "V-4058845",
    monto: "3.022,00"
  },
  {
    id: 2887,
    cliente: "RAUL OSUNA",
    identificacion: "V-14459735",
    monto: "34.565,77"
  },
  {
    id: 2888,
    cliente: "JOSE SUAREZ",
    identificacion: "V-10402528",
    monto: "2.705,55"
  },
  {
    id: 2889,
    cliente: "MIGUEL BENCOMO",
    identificacion: "V-23837967",
    monto: "71.617,50"
  },
  {
    id: 2890,
    cliente: "CRSITIAN BALZA",
    identificacion: "V-25171449",
    monto: "4.509,25"
  },
  {
    id: 2891,
    cliente: "JOSE RONDON",
    identificacion: "V-11322428",
    monto: "41.368,38"
  },
  {
    id: 2892,
    cliente: "DIANA BECERRA",
    identificacion: "V-26094613",
    monto: "4.641,88"
  },
  {
    id: 2893,
    cliente: "RONAL BRICEÑO",
    identificacion: "V-19147690",
    monto: "8.762,13"
  },
  {
    id: 2894,
    cliente: "LEMUS PINEDA",
    identificacion: "V-5757003",
    monto: "11.120,25"
  },
  {
    id: 2895,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "38.540,83"
  },
  {
    id: 2896,
    cliente: "WILDER LEAL",
    identificacion: "V-24786159",
    monto: "3.909,43"
  },
  {
    id: 2897,
    cliente: "MARIA RONDON",
    identificacion: "V-9320318",
    monto: "17.639,13"
  },
  {
    id: 2898,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "12.466,75"
  },
  {
    id: 2899,
    cliente: "JAVIER UZCATEGUI",
    identificacion: "V-5785213",
    monto: "5.835,50"
  },
  {
    id: 2900,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "22.635,29"
  },
  {
    id: 2901,
    cliente: "RAUL PAREDES",
    identificacion: "V-21592185",
    monto: "28.328,60"
  },
  {
    id: 2902,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-12542237",
    monto: "15.973,35"
  },
  {
    id: 2903,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "41.662,00"
  },
  {
    id: 2904,
    cliente: "ALFREDO MORENO",
    identificacion: "V-30236337",
    monto: "6.631,25"
  },
  {
    id: 2905,
    cliente: "ROBERTO MENDOZA",
    identificacion: "V-17866768",
    monto: "4.550,81"
  },
  {
    id: 2906,
    cliente: "ROBERTO MENDOZA",
    identificacion: "V-17866768",
    monto: "4.550,81"
  },
  {
    id: 2907,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "26.769,50"
  },
  {
    id: 2908,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "3.426,50"
  },
  {
    id: 2909,
    cliente: "RAFAEL RAMIREZ",
    identificacion: "V-3462579",
    monto: "856,62"
  },
  {
    id: 2910,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "14.824,95"
  },
  {
    id: 2911,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "29.649,90"
  },
  {
    id: 2912,
    cliente: "MAGALI BENCOMO",
    identificacion: "V-4918857",
    monto: "43.623,58"
  },
  {
    id: 2913,
    cliente: "SONIA NIEVES",
    identificacion: "V-14030833",
    monto: "5.193,28"
  },
  {
    id: 2914,
    cliente: "GREGORIO BRICEÑO",
    identificacion: "V-13745109",
    monto: "9.465,68"
  },
  {
    id: 2915,
    cliente: "JUAN PEDRO GEMMATO",
    identificacion: "V-9171698",
    monto: "19.407,90"
  },
  {
    id: 2916,
    cliente: "YUSMELY BRICEÑO",
    identificacion: "V-19101367",
    monto: "40.689,64"
  },
  {
    id: 2917,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "64.070,19"
  },
  {
    id: 2918,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "5.889,29"
  },
  {
    id: 2919,
    cliente: "MARCO MERIÑO",
    identificacion: "V-15940216",
    monto: "21.415,60"
  },
  {
    id: 2920,
    cliente: "YOSMAR ARAUJO",
    identificacion: "V-18615023",
    monto: "34.532,66"
  },
  {
    id: 2921,
    cliente: "SALVADOR UZCATEGUI",
    identificacion: "V-11898640",
    monto: "11.880,88"
  },
  {
    id: 2922,
    cliente: "SALVADOR UZCATEGUI",
    identificacion: "V-11898640",
    monto: "22.789,68"
  },
  {
    id: 2923,
    cliente: "GREGORIO UZCATEGUI",
    identificacion: "V-25308294",
    monto: "119.051,82"
  },
  {
    id: 2924,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "26.515,96"
  },
  {
    id: 2925,
    cliente: "JESUS PAZ",
    identificacion: "V-28445711",
    monto: "144.255,42"
  },
  {
    id: 2926,
    cliente: "ALIRIO ENRRIQUE OSUNA",
    identificacion: "V-31320108",
    monto: "10.800,80"
  },
  {
    id: 2927,
    cliente: "JOSE LAMUS",
    identificacion: "V-27676979",
    monto: "58.864,36"
  },
  {
    id: 2928,
    cliente: "ROJABER FUENTES",
    identificacion: "V-17864288",
    monto: "249.626,38"
  },
  {
    id: 2929,
    cliente: "JESUS VERGARA",
    identificacion: "V-19899891",
    monto: "6.205,05"
  },
  {
    id: 2930,
    cliente: "MAURO TROMPETERO",
    identificacion: "V-18377541",
    monto: "523.084,65"
  },
  {
    id: 2931,
    cliente: "ROJABER FUENTES",
    identificacion: "V-17864288",
    monto: "17.740,31"
  },
  {
    id: 2932,
    cliente: "ISAAC GARCIA",
    identificacion: "V-23477790",
    monto: "4.989,96"
  },
  {
    id: 2933,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "7.949,38"
  },
  {
    id: 2934,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "20.143,50"
  },
  {
    id: 2935,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "21.061,56"
  },
  {
    id: 2936,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "97.185,61"
  },
  {
    id: 2937,
    cliente: "MARIA RAMIREZ",
    identificacion: "V-9321214",
    monto: "19.996,97"
  },
  {
    id: 2938,
    cliente: "GILBERTO RIOS",
    identificacion: "V-24138021",
    monto: "54.877,33"
  },
  {
    id: 2939,
    cliente: "GUSTAVO HERNANDEZ",
    identificacion: "V-8723165",
    monto: "4.960,00"
  },
  {
    id: 2940,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "86.083,48"
  },
  {
    id: 2941,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "30.513,05"
  },
  {
    id: 2942,
    cliente: "YAJAIRA BARRIOS",
    identificacion: "V-13207226",
    monto: "8.822,20"
  },
  {
    id: 2943,
    cliente: "JOSE ARAUJO",
    identificacion: "V-14460103",
    monto: "2.232,78"
  },
  {
    id: 2944,
    cliente: "YOSMER TERAN",
    identificacion: "V-20708593",
    monto: "103.348,70"
  },
  {
    id: 2945,
    cliente: "GREGORIO BRICEÑO",
    identificacion: "V-13745109",
    monto: "83.593,03"
  },
  {
    id: 2946,
    cliente: "GREGORIO BRICEÑO",
    identificacion: "V-13745109",
    monto: "23.416,94"
  },
  {
    id: 2947,
    cliente: "ROMULO MALPICA",
    identificacion: "V-9320179",
    monto: "29.951,90"
  },
  {
    id: 2948,
    cliente: "MARCOS MENDEZ",
    identificacion: "V-19285792",
    monto: "8.789,92"
  },
  {
    id: 2949,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "31.687,67"
  },
  {
    id: 2950,
    cliente: "HIPOLITO VARGAS",
    identificacion: "V-11619299",
    monto: "3.554,42"
  },
  {
    id: 2951,
    cliente: "SANTIAGO MONTILLA",
    identificacion: "V-8715029",
    monto: "19.227,95"
  },
  {
    id: 2952,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "22.293,57"
  },
  {
    id: 2953,
    cliente: "JOSE PEÑALOZA",
    identificacion: "V-9328060",
    monto: "5.219,02"
  },
  {
    id: 2954,
    cliente: "FALMER BRICEÑO",
    identificacion: "V-20789810",
    monto: "17.760,00"
  },
  {
    id: 2955,
    cliente: "LARRY ARAUJO",
    identificacion: "V-15293239",
    monto: "7.768,09"
  },
  {
    id: 2956,
    cliente: "VICTOR CABRITA",
    identificacion: "V-25832765",
    monto: "70.318,56"
  },
  {
    id: 2957,
    cliente: "LISBEHT MOLINA",
    identificacion: "V",
    monto: "2.197,48"
  },
  {
    id: 2958,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "15.212,06"
  },
  {
    id: 2959,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "12.613,54"
  },
  {
    id: 2960,
    cliente: "RAFAEL MENDOZA",
    identificacion: "V-12907347",
    monto: "22.016,42"
  },
  {
    id: 2961,
    cliente: "MARILU RIVAS",
    identificacion: "V-13049437",
    monto: "3.592,71"
  },
  {
    id: 2962,
    cliente: "DANYER PEREZ",
    identificacion: "V-10036249",
    monto: "8.620,00"
  },
  {
    id: 2963,
    cliente: "JOSE QUIROGA",
    identificacion: "V-19286270",
    monto: "29.074,32"
  },
  {
    id: 2964,
    cliente: "CESAR ROJAS",
    identificacion: "V-10908772",
    monto: "831,64"
  },
  {
    id: 2965,
    cliente: "BELKIS BRICEÑO",
    identificacion: "V-9499942",
    monto: "42.833,98"
  },
  {
    id: 2966,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "35.900,00"
  },
  {
    id: 2967,
    cliente: "JOSE GARCIA",
    identificacion: "V-11133709",
    monto: "14.692,39"
  },
  {
    id: 2968,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "19.743,25"
  },
  {
    id: 2969,
    cliente: "JOSE VILLARREAL",
    identificacion: "V-13391570",
    monto: "29.058,48"
  },
  {
    id: 2970,
    cliente: "GEOVANY MARQUEZ",
    identificacion: "V-12046814",
    monto: "22.177,20"
  },
  {
    id: 2971,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "110.050,24"
  },
  {
    id: 2972,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "37.344,63"
  },
  {
    id: 2973,
    cliente: "AUNARIO VINICIO ANGULO",
    identificacion: "V-39397",
    monto: "2.367,42"
  },
  {
    id: 2974,
    cliente: "DANIEL GONZALEZ",
    identificacion: "V-19102057",
    monto: "37.124,98"
  },
  {
    id: 2975,
    cliente: "JOSUE GONZALEZ",
    identificacion: "V-19795712",
    monto: "887,09"
  },
  {
    id: 2976,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "103.584,30"
  },
  {
    id: 2977,
    cliente: "JUAN RONDON",
    identificacion: "V-10907440",
    monto: "38.000,00"
  },
  {
    id: 2978,
    cliente: "YARLENY PEÑA",
    identificacion: "V-12797527",
    monto: "8.859,79"
  },
  {
    id: 2979,
    cliente: "YARLENY PEÑA",
    identificacion: "V-12797527",
    monto: "2.661,27"
  },
  {
    id: 2980,
    cliente: "WILLIAN RAMIREZ",
    identificacion: "V-14719975",
    monto: "99.797,40"
  },
  {
    id: 2981,
    cliente: "HILDA BRICEÑO",
    identificacion: "V-24881721",
    monto: "9.025,00"
  },
  {
    id: 2982,
    cliente: "PEDRO VALECILLO",
    identificacion: "V-9318313",
    monto: "7.207,59"
  },
  {
    id: 2983,
    cliente: "NERIO PARRA",
    identificacion: "V-9177064",
    monto: "5.267,08"
  },
  {
    id: 2984,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "2.577,82"
  },
  {
    id: 2985,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "156.232,00"
  },
  {
    id: 2986,
    cliente: "FANO SALA",
    identificacion: "V-20790972",
    monto: "36.268,06"
  },
  {
    id: 2987,
    cliente: "YONATHAN MATUZALEN",
    identificacion: "V-26114308",
    monto: "14.228,22"
  },
  {
    id: 2988,
    cliente: "NORIS CORREA",
    identificacion: "V-17036142",
    monto: "5.300,72"
  },
  {
    id: 2989,
    cliente: "LEDBID MORILLO",
    identificacion: "V-14556058",
    monto: "6.433,39"
  },
  {
    id: 2990,
    cliente: "CARLOS EDUARDO SALAS",
    identificacion: "V-25733110",
    monto: "101.376,35"
  },
  {
    id: 2991,
    cliente: "ANTONI AVILA",
    identificacion: "V-30140368",
    monto: "37.250,00"
  },
  {
    id: 2992,
    cliente: "JOSE FREDY",
    identificacion: "V-15294314",
    monto: "4.742,74"
  },
  {
    id: 2993,
    cliente: "CARLA GARCIA",
    identificacion: "V-16065458",
    monto: "3.347,82"
  },
  {
    id: 2994,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-10319612",
    monto: "3.208,33"
  },
  {
    id: 2995,
    cliente: "MAGALY AZUAJE",
    identificacion: "V-5103250",
    monto: "1.033,48"
  },
  {
    id: 2996,
    cliente: "MAURO TROMPETERO",
    identificacion: "V-18377541",
    monto: "170.934,40"
  },
  {
    id: 2997,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "128.487,20"
  },
  {
    id: 2998,
    cliente: "RAFAEL VALERO",
    identificacion: "V-14150125",
    monto: "25.194,66"
  },
  {
    id: 2999,
    cliente: "PEDRO GIL",
    identificacion: "V-16015117",
    monto: "2.882,58"
  },
  {
    id: 3000,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "13.966,00"
  },
  {
    id: 3001,
    cliente: "GUSTAVO HERNANDEZ",
    identificacion: "V-8723165",
    monto: "18.026,00"
  },
  {
    id: 3002,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "32.637,00"
  },
  {
    id: 3003,
    cliente: "JESUS GUTIERREZ",
    identificacion: "V-5349099",
    monto: "20.898,72"
  },
  {
    id: 3004,
    cliente: "JUAN CARRIZO",
    identificacion: "V-11896268",
    monto: "8.357,26"
  },
  {
    id: 3005,
    cliente: "ABRHAN ROMERO",
    identificacion: "V-09163376",
    monto: "12.882,24"
  },
  {
    id: 3006,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "14.706,50"
  },
  {
    id: 3007,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "77.700,00"
  },
  {
    id: 3008,
    cliente: "RAMON BRICEÑO",
    identificacion: "V-13050717",
    monto: "59.517,25"
  },
  {
    id: 3009,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "5.883,99"
  },
  {
    id: 3010,
    cliente: "JOSELIN PAREDES",
    identificacion: "V-27268978",
    monto: "10.350,22"
  },
  {
    id: 3011,
    cliente: "LAURA TRIOZZI",
    identificacion: "V-11894738",
    monto: "9.120,00"
  },
  {
    id: 3012,
    cliente: "LEONARDO TORRES",
    identificacion: "V-10909014",
    monto: "32.782,23"
  },
  {
    id: 3013,
    cliente: "LUIS ENRRIQUE RAMIREZ",
    identificacion: "V-14131536",
    monto: "95.260,00"
  },
  {
    id: 3014,
    cliente: "JHAON ALBORNOZ",
    identificacion: "V-20789387",
    monto: "1.681,14"
  },
  {
    id: 3015,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "5.883,99"
  },
  {
    id: 3016,
    cliente: "EDGAR UZCATEGUI",
    identificacion: "V-15752954",
    monto: "193.331,10"
  },
  {
    id: 3017,
    cliente: "VICTOR PEREZ",
    identificacion: "V-9328568",
    monto: "11.322,12"
  },
  {
    id: 3018,
    cliente: "VICTOR PEREZ",
    identificacion: "V-9328568",
    monto: "1.830,69"
  },
  {
    id: 3019,
    cliente: "FELIX RINCON",
    identificacion: "E-91476255",
    monto: "6.477,83"
  },
  {
    id: 3020,
    cliente: "GUSTAVO ARTIGAS",
    identificacion: "V-13633403",
    monto: "14.561,05"
  },
  {
    id: 3021,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "703.394,00"
  },
  {
    id: 3022,
    cliente: "RAFAEL MALPICA",
    identificacion: "V-11320658",
    monto: "22.632,99"
  },
  {
    id: 3023,
    cliente: "CRISTOBAL MORENO",
    identificacion: "V-9017823",
    monto: "3.244,55"
  },
  {
    id: 3024,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "44.544,00"
  },
  {
    id: 3025,
    cliente: "JOSE MORENO",
    identificacion: "V-8719424",
    monto: "6.196,19"
  },
  {
    id: 3026,
    cliente: "ARNALDO MONTILLA",
    identificacion: "V-16534674",
    monto: "2.255,00"
  },
  {
    id: 3027,
    cliente: "ALIRIO LUCENA",
    identificacion: "V-16464582",
    monto: "15.475,07"
  },
  {
    id: 3028,
    cliente: "ELIESTER PEÑA",
    identificacion: "V-14459168",
    monto: "14.082,25"
  },
  {
    id: 3029,
    cliente: "CARLOS ANGEL",
    identificacion: "V-10032307",
    monto: "24.041,22"
  },
  {
    id: 3030,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "30.117,10"
  },
  {
    id: 3031,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "113.298,08"
  },
  {
    id: 3032,
    cliente: "JRS DE JOSE SARACHE, F.P",
    identificacion: "V-12541670",
    monto: "33.209,28"
  },
  {
    id: 3033,
    cliente: "SEGUNDO ALPIDIO MORALES",
    identificacion: "V-5781337",
    monto: "50.700,00"
  },
  {
    id: 3034,
    cliente: "JORGE AZUAJE",
    identificacion: "V-18924432",
    monto: "105.857,99"
  },
  {
    id: 3035,
    cliente: "DANNY RODRIGUEZ",
    identificacion: "V-12721875",
    monto: "48.536,64"
  },
  {
    id: 3036,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "65.696,86"
  },
  {
    id: 3037,
    cliente: "FRANCISCO HERNANDEZ",
    identificacion: "V-18614463",
    monto: "37.414,00"
  },
  {
    id: 3038,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "83.102,70"
  },
  {
    id: 3039,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "38.328,00"
  },
  {
    id: 3040,
    cliente: "ARTURO ECHEGARIA",
    identificacion: "V-18378208",
    monto: "17.034,51"
  },
  {
    id: 3041,
    cliente: "DANIEL LINARES",
    identificacion: "V-16652326",
    monto: "1.135,36"
  },
  {
    id: 3042,
    cliente: "PEDRO DUARTE",
    identificacion: "V-12796217",
    monto: "4.427,91"
  },
  {
    id: 3043,
    cliente: "ALBERT ROMERO",
    identificacion: "V-27363645",
    monto: "50.986,80"
  },
  {
    id: 3044,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "115.706,88"
  },
  {
    id: 3045,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "61.593,28"
  },
  {
    id: 3046,
    cliente: "DANYER PEREZ",
    identificacion: "V-10036249",
    monto: "27.032,93"
  },
  {
    id: 3047,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "46.180,77"
  },
  {
    id: 3048,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "78.800,00"
  },
  {
    id: 3049,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "50.753,60"
  },
  {
    id: 3050,
    cliente: "JESUS ALBERTO AVENDAÑO GONZALEZ",
    identificacion: "V-13261049",
    monto: "11.864,51"
  },
  {
    id: 3051,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "0,00"
  },
  {
    id: 3052,
    cliente: "MARCOS HERNANDEZ",
    identificacion: "V-12939005",
    monto: "12.023,46"
  },
  {
    id: 3053,
    cliente: "YAMILE ARAUJO",
    identificacion: "V-16066220",
    monto: "4.654,98"
  },
  {
    id: 3054,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "140.038,53"
  },
  {
    id: 3055,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "90.149,53"
  },
  {
    id: 3056,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "57.934,00"
  },
  {
    id: 3057,
    cliente: "JOSE MARIN",
    identificacion: "V-11614377",
    monto: "73.799,00"
  },
  {
    id: 3058,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1.135,36"
  },
  {
    id: 3059,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "55.440,00"
  },
  {
    id: 3060,
    cliente: "RAFAEL CERRADO",
    identificacion: "V-17391163",
    monto: "11.921,28"
  },
  {
    id: 3061,
    cliente: "PEDRO DUARTE",
    identificacion: "V-12796217",
    monto: "6.812,16"
  },
  {
    id: 3062,
    cliente: "JESUS PEÑA",
    identificacion: "V-12041540",
    monto: "82.313,60"
  },
  {
    id: 3063,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "27.680,08"
  },
  {
    id: 3064,
    cliente: "RICHARD JOSE ABREU",
    identificacion: "V-17604150",
    monto: "4.654,98"
  },
  {
    id: 3065,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "118.800,00"
  },
  {
    id: 3066,
    cliente: "YUSMERY GUEDEZ",
    identificacion: "V-17393524",
    monto: "1.145,36"
  },
  {
    id: 3067,
    cliente: "MANUEL MENDEZ",
    identificacion: "V-16463674",
    monto: "6.734,72"
  },
  {
    id: 3068,
    cliente: "JUAN LOAIZA",
    identificacion: "V-10688167",
    monto: "8.590,20"
  },
  {
    id: 3069,
    cliente: "REINALDO JOSE GARCIA",
    identificacion: "V-17865275",
    monto: "33.091,12"
  },
  {
    id: 3070,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "47.395,00"
  },
  {
    id: 3071,
    cliente: "DAVID MONTILLA",
    identificacion: "V-20135857",
    monto: "11.056,00"
  },
  {
    id: 3072,
    cliente: "JOAN SUEREZ",
    identificacion: "V-18349388",
    monto: "12.415,70"
  },
  {
    id: 3073,
    cliente: "YARGENIS RONDON",
    identificacion: "V-26482046",
    monto: "6.030,00"
  },
  {
    id: 3074,
    cliente: "YOSMAR ARAUJO",
    identificacion: "V-18615023",
    monto: "24.120,00"
  },
  {
    id: 3075,
    cliente: "JORGE LUIS BLANCO",
    identificacion: "V-9318421",
    monto: "28.571,01"
  },
  {
    id: 3076,
    cliente: "JUAN CARDOZO",
    identificacion: "V-25832583",
    monto: "1.168,26"
  },
  {
    id: 3077,
    cliente: "YADIRA MORA",
    identificacion: "V-12047178",
    monto: "52.583,34"
  },
  {
    id: 3078,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "48.485,30"
  },
  {
    id: 3079,
    cliente: "RICHARD JOSE ABREU",
    identificacion: "V-17604150",
    monto: "4.753,23"
  },
  {
    id: 3080,
    cliente: "ROMER RUIZ",
    identificacion: "V-14800433",
    monto: "5.734,00"
  },
  {
    id: 3081,
    cliente: "ROMER RUIZ",
    identificacion: "V-14800433",
    monto: "5.602,00"
  },
  {
    id: 3082,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "79.952,66"
  },
  {
    id: 3083,
    cliente: "YOSMER TERAN",
    identificacion: "V-20708593",
    monto: "111.464,00"
  },
  {
    id: 3084,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "46.595,44"
  },
  {
    id: 3085,
    cliente: "CARLOS FONSECA",
    identificacion: "V-19103241",
    monto: "68.384,86"
  },
  {
    id: 3086,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "51.194,64"
  },
  {
    id: 3087,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "21.640,80"
  },
  {
    id: 3088,
    cliente: "VICTOR ABREU",
    identificacion: "V-20038381",
    monto: "10.863,72"
  },
  {
    id: 3089,
    cliente: "ABRAHAM CALDERAS",
    identificacion: "V-31814851",
    monto: "6.468,56"
  },
  {
    id: 3090,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "46.974,37"
  },
  {
    id: 3091,
    cliente: "EGLE JEREZ",
    identificacion: "V-5058897",
    monto: "6.262,00"
  },
  {
    id: 3092,
    cliente: "OSMIC AGUILAR",
    identificacion: "V-12192827",
    monto: "154.803,27"
  },
  {
    id: 3093,
    cliente: "REINALDO MORENO",
    identificacion: "V-15826332",
    monto: "25.258,77"
  },
  {
    id: 3094,
    cliente: "FRANKLIN CASTELLANOS",
    identificacion: "V-12047714",
    monto: "7.930,41"
  },
  {
    id: 3095,
    cliente: "WILMER RAMIREZ",
    identificacion: "V-12797668",
    monto: "5.826,90"
  },
  {
    id: 3096,
    cliente: "GILMER RAMIREZ",
    identificacion: "V-10911122",
    monto: "30.241,62"
  },
  {
    id: 3097,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-14310888",
    monto: "58.269,00"
  },
  {
    id: 3098,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-32283141",
    monto: "40.788,25"
  },
  {
    id: 3099,
    cliente: "FILADELFO LINARES",
    identificacion: "V-13261429",
    monto: "20.032,90"
  },
  {
    id: 3100,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "33.475,55"
  },
  {
    id: 3101,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.380,41"
  },
  {
    id: 3102,
    cliente: "JUAN QUINTINI",
    identificacion: "V-18096612",
    monto: "1.174,82"
  },
  {
    id: 3103,
    cliente: "CALIXTO HERNANDEZ",
    identificacion: "V-23226030",
    monto: "9.985,96"
  },
  {
    id: 3104,
    cliente: "CESAR VALECILLOS",
    identificacion: "V-12939339",
    monto: "37.652,98"
  },
  {
    id: 3105,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "10.573,38"
  },
  {
    id: 3106,
    cliente: "JORGE AZUAJE",
    identificacion: "V-18924432",
    monto: "58.741,00"
  },
  {
    id: 3107,
    cliente: "NEOBER VASQUEZ",
    identificacion: "V-13661892",
    monto: "59.185,70"
  },
  {
    id: 3108,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.380,41"
  },
  {
    id: 3109,
    cliente: "SERIGIO CUEVAS",
    identificacion: "E-84250045",
    monto: "109.657,00"
  },
  {
    id: 3110,
    cliente: "SERIGIO CUEVAS",
    identificacion: "E-84250045",
    monto: "41.250,00"
  },
  {
    id: 3111,
    cliente: "LEONARDO MATHEUS",
    identificacion: "V-10402831",
    monto: "1.174,82"
  },
  {
    id: 3112,
    cliente: "RAFAEL SALAZAR",
    identificacion: "V-20040573",
    monto: "5.580,39"
  },
  {
    id: 3113,
    cliente: "JESUS ERNESTO GUERRIDO",
    identificacion: "V-14598075",
    monto: "13.739,52"
  },
  {
    id: 3114,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "29.370,52"
  },
  {
    id: 3115,
    cliente: "DANYER PEREZ",
    identificacion: "V-20788567",
    monto: "5.286,69"
  },
  {
    id: 3116,
    cliente: "RAFAEL APONTE",
    identificacion: "V-13764264",
    monto: "8.876,90"
  },
  {
    id: 3117,
    cliente: "BENEDICTO VARGAS",
    identificacion: "V-11129787",
    monto: "163.241,24"
  },
  {
    id: 3118,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "71.335,07"
  },
  {
    id: 3119,
    cliente: "RICHARD JOSE ABREU",
    identificacion: "V-17604150",
    monto: "2.361,40"
  },
  {
    id: 3120,
    cliente: "CHARLY ARTIGAS",
    identificacion: "V-18095554",
    monto: "47.265,00"
  },
  {
    id: 3121,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "65.202,51"
  },
  {
    id: 3122,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "175.155,14"
  },
  {
    id: 3123,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "1.116,08"
  },
  {
    id: 3124,
    cliente: "NICOLA DAL RIO",
    identificacion: "V-21205729",
    monto: "42.293,52"
  },
  {
    id: 3125,
    cliente: "NICOLA DAL RIO",
    identificacion: "V-21205729",
    monto: "2.249,78"
  },
  {
    id: 3126,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "36.694,00"
  },
  {
    id: 3127,
    cliente: "ENDER ANDRADE",
    identificacion: "V-24566826",
    monto: "51.000,00"
  },
  {
    id: 3128,
    cliente: "MACARIO BRAVO",
    identificacion: "V-10316579",
    monto: "4.941,62"
  },
  {
    id: 3129,
    cliente: "OSMIC AGUILAR",
    identificacion: "V-12192827",
    monto: "6.221,46"
  },
  {
    id: 3130,
    cliente: "MAURO VOLCANES",
    identificacion: "V-17831076",
    monto: "39.201,12"
  },
  {
    id: 3131,
    cliente: "MARIA CARRERO",
    identificacion: "V-18096910",
    monto: "1.777,56"
  },
  {
    id: 3132,
    cliente: "FERNANDO ANDARA",
    identificacion: "V-18378086",
    monto: "2.784,84"
  },
  {
    id: 3133,
    cliente: "YOHAMNIS CAMACHO",
    identificacion: "V-20705485",
    monto: "1.632,00"
  },
  {
    id: 3134,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "172.459,54"
  },
  {
    id: 3135,
    cliente: "ARGENIS PACHECO",
    identificacion: "V-11318379",
    monto: "25.626,49"
  },
  {
    id: 3136,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.392,42"
  },
  {
    id: 3137,
    cliente: "EMILIO BRICEÑO",
    identificacion: "V-4657949",
    monto: "1.185,04"
  },
  {
    id: 3138,
    cliente: "JOSE ABREU",
    identificacion: "V-27619680",
    monto: "68.139,80"
  },
  {
    id: 3139,
    cliente: "LEDBID MORILLO",
    identificacion: "V-14556058",
    monto: "6.831,76"
  },
  {
    id: 3140,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "11.850,40"
  },
  {
    id: 3141,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "49.380,00"
  },
  {
    id: 3142,
    cliente: "ESTEFANI AGUILERA",
    identificacion: "V-22087956",
    monto: "1.193,56"
  },
  {
    id: 3143,
    cliente: "ROSALINDA PACHECO",
    identificacion: "V-25172841",
    monto: "47.742,40"
  },
  {
    id: 3144,
    cliente: "BEIKER CALDERA",
    identificacion: "V-30296920",
    monto: "92.670,00"
  },
  {
    id: 3145,
    cliente: "YOSMAR ARAUJO",
    identificacion: "V-18615023",
    monto: "58.638,78"
  },
  {
    id: 3146,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "72.472,96"
  },
  {
    id: 3147,
    cliente: "ROSALVA CARMONA",
    identificacion: "V-5789156",
    monto: "12.233,99"
  },
  {
    id: 3148,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.402,43"
  },
  {
    id: 3149,
    cliente: "YULMER LA CRUZ",
    identificacion: "V-19287309",
    monto: "281.006,92"
  },
  {
    id: 3150,
    cliente: "JULIO CASTILLO",
    identificacion: "V-14310969",
    monto: "59.528,77"
  },
  {
    id: 3151,
    cliente: "ENDER DABOIN",
    identificacion: "V-11129187",
    monto: "4.416,17"
  },
  {
    id: 3152,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.402,43"
  },
  {
    id: 3153,
    cliente: "JESUS PAZ",
    identificacion: "V-28445711",
    monto: "17.712,43"
  },
  {
    id: 3154,
    cliente: "ALIRIO ENRRIQUE OSUNA",
    identificacion: "V-31320108",
    monto: "20.887,30"
  },
  {
    id: 3155,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.237,92"
  },
  {
    id: 3156,
    cliente: "FILADELFO LINARES",
    identificacion: "V-13261429",
    monto: "4.678,75"
  },
  {
    id: 3157,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "40.581,05"
  },
  {
    id: 3158,
    cliente: "ROBERTO FACCIN",
    identificacion: "V-10906952",
    monto: "2.632,18"
  },
  {
    id: 3159,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "3.674,22"
  },
  {
    id: 3160,
    cliente: "LUIS CADENA",
    identificacion: "V-25173141",
    monto: "1.927,46"
  },
  {
    id: 3161,
    cliente: "YOANDER PEREZ",
    identificacion: "V-31589521",
    monto: "27.196,18"
  },
  {
    id: 3162,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "18.491,53"
  },
  {
    id: 3163,
    cliente: "NEPTALI CONTRERAS",
    identificacion: "V-16376864",
    monto: "63.244,65"
  },
  {
    id: 3164,
    cliente: "LILIAN LOPEZ",
    identificacion: "V-5875856",
    monto: "16.678,52"
  },
  {
    id: 3165,
    cliente: "MOISES MEDINA",
    identificacion: "V-31603390",
    monto: "5.542,00"
  },
  {
    id: 3166,
    cliente: "EDGAR QUINTERO",
    identificacion: "V-26482351",
    monto: "61.105,00"
  },
  {
    id: 3167,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "6.625,63"
  },
  {
    id: 3168,
    cliente: "HECTOR URBINA",
    identificacion: "V-12540643",
    monto: "6.565,40"
  },
  {
    id: 3169,
    cliente: "ZORAIDA MENDOZA",
    identificacion: "V-10402510",
    monto: "1.174,54"
  },
  {
    id: 3170,
    cliente: "ANTONIO MORENO",
    identificacion: "V-11131851",
    monto: "3.613,98"
  },
  {
    id: 3171,
    cliente: "FERREAGRO EL VIEJO CASTELLANOS, C.A",
    identificacion: "J-50269500-1",
    monto: "57.221,35"
  },
  {
    id: 3172,
    cliente: "RENZO AGUILAR",
    identificacion: "V-30116804",
    monto: "19.740,17"
  },
  {
    id: 3173,
    cliente: "GREGORIA CAÑIZALEZ",
    identificacion: "V-12907032",
    monto: "22.473,43"
  },
  {
    id: 3174,
    cliente: "FRANKLIN VALERO",
    identificacion: "V-12047182",
    monto: "4.494,69"
  },
  {
    id: 3175,
    cliente: "FERNANDO GUILLEN",
    identificacion: "V-17831795",
    monto: "5.144,00"
  },
  {
    id: 3176,
    cliente: "JESUS FERNANDEZ",
    identificacion: "V-11611031",
    monto: "18.517,50"
  },
  {
    id: 3177,
    cliente: "JOSE GONZALEZ",
    identificacion: "V-11898756",
    monto: "121.478,00"
  },
  {
    id: 3178,
    cliente: "ALBERTO MEDIDA",
    identificacion: "V-9326013",
    monto: "27.332,55"
  },
  {
    id: 3179,
    cliente: "ALBERTO MEDIDA",
    identificacion: "V-9326013",
    monto: "8.588,49"
  },
  {
    id: 3180,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "5.618,35"
  },
  {
    id: 3181,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "44.088,62"
  },
  {
    id: 3182,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "17.146,62"
  },
  {
    id: 3183,
    cliente: "JUAN CARLOS FARIAS",
    identificacion: "V-15294849",
    monto: "52.796,08"
  },
  {
    id: 3184,
    cliente: "RICHARD VERGARA",
    identificacion: "V-18349934",
    monto: "42.517,30"
  },
  {
    id: 3185,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "10.021,92"
  },
  {
    id: 3186,
    cliente: "GILBER GONZALEZ",
    identificacion: "V-15953608",
    monto: "11.540,00"
  },
  {
    id: 3187,
    cliente: "LEONARDO TELLEZ",
    identificacion: "V-20790495",
    monto: "19.546,26"
  },
  {
    id: 3188,
    cliente: "EDUIN RAMOS",
    identificacion: "V-24882540",
    monto: "6.377,60"
  },
  {
    id: 3189,
    cliente: "GREGORIO ARAUJO",
    identificacion: "V-10034168",
    monto: "22.659,91"
  },
  {
    id: 3190,
    cliente: "RAFAEL TORRES",
    identificacion: "V-12039680",
    monto: "21.435,05"
  },
  {
    id: 3191,
    cliente: "JRS DE JOSE SARACHE, F.P",
    identificacion: "V-12541670",
    monto: "35.695,00"
  },
  {
    id: 3192,
    cliente: "JHONI PICHARDO",
    identificacion: "V-29814916",
    monto: "32.060,70"
  },
  {
    id: 3193,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "3.368,36"
  },
  {
    id: 3194,
    cliente: "JUAN VALERO",
    identificacion: "V-16377697",
    monto: "19.144,00"
  },
  {
    id: 3195,
    cliente: "PAOLA TORRES",
    identificacion: "V-27268196",
    monto: "63.222,64"
  },
  {
    id: 3196,
    cliente: "DANIEL MONTILLA",
    identificacion: "V-15583195",
    monto: "6.675,49"
  },
  {
    id: 3197,
    cliente: "ALVARO LAGUNA",
    identificacion: "V-20038181",
    monto: "18.764,00"
  },
  {
    id: 3198,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "244.973,25"
  },
  {
    id: 3199,
    cliente: "JAVIER FROILAN",
    identificacion: "V-10910873",
    monto: "33.970,00"
  },
  {
    id: 3200,
    cliente: "EULISES MORENO",
    identificacion: "V-22622092",
    monto: "20.363,30"
  },
  {
    id: 3201,
    cliente: "LAURA CARRILLO",
    identificacion: "V-9010572",
    monto: "6.797,97"
  },
  {
    id: 3202,
    cliente: "JUAN CARLOS ALDANA",
    identificacion: "V-21366714",
    monto: "181.890,00"
  },
  {
    id: 3203,
    cliente: "ELY UZCATEGUI",
    identificacion: "V-10039561",
    monto: "4.715,71"
  },
  {
    id: 3204,
    cliente: "GLORIA ABREU",
    identificacion: "V-10035646",
    monto: "6.412,14"
  },
  {
    id: 3205,
    cliente: "BEIKER CALDERA",
    identificacion: "V-30296920",
    monto: "79.000,00"
  },
  {
    id: 3206,
    cliente: "FERNANDO BRICEÑO",
    identificacion: "V-26962777",
    monto: "11.336,08"
  },
  {
    id: 3207,
    cliente: "JESUS BRICEÑO",
    identificacion: "V-31168233",
    monto: "12.518,07"
  },
  {
    id: 3208,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "3.735,82"
  },
  {
    id: 3209,
    cliente: "BEIKER CALDERA",
    identificacion: "V-30296920",
    monto: "6.736,73"
  },
  {
    id: 3210,
    cliente: "MARTIN LEONEL GODOY",
    identificacion: "V-20708563",
    monto: "5.205,65"
  },
  {
    id: 3211,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "12.524,19"
  },
  {
    id: 3212,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "75.635,10"
  },
  {
    id: 3213,
    cliente: "WUILMER TORRES",
    identificacion: "V-5763155",
    monto: "15.090,28"
  },
  {
    id: 3214,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "82.457,58"
  },
  {
    id: 3215,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "22.945,33"
  },
  {
    id: 3216,
    cliente: "JOHON CARVAJAL",
    identificacion: "V-84589450",
    monto: "23.091,05"
  },
  {
    id: 3217,
    cliente: "JUAN ARZAAC",
    identificacion: "V-4161625",
    monto: "45.427,42"
  },
  {
    id: 3218,
    cliente: "MARTHA RODRIGUEZ",
    identificacion: "V-16535480",
    monto: "9.659,89"
  },
  {
    id: 3219,
    cliente: "JORGE LUIS BLANCO",
    identificacion: "V-9318421",
    monto: "33.284,62"
  },
  {
    id: 3220,
    cliente: "ESMERALDA GIL",
    identificacion: "V-17267599",
    monto: "72.263,88"
  },
  {
    id: 3221,
    cliente: "WUILMER TORRES",
    identificacion: "V-5763155",
    monto: "1.698,51"
  },
  {
    id: 3222,
    cliente: "LUIS HURTADO",
    identificacion: "V-5773854",
    monto: "3.580,01"
  },
  {
    id: 3223,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "26.415,04"
  },
  {
    id: 3224,
    cliente: "JERSON TERAN",
    identificacion: "V-15043808",
    monto: "65.260,65"
  },
  {
    id: 3225,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "63.924,37"
  },
  {
    id: 3226,
    cliente: "RAFAEL PACHECO",
    identificacion: "V-9012310",
    monto: "6.097,50"
  },
  {
    id: 3227,
    cliente: "JOSE MANZANILLA",
    identificacion: "V-10030265",
    monto: "9.789,11"
  },
  {
    id: 3228,
    cliente: "MARCELINO MORILLO",
    identificacion: "V-4920924",
    monto: "3.580,01"
  },
  {
    id: 3229,
    cliente: "JUAN VALERO",
    identificacion: "V-16377697",
    monto: "38.534,86"
  },
  {
    id: 3230,
    cliente: "GREGORIO CARMONA",
    identificacion: "V-11129310",
    monto: "4.779,57"
  },
  {
    id: 3231,
    cliente: "SANDRA VERGARA",
    identificacion: "V-13765852",
    monto: "4.785,78"
  },
  {
    id: 3232,
    cliente: "JOSE ANTONIO BETANCOURT",
    identificacion: "V-4661690",
    monto: "1.243,00"
  },
  {
    id: 3233,
    cliente: "ALEJANDRO CESTARI",
    identificacion: "V-9329439",
    monto: "1.553,82"
  },
  {
    id: 3234,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "20.665,87"
  },
  {
    id: 3235,
    cliente: "DANIEL ZAMBRANO",
    identificacion: "V-26962716",
    monto: "77.523,98"
  },
  {
    id: 3236,
    cliente: "DANIEL ZAMBRANO",
    identificacion: "V-26962716",
    monto: "24.861,20"
  },
  {
    id: 3237,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "6.215,30"
  },
  {
    id: 3238,
    cliente: "WUALDO VALDES",
    identificacion: "V-11048748",
    monto: "1.243,06"
  },
  {
    id: 3239,
    cliente: "ANGEL RANGEL",
    identificacion: "V-15314873",
    monto: "4.039,94"
  },
  {
    id: 3240,
    cliente: "CARLOS ABREU",
    identificacion: "V-23234310",
    monto: "121.042,97"
  },
  {
    id: 3241,
    cliente: "ALEJANDRO PERDOMO",
    identificacion: "V-17304874",
    monto: "9.441,05"
  },
  {
    id: 3242,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "22.375,08"
  },
  {
    id: 3243,
    cliente: "JHON GONZALEZ",
    identificacion: "V-16740096",
    monto: "66.000,00"
  },
  {
    id: 3244,
    cliente: "REINALDO JOSE GARCIA",
    identificacion: "V-17865275",
    monto: "10.690,00"
  },
  {
    id: 3245,
    cliente: "ODULIO RODRIGUEZ",
    identificacion: "V-10312079",
    monto: "6.625,00"
  },
  {
    id: 3246,
    cliente: "FRAN ARAUJO",
    identificacion: "V-17095444",
    monto: "24.770,18"
  },
  {
    id: 3247,
    cliente: "ARAUJO CARRILLO",
    identificacion: "V-20401327",
    monto: "158.633,00"
  },
  {
    id: 3248,
    cliente: "MANUEL RAMON MARQUEZ",
    identificacion: "V-4315933",
    monto: "1.866,63"
  },
  {
    id: 3249,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "58.649,51"
  },
  {
    id: 3250,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "2.519,95"
  },
  {
    id: 3251,
    cliente: "Solanyela Uzcátegui",
    identificacion: "V-21062755",
    monto: "64.062,75"
  },
  {
    id: 3252,
    cliente: "ALIRIO LUCENA",
    identificacion: "V-16464682",
    monto: "11.635,02"
  },
  {
    id: 3253,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "115.730,00"
  },
  {
    id: 3254,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "22.399,56"
  },
  {
    id: 3255,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "2.177,74"
  },
  {
    id: 3256,
    cliente: "FREDY ENRRIQUE RODRIGUEZ",
    identificacion: "V-27581294",
    monto: "22.436,90"
  },
  {
    id: 3257,
    cliente: "AHIMAR VOLCANES",
    identificacion: "V-20414809",
    monto: "31.732,71"
  },
  {
    id: 3258,
    cliente: "AHIMAR VOLCANES",
    identificacion: "V-20414809",
    monto: "1.244,42"
  },
  {
    id: 3259,
    cliente: "JAVIER UZCATEGUI",
    identificacion: "V-5785213",
    monto: "8.399,84"
  },
  {
    id: 3260,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "4.889,46"
  },
  {
    id: 3261,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "22.428,72"
  },
  {
    id: 3262,
    cliente: "GEOVANY MALPÌCA",
    identificacion: "V-30535576",
    monto: "14.948,04"
  },
  {
    id: 3263,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "4.984,16"
  },
  {
    id: 3264,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "1.214,89"
  },
  {
    id: 3265,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "6.043,28"
  },
  {
    id: 3266,
    cliente: "JOSE LUIS MONTILLA",
    identificacion: "V-13376721",
    monto: "5.528,00"
  },
  {
    id: 3267,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "778,78"
  },
  {
    id: 3268,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "44.857,44"
  },
  {
    id: 3269,
    cliente: "JUNTA ADMINISTRADORA NUEVA VALERA, S.A.",
    identificacion: "J-50570017-0",
    monto: "23.051,74"
  },
  {
    id: 3270,
    cliente: "JUNTA ADMINISTRADORA NUEVA VALERA, S.A.",
    identificacion: "J-50570017-0",
    monto: "23.051,74"
  },
  {
    id: 3271,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "23.170,11"
  },
  {
    id: 3272,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "24.316,47"
  },
  {
    id: 3273,
    cliente: "GERARDO BRICEÑO",
    identificacion: "V-13262635",
    monto: "694.667,30"
  },
  {
    id: 3274,
    cliente: "MARIA DILCIA VASQUEZ",
    identificacion: "V-16275673",
    monto: "80.187,53"
  },
  {
    id: 3275,
    cliente: "JESUS ENRIQUE BASTIDAS PARRA",
    identificacion: "V-17266859",
    monto: "22.836,44"
  },
  {
    id: 3276,
    cliente: "JESUS ENRIQUE BASTIDAS PARRA",
    identificacion: "V-17266859",
    monto: "623,02"
  },
  {
    id: 3277,
    cliente: "JUAN CARLOS ALDANA",
    identificacion: "V-21366714",
    monto: "82.861,68"
  },
  {
    id: 3278,
    cliente: "ROJABER FUENTES",
    identificacion: "V-17864288",
    monto: "66.040,12"
  },
  {
    id: 3279,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "112.981,38"
  },
  {
    id: 3280,
    cliente: "LUIS RAMIREZ",
    identificacion: "V-15952003",
    monto: "72.994,82"
  },
  {
    id: 3281,
    cliente: "YEISON VALERA",
    identificacion: "V-32007837",
    monto: "98.544,80"
  },
  {
    id: 3282,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "50.090,84"
  },
  {
    id: 3283,
    cliente: "DANIEL DURAN",
    identificacion: "V-21265626",
    monto: "6.579,09"
  },
  {
    id: 3284,
    cliente: "ALVARO EUGENIO",
    identificacion: "V-22892995",
    monto: "43.393,34"
  },
  {
    id: 3285,
    cliente: "JOEL MATERAN",
    identificacion: "V-26002189",
    monto: "36.446,67"
  },
  {
    id: 3286,
    cliente: "MAIRUBIS ESCALONA",
    identificacion: "V-19148053",
    monto: "49.841,60"
  },
  {
    id: 3287,
    cliente: "YORDAN BLANCO",
    identificacion: "V-25374770",
    monto: "23.176,34"
  },
  {
    id: 3288,
    cliente: "NELSON ABREU",
    identificacion: "V-19287140",
    monto: "8.628,85"
  },
  {
    id: 3289,
    cliente: "RODOLFO PEÑA",
    identificacion: "V-18096938",
    monto: "60.870,59"
  },
  {
    id: 3290,
    cliente: "GERMAN MIJARES MAZZEY",
    identificacion: "V-21207694",
    monto: "159.337,37"
  },
  {
    id: 3291,
    cliente: "WILLIAN RAMIREZ",
    identificacion: "V-14719975",
    monto: "29.568,53"
  },
  {
    id: 3292,
    cliente: "JAVIER GONZALEZ",
    identificacion: "V-28261191",
    monto: "6.790,92"
  },
  {
    id: 3293,
    cliente: "FREDY VASQUEZ",
    identificacion: "V-21063737",
    monto: "16.073,90"
  },
  {
    id: 3294,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-14310888",
    monto: "3.738,12"
  },
  {
    id: 3295,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "3.987,33"
  },
  {
    id: 3296,
    cliente: "LEOPOLDO PEREZ",
    identificacion: "V-18925271",
    monto: "4.130,62"
  },
  {
    id: 3297,
    cliente: "SANDRO FLORES",
    identificacion: "V-12458456",
    monto: "50.217,50"
  },
  {
    id: 3298,
    cliente: "ROSALINDA PACHECO",
    identificacion: "V-25172841",
    monto: "29.873,81"
  },
  {
    id: 3299,
    cliente: "JOSE ALBERTO RIVERA",
    identificacion: "V-9016572",
    monto: "74.762,40"
  },
  {
    id: 3300,
    cliente: "FELIX ASCANIO",
    identificacion: "V-20135570",
    monto: "9.033,80"
  },
  {
    id: 3301,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "21.805,70"
  },
  {
    id: 3302,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "19.382,13"
  },
  {
    id: 3303,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "1.532,64"
  },
  {
    id: 3304,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "49.142,40"
  },
  {
    id: 3305,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "19.988,84"
  },
  {
    id: 3306,
    cliente: "MARIO ENRIQUE ROMERO PAVON",
    identificacion: "V-9318773",
    monto: "98.170,80"
  },
  {
    id: 3307,
    cliente: "RICARDO JEREZ",
    identificacion: "V-13262858",
    monto: "9.988,13"
  },
  {
    id: 3308,
    cliente: "ROGELIO TORRES",
    identificacion: "V-5787530",
    monto: "3.800,16"
  },
  {
    id: 3309,
    cliente: "RAFAEL FARIAS",
    identificacion: "V-9007050",
    monto: "35.037,48"
  },
  {
    id: 3310,
    cliente: "JOSE LUIS CARRERO",
    identificacion: "V-16739158",
    monto: "82.336,80"
  },
  {
    id: 3311,
    cliente: "JOSE LUIS CARRERO",
    identificacion: "V-16739158",
    monto: "20.900,88"
  },
  {
    id: 3312,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "7.568,65"
  },
  {
    id: 3313,
    cliente: "JAVIER GUDIÑO",
    identificacion: "V-16881315",
    monto: "102.193,56"
  },
  {
    id: 3314,
    cliente: "ROGER CHOURIO",
    identificacion: "V-10396312",
    monto: "8.297,01"
  },
  {
    id: 3315,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "4.902,21"
  },
  {
    id: 3316,
    cliente: "VICTOR PACHECO",
    identificacion: "V-18350103",
    monto: "15.726,66"
  },
  {
    id: 3317,
    cliente: "ROBERT GUTIERREZ",
    identificacion: "V-11618120",
    monto: "7.478,09"
  },
  {
    id: 3318,
    cliente: "AHIMAR VOLCANES",
    identificacion: "V-20414809",
    monto: "39.661,40"
  },
  {
    id: 3319,
    cliente: "MEGA SOLUCIONES AYUDA, C.A.",
    identificacion: "J-50797552-5",
    monto: "139.454,60"
  },
  {
    id: 3320,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "2.961,81"
  },
  {
    id: 3321,
    cliente: "FERNANDO ANDARA",
    identificacion: "V-18378086",
    monto: "1.791,16"
  },
  {
    id: 3322,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "1.783,45"
  },
  {
    id: 3323,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "18.327,41"
  },
  {
    id: 3324,
    cliente: "MARIA ALEJANDRA ALTUVE",
    identificacion: "V-19287198",
    monto: "2.558,80"
  },
  {
    id: 3325,
    cliente: "ANTONIO CAMACHO",
    identificacion: "V-13048814",
    monto: "7.036,70"
  },
  {
    id: 3326,
    cliente: "VICTOR LA CRUZ",
    identificacion: "V-16534439",
    monto: "28.800,00"
  },
  {
    id: 3327,
    cliente: "JORGE LUIS VARGAS",
    identificacion: "V-21208426",
    monto: "26.285,28"
  },
  {
    id: 3328,
    cliente: "ENDER JAVIER TERAN",
    identificacion: "V-19609971",
    monto: "41.580,50"
  },
  {
    id: 3329,
    cliente: "ALEIDA VELASQUEZ",
    identificacion: "V-11896309",
    monto: "2.285,39"
  },
  {
    id: 3330,
    cliente: "YORGENIS GONZALEZ",
    identificacion: "V-25173666",
    monto: "38.198,75"
  },
  {
    id: 3331,
    cliente: "NELSON CABRERA",
    identificacion: "V-25619438",
    monto: "5.876,73"
  },
  {
    id: 3332,
    cliente: "JOSE GREGORIO BAPTISTA",
    identificacion: "V-9375637",
    monto: "1.632,40"
  },
  {
    id: 3333,
    cliente: "ROBER UZCATEGUI",
    identificacion: "V-18350539",
    monto: "24.466,79"
  },
  {
    id: 3334,
    cliente: "WILDERSON CEGARRA",
    identificacion: "V-28542376",
    monto: "38.335,87"
  },
  {
    id: 3335,
    cliente: "JEREMIA JOSE SOTO",
    identificacion: "V-15996207",
    monto: "62.580,63"
  },
  {
    id: 3336,
    cliente: "YHONNY GODOY",
    identificacion: "V-4657858",
    monto: "10.027,50"
  },
  {
    id: 3337,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "17.910,95"
  },
  {
    id: 3338,
    cliente: "JOSE LAGUNA",
    identificacion: "V-18456443",
    monto: "3.140,79"
  },
  {
    id: 3339,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "43.429,03"
  },
  {
    id: 3340,
    cliente: "NESTOR SANTIAGO",
    identificacion: "V-17391183",
    monto: "48.768,02"
  },
  {
    id: 3341,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "54.454,97"
  },
  {
    id: 3342,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "2.319,00"
  },
  {
    id: 3343,
    cliente: "RICARDO JEREZ",
    identificacion: "V-13262858",
    monto: "21.038,74"
  },
  {
    id: 3344,
    cliente: "RAMON ATILIO BRICEÑO",
    identificacion: "V-2628497",
    monto: "29.350,20"
  },
  {
    id: 3345,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "6.503,74"
  },
  {
    id: 3346,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "18.050,38"
  },
  {
    id: 3347,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "73.081,98"
  },
  {
    id: 3348,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "48.721,32"
  },
  {
    id: 3349,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "7.337,55"
  },
  {
    id: 3350,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "3.835,54"
  },
  {
    id: 3351,
    cliente: "JOSE OJEDA",
    identificacion: "V-18984970",
    monto: "36.480,00"
  },
  {
    id: 3352,
    cliente: "RUBEN NUÑEZ",
    identificacion: "V-11128636",
    monto: "7.744,47"
  },
  {
    id: 3353,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "312.843,60"
  },
  {
    id: 3354,
    cliente: "JOSE ALDANA",
    identificacion: "V-6946520",
    monto: "10.085,80"
  },
  {
    id: 3355,
    cliente: "CARLOR ARAUJO",
    identificacion: "V-9325693",
    monto: "6.003,45"
  },
  {
    id: 3356,
    cliente: "NELIANA SILVA",
    identificacion: "V-11618557",
    monto: "129.407,70"
  },
  {
    id: 3357,
    cliente: "YOANDER PEREZ",
    identificacion: "V-31589521",
    monto: "80.046,00"
  },
  {
    id: 3358,
    cliente: "CARLOS ALFONSO DAVILA",
    identificacion: "V-14310419",
    monto: "69.174,37"
  },
  {
    id: 3359,
    cliente: "YOANDER PEREZ",
    identificacion: "V-31589521",
    monto: "2.668,20"
  },
  {
    id: 3360,
    cliente: "RODRIGO VALERA",
    identificacion: "V-20708175",
    monto: "3.942,27"
  },
  {
    id: 3361,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "45.837,83"
  },
  {
    id: 3362,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "5.888,00"
  },
  {
    id: 3363,
    cliente: "ALVARO EUGENIO",
    identificacion: "V-22892995",
    monto: "38.000,00"
  },
  {
    id: 3364,
    cliente: "MAIRA BRICEÑO",
    identificacion: "V-24882109",
    monto: "146.687,21"
  },
  {
    id: 3365,
    cliente: "DAVID MONTILLA",
    identificacion: "V-20135857",
    monto: "22.948,00"
  },
  {
    id: 3366,
    cliente: "HUGO CANO",
    identificacion: "V-3462470",
    monto: "48.594,96"
  },
  {
    id: 3367,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "84.244,76"
  },
  {
    id: 3368,
    cliente: "PEDRO PEÑA",
    identificacion: "V-24566312",
    monto: "11.811,27"
  },
  {
    id: 3369,
    cliente: "MARIA LAGUNA",
    identificacion: "V-21257348",
    monto: "3.223,92"
  },
  {
    id: 3370,
    cliente: "YASNEIDY ABREU",
    identificacion: "V-20788420",
    monto: "4.458,61"
  },
  {
    id: 3371,
    cliente: "ISMAEL MENDEZ",
    identificacion: "V-3271446",
    monto: "1.371,88"
  },
  {
    id: 3372,
    cliente: "CONSEJO COMUNAL PRESBITERO JAVIER SARRASQUETA",
    identificacion: "J-29963743-2",
    monto: "70.617,53"
  },
  {
    id: 3373,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "1.337,58"
  },
  {
    id: 3374,
    cliente: "JOSE ALBERTO RIVERA",
    identificacion: "V-9016572",
    monto: "82.312,80"
  },
  {
    id: 3375,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "40.127,49"
  },
  {
    id: 3376,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "138.067,20"
  },
  {
    id: 3377,
    cliente: "JOSE TORO",
    identificacion: "V-18096520",
    monto: "31.411,12"
  },
  {
    id: 3378,
    cliente: "ASTRID GEORGINA APAREDES GONZALEZ",
    identificacion: "V-26036818",
    monto: "74.235,55"
  },
  {
    id: 3379,
    cliente: "FRANKLIN LINARES",
    identificacion: "V-10404542",
    monto: "26.258,25"
  },
  {
    id: 3380,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "50.415,84"
  },
  {
    id: 3381,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "36.614,50"
  },
  {
    id: 3382,
    cliente: "JEAN CARLOS MENDOZA",
    identificacion: "V-18985365",
    monto: "6.382,50"
  },
  {
    id: 3383,
    cliente: "YURIBEL RIVERA",
    identificacion: "V-20354758",
    monto: "28.604,51"
  },
  {
    id: 3384,
    cliente: "CARLOS GONZALEZ",
    identificacion: "V-14799791",
    monto: "54.434,65"
  },
  {
    id: 3385,
    cliente: "ALBERT MONTILLA",
    identificacion: "V-20430810",
    monto: "17.855,61"
  },
  {
    id: 3386,
    cliente: "ANA CONTRERAS",
    identificacion: "V-10403751",
    monto: "20.586,47"
  },
  {
    id: 3387,
    cliente: "LUZ MARINA GARCIA",
    identificacion: "V-11317690",
    monto: "32.315,16"
  },
  {
    id: 3388,
    cliente: "JOSE LINO BRICEÑO",
    identificacion: "V-12906354",
    monto: "5.601,76"
  },
  {
    id: 3389,
    cliente: "LILIAN VALERO",
    identificacion: "V-18349007",
    monto: "13.913,37"
  },
  {
    id: 3390,
    cliente: "ELIOVER",
    identificacion: "V-24617547",
    monto: "40.906,53"
  },
  {
    id: 3391,
    cliente: "RAUL OSUNA",
    identificacion: "V-14459735",
    monto: "14.193,80"
  },
  {
    id: 3392,
    cliente: "ENDERSON QUINTERO",
    identificacion: "V-26962681",
    monto: "2.129,07"
  },
  {
    id: 3393,
    cliente: "RODRIGO VALERA",
    identificacion: "V-20708175",
    monto: "418.932,00"
  },
  {
    id: 3394,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "176.684,69"
  },
  {
    id: 3395,
    cliente: "NELSON ORTEGANO",
    identificacion: "V-12458444",
    monto: "6.397,50"
  },
  {
    id: 3396,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "18.235,73"
  },
  {
    id: 3397,
    cliente: "FRANCISCO DIAZ",
    identificacion: "V-5718992",
    monto: "20.580,09"
  },
  {
    id: 3398,
    cliente: "CARLOS BRAVO",
    identificacion: "V-17347455",
    monto: "7.464,00"
  },
  {
    id: 3399,
    cliente: "HERMES URBINA",
    identificacion: "V-16739530",
    monto: "44.146,62"
  },
  {
    id: 3400,
    cliente: "MARIA DILCIA VASQUEZ",
    identificacion: "V-16275673",
    monto: "9.644,45"
  },
  {
    id: 3401,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "1.406,63"
  },
  {
    id: 3402,
    cliente: "MIGUEL LA CRUZ",
    identificacion: "V-9179478",
    monto: "1.082,03"
  },
  {
    id: 3403,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "139.455,75"
  },
  {
    id: 3404,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "161.387,60"
  },
  {
    id: 3405,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "105.772,00"
  },
  {
    id: 3406,
    cliente: "JOSE CASTILLO",
    identificacion: "V-25485315",
    monto: "61.257,04"
  },
  {
    id: 3407,
    cliente: "JOSE CASTILLO",
    identificacion: "V-25485315",
    monto: "109.010,40"
  },
  {
    id: 3408,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "12.795,00"
  },
  {
    id: 3409,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "15.234,92"
  },
  {
    id: 3410,
    cliente: "JOSE BARRETO",
    identificacion: "V-5779873",
    monto: "46.469,37"
  },
  {
    id: 3411,
    cliente: "GABRIEL MALDONADO",
    identificacion: "V-19103105",
    monto: "38.910,10"
  },
  {
    id: 3412,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "26.092,00"
  },
  {
    id: 3413,
    cliente: "ELIANYE HERNANDEZ",
    identificacion: "V-24786553",
    monto: "4.328,10"
  },
  {
    id: 3414,
    cliente: "JOSE ADAN BECERRA",
    identificacion: "V-5778328",
    monto: "23.905,54"
  },
  {
    id: 3415,
    cliente: "ASTRID GEORGINA APAREDES GONZALEZ",
    identificacion: "V-26036818",
    monto: "6.397,50"
  },
  {
    id: 3416,
    cliente: "ASTRID GEORGINA APAREDES GONZALEZ",
    identificacion: "V-26036818",
    monto: "8.530,00"
  },
  {
    id: 3417,
    cliente: "MARIA HERNANDEZ",
    identificacion: "V-25171190",
    monto: "18.776,74"
  },
  {
    id: 3418,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.993,60"
  },
  {
    id: 3419,
    cliente: "JESUS VALDERRAMA",
    identificacion: "V-8716472",
    monto: "1.810,00"
  },
  {
    id: 3420,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "156.268,16"
  },
  {
    id: 3421,
    cliente: "ANDREINA PEÑA",
    identificacion: "V-26046226",
    monto: "28.960,00"
  },
  {
    id: 3422,
    cliente: "ALEJANDRO VALERA",
    identificacion: "V-15708388",
    monto: "40.594,68"
  },
  {
    id: 3423,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "53.148,48"
  },
  {
    id: 3424,
    cliente: "CARLOS BLANCO",
    identificacion: "V-23777814",
    monto: "231.940,64"
  },
  {
    id: 3425,
    cliente: "GERARDO TORRES",
    identificacion: "V-16066345",
    monto: "22.608,00"
  },
  {
    id: 3426,
    cliente: "JUAN QUINTINI",
    identificacion: "V-18096612",
    monto: "1.448,00"
  },
  {
    id: 3427,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "9.797,63"
  },
  {
    id: 3428,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "5.551,99"
  },
  {
    id: 3429,
    cliente: "RAFAEL APONTE",
    identificacion: "V-13764264",
    monto: "2.540,12"
  },
  {
    id: 3430,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "5.080,26"
  },
  {
    id: 3431,
    cliente: "DEIBIS LAMEDA",
    identificacion: "V-19299341",
    monto: "16.641,45"
  },
  {
    id: 3432,
    cliente: "COMUNA SOCIALISTA LA CHAPA",
    identificacion: "J-50620835-0",
    monto: "143.027,00"
  },
  {
    id: 3433,
    cliente: "XAVIER VILORIA",
    identificacion: "V-2500590",
    monto: "79.106,75"
  },
  {
    id: 3434,
    cliente: "RAMON TORRES",
    identificacion: "V-17266924",
    monto: "85.630,00"
  },
  {
    id: 3435,
    cliente: "ATILIO JUAREZ",
    identificacion: "V-11895696",
    monto: "5.819,60"
  },
  {
    id: 3436,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "6.874,41"
  },
  {
    id: 3437,
    cliente: "RODOLFO VASQUEZ",
    identificacion: "V-16276297",
    monto: "3.273,53"
  },
  {
    id: 3438,
    cliente: "FREDY SANCHEZ",
    identificacion: "V-24881352",
    monto: "112.754,75"
  },
  {
    id: 3439,
    cliente: "ABDON RANGEL",
    identificacion: "V-5103572",
    monto: "4.364,70"
  },
  {
    id: 3440,
    cliente: "CARLOS BLANCO",
    identificacion: "V-19459389",
    monto: "5.504,50"
  },
  {
    id: 3441,
    cliente: "SAMIR GUDIÑO",
    identificacion: "V-10260087",
    monto: "163.210,66"
  },
  {
    id: 3442,
    cliente: "JESUS BENCOMO",
    identificacion: "V-20656375",
    monto: "178.887,21"
  },
  {
    id: 3443,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "55.978,06"
  },
  {
    id: 3444,
    cliente: "JOSE TORRES",
    identificacion: "V-20656354",
    monto: "30.142,16"
  },
  {
    id: 3445,
    cliente: "ALEX QUINTERO",
    identificacion: "V-4657573",
    monto: "119.258,16"
  },
  {
    id: 3446,
    cliente: "REINALDO JOSE GARCIA",
    identificacion: "V-17865275",
    monto: "33.642,13"
  },
  {
    id: 3447,
    cliente: "LEMUS PINEDA",
    identificacion: "V-5757003",
    monto: "146.095,08"
  },
  {
    id: 3448,
    cliente: "RUBEN HERNANDEZ",
    identificacion: "V-31732552",
    monto: "160.448,00"
  },
  {
    id: 3449,
    cliente: "LAURINDO DACOSTA",
    identificacion: "E-81171343",
    monto: "168.673,80"
  },
  {
    id: 3450,
    cliente: "HECTOR VIELMA",
    identificacion: "V-13896502",
    monto: "29.098,00"
  },
  {
    id: 3451,
    cliente: "GREGORIO ARAUJO",
    identificacion: "V-10034168",
    monto: "20.692,14"
  },
  {
    id: 3452,
    cliente: "JOSE VILLA",
    identificacion: "V-11315744",
    monto: "85.694,80"
  },
  {
    id: 3453,
    cliente: "AMERICO AGUILAR",
    identificacion: "V-5794669",
    monto: "9.888,48"
  },
  {
    id: 3454,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "10.081,50"
  },
  {
    id: 3455,
    cliente: "MILAGROS TORRES",
    identificacion: "V-5765972",
    monto: "1.464,96"
  },
  {
    id: 3456,
    cliente: "YESENIA MONTILLA",
    identificacion: "V-25374644",
    monto: "7.918,11"
  },
  {
    id: 3457,
    cliente: "JOSE ANTONIO VALERO",
    identificacion: "V-9006186",
    monto: "10.310,00"
  },
  {
    id: 3458,
    cliente: "ENDERSON CASTELLANOS",
    identificacion: "V-24853770",
    monto: "21.161,35"
  },
  {
    id: 3459,
    cliente: "JUAN ROMERO",
    identificacion: "V-9536103",
    monto: "6.275,03"
  },
  {
    id: 3460,
    cliente: "LISANDRO SINGER",
    identificacion: "V-32367639",
    monto: "31.145,05"
  },
  {
    id: 3461,
    cliente: "JOSE DANIEL ROJO",
    identificacion: "V-31897726",
    monto: "8.789,76"
  },
  {
    id: 3462,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "285.196,80"
  },
  {
    id: 3463,
    cliente: "DOMINGO HERNANMDEZ",
    identificacion: "V-13376532",
    monto: "31.145,05"
  },
  {
    id: 3464,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "71.299,20"
  },
  {
    id: 3465,
    cliente: "JOSE GREGORIUO ARAUJO",
    identificacion: "V-9317943",
    monto: "7.442,00"
  },
  {
    id: 3466,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "49.588,02"
  },
  {
    id: 3467,
    cliente: "YANI MONTILLA",
    identificacion: "V-15751081",
    monto: "2.210,78"
  },
  {
    id: 3468,
    cliente: "LUIS MOLINA",
    identificacion: "V-17037994",
    monto: "38.954,12"
  },
  {
    id: 3469,
    cliente: "GREGORIO ARAUJO",
    identificacion: "V-10034168",
    monto: "63.404,74"
  },
  {
    id: 3470,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "36.846,50"
  },
  {
    id: 3471,
    cliente: "JOSE GREGORIUO ARAUJO",
    identificacion: "V-9317943",
    monto: "81.062,20"
  },
  {
    id: 3472,
    cliente: "JOSE LEONARDO MANRIQUE",
    identificacion: "V-20394084",
    monto: "118.054,00"
  },
  {
    id: 3473,
    cliente: "GUSTAVO GONZALEZ",
    identificacion: "V-29739219",
    monto: "77.746,11"
  },
  {
    id: 3474,
    cliente: "JUAN CARLOS QUINTERO",
    identificacion: "V-14460817",
    monto: "5.880,70"
  },
  {
    id: 3475,
    cliente: "JOSE ANDARA",
    identificacion: "V-10910274",
    monto: "11.024,47"
  },
  {
    id: 3476,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "124.224,00"
  },
  {
    id: 3477,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "70.096,78"
  },
  {
    id: 3478,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "341.905,87"
  },
  {
    id: 3479,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "23.500,70"
  },
  {
    id: 3480,
    cliente: "ELIAN FRIAS",
    identificacion: "V-15407693",
    monto: "7.715,66"
  },
  {
    id: 3481,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "92.595,24"
  },
  {
    id: 3482,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "121.796,55"
  },
  {
    id: 3483,
    cliente: "RAMON GODOY",
    identificacion: "V-14799026",
    monto: "46.912,96"
  },
  {
    id: 3484,
    cliente: "RAMON GODOY",
    identificacion: "V-14799026",
    monto: "3.220,38"
  },
  {
    id: 3485,
    cliente: "ADELMIRA ARAUJO BASTIDAS",
    identificacion: "V-5017441",
    monto: "4.950,23"
  },
  {
    id: 3486,
    cliente: "FELIX SILVA",
    identificacion: "V-18711989",
    monto: "28.724,47"
  },
  {
    id: 3487,
    cliente: "JOSE IDROBO",
    identificacion: "V-9329600",
    monto: "17.686,32"
  },
  {
    id: 3488,
    cliente: "EFRAIN GIL",
    identificacion: "V-16275426",
    monto: "7.715,66"
  },
  {
    id: 3489,
    cliente: "ASTRID GEORGINA APAREDES GONZALEZ",
    identificacion: "V-26036818",
    monto: "22.120,00"
  },
  {
    id: 3490,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "65.442,41"
  },
  {
    id: 3491,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "8.106,23"
  },
  {
    id: 3492,
    cliente: "GILBERTO SALAS",
    identificacion: "V-12798041",
    monto: "8.106,18"
  },
  {
    id: 3493,
    cliente: "JESUS TABORDA",
    identificacion: "V-13260934",
    monto: "66.968,33"
  },
  {
    id: 3494,
    cliente: "OCLIDES BRICEÑO",
    identificacion: "V-13897465",
    monto: "7.962,09"
  },
  {
    id: 3495,
    cliente: "SUSANA MORENO",
    identificacion: "V-13049246",
    monto: "22.264,35"
  },
  {
    id: 3496,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "40.940,00"
  },
  {
    id: 3497,
    cliente: "EDIXON VELASQUEZ",
    identificacion: "V-26324062",
    monto: "15.518,69"
  },
  {
    id: 3498,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "368.525,85"
  },
  {
    id: 3499,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "40.274,00"
  },
  {
    id: 3500,
    cliente: "WILFREDO DABOIN",
    identificacion: "V-14928334",
    monto: "10.221,08"
  },
  {
    id: 3501,
    cliente: "JOSE MARIN",
    identificacion: "V-14159523",
    monto: "11.058,45"
  },
  {
    id: 3502,
    cliente: "AUXILIADORA VIERA",
    identificacion: "V-12039973",
    monto: "28.486,56"
  },
  {
    id: 3503,
    cliente: "FRIDA CASTELLANO",
    identificacion: "V-5786071",
    monto: "4.423,38"
  },
  {
    id: 3504,
    cliente: "ARMANDO JOSE PAREDES CONTRERAS",
    identificacion: "V-27804531",
    monto: "137.441,77"
  },
  {
    id: 3505,
    cliente: "ARMANDO JOSE PAREDES CONTRERAS",
    identificacion: "V-27804531",
    monto: "31.662,00"
  },
  {
    id: 3506,
    cliente: "DINO BALZA",
    identificacion: "V-10401711",
    monto: "1.843,08"
  },
  {
    id: 3507,
    cliente: "MARIO ANDRADE",
    identificacion: "V-7879897",
    monto: "7.032,38"
  },
  {
    id: 3508,
    cliente: "JHOVANY DUARTE",
    identificacion: "V-16465826",
    monto: "1.363,88"
  },
  {
    id: 3509,
    cliente: "DUGLAS SALAS",
    identificacion: "V-20790421",
    monto: "26.342,27"
  },
  {
    id: 3510,
    cliente: "ERICK VALERO",
    identificacion: "V-19899408",
    monto: "146.071,15"
  },
  {
    id: 3511,
    cliente: "JOSE MENDOZA",
    identificacion: "V-93189249",
    monto: "12.901,52"
  },
  {
    id: 3512,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "17.354,39"
  },
  {
    id: 3513,
    cliente: "MIGUEL ONTIVEROS",
    identificacion: "V-22296784",
    monto: "28.567,66"
  },
  {
    id: 3514,
    cliente: "MANUEL TERAN",
    identificacion: "V-13206625",
    monto: "108.298,90"
  },
  {
    id: 3515,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.580,31"
  },
  {
    id: 3516,
    cliente: "JOSE VALERA",
    identificacion: "V-19610023",
    monto: "6.635,07"
  },
  {
    id: 3517,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "66.350,70"
  },
  {
    id: 3518,
    cliente: "LEONARDO WSPINOZA",
    identificacion: "V-11898355",
    monto: "2.951,52"
  },
  {
    id: 3519,
    cliente: "AMERICO AGUILAR",
    identificacion: "V-5794669",
    monto: "9.961,38"
  },
  {
    id: 3520,
    cliente: "YOVANY MORENO",
    identificacion: "V-14983042",
    monto: "8.116,68"
  },
  {
    id: 3521,
    cliente: "ARMANDO CASTELLANO",
    identificacion: "V-16267593",
    monto: "6.906,00"
  },
  {
    id: 3522,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "64.419,96"
  },
  {
    id: 3523,
    cliente: "YONAIKER GIL",
    identificacion: "V-28584686",
    monto: "118.798,68"
  },
  {
    id: 3524,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-19102237",
    monto: "7.769,88"
  },
  {
    id: 3525,
    cliente: "JOSE GREGORIO DAVILA",
    identificacion: "V-3268285",
    monto: "2.951,52"
  },
  {
    id: 3526,
    cliente: "ANTONIO MARCANO",
    identificacion: "V-9083287",
    monto: "108.940,00"
  },
  {
    id: 3527,
    cliente: "ARGENIS BRICEÑO",
    identificacion: "V-5793679",
    monto: "28.821,59"
  },
  {
    id: 3528,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "63.041,00"
  },
  {
    id: 3529,
    cliente: "MANUEL CASTRO",
    identificacion: "V-18095981",
    monto: "44.000,00"
  },
  {
    id: 3530,
    cliente: "GUSTAVO TERAN VILORA",
    identificacion: "V-13633820",
    monto: "2.951,52"
  },
  {
    id: 3531,
    cliente: "JOSE CASTILLO",
    identificacion: "V-25485315",
    monto: "10.477,28"
  },
  {
    id: 3532,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.582,58"
  },
  {
    id: 3533,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.582,58"
  },
  {
    id: 3534,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "8.800,00"
  },
  {
    id: 3535,
    cliente: "CESAR OCTAVIO BRICEÑO ABREU",
    identificacion: "V-9178114",
    monto: "2.656,38"
  },
  {
    id: 3536,
    cliente: "GREGORIO RUIZ",
    identificacion: "V-13404010",
    monto: "344.767,06"
  },
  {
    id: 3537,
    cliente: "LEDLYN BENITEZ",
    identificacion: "V-15294015",
    monto: "12.912,90"
  },
  {
    id: 3538,
    cliente: "ADRIAN RAMIREZ",
    identificacion: "V-19102237",
    monto: "1.438,87"
  },
  {
    id: 3539,
    cliente: "DANYER PEREZ",
    identificacion: "V-20788567",
    monto: "66.136,18"
  },
  {
    id: 3540,
    cliente: "PEDRO MONTILLA",
    identificacion: "V-18034400",
    monto: "14.853,52"
  },
  {
    id: 3541,
    cliente: "EUGENIO FARIAS",
    identificacion: "V-10907937",
    monto: "53.127,36"
  },
  {
    id: 3542,
    cliente: "ALEXIS SANTOS",
    identificacion: "V-18734836",
    monto: "1.365,08"
  },
  {
    id: 3543,
    cliente: "JOSE VALERO",
    identificacion: "V-12042036",
    monto: "1.475,76"
  },
  {
    id: 3544,
    cliente: "DANIEL LUJANO",
    identificacion: "V-23593897",
    monto: "5.767,91"
  },
  {
    id: 3545,
    cliente: "LAURA TRIOZZI",
    identificacion: "V-11894738",
    monto: "7.902,00"
  },
  {
    id: 3546,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "143.033,81"
  },
  {
    id: 3547,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "192.506,93"
  },
  {
    id: 3548,
    cliente: "ALEXIS RAMIREZ",
    identificacion: "V-10395298",
    monto: "3.762,00"
  },
  {
    id: 3549,
    cliente: "TRINO MEJIA",
    identificacion: "V-10403077",
    monto: "14.941,09"
  },
  {
    id: 3550,
    cliente: "JOSE IPOLITO CARRIZO",
    identificacion: "V-15431082",
    monto: "38.482,44"
  },
  {
    id: 3551,
    cliente: "LISBETH ARAUJO",
    identificacion: "V-15293121",
    monto: "12.334,69"
  },
  {
    id: 3552,
    cliente: "MAURICIO GONCALVES",
    identificacion: "V-11216781",
    monto: "4.423,81"
  },
  {
    id: 3553,
    cliente: "MARIMER MARTINEZ",
    identificacion: "V-9997466",
    monto: "3.711,20"
  },
  {
    id: 3554,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "222.669,00"
  },
  {
    id: 3555,
    cliente: "OSWALDO MONTILA",
    identificacion: "V-21205991",
    monto: "37.111,50"
  },
  {
    id: 3556,
    cliente: "JESUS BRICEÑO",
    identificacion: "V-9497376",
    monto: "25.236,00"
  },
  {
    id: 3557,
    cliente: "JOSE MORENO",
    identificacion: "V-9498929",
    monto: "126.000,00"
  },
  {
    id: 3558,
    cliente: "JOEL RIVAS",
    identificacion: "V-17267781",
    monto: "7.422,30"
  },
  {
    id: 3559,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "81.776,40"
  },
  {
    id: 3560,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "24.122,48"
  },
  {
    id: 3561,
    cliente: "GABRIEL LINARES",
    identificacion: "V-30189843",
    monto: "1.336,01"
  },
  {
    id: 3562,
    cliente: "JOSE BENITO VILLARREAL",
    identificacion: "V-11894447",
    monto: "11.875,68"
  },
  {
    id: 3563,
    cliente: "JOSE MORENO",
    identificacion: "V-9498929",
    monto: "21.480,14"
  },
  {
    id: 3564,
    cliente: "JOSE DELGADO",
    identificacion: "V-5767295",
    monto: "24.597,50"
  },
  {
    id: 3565,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "27.455,09"
  },
  {
    id: 3566,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "60.917,48"
  },
  {
    id: 3567,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "22.462,59"
  },
  {
    id: 3568,
    cliente: "RICHARD GALLARDO",
    identificacion: "V-8719018",
    monto: "58.602,34"
  },
  {
    id: 3569,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "42.340,17"
  },
  {
    id: 3570,
    cliente: "MERCEDEZ LEON",
    identificacion: "V-3909792",
    monto: "7.056,70"
  },
  {
    id: 3571,
    cliente: "WILFRANK BENITEZ",
    identificacion: "V-26557494",
    monto: "109.705,84"
  },
  {
    id: 3572,
    cliente: "FRANKLIN LINARES",
    identificacion: "V-20656699",
    monto: "27.855,35"
  },
  {
    id: 3573,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "21.912,89"
  },
  {
    id: 3574,
    cliente: "JOSE CARMONA",
    identificacion: "V-8720544",
    monto: "79.956,07"
  },
  {
    id: 3575,
    cliente: "CARLOS ABREU",
    identificacion: "V-23234310",
    monto: "378.440,96"
  },
  {
    id: 3576,
    cliente: "NEPTALI CONTRERAS",
    identificacion: "V-16376864",
    monto: "10.419,22"
  },
  {
    id: 3577,
    cliente: "HECTOR MAVARES",
    identificacion: "V-20040826",
    monto: "1.339,61"
  },
  {
    id: 3578,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "115.355,65"
  },
  {
    id: 3579,
    cliente: "JULIO PAREDES",
    identificacion: "V-5787754",
    monto: "11.907,68"
  },
  {
    id: 3580,
    cliente: "RONALD DELGADO",
    identificacion: "V-30600846",
    monto: "36.884,04"
  },
  {
    id: 3581,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "2.679,22"
  },
  {
    id: 3582,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "14.698,54"
  },
  {
    id: 3583,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "33.490,35"
  },
  {
    id: 3584,
    cliente: "JUAN MANUEL PEREZ",
    identificacion: "V-24565927",
    monto: "54.064,00"
  },
  {
    id: 3585,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "2.976,92"
  },
  {
    id: 3586,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "40.188,42"
  },
  {
    id: 3587,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "11.154,77"
  },
  {
    id: 3588,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-24565533",
    monto: "259.482,72"
  },
  {
    id: 3589,
    cliente: "YURIBEL RIVERA",
    identificacion: "V-20354758",
    monto: "11.661,81"
  },
  {
    id: 3590,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "11.076,00"
  },
  {
    id: 3591,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "48.466,60"
  },
  {
    id: 3592,
    cliente: "DIGO BASTIDAS",
    identificacion: "V-31735101",
    monto: "19.013,82"
  },
  {
    id: 3593,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "4.287,43"
  },
  {
    id: 3594,
    cliente: "JOSE ARAUJO",
    identificacion: "V-28261713",
    monto: "76.055,28"
  },
  {
    id: 3595,
    cliente: "MAGALI MATERANO",
    identificacion: "V-10912928",
    monto: "4.294,89"
  },
  {
    id: 3596,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "87.239,88"
  },
  {
    id: 3597,
    cliente: "JOSE BRAVO",
    identificacion: "V-11126953",
    monto: "11.512,85"
  },
  {
    id: 3598,
    cliente: "LUIS ORTIZ",
    identificacion: "V-19812477",
    monto: "11.154,77"
  },
  {
    id: 3599,
    cliente: "JESUS MANUEL DELGADO",
    identificacion: "V-25374236",
    monto: "64.922,87"
  },
  {
    id: 3600,
    cliente: "CARLOS GONZALEZ",
    identificacion: "V-14799791",
    monto: "46.736,71"
  },
  {
    id: 3601,
    cliente: "REGULO SANTIAGO",
    identificacion: "V-5779961",
    monto: "72.423,11"
  },
  {
    id: 3602,
    cliente: "FRANCISCO LOBO",
    identificacion: "V-17605478",
    monto: "8.212,93"
  },
  {
    id: 3603,
    cliente: "ARTURO DURAN",
    identificacion: "V-21209256",
    monto: "31.433,12"
  },
  {
    id: 3604,
    cliente: "DANNY TORRES",
    identificacion: "V-17265501",
    monto: "134.393,40"
  },
  {
    id: 3605,
    cliente: "OVIDIO URBINA",
    identificacion: "V-5783040",
    monto: "110.605,77"
  },
  {
    id: 3606,
    cliente: "MIGUEL TORRRES",
    identificacion: "V-9171271",
    monto: "1.119,94"
  },
  {
    id: 3607,
    cliente: "JOSE DELGADO",
    identificacion: "V-5767295",
    monto: "17.050,00"
  },
  {
    id: 3608,
    cliente: "ALEXIS CASTELLANOS",
    identificacion: "V-10809199",
    monto: "33.747,68"
  },
  {
    id: 3609,
    cliente: "ADRIAN CABRERA",
    identificacion: "V-17391275",
    monto: "31.093,12"
  },
  {
    id: 3610,
    cliente: "WILLIAN PALENCIA",
    identificacion: "V-20518376",
    monto: "22.764,75"
  },
  {
    id: 3611,
    cliente: "NORWILLIAN VILLARREAL",
    identificacion: "V-18095214",
    monto: "28.797,52"
  },
  {
    id: 3612,
    cliente: "GILMER RAMIREZ",
    identificacion: "V-10911122",
    monto: "24.335,67"
  },
  {
    id: 3613,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "84.343,52"
  },
  {
    id: 3614,
    cliente: "MIGUEL VALERA",
    identificacion: "V-26591693",
    monto: "73.972,95"
  },
  {
    id: 3615,
    cliente: "GILBERTO UZCATEGUI",
    identificacion: "V-5280075",
    monto: "32.641,48"
  },
  {
    id: 3616,
    cliente: "TONY LAGUNA",
    identificacion: "V-15188882",
    monto: "2.620,78"
  },
  {
    id: 3617,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "63.044,43"
  },
  {
    id: 3618,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "70.536,03"
  },
  {
    id: 3619,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "1.872,00"
  },
  {
    id: 3620,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "22.464,00"
  },
  {
    id: 3621,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "128.492,36"
  },
  {
    id: 3622,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "7.907,22"
  },
  {
    id: 3623,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "5.590,32"
  },
  {
    id: 3624,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "264.262,97"
  },
  {
    id: 3625,
    cliente: "MANUEL CASTRO",
    identificacion: "V-18095981",
    monto: "13.852,61"
  },
  {
    id: 3626,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "1.648,00"
  },
  {
    id: 3627,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "17.970,96"
  },
  {
    id: 3628,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "18.465,16"
  },
  {
    id: 3629,
    cliente: "MAURO VOLCANES",
    identificacion: "V-17831076",
    monto: "9.834,00"
  },
  {
    id: 3630,
    cliente: "BENEDICTO VARGAS",
    identificacion: "V-11129787",
    monto: "121.086,49"
  },
  {
    id: 3631,
    cliente: "LUIS SANTIAGO",
    identificacion: "V-13765014",
    monto: "37.062,99"
  },
  {
    id: 3632,
    cliente: "JOSE DELGADO",
    identificacion: "V-5767295",
    monto: "28.684,72"
  },
  {
    id: 3633,
    cliente: "HENRY BENCOMO",
    identificacion: "V-14557899",
    monto: "85.946,99"
  },
  {
    id: 3634,
    cliente: "MARCOS HERNANDEZ",
    identificacion: "V-12939005",
    monto: "7.671,32"
  },
  {
    id: 3635,
    cliente: "COMERCIALIZADORA YESSICA LINARES, F.P",
    identificacion: "V-17347723",
    monto: "197.852,32"
  },
  {
    id: 3636,
    cliente: "JEAM BEDOYA",
    identificacion: "V-27152102",
    monto: "14.121,50"
  },
  {
    id: 3637,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "55.782,00"
  },
  {
    id: 3638,
    cliente: "NELSON OCANTO",
    identificacion: "V-17038395",
    monto: "45.732,49"
  },
  {
    id: 3639,
    cliente: "JOSE GREGORIO PEÑA",
    identificacion: "V-17597962",
    monto: "44.624,56"
  },
  {
    id: 3640,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "15.884,09"
  },
  {
    id: 3641,
    cliente: "JEAM BEDOYA",
    identificacion: "V-27152102",
    monto: "16.538,00"
  },
  {
    id: 3642,
    cliente: "ROBERTO TORRES",
    identificacion: "V-20429854",
    monto: "49.412,00"
  },
  {
    id: 3643,
    cliente: "RUDY QUEVEDO",
    identificacion: "V-16806785",
    monto: "42.000,00"
  },
  {
    id: 3644,
    cliente: "KEVIN ADRIAN GARCIA GARCIA",
    identificacion: "V-30808033",
    monto: "133.744,13"
  },
  {
    id: 3645,
    cliente: "MERBIN VARGAS",
    identificacion: "V-8704886",
    monto: "30.206,40"
  },
  {
    id: 3646,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "1.510,32"
  },
  {
    id: 3647,
    cliente: "JHOAN VILORIA",
    identificacion: "V-31732145",
    monto: "8.699,44"
  },
  {
    id: 3648,
    cliente: "ADRIANA COLMENARES",
    identificacion: "V-25485898",
    monto: "34.412,21"
  },
  {
    id: 3649,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "178.457,38"
  },
  {
    id: 3650,
    cliente: "DANIEL ARTIGAS",
    identificacion: "V-32282408",
    monto: "6.796,44"
  },
  {
    id: 3651,
    cliente: "SIMON ANTONIO SANCHEZ",
    identificacion: "V-16533460",
    monto: "4.530,96"
  },
  {
    id: 3652,
    cliente: "JAIRO CASTELLANOS",
    identificacion: "V-9164409",
    monto: "74.949,63"
  },
  {
    id: 3653,
    cliente: "JAIRO CASTELLANOS",
    identificacion: "V-9164409",
    monto: "5.814,73"
  },
  {
    id: 3654,
    cliente: "LEIVER HOYOS",
    identificacion: "V-32084364",
    monto: "137.916,80"
  },
  {
    id: 3655,
    cliente: "LEIVER HOYOS",
    identificacion: "V-32084364",
    monto: "8.306,76"
  },
  {
    id: 3656,
    cliente: "JOSE BARRETO",
    identificacion: "V-20039879",
    monto: "10.282,00"
  },
  {
    id: 3657,
    cliente: "SERGIO MORA",
    identificacion: "V-13402086",
    monto: "4.535,40"
  },
  {
    id: 3658,
    cliente: "ENRIQUE RIVERA",
    identificacion: "V-3906512",
    monto: "24.891,79"
  },
  {
    id: 3659,
    cliente: "ENRIQUE RIVERA",
    identificacion: "V-3906512",
    monto: "24.891,79"
  },
  {
    id: 3660,
    cliente: "HARRY CASTELLANO",
    identificacion: "V-19898242",
    monto: "1.889,75"
  },
  {
    id: 3661,
    cliente: "RICHARD SIMANCAS",
    identificacion: "V-12906149",
    monto: "2.267,70"
  },
  {
    id: 3662,
    cliente: "JESUS DANIEL SALCEDO",
    identificacion: "V-26482104",
    monto: "22.669,44"
  },
  {
    id: 3663,
    cliente: "XIOLE BRICEÑO",
    identificacion: "V-26413235",
    monto: "16.629,80"
  },
  {
    id: 3664,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "1.511,80"
  },
  {
    id: 3665,
    cliente: "JOSE GONZALEZ",
    identificacion: "V-12939586",
    monto: "30.636,63"
  },
  {
    id: 3666,
    cliente: "MIGUEL ONTIVEROS",
    identificacion: "V-22296784",
    monto: "724.659,05"
  },
  {
    id: 3667,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "106.582,00"
  },
  {
    id: 3668,
    cliente: "WILFREDO BARRETO",
    identificacion: "V-16276547",
    monto: "29.291,13"
  },
  {
    id: 3669,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "131.347,79"
  },
  {
    id: 3670,
    cliente: "JESUS MANUEL DELGADO",
    identificacion: "V-25374236",
    monto: "22.611,26"
  },
  {
    id: 3671,
    cliente: "NAYLA LOPEZ",
    identificacion: "V-16692960",
    monto: "7.567,10"
  },
  {
    id: 3672,
    cliente: "RAMON GODOY",
    identificacion: "V-14799026",
    monto: "31.113,95"
  },
  {
    id: 3673,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "12.183,03"
  },
  {
    id: 3674,
    cliente: "EFREIN FERESIN",
    identificacion: "V-13996935",
    monto: "7.922,75"
  },
  {
    id: 3675,
    cliente: "JOSE RIVAS",
    identificacion: "V-12034621",
    monto: "83.532,00"
  },
  {
    id: 3676,
    cliente: "ARGENIS BASTIDAS",
    identificacion: "V-30024657",
    monto: "179.457,76"
  },
  {
    id: 3677,
    cliente: "JOSE OJEDA",
    identificacion: "V-5769848",
    monto: "756,71"
  },
  {
    id: 3678,
    cliente: "ENDER BRICEÑO",
    identificacion: "V-18508881",
    monto: "34.203,30"
  },
  {
    id: 3679,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "26.000,56"
  },
  {
    id: 3680,
    cliente: "CARLOS ABREU",
    identificacion: "V-23234310",
    monto: "24.593,08"
  },
  {
    id: 3681,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "73.481,38"
  },
  {
    id: 3682,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "22.582,27"
  },
  {
    id: 3683,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "140.677,32"
  },
  {
    id: 3684,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "63.784,88"
  },
  {
    id: 3685,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "7.999,62"
  },
  {
    id: 3686,
    cliente: "MIGUEL ONTIVEROS",
    identificacion: "V-22296784",
    monto: "198.776,95"
  },
  {
    id: 3687,
    cliente: "DANNY ARTIGAS",
    identificacion: "V-20040253",
    monto: "12.552,44"
  },
  {
    id: 3688,
    cliente: "RICARDO BRICEÑO",
    identificacion: "V-11318352",
    monto: "100.798,28"
  },
  {
    id: 3689,
    cliente: "GUSTAVO AZUAJE",
    identificacion: "V-11617425",
    monto: "5.625,00"
  },
  {
    id: 3690,
    cliente: "CARLOS ABREU",
    identificacion: "V-23234310",
    monto: "43.937,32"
  },
  {
    id: 3691,
    cliente: "JUNIOR VALERA",
    identificacion: "V-24566190",
    monto: "9.000,00"
  },
  {
    id: 3692,
    cliente: "ARGENIS BECERRA",
    identificacion: "V-20707404",
    monto: "24.750,00"
  },
  {
    id: 3693,
    cliente: "YOHAN CASTELLANOS",
    identificacion: "V-23304548",
    monto: "129.600,00"
  },
  {
    id: 3694,
    cliente: "JORGE CASTELLANOS",
    identificacion: "V-5780557",
    monto: "757,54"
  },
  {
    id: 3695,
    cliente: "JOSE VERGARA",
    identificacion: "V-10036518",
    monto: "12.552,44"
  },
  {
    id: 3696,
    cliente: "JESUS PARA",
    identificacion: "V-21367849",
    monto: "55.800,00"
  },
  {
    id: 3697,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "30.544,99"
  },
  {
    id: 3698,
    cliente: "WUILMER QUINTERO",
    identificacion: "V-20133109",
    monto: "4.363,43"
  },
  {
    id: 3699,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "1.893,85"
  },
  {
    id: 3700,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "208.611,36"
  },
  {
    id: 3701,
    cliente: "GEOVANY PEREZ",
    identificacion: "V-13377826",
    monto: "59.232,49"
  },
  {
    id: 3702,
    cliente: "ELIANDRO ORELLANA",
    identificacion: "V-1012976",
    monto: "38.331,52"
  },
  {
    id: 3703,
    cliente: "COMERCIALIZADORA YESSICA LINARES, F.P",
    identificacion: "V-17347723",
    monto: "71.600,01"
  },
  {
    id: 3704,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "4.363,43"
  },
  {
    id: 3705,
    cliente: "GRECIA BRICEÑO",
    identificacion: "V-27804727",
    monto: "37.657,32"
  },
  {
    id: 3706,
    cliente: "COMUNA AGRICOLA SOCIALISTA LUCHA POR UN PUEBLO MEJOR",
    identificacion: "J-40560635-5",
    monto: "17.802,20"
  },
  {
    id: 3707,
    cliente: "CESAR RUBIO",
    identificacion: "V-29539140",
    monto: "5.282,86"
  },
  {
    id: 3708,
    cliente: "LEONARDO CANELON",
    identificacion: "V-4876585",
    monto: "11.418,75"
  },
  {
    id: 3709,
    cliente: "YOEL SALCEDO",
    identificacion: "V-13207084",
    monto: "12.613,42"
  },
  {
    id: 3710,
    cliente: "JESUS DANIEL SALCEDO",
    identificacion: "V-26482104",
    monto: "41.400,00"
  },
  {
    id: 3711,
    cliente: "JHONY RANGEL",
    identificacion: "V-18802056",
    monto: "44.485,70"
  },
  {
    id: 3712,
    cliente: "RAMON ANTONIO CEGARRA PERDOMO",
    identificacion: "V-9313546",
    monto: "1.941,11"
  },
  {
    id: 3713,
    cliente: "JOSE MORENO",
    identificacion: "V-13897111",
    monto: "174.661,30"
  },
  {
    id: 3714,
    cliente: "JOSE RAMON BOSCAN",
    identificacion: "V-10315297",
    monto: "151.102,17"
  },
  {
    id: 3715,
    cliente: "JOSE MORENO",
    identificacion: "V-13897111",
    monto: "2.740,39"
  },
  {
    id: 3716,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "35.640,32"
  },
  {
    id: 3717,
    cliente: "JOSE MORENO",
    identificacion: "V-13897111",
    monto: "3.037,26"
  },
  {
    id: 3718,
    cliente: "CRIKET C.A.",
    identificacion: "J-41261519-0",
    monto: "176.983,68"
  },
  {
    id: 3719,
    cliente: "MIGUEL ONTIVEROS",
    identificacion: "V-22296784",
    monto: "7.992,81"
  },
  {
    id: 3720,
    cliente: "JUAN CARLOS MANZANILLA",
    identificacion: "V-17346126",
    monto: "296.916,60"
  },
  {
    id: 3721,
    cliente: "JOSE ROMERO",
    identificacion: "V-21207986",
    monto: "28.054,53"
  },
  {
    id: 3722,
    cliente: "AGROPECUARIA E INVERSIONES HENDEL, C.A",
    identificacion: "J-31738711-2",
    monto: "7.878,63"
  },
  {
    id: 3723,
    cliente: "JOHON CARVAJAL",
    identificacion: "V-84589450",
    monto: "18.000,00"
  },
  {
    id: 3724,
    cliente: "JOSE MANUEL TELLES",
    identificacion: "V-30379897",
    monto: "5.830,94"
  },
  {
    id: 3725,
    cliente: "RAFAEL EDUARDO PERDOMO",
    identificacion: "V-17392685",
    monto: "8.866,47"
  },
  {
    id: 3726,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "5.082,95"
  },
  {
    id: 3727,
    cliente: "ALCALDIA DE PAMPANITO",
    identificacion: "G-20000525-4",
    monto: "18.851,03"
  },
  {
    id: 3728,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "15.138,83"
  },
  {
    id: 3729,
    cliente: "ALCALDIA DE PAMPANITO",
    identificacion: "G-20000525-4",
    monto: "483.359,65"
  },
  {
    id: 3730,
    cliente: "JESUS ENRIQUE BASTIDAS PARRA",
    identificacion: "V-17266859",
    monto: "57.693,67"
  },
  {
    id: 3731,
    cliente: "ANA BASTIDAS",
    identificacion: "V-16267192",
    monto: "45.399,00"
  },
  {
    id: 3732,
    cliente: "JOSE BARRIOS",
    identificacion: "V-9031474",
    monto: "7.816,67"
  },
  {
    id: 3733,
    cliente: "MICHAEL PAREDES",
    identificacion: "V-30727494",
    monto: "1.375,83"
  },
  {
    id: 3734,
    cliente: "JOSE GREGORIO GODOY",
    identificacion: "V-9497924",
    monto: "17.580,05"
  },
  {
    id: 3735,
    cliente: "SILVIA MALDONADO",
    identificacion: "V-11317972",
    monto: "67.553,25"
  },
  {
    id: 3736,
    cliente: "JAVIER BASTIDAS",
    identificacion: "V-9315617",
    monto: "1.528,70"
  },
  {
    id: 3737,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "45.249,52"
  },
  {
    id: 3738,
    cliente: "GUSTAVO GONZALEZ",
    identificacion: "V-29739219",
    monto: "161.277,86"
  },
  {
    id: 3739,
    cliente: "AGROPECUARIA LOS TOCAYOS, C.A.",
    identificacion: "J-50034165-2",
    monto: "16.005,48"
  },
  {
    id: 3740,
    cliente: "LEIVER HOYOS",
    identificacion: "V-32084364",
    monto: "42.770,00"
  },
  {
    id: 3741,
    cliente: "LEDLYN BENITEZ",
    identificacion: "V-15294015",
    monto: "11.465,28"
  },
  {
    id: 3742,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "17.363,28"
  },
  {
    id: 3743,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-24565533",
    monto: "187.872,00"
  },
  {
    id: 3744,
    cliente: "JESUS AZUAJE",
    identificacion: "V-20038447",
    monto: "14.364,00"
  },
  {
    id: 3745,
    cliente: "LEDLYN BENITEZ",
    identificacion: "V-15294015",
    monto: "8.159,36"
  },
  {
    id: 3746,
    cliente: "RICARDO GONZALEZ",
    identificacion: "V-20429970",
    monto: "13.420,05"
  },
  {
    id: 3747,
    cliente: "UBALDO SANTIAGO",
    identificacion: "V-16882563",
    monto: "21.432,00"
  },
  {
    id: 3748,
    cliente: "ROBERTO LEAL",
    identificacion: "V-13523749",
    monto: "35.168,20"
  },
  {
    id: 3749,
    cliente: "SILVIO SALAS",
    identificacion: "V-28542314",
    monto: "39.408,94"
  },
  {
    id: 3750,
    cliente: "ERICSON RIVERO",
    identificacion: "V-18377494",
    monto: "11.963,00"
  },
  {
    id: 3751,
    cliente: "MARLEIN MOSCAN",
    identificacion: "V-16739681",
    monto: "12.769,00"
  },
  {
    id: 3752,
    cliente: "JOSE ARAUJO",
    identificacion: "V-28261713",
    monto: "39.109,86"
  },
  {
    id: 3753,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "85.096,87"
  },
  {
    id: 3754,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "212.888,00"
  },
  {
    id: 3755,
    cliente: "MARITZA RUIZ",
    identificacion: "V-9015280",
    monto: "11.217,99"
  },
  {
    id: 3756,
    cliente: "ALEXIS PERDOMO",
    identificacion: "V-12499916",
    monto: "16.231,02"
  },
  {
    id: 3757,
    cliente: "JAIRO AGUILAR",
    identificacion: "V-13926432",
    monto: "21.042,50"
  },
  {
    id: 3758,
    cliente: "LAURINDO DACOSTA",
    identificacion: "E-81171343",
    monto: "228.213,60"
  },
  {
    id: 3759,
    cliente: "DIONISIO BORGE",
    identificacion: "V-18035014",
    monto: "13.840,71"
  },
  {
    id: 3760,
    cliente: "ISMAEL INFANTE",
    identificacion: "V-16651052",
    monto: "5.164,00"
  },
  {
    id: 3761,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "55.648,15"
  },
  {
    id: 3762,
    cliente: "VICTOR MENDOZA",
    identificacion: "V-14459776",
    monto: "24.690,80"
  },
  {
    id: 3763,
    cliente: "JESUS PARA",
    identificacion: "V-21367849",
    monto: "57.040,00"
  },
  {
    id: 3764,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "3.354,15"
  },
  {
    id: 3765,
    cliente: "FERNANDO BRICEÑO",
    identificacion: "V-26962777",
    monto: "2.953,20"
  },
  {
    id: 3766,
    cliente: "GERARDO MARIN",
    identificacion: "V-13926793",
    monto: "1.858,28"
  },
  {
    id: 3767,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "53.088,96"
  },
  {
    id: 3768,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "18.000,16"
  },
  {
    id: 3769,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "9.038,70"
  },
  {
    id: 3770,
    cliente: "JESUS GODOI",
    identificacion: "V-25619421",
    monto: "12.360,64"
  },
  {
    id: 3771,
    cliente: "HECTOR VIERA",
    identificacion: "V-9495596",
    monto: "16.223,34"
  },
  {
    id: 3772,
    cliente: "JOSE ISMAEL ARAUJO",
    identificacion: "V-8718369",
    monto: "9.270,48"
  },
  {
    id: 3773,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "18.038,81"
  },
  {
    id: 3774,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "107.024,00"
  },
  {
    id: 3775,
    cliente: "ENDER PEREZ",
    identificacion: "V-14807536",
    monto: "76.314,00"
  },
  {
    id: 3776,
    cliente: "JOSE RIVAS",
    identificacion: "V-12540708",
    monto: "11.325,44"
  },
  {
    id: 3777,
    cliente: "JORDANO BARRIOS",
    identificacion: "V-26451871",
    monto: "43.190,00"
  },
  {
    id: 3778,
    cliente: "SILVIA MALDONADO",
    identificacion: "V-11317972",
    monto: "7.725,40"
  },
  {
    id: 3779,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "476.256,20"
  },
  {
    id: 3780,
    cliente: "ENMANUEL GOMEZ",
    identificacion: "V-20430707",
    monto: "8.497,94"
  },
  {
    id: 3781,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "21.808,80"
  },
  {
    id: 3782,
    cliente: "JAVIER MONTILLA",
    identificacion: "V-18472353",
    monto: "18.919,50"
  },
  {
    id: 3783,
    cliente: "ALEXANDER HERNANDEZ",
    identificacion: "V-27022455",
    monto: "5.739,97"
  },
  {
    id: 3784,
    cliente: "ALEXANDER HERNANDEZ",
    identificacion: "V-27022455",
    monto: "14.369,25"
  },
  {
    id: 3785,
    cliente: "LUNCHUERIA LA TRADICIONAL ESTRELLA",
    identificacion: "J-29510082-5",
    monto: "16.810,47"
  },
  {
    id: 3786,
    cliente: "EDUARDO RONDON",
    identificacion: "V-16533368",
    monto: "48.283,75"
  },
  {
    id: 3787,
    cliente: "RODOLFO AVENDAÑO",
    identificacion: "V-9498290",
    monto: "104.706,16"
  },
  {
    id: 3788,
    cliente: "JOSE ALBERTO RIVERA",
    identificacion: "V-9016572",
    monto: "7.946,00"
  },
  {
    id: 3789,
    cliente: "JESUS DANIEL SALCEDO",
    identificacion: "V-26482104",
    monto: "18.806,90"
  },
  {
    id: 3790,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "119.863,04"
  },
  {
    id: 3791,
    cliente: "ROBER UZCATEGUI",
    identificacion: "V-18350539",
    monto: "16.138,97"
  },
  {
    id: 3792,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "11.908,98"
  },
  {
    id: 3793,
    cliente: "RAMON TORRES",
    identificacion: "V-17266924",
    monto: "318.155,20"
  },
  {
    id: 3794,
    cliente: "PEDRO TORRES",
    identificacion: "V-9179745",
    monto: "5.413,18"
  },
  {
    id: 3795,
    cliente: "ANTONIO GIL",
    identificacion: "V-25832125",
    monto: "8.893,06"
  },
  {
    id: 3796,
    cliente: "ELY MORENO",
    identificacion: "V-18733843",
    monto: "22.379,59"
  },
  {
    id: 3797,
    cliente: "ANDRES DIAZ PACHECO",
    identificacion: "V-11618556",
    monto: "23.044,62"
  },
  {
    id: 3798,
    cliente: "ANA ISABEL USCATEGUI",
    identificacion: "V-26488011",
    monto: "139.458,36"
  },
  {
    id: 3799,
    cliente: "ANA ISABEL USCATEGUI",
    identificacion: "V-26488011",
    monto: "8.637,87"
  },
  {
    id: 3800,
    cliente: "ORMIDAS VERGARA",
    identificacion: "V-9177895",
    monto: "59.715,00"
  },
  {
    id: 3801,
    cliente: "JESUS RUZZA",
    identificacion: "V-24618837",
    monto: "27.750,00"
  },
  {
    id: 3802,
    cliente: "YOSMIRO PEREZ",
    identificacion: "V-1033437",
    monto: "177.861,30"
  },
  {
    id: 3803,
    cliente: "ALEXANDER MARQUEZ",
    identificacion: "V-11615441",
    monto: "156.916,37"
  },
  {
    id: 3804,
    cliente: "JESUS MONTILLLA",
    identificacion: "V-11321182",
    monto: "10.138,08"
  },
  {
    id: 3805,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "20.350,00"
  },
  {
    id: 3806,
    cliente: "ROBERTO RIVERA",
    identificacion: "V-20848640",
    monto: "44.488,56"
  },
  {
    id: 3807,
    cliente: "JUNIOR LINARES",
    identificacion: "V-19881568",
    monto: "30.249,23"
  },
  {
    id: 3808,
    cliente: "HENRRY PEÑA",
    identificacion: "V-13049384",
    monto: "9.304,08"
  },
  {
    id: 3809,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "70.436,78"
  },
  {
    id: 3810,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "30.044,43"
  },
  {
    id: 3811,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "16.204,61"
  },
  {
    id: 3812,
    cliente: "REINALDO RIVERO",
    identificacion: "V-14460226",
    monto: "23.570,34"
  },
  {
    id: 3813,
    cliente: "CARLOS GONZALEZ",
    identificacion: "V-14799791",
    monto: "25.017,20"
  },
  {
    id: 3814,
    cliente: "FERNANDO BRICEÑO",
    identificacion: "V-26962777",
    monto: "2.969,55"
  },
  {
    id: 3815,
    cliente: "FERNANDO BRICEÑO",
    identificacion: "V-26962777",
    monto: "2.969,55"
  },
  {
    id: 3816,
    cliente: "RAFAEL HOYOS",
    identificacion: "V-12549080",
    monto: "328.956,74"
  },
  {
    id: 3817,
    cliente: "RIHARD CIRA",
    identificacion: "V-14982595",
    monto: "72.168,63"
  },
  {
    id: 3818,
    cliente: "JOSE PAVON",
    identificacion: "V-10035985",
    monto: "3.954,24"
  },
  {
    id: 3819,
    cliente: "YOCER VOLCANES",
    identificacion: "V-17346082",
    monto: "4.652,04"
  },
  {
    id: 3820,
    cliente: "FRANCISCO ANDRADE",
    identificacion: "V-20858991",
    monto: "23.795,18"
  },
  {
    id: 3821,
    cliente: "AMALIA GODOY",
    identificacion: "V-30475307",
    monto: "3.101,36"
  },
  {
    id: 3822,
    cliente: "RONALD JOSE MALDONADO TERAN",
    identificacion: "V-18801215",
    monto: "6.936,00"
  },
  {
    id: 3823,
    cliente: "ALBERTO MEDIDA",
    identificacion: "V-9326013",
    monto: "53.307,69"
  },
  {
    id: 3824,
    cliente: "JOSE GODOY",
    identificacion: "V-11895716",
    monto: "136.437,21"
  },
  {
    id: 3825,
    cliente: "RAMON BRAVO",
    identificacion: "V-5349403",
    monto: "178.560,00"
  },
  {
    id: 3826,
    cliente: "JOSE ADOLFO ALBARRAN SUAREZ",
    identificacion: "V-26616114",
    monto: "5.441,94"
  },
  {
    id: 3827,
    cliente: "RAFAEL RAMON SANTIAGO",
    identificacion: "V-14929517",
    monto: "3.109,68"
  },
  {
    id: 3828,
    cliente: "YHONNY GODOY",
    identificacion: "V-4657858",
    monto: "12.061,64"
  },
  {
    id: 3829,
    cliente: "RICHARD VALERA",
    identificacion: "V-17037669",
    monto: "6.996,78"
  },
  {
    id: 3830,
    cliente: "RAMON MONTILLA",
    identificacion: "V-9174983",
    monto: "85.516,20"
  },
  {
    id: 3831,
    cliente: "AHIMAR VOLCANES",
    identificacion: "V-20414809",
    monto: "78.550,48"
  },
  {
    id: 3832,
    cliente: "MARYORI SANTIAGO",
    identificacion: "V-14929688",
    monto: "29.487,54"
  },
  {
    id: 3833,
    cliente: "YOLANDA ESPINOZA",
    identificacion: "V-9323132",
    monto: "64.207,13"
  },
  {
    id: 3834,
    cliente: "MARCO ANTONIO ESPINOSA",
    identificacion: "V-11894009",
    monto: "25.600,44"
  },
  {
    id: 3835,
    cliente: "GUILLERMO CAÑIZALES",
    identificacion: "V-5756079",
    monto: "17.884,25"
  },
  {
    id: 3836,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "9.359,40"
  },
  {
    id: 3837,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "60.446,13"
  },
  {
    id: 3838,
    cliente: "LAURINDO DACOSTA",
    identificacion: "E-81171343",
    monto: "77.410,04"
  },
  {
    id: 3839,
    cliente: "JOSE MARIA RAMIREZ",
    identificacion: "V-9326250",
    monto: "60.446,13"
  },
  {
    id: 3840,
    cliente: "ANA ELINE BRICEÑO",
    identificacion: "V-13122950",
    monto: "31.386,40"
  },
  {
    id: 3841,
    cliente: "JUNIOR ABREU",
    identificacion: "V-19103890",
    monto: "12.554,56"
  },
  {
    id: 3842,
    cliente: "JOSE GRATEROL",
    identificacion: "V-11320202",
    monto: "413.908,15"
  },
  {
    id: 3843,
    cliente: "JOSE ALBERTO LOPEZ",
    identificacion: "V-12047863",
    monto: "62.772,80"
  },
  {
    id: 3844,
    cliente: "ARMANDO ARAUJO",
    identificacion: "V-13461776",
    monto: "394.272,00"
  },
  {
    id: 3845,
    cliente: "ARMANDO ARAUJO",
    identificacion: "V-13461776",
    monto: "1.412,39"
  },
  {
    id: 3846,
    cliente: "RAMON DIAZ",
    identificacion: "V-11130526",
    monto: "10.004,40"
  },
  {
    id: 3847,
    cliente: "MIGUEL MORALES",
    identificacion: "V-23776985",
    monto: "35.466,63"
  },
  {
    id: 3848,
    cliente: "DAVID BOSCAN",
    identificacion: "V-28515641",
    monto: "8.215,39"
  },
  {
    id: 3849,
    cliente: "LUIS BRICEÑO",
    identificacion: "V-20789443",
    monto: "35.466,63"
  },
  {
    id: 3850,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "285.270,99"
  },
  {
    id: 3851,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "445.220,00"
  },
  {
    id: 3852,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "64.320,00"
  },
  {
    id: 3853,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "33.122,00"
  },
  {
    id: 3854,
    cliente: "RAFAEL VALERA",
    identificacion: "V-10262558",
    monto: "30.405,57"
  },
  {
    id: 3855,
    cliente: "DIONEL MORENO",
    identificacion: "V-26482368",
    monto: "14.955,62"
  },
  {
    id: 3856,
    cliente: "NELSON ORTEGANO",
    identificacion: "V-12458444",
    monto: "7.061,94"
  },
  {
    id: 3857,
    cliente: "ENDERSON CASTELLANOS",
    identificacion: "V-24853770",
    monto: "24.000,00"
  },
  {
    id: 3858,
    cliente: "RICARDO GONZALEZ",
    identificacion: "V-20429970",
    monto: "45.792,00"
  },
  {
    id: 3859,
    cliente: "SILVIA MALDONADO",
    identificacion: "V-11317972",
    monto: "4.519,64"
  },
  {
    id: 3860,
    cliente: "ASUNCION ANGULO",
    identificacion: "V-4921240",
    monto: "13.001,82"
  },
  {
    id: 3861,
    cliente: "LUIS JOSUE ARAUJO",
    identificacion: "V-28002105",
    monto: "25.109,12"
  },
  {
    id: 3862,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "45.792,00"
  },
  {
    id: 3863,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "241.124,33"
  },
  {
    id: 3864,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "26.400,00"
  },
  {
    id: 3865,
    cliente: "NOLBERTO MOGOLLON COTE",
    identificacion: "V-23234232",
    monto: "108.141,80"
  },
  {
    id: 3866,
    cliente: "JOSE SANCHEZ",
    identificacion: "V-12798601",
    monto: "2.353,98"
  },
  {
    id: 3867,
    cliente: "JOSE GREGORIO RONDON",
    identificacion: "V-12045879",
    monto: "20.031,26"
  },
  {
    id: 3868,
    cliente: "JAIRO AGUILAR",
    identificacion: "V-13926432",
    monto: "5.850,00"
  },
  {
    id: 3869,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "18.125,64"
  },
  {
    id: 3870,
    cliente: "JUAN BALLADARES",
    identificacion: "V-14557412",
    monto: "7.061,94"
  },
  {
    id: 3871,
    cliente: "ROSANA BENITEZ",
    identificacion: "V-9397572",
    monto: "90.887,16"
  },
  {
    id: 3872,
    cliente: "GUSTAVO MNEDEZ",
    identificacion: "V-10318259",
    monto: "6.277,28"
  },
  {
    id: 3873,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "63.110,20"
  },
  {
    id: 3874,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "7.846,60"
  },
  {
    id: 3875,
    cliente: "JOSE HUMBERTO URBINA",
    identificacion: "V-26235632",
    monto: "11.780,52"
  },
  {
    id: 3876,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "77.523,10"
  },
  {
    id: 3877,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "34.838,88"
  },
  {
    id: 3878,
    cliente: "RAMON ANTONIO CEGARRA PERDOMO",
    identificacion: "V-9313546",
    monto: "1.176,99"
  },
  {
    id: 3879,
    cliente: "NORMA TORREALBA",
    identificacion: "V-11397361",
    monto: "6.277,28"
  },
  {
    id: 3880,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "22.989,22"
  },
  {
    id: 3881,
    cliente: "ARTURO MONTILLA",
    identificacion: "V-25454240",
    monto: "10.985,24"
  },
  {
    id: 3882,
    cliente: "AMALIA GODOY",
    identificacion: "V-30475307",
    monto: "6.857,92"
  },
  {
    id: 3883,
    cliente: "LUZ MONTILLA",
    identificacion: "V-10396756",
    monto: "14.241,58"
  },
  {
    id: 3884,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "225.982,20"
  },
  {
    id: 3885,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "193.774,32"
  },
  {
    id: 3886,
    cliente: "SAMUEL ARAUJO",
    identificacion: "V-23777921",
    monto: "119.995,63"
  },
  {
    id: 3887,
    cliente: "JOSE ARAUJO",
    identificacion: "V-14310769",
    monto: "35.807,08"
  },
  {
    id: 3888,
    cliente: "MAYERLIN RIVERA",
    identificacion: "V-17604282",
    monto: "116.881,22"
  },
  {
    id: 3889,
    cliente: "DARWIN DUQUE",
    identificacion: "V-15175794",
    monto: "7.238,00"
  },
  {
    id: 3890,
    cliente: "DARWIN DUQUE",
    identificacion: "V-15175794",
    monto: "20.961,37"
  },
  {
    id: 3891,
    cliente: "YORSUANY CAMPOS",
    identificacion: "V-27565855",
    monto: "11.580,00"
  },
  {
    id: 3892,
    cliente: "JOAQUIN PERDOMO",
    identificacion: "V-21209273",
    monto: "166.083,28"
  },
  {
    id: 3893,
    cliente: "EUGENIO BRAVO",
    identificacion: "V-11614710",
    monto: "45.644,50"
  },
  {
    id: 3894,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "22.996,19"
  },
  {
    id: 3895,
    cliente: "FRANCISCO ANDRADE",
    identificacion: "V-20858991",
    monto: "24.093,80"
  },
  {
    id: 3896,
    cliente: "GABRIEL LINARES",
    identificacion: "V-30189843",
    monto: "1.420,00"
  },
  {
    id: 3897,
    cliente: "LEMUS PINEDA",
    identificacion: "V-5757003",
    monto: "787,52"
  },
  {
    id: 3898,
    cliente: "LUZMARINA RIVAS",
    identificacion: "V-13261933",
    monto: "25.933,03"
  },
  {
    id: 3899,
    cliente: "LISBETH ARAUJO",
    identificacion: "V-15293121",
    monto: "21.534,20"
  },
  {
    id: 3900,
    cliente: "AVELINO ANGEL",
    identificacion: "V-13117201",
    monto: "40.470,65"
  },
  {
    id: 3901,
    cliente: "ALFREDO GONZALEZ",
    identificacion: "V-21365449",
    monto: "112.426,52"
  },
  {
    id: 3902,
    cliente: "JUAN RIVAS",
    identificacion: "V-10316787",
    monto: "2.356,91"
  },
  {
    id: 3903,
    cliente: "SAUL NAVA",
    identificacion: "V-9169167",
    monto: "8.316,21"
  },
  {
    id: 3904,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "56.693,00"
  },
  {
    id: 3905,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "123.500,00"
  },
  {
    id: 3906,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "28.350,72"
  },
  {
    id: 3907,
    cliente: "RAFAEL HOYOS",
    identificacion: "V-12549080",
    monto: "197.165,24"
  },
  {
    id: 3908,
    cliente: "SILVIA MALDONADO",
    identificacion: "V-11317972",
    monto: "14.587,40"
  },
  {
    id: 3909,
    cliente: "JEIKER GONZALEZ",
    identificacion: "V-26324120",
    monto: "9.450,24"
  },
  {
    id: 3910,
    cliente: "JOSE FRANCO",
    identificacion: "V-9317318",
    monto: "7.121,88"
  },
  {
    id: 3911,
    cliente: "ISAURA CARRIZO",
    identificacion: "V-17266722",
    monto: "12.312,82"
  },
  {
    id: 3912,
    cliente: "ISAURA CARRIZO",
    identificacion: "V-17266722",
    monto: "12.312,82"
  },
  {
    id: 3913,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "84.829,46"
  },
  {
    id: 3914,
    cliente: "PEDRO BAPTISTA",
    identificacion: "V-18377080",
    monto: "91.001,80"
  },
  {
    id: 3915,
    cliente: "VICTOR ABREU",
    identificacion: "V-20038381",
    monto: "16.500,00"
  },
  {
    id: 3916,
    cliente: "RAFAEL ESPINOZA",
    identificacion: "V-20789481",
    monto: "36.582,72"
  },
  {
    id: 3917,
    cliente: "LEONEL VITORA",
    identificacion: "V-22892338",
    monto: "33.915,98"
  },
  {
    id: 3918,
    cliente: "PEDRO BAPTISTA",
    identificacion: "V-18377080",
    monto: "63.305,60"
  },
  {
    id: 3919,
    cliente: "CARLOS TERAN",
    identificacion: "V-18457036",
    monto: "46.292,22"
  },
  {
    id: 3920,
    cliente: "LEONEL VITORA",
    identificacion: "V-22892338",
    monto: "4.747,92"
  },
  {
    id: 3921,
    cliente: "LEONEL VITORA",
    identificacion: "V-22892338",
    monto: "791,32"
  },
  {
    id: 3922,
    cliente: "LEONEL VITORA",
    identificacion: "V-22892338",
    monto: "1.186,98"
  },
  {
    id: 3923,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "9.800,00"
  },
  {
    id: 3924,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "43.418,41"
  },
  {
    id: 3925,
    cliente: "ERNEIDIN GOMEZ",
    identificacion: "V-30236439",
    monto: "16.835,90"
  },
  {
    id: 3926,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "61.668,68"
  },
  {
    id: 3927,
    cliente: "YAJAIRA BARRIOS",
    identificacion: "V-13207226",
    monto: "106.622,11"
  },
  {
    id: 3928,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "12.313,00"
  },
  {
    id: 3929,
    cliente: "LEONEL GONZALEZ",
    identificacion: "V-18458616",
    monto: "60.392,50"
  },
  {
    id: 3930,
    cliente: "GERARDO VASALLO",
    identificacion: "V-5789634",
    monto: "6.056,30"
  },
  {
    id: 3931,
    cliente: "CONDOMINIO RESIDENCIAS CANAIMA",
    identificacion: "J-31755822-7",
    monto: "5.937,51"
  },
  {
    id: 3932,
    cliente: "LUIS PORTILLO",
    identificacion: "V-18036944",
    monto: "30.431,78"
  },
  {
    id: 3933,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "12.312,82"
  },
  {
    id: 3934,
    cliente: "CARLOS RICO",
    identificacion: "V-24136543",
    monto: "910,42"
  },
  {
    id: 3935,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "45.236,02"
  },
  {
    id: 3936,
    cliente: "LUIS BERROTERAN",
    identificacion: "V-6004829",
    monto: "158.077,99"
  },
  {
    id: 3937,
    cliente: "JOSE MONTILLA",
    identificacion: "V-11130817",
    monto: "7.718,00"
  },
  {
    id: 3938,
    cliente: "FREDDY RAMON RIVERA",
    identificacion: "V-13765112",
    monto: "4.769,94"
  },
  {
    id: 3939,
    cliente: "RAFAEL CAMPOS",
    identificacion: "V-18348007",
    monto: "5.803,43"
  },
  {
    id: 3940,
    cliente: "JOSE ARAUJO",
    identificacion: "V-19147639",
    monto: "15.359,21"
  },
  {
    id: 3941,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "1.987,50"
  },
  {
    id: 3942,
    cliente: "JOSE LUIS ORTIZ",
    identificacion: "V-7856908",
    monto: "11.963,00"
  },
  {
    id: 3943,
    cliente: "ALI GONZALEZ",
    identificacion: "V-14148401",
    monto: "31.799,60"
  },
  {
    id: 3944,
    cliente: "JOSE ISIDRO TORRES OLIVAR",
    identificacion: "V-5501421",
    monto: "1.589,98"
  },
  {
    id: 3945,
    cliente: "JESUS JEREZ",
    identificacion: "V-17267803",
    monto: "12.187,18"
  },
  {
    id: 3946,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "32.540,45"
  },
  {
    id: 3947,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "32.540,45"
  },
  {
    id: 3948,
    cliente: "EDILBERTO DUQUE",
    identificacion: "V-10741615",
    monto: "12.322,35"
  },
  {
    id: 3949,
    cliente: "DEIVI BAPTISTA",
    identificacion: "V-19899214",
    monto: "13.006,40"
  },
  {
    id: 3950,
    cliente: "ALEXANDER GONZALEZ",
    identificacion: "V-14781366",
    monto: "8.333,00"
  },
  {
    id: 3951,
    cliente: "ANTONI ESPINOZA",
    identificacion: "V-17393511",
    monto: "46.117,32"
  },
  {
    id: 3952,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "79.896,52"
  },
  {
    id: 3953,
    cliente: "RAFAEL PRADA",
    identificacion: "V-5503777",
    monto: "9.539,88"
  },
  {
    id: 3954,
    cliente: "GUSTAVO TERAN VILORA",
    identificacion: "V-13633820",
    monto: "13.514,83"
  },
  {
    id: 3955,
    cliente: "ROGER GONZALEZ",
    identificacion: "V-17830979",
    monto: "4.769,94"
  },
  {
    id: 3956,
    cliente: "JHONATAN QUINTERO",
    identificacion: "V-26036951",
    monto: "90.210,00"
  },
  {
    id: 3957,
    cliente: "RUBEN GONZALEZ",
    identificacion: "V-20134520",
    monto: "67.844,47"
  },
  {
    id: 3958,
    cliente: "RUBEN GONZALEZ",
    identificacion: "V-20134520",
    monto: "4.054,44"
  },
  {
    id: 3959,
    cliente: "JAIME GREGORIO NUÑEZ BASTIDAS",
    identificacion: "V-14928203",
    monto: "6.668,25"
  },
  {
    id: 3960,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "154.158,76"
  },
  {
    id: 3961,
    cliente: "LUIS ALFONSO MONTILLA",
    identificacion: "V-23837911",
    monto: "6.089,62"
  },
  {
    id: 3962,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "52.469,34"
  },
  {
    id: 3963,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "57.080,28"
  },
  {
    id: 3964,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "12.242,84"
  },
  {
    id: 3965,
    cliente: "DIONEL MORENO",
    identificacion: "V-26482368",
    monto: "19.652,14"
  },
  {
    id: 3966,
    cliente: "OLMER ARAUJO",
    identificacion: "V-25822853",
    monto: "41.449,27"
  },
  {
    id: 3967,
    cliente: "MARBELIS TERAN",
    identificacion: "V-19338104",
    monto: "28.205,00"
  },
  {
    id: 3968,
    cliente: "DUGLAS SANTOS",
    identificacion: "V-11128411",
    monto: "31.933,20"
  },
  {
    id: 3969,
    cliente: "NOELY PIZANI",
    identificacion: "V-21367527",
    monto: "22.536,90"
  },
  {
    id: 3970,
    cliente: "NOELY PIZANI",
    identificacion: "V-21367527",
    monto: "3.049,64"
  },
  {
    id: 3971,
    cliente: "FRAN PACHECO",
    identificacion: "V-20039395",
    monto: "30.168,90"
  },
  {
    id: 3972,
    cliente: "WILMER ALDANA",
    identificacion: "V-5507534",
    monto: "1.596,66"
  },
  {
    id: 3973,
    cliente: "YUGLIANA GONZALEZ",
    identificacion: "V-19101750",
    monto: "6.705,96"
  },
  {
    id: 3974,
    cliente: "FRAN PACHECO",
    identificacion: "V-20039395",
    monto: "3.209,28"
  },
  {
    id: 3975,
    cliente: "RAFAEL BRICEÑO",
    identificacion: "V-13050718",
    monto: "6.386,65"
  },
  {
    id: 3976,
    cliente: "NESTOR RIVAS",
    identificacion: "V-12189262",
    monto: "63.443,29"
  },
  {
    id: 3977,
    cliente: "YEFERSON GARCIA",
    identificacion: "V-19733915",
    monto: "1.860,12"
  },
  {
    id: 3978,
    cliente: "VICTORIA BRAVO",
    identificacion: "V-13096847",
    monto: "61.870,58"
  },
  {
    id: 3979,
    cliente: "ENDER ROSARIO",
    identificacion: "V-14799703",
    monto: "39.238,22"
  },
  {
    id: 3980,
    cliente: "WALTER BRICEÑO",
    identificacion: "V-17393263",
    monto: "22.808,29"
  },
  {
    id: 3981,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "10.415,34"
  },
  {
    id: 3982,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "50.522,41"
  },
  {
    id: 3983,
    cliente: "JESUS GONZALEZ",
    identificacion: "V-26094222",
    monto: "8.548,59"
  },
  {
    id: 3984,
    cliente: "LEDLYN BENITEZ",
    identificacion: "V-15294015",
    monto: "10.880,90"
  },
  {
    id: 3985,
    cliente: "JOHIMAR ALEXIS MONTILLA",
    identificacion: "V-21121880",
    monto: "80.084,62"
  },
  {
    id: 3986,
    cliente: "JOHIMAR ALEXIS MONTILLA",
    identificacion: "V-21121880",
    monto: "4.614,80"
  },
  {
    id: 3987,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "8.334,00"
  },
  {
    id: 3988,
    cliente: "MARCOS GIL",
    identificacion: "V-5783689",
    monto: "40.507,66"
  },
  {
    id: 3989,
    cliente: "EDGAR QUINTERO",
    identificacion: "V-26482351",
    monto: "25.237,16"
  },
  {
    id: 3990,
    cliente: "YOVANY EDUARDO LEON PEREZ",
    identificacion: "V-12840534",
    monto: "2.884,24"
  },
  {
    id: 3991,
    cliente: "ARMANDO JOSE AVENDAÑO",
    identificacion: "V-24565647",
    monto: "10.000,00"
  },
  {
    id: 3992,
    cliente: "JUAN MANUEL SALCEDO SUAREZ",
    identificacion: "V-15752259",
    monto: "48.553,10"
  },
  {
    id: 3993,
    cliente: "YOLEIDA BRICEÑO",
    identificacion: "V-15708002",
    monto: "16.824,78"
  },
  {
    id: 3994,
    cliente: "ORANGEL VILLEGAS",
    identificacion: "V-13925159",
    monto: "2.100,00"
  },
  {
    id: 3995,
    cliente: "DUGLAS VIELMA",
    identificacion: "V-11324307",
    monto: "13.034,04"
  },
  {
    id: 3996,
    cliente: "RAUL ARAQUE",
    identificacion: "V-13764876",
    monto: "4.828,86"
  },
  {
    id: 3997,
    cliente: "JOSE LUIS ORTIZ",
    identificacion: "V-7856908",
    monto: "13.279,36"
  },
  {
    id: 3998,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "85.372,57"
  },
  {
    id: 3999,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "965,76"
  },
  {
    id: 4000,
    cliente: "JOSE PAREDES",
    identificacion: "V-18378546",
    monto: "12.072,15"
  },
  {
    id: 4001,
    cliente: "MARCO VILORIA",
    identificacion: "V-13633191",
    monto: "3.219,24"
  },
  {
    id: 4002,
    cliente: "ENDERSON TORRES",
    identificacion: "V-21364573",
    monto: "51.330,78"
  },
  {
    id: 4003,
    cliente: "PABLO OLMOS",
    identificacion: "V-11798168",
    monto: "33.061,60"
  },
  {
    id: 4004,
    cliente: "HUGO RANGEL",
    identificacion: "V-10256491",
    monto: "463.784,66"
  },
  {
    id: 4005,
    cliente: "LUIS RIVAS",
    identificacion: "V-8722816",
    monto: "53.538,03"
  },
  {
    id: 4006,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "4.440,64"
  },
  {
    id: 4007,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "4.440,64"
  },
  {
    id: 4008,
    cliente: "ELIZABETH ARAUJO",
    identificacion: "V-12047582",
    monto: "47.579,49"
  },
  {
    id: 4009,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "6.862,81"
  },
  {
    id: 4010,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "52.015,00"
  },
  {
    id: 4011,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "261.342,25"
  },
  {
    id: 4012,
    cliente: "JOEL VIERA",
    identificacion: "V-27022056",
    monto: "80.739,00"
  },
  {
    id: 4013,
    cliente: "JOSE MORENO",
    identificacion: "V-9498929",
    monto: "144.312,88"
  },
  {
    id: 4014,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.284,99"
  },
  {
    id: 4015,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "52.657,17"
  },
  {
    id: 4016,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "137.139,60"
  },
  {
    id: 4017,
    cliente: "JOSE OJEDA",
    identificacion: "V-18984970",
    monto: "200.269,17"
  },
  {
    id: 4018,
    cliente: "JOSE ORTEGA",
    identificacion: "V-12796009",
    monto: "7.160,91"
  },
  {
    id: 4019,
    cliente: "PABLO OLMOS",
    identificacion: "V-11798168",
    monto: "14.313,68"
  },
  {
    id: 4020,
    cliente: "JONNY GRATEROL",
    identificacion: "V-17598153",
    monto: "6.702,73"
  },
  {
    id: 4021,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.520,76"
  },
  {
    id: 4022,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "389.276,94"
  },
  {
    id: 4023,
    cliente: "YOHAN LISCANO",
    identificacion: "V-29585969",
    monto: "6.314,62"
  },
  {
    id: 4024,
    cliente: "LISMARY FRANKLIN",
    identificacion: "V-33492351",
    monto: "5.940,30"
  },
  {
    id: 4025,
    cliente: "ONESIMO CARRIZO",
    identificacion: "V-11321274",
    monto: "29.970,04"
  },
  {
    id: 4026,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "54.878,64"
  },
  {
    id: 4027,
    cliente: "JAIRO ANGARITA",
    identificacion: "V-17832193",
    monto: "48.458,22"
  },
  {
    id: 4028,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "21.726,86"
  },
  {
    id: 4029,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "81.251,96"
  },
  {
    id: 4030,
    cliente: "JESUS PAZ",
    identificacion: "V-28445711",
    monto: "53.933,85"
  },
  {
    id: 4031,
    cliente: "JESUS PAZ",
    identificacion: "V-28445711",
    monto: "24.151,80"
  },
  {
    id: 4032,
    cliente: "YONATAN MORENO",
    identificacion: "V-30258775",
    monto: "15.026,65"
  },
  {
    id: 4033,
    cliente: "YONATAN MORENO",
    identificacion: "V-30258775",
    monto: "16.274,75"
  },
  {
    id: 4034,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "180.645,76"
  },
  {
    id: 4035,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "83.357,51"
  },
  {
    id: 4036,
    cliente: "JOSE OLIVAR",
    identificacion: "V-14310691",
    monto: "270.812,68"
  },
  {
    id: 4037,
    cliente: "CARLOS RAMIREZ",
    identificacion: "V-16015535",
    monto: "35.812,71"
  },
  {
    id: 4038,
    cliente: "CARLOS RAMIREZ",
    identificacion: "V-16015535",
    monto: "12.690,00"
  },
  {
    id: 4039,
    cliente: "ERIMAR GONZALEZ",
    identificacion: "V-9173021",
    monto: "75.894,91"
  },
  {
    id: 4040,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "24.412,20"
  },
  {
    id: 4041,
    cliente: "DANIEL RIVAS",
    identificacion: "V-28322764",
    monto: "24.233,13"
  },
  {
    id: 4042,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "6.916,79"
  },
  {
    id: 4043,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "6.233,24"
  },
  {
    id: 4044,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "8.951,14"
  },
  {
    id: 4045,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "4.556,94"
  },
  {
    id: 4046,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "4.882,44"
  },
  {
    id: 4047,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "21.157,24"
  },
  {
    id: 4048,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "23.800,00"
  },
  {
    id: 4049,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "159.045,49"
  },
  {
    id: 4050,
    cliente: "GONZALO GONZALEZ",
    identificacion: "V-15293120",
    monto: "331.485,12"
  },
  {
    id: 4051,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "64.230,00"
  },
  {
    id: 4052,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "27.272,00"
  },
  {
    id: 4053,
    cliente: "JAQUELINE MACIAS",
    identificacion: "V-15953187",
    monto: "21.770,04"
  },
  {
    id: 4054,
    cliente: "VICTOR VASQUEZ",
    identificacion: "V-18350659",
    monto: "10.358,91"
  },
  {
    id: 4055,
    cliente: "GONZALO GONZALEZ",
    identificacion: "V-15293120",
    monto: "16.293,80"
  },
  {
    id: 4056,
    cliente: "NESTOR RIVAS",
    identificacion: "V-12189262",
    monto: "21.181,94"
  },
  {
    id: 4057,
    cliente: "SALVADOR UZCATEGUI",
    identificacion: "V-11898640",
    monto: "111.780,38"
  },
  {
    id: 4058,
    cliente: "SALVADOR UZCATEGUI",
    identificacion: "V-11898640",
    monto: "17.841,71"
  },
  {
    id: 4059,
    cliente: "JUAN ANTONELO",
    identificacion: "V-12906459",
    monto: "19.528,12"
  },
  {
    id: 4060,
    cliente: "ROBERSON MATHEUS",
    identificacion: "V-17266715",
    monto: "3.258,76"
  },
  {
    id: 4061,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "22.725,00"
  },
  {
    id: 4062,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "6.924,87"
  },
  {
    id: 4063,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "93.656,78"
  },
  {
    id: 4064,
    cliente: "JOSE GERGORIO BARRIOS",
    identificacion: "V-13206190",
    monto: "104.305,21"
  },
  {
    id: 4065,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "106.834,67"
  },
  {
    id: 4066,
    cliente: "GERARDO VASALLO",
    identificacion: "V-5789634",
    monto: "18.860,08"
  },
  {
    id: 4067,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "586.699,54"
  },
  {
    id: 4068,
    cliente: "JESUS MARIA MESA",
    identificacion: "V-9499692",
    monto: "61.286,07"
  },
  {
    id: 4069,
    cliente: "MANUEL ANGEL BRAVO",
    identificacion: "V-5503313",
    monto: "820,10"
  },
  {
    id: 4070,
    cliente: "EDGAR RIVERA",
    identificacion: "V-19812270",
    monto: "64.607,48"
  },
  {
    id: 4071,
    cliente: "EDGAR RIVERA",
    identificacion: "V-19812270",
    monto: "8.217,40"
  },
  {
    id: 4072,
    cliente: "GUEDES ANDERSON",
    identificacion: "V-25767007",
    monto: "6.068,74"
  },
  {
    id: 4073,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.927,24"
  },
  {
    id: 4074,
    cliente: "MANUEL VALERA",
    identificacion: "V-16276202",
    monto: "9.021,10"
  },
  {
    id: 4075,
    cliente: "FRANKLIN LINARES",
    identificacion: "V-20656699",
    monto: "103.332,60"
  },
  {
    id: 4076,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.927,24"
  },
  {
    id: 4077,
    cliente: "LEIVER HOYOS",
    identificacion: "V-32084364",
    monto: "149.631,00"
  },
  {
    id: 4078,
    cliente: "JOSE CELESTINO MORENO",
    identificacion: "V-26482369",
    monto: "47.773,00"
  },
  {
    id: 4079,
    cliente: "CARLOS ARAUJO",
    identificacion: "V-16465544",
    monto: "41.005,00"
  },
  {
    id: 4080,
    cliente: "JOSE CELESTINO MORENO",
    identificacion: "V-26482369",
    monto: "54.577,01"
  },
  {
    id: 4081,
    cliente: "DIONEL MORENO",
    identificacion: "V-26482368",
    monto: "9.596,00"
  },
  {
    id: 4082,
    cliente: "JOSE CELESTINO MORENO",
    identificacion: "V-26482369",
    monto: "22.142,70"
  },
  {
    id: 4083,
    cliente: "LADIA ROSA BRICEÑO ABREU",
    identificacion: "V-9172750",
    monto: "244.266,80"
  },
  {
    id: 4084,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "126.834,50"
  },
  {
    id: 4085,
    cliente: "ROBERTO GARCIA",
    identificacion: "V-19576223",
    monto: "26.152,99"
  },
  {
    id: 4086,
    cliente: "WILMER LINARES",
    identificacion: "V-20430334",
    monto: "34.148,96"
  },
  {
    id: 4087,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "24.570,20"
  },
  {
    id: 4088,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "12.629,54"
  },
  {
    id: 4089,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "18.042,20"
  },
  {
    id: 4090,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "7.380,90"
  },
  {
    id: 4091,
    cliente: "DUGLAS MONTILLA",
    identificacion: "V-12043912",
    monto: "1.655,48"
  },
  {
    id: 4092,
    cliente: "DIOMER RODRIGUEZ",
    identificacion: "V-13049720",
    monto: "48.422,79"
  },
  {
    id: 4093,
    cliente: "YURIBEL RIVERA",
    identificacion: "V-20354758",
    monto: "15.859,50"
  },
  {
    id: 4094,
    cliente: "HUGO RANGEL",
    identificacion: "V-10256491",
    monto: "302.682,90"
  },
  {
    id: 4095,
    cliente: "AGROPECUARIA LOS TOCAYOS, C.A.",
    identificacion: "J-50034165-2",
    monto: "63.955,00"
  },
  {
    id: 4096,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "19.865,70"
  },
  {
    id: 4097,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "6.348,77"
  },
  {
    id: 4098,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "18.314,78"
  },
  {
    id: 4099,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "54.394,92"
  },
  {
    id: 4100,
    cliente: "LEDLYN BENITEZ",
    identificacion: "V-15294015",
    monto: "23.684,34"
  },
  {
    id: 4101,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "1.956,35"
  },
  {
    id: 4102,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "33.299,60"
  },
  {
    id: 4103,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "29.112,18"
  },
  {
    id: 4104,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "73.675,37"
  },
  {
    id: 4105,
    cliente: "LEIVER HOYOS",
    identificacion: "V-32084364",
    monto: "73.609,20"
  },
  {
    id: 4106,
    cliente: "CARLOS GONZALEZ",
    identificacion: "V-14799791",
    monto: "5.053,26"
  },
  {
    id: 4107,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "197.186,63"
  },
  {
    id: 4108,
    cliente: "GONZALO GONZALEZ",
    identificacion: "V-15293120",
    monto: "156.651,06"
  },
  {
    id: 4109,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "7.748,33"
  },
  {
    id: 4110,
    cliente: "MAYERLIN RIVERA",
    identificacion: "V-17604282",
    monto: "41.798,88"
  },
  {
    id: 4111,
    cliente: "AMALIA GODOY",
    identificacion: "V-30475307",
    monto: "3.705,72"
  },
  {
    id: 4112,
    cliente: "DEIVID CAMACHO",
    identificacion: "V-23593189",
    monto: "2.947,74"
  },
  {
    id: 4113,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "21.897,46"
  },
  {
    id: 4114,
    cliente: "HECTOR JOSE ROBLE",
    identificacion: "V-15709441",
    monto: "12.329,87"
  },
  {
    id: 4115,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "111.803,37"
  },
  {
    id: 4116,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "9.180,09"
  },
  {
    id: 4117,
    cliente: "ELY MORENO",
    identificacion: "V-18733843",
    monto: "26.397,19"
  },
  {
    id: 4118,
    cliente: "JESUS PAREDES",
    identificacion: "V-5102421",
    monto: "24.373,56"
  },
  {
    id: 4119,
    cliente: "NELSON DABOIN",
    identificacion: "V-12458226",
    monto: "35.836,04"
  },
  {
    id: 4120,
    cliente: "ISMAEL JOSUE ROJO MENDOZA",
    identificacion: "V-23837854",
    monto: "73.953,00"
  },
  {
    id: 4121,
    cliente: "LUIS ALEJANDRO BRICEÑO",
    identificacion: "V-26368404",
    monto: "12.086,00"
  },
  {
    id: 4122,
    cliente: "JOSE SANTIAGO",
    identificacion: "V-18456592",
    monto: "11.138,00"
  },
  {
    id: 4123,
    cliente: "SALVADOR DELGADO",
    identificacion: "V-9326608",
    monto: "19.766,67"
  },
  {
    id: 4124,
    cliente: "HUMBERTO BASTIDAZ",
    identificacion: "V-13765953",
    monto: "6.772,08"
  },
  {
    id: 4125,
    cliente: "FINCA SANTISIMA TRINIDAD, C.A",
    identificacion: "J-50076247-0",
    monto: "45.999,35"
  },
  {
    id: 4126,
    cliente: "VICENTE VILORIA",
    identificacion: "V-13522854",
    monto: "97.348,65"
  },
  {
    id: 4127,
    cliente: "HOMERO VALECILLOS",
    identificacion: "V-9497304",
    monto: "16.142,94"
  },
  {
    id: 4128,
    cliente: "AGROPECUARIA JUAN MARTIN, C.A.",
    identificacion: "J-40566957-8",
    monto: "5.925,57"
  },
  {
    id: 4129,
    cliente: "MARCOS HERNANDEZ",
    identificacion: "V-12939005",
    monto: "37.923,76"
  },
  {
    id: 4130,
    cliente: "DAVID MONTILLA",
    identificacion: "V-20135857",
    monto: "23.837,06"
  },
  {
    id: 4131,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "41.055,74"
  },
  {
    id: 4132,
    cliente: "ADRIAN BASTIDAS",
    identificacion: "V-27022035",
    monto: "19.241,17"
  },
  {
    id: 4133,
    cliente: "JOSE HOYOS",
    identificacion: "V-5500327",
    monto: "55.090,88"
  },
  {
    id: 4134,
    cliente: "JOHAN DURAN",
    identificacion: "V-15752322",
    monto: "73.932,84"
  },
  {
    id: 4135,
    cliente: "JOSE HOYOS",
    identificacion: "V-5500327",
    monto: "59.188,00"
  },
  {
    id: 4136,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "42.863,52"
  },
  {
    id: 4137,
    cliente: "JUNIOR LA CRUZ",
    identificacion: "V-15142597",
    monto: "13.559,04"
  },
  {
    id: 4138,
    cliente: "JOSE RAMON BOSCAN",
    identificacion: "V-10315297",
    monto: "63.948,53"
  },
  {
    id: 4139,
    cliente: "DIONISIO BORGE",
    identificacion: "V-18035014",
    monto: "41.126,26"
  },
  {
    id: 4140,
    cliente: "JOHIMAR ALEXIS MONTILLA",
    identificacion: "V-21121880",
    monto: "84.809,46"
  },
  {
    id: 4141,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "199.504,32"
  },
  {
    id: 4142,
    cliente: "WILMER DAVID BENITEZ",
    identificacion: "V-18733445",
    monto: "32.177,29"
  },
  {
    id: 4143,
    cliente: "EZEIO JESUS PAREDES",
    identificacion: "V-18097837",
    monto: "149.250,00"
  },
  {
    id: 4144,
    cliente: "JOSE MIGUEL BASTIDAS",
    identificacion: "V-14719069",
    monto: "44.545,47"
  },
  {
    id: 4145,
    cliente: "ENDER ROSARIO",
    identificacion: "V-14799703",
    monto: "78.797,08"
  },
  {
    id: 4146,
    cliente: "EDUARD MORENO",
    identificacion: "V-30867000",
    monto: "16.736,94"
  },
  {
    id: 4147,
    cliente: "YUSMERY GUEDEZ",
    identificacion: "V-17393524",
    monto: "7.636,96"
  },
  {
    id: 4148,
    cliente: "YUSMERY GUEDEZ",
    identificacion: "V-17393524",
    monto: "2.121,38"
  },
  {
    id: 4149,
    cliente: "NELSON AGUILAR",
    identificacion: "V-19285519",
    monto: "10.606,88"
  },
  {
    id: 4150,
    cliente: "ALI GONZALEZ",
    identificacion: "V-14148401",
    monto: "149.250,00"
  },
  {
    id: 4151,
    cliente: "JESUS ABREU",
    identificacion: "V-4059890",
    monto: "24.875,00"
  },
  {
    id: 4152,
    cliente: "ANTONIO DIAZ",
    identificacion: "V-11323928",
    monto: "84.290,31"
  },
  {
    id: 4153,
    cliente: "ALEXANDER MARQUEZ",
    identificacion: "V-14460544",
    monto: "5.091,30"
  },
  {
    id: 4154,
    cliente: "RAMON CAMACHO",
    identificacion: "V-9162939",
    monto: "22.121,70"
  },
  {
    id: 4155,
    cliente: "RICARDO JEREZ",
    identificacion: "V-13262858",
    monto: "44.584,45"
  },
  {
    id: 4156,
    cliente: "BERTA MENDOZA",
    identificacion: "V-14928514",
    monto: "7.636,95"
  },
  {
    id: 4157,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "29.699,25"
  },
  {
    id: 4158,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "4.887,65"
  },
  {
    id: 4159,
    cliente: "MAIKER GIL",
    identificacion: "V-20656952",
    monto: "12.694,31"
  },
  {
    id: 4160,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "16.546,72"
  },
  {
    id: 4161,
    cliente: "DEIVID BRICEÑO",
    identificacion: "V-23781590",
    monto: "8.960,69"
  },
  {
    id: 4162,
    cliente: "SAMUEL PORTILLO",
    identificacion: "V-10909720",
    monto: "6.796,48"
  },
  {
    id: 4163,
    cliente: "JUAN CAROS GODOY",
    identificacion: "V-16715885",
    monto: "135.918,00"
  },
  {
    id: 4164,
    cliente: "ANGELI VELASQUEZ",
    identificacion: "V-21365333",
    monto: "97.699,40"
  },
  {
    id: 4165,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "64.316,63"
  },
  {
    id: 4166,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "9.854,88"
  },
  {
    id: 4167,
    cliente: "LEIDY BARRETO",
    identificacion: "V-26311419",
    monto: "25.486,80"
  },
  {
    id: 4168,
    cliente: "RUBEN GRATEROL",
    identificacion: "V-6669397",
    monto: "27.361,00"
  },
  {
    id: 4169,
    cliente: "EUGENIO PALOMARES",
    identificacion: "V-17605615",
    monto: "67.200,30"
  },
  {
    id: 4170,
    cliente: "ALEXIS REMERO",
    identificacion: "V-12498491",
    monto: "50.565,81"
  },
  {
    id: 4171,
    cliente: "JOSE GERGORIO BARRIOS",
    identificacion: "V-13206190",
    monto: "152.359,40"
  },
  {
    id: 4172,
    cliente: "KLEIVER ZUÑIGA",
    identificacion: "V-24618810",
    monto: "61.168,32"
  },
  {
    id: 4173,
    cliente: "CARLOS RICO",
    identificacion: "V-19102659",
    monto: "26.402,52"
  },
  {
    id: 4174,
    cliente: "RICARDO GONZALEZ",
    identificacion: "V-20429970",
    monto: "16.991,20"
  },
  {
    id: 4175,
    cliente: "RAYMOND PEÑA",
    identificacion: "V-21366187",
    monto: "3.398,24"
  },
  {
    id: 4176,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.769,94"
  },
  {
    id: 4177,
    cliente: "YORSUANY CAMPOS",
    identificacion: "V-27565855",
    monto: "20.474,40"
  },
  {
    id: 4178,
    cliente: "ALEXIS MARQUEZ",
    identificacion: "V-14148295",
    monto: "98.904,00"
  },
  {
    id: 4179,
    cliente: "ALIRIO COLMENARES",
    identificacion: "V-16881021",
    monto: "77.581,82"
  },
  {
    id: 4180,
    cliente: "GERARDO VASALLO",
    identificacion: "V-5789634",
    monto: "4.111,88"
  },
  {
    id: 4181,
    cliente: "YURAIMA BRICEÑO",
    identificacion: "V-19669637",
    monto: "76.460,40"
  },
  {
    id: 4182,
    cliente: "WILFREDO DABOIN",
    identificacion: "V-14928334",
    monto: "8.546,79"
  },
  {
    id: 4183,
    cliente: "JESUS ALBERTO RONDON",
    identificacion: "V-13049587",
    monto: "8.547,00"
  },
  {
    id: 4184,
    cliente: "ALEXANDER VERGARA",
    identificacion: "V-25485622",
    monto: "13.421,00"
  },
  {
    id: 4185,
    cliente: "LUIS MORENO",
    identificacion: "V-19287704",
    monto: "1.704,84"
  },
  {
    id: 4186,
    cliente: "RONY HERNANDEZ",
    identificacion: "V-13741063",
    monto: "153.833,23"
  },
  {
    id: 4187,
    cliente: "ANDREA PIMENTEL",
    identificacion: "V-20767969",
    monto: "26.851,25"
  },
  {
    id: 4188,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "25.299,83"
  },
  {
    id: 4189,
    cliente: "CRISTIAN MARQUEZ",
    identificacion: "V-23776654",
    monto: "79.275,06"
  },
  {
    id: 4190,
    cliente: "KEIBER PACHECO",
    identificacion: "V-23837822",
    monto: "84.602,68"
  },
  {
    id: 4191,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.802,83"
  },
  {
    id: 4192,
    cliente: "PEDRO DUQUE",
    identificacion: "V-12499052",
    monto: "134.858,60"
  },
  {
    id: 4193,
    cliente: "FRANCISCO VITORA",
    identificacion: "V-22892692",
    monto: "1.024.320,00"
  },
  {
    id: 4194,
    cliente: "GERARDO OSUNA",
    identificacion: "V-15825228",
    monto: "114.360,68"
  },
  {
    id: 4195,
    cliente: "DANYER PEREZ",
    identificacion: "V-10036249",
    monto: "30.939,38"
  },
  {
    id: 4196,
    cliente: "JOSE CASTELLANOS",
    identificacion: "V-19148188",
    monto: "9.217,80"
  },
  {
    id: 4197,
    cliente: "ISAAC PIRELA",
    identificacion: "V-4666225",
    monto: "9.985,95"
  },
  {
    id: 4198,
    cliente: "CARLOS ORELLANA",
    identificacion: "V-10912977",
    monto: "134.127,53"
  },
  {
    id: 4199,
    cliente: "GERARDO MONTILLA",
    identificacion: "V-16015374",
    monto: "16.873,69"
  },
  {
    id: 4200,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "44.382,00"
  },
  {
    id: 4201,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "10.668,75"
  },
  {
    id: 4202,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "5.121,00"
  },
  {
    id: 4203,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "50.720,74"
  },
  {
    id: 4204,
    cliente: "MANUEL RAMOS",
    identificacion: "V-17987135",
    monto: "844.900,00"
  },
  {
    id: 4205,
    cliente: "MAIKEL BRICEÑO",
    identificacion: "V-27070703",
    monto: "8.117,37"
  },
  {
    id: 4206,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "6.835,68"
  },
  {
    id: 4207,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "16.506,68"
  },
  {
    id: 4208,
    cliente: "ANDRES BUITRIAGO",
    identificacion: "V-91459246",
    monto: "313.217,44"
  },
  {
    id: 4209,
    cliente: "EDGARDO PERALTA",
    identificacion: "V-17831986",
    monto: "86.948,37"
  },
  {
    id: 4210,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "12.987,79"
  },
  {
    id: 4211,
    cliente: "JOSE BENITO VILLARREAL",
    identificacion: "V-11894447",
    monto: "19,81"
  },
  {
    id: 4212,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "324,26"
  },
  {
    id: 4213,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "22,94"
  },
  {
    id: 4214,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "27,82"
  },
  {
    id: 4215,
    cliente: "DISTRIBUIDORA EL CAMPO C,A",
    identificacion: "J-31217841-8",
    monto: "1.606,76"
  },
  {
    id: 4216,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "32,46"
  },
  {
    id: 4217,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "10,00"
  },
  {
    id: 4218,
    cliente: "JOSE CARRILLO",
    identificacion: "V-12045450",
    monto: "8,30"
  },
  {
    id: 4219,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "226,48"
  },
  {
    id: 4220,
    cliente: "CARLOS MENDOZA",
    identificacion: "V-17696806",
    monto: "195,98"
  },
  {
    id: 4221,
    cliente: "YERGUIN GODOY",
    identificacion: "V-17865239",
    monto: "235,00"
  },
  {
    id: 4222,
    cliente: "IMPORTADORA CONTINENTAL A&A, C.A",
    identificacion: "J-29749838-9",
    monto: "776,40"
  },
  {
    id: 4223,
    cliente: "MULTIAGRO, C.A",
    identificacion: "J-40853491-6",
    monto: "4.800,00"
  },
  {
    id: 4224,
    cliente: "ALEXIS RODRIGUEZ",
    identificacion: "V-13404600",
    monto: "90,00"
  },
  {
    id: 4225,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "59,30"
  },
  {
    id: 4226,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "75,00"
  },
  {
    id: 4227,
    cliente: "AGROPECUARIA PALMARITO, C.A",
    identificacion: "J-09030633-1",
    monto: "528,00"
  },
  {
    id: 4228,
    cliente: "FRANCISCO ESPINOZA",
    identificacion: "V-30475083",
    monto: "80,00"
  },
  {
    id: 4229,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "39,20"
  },
  {
    id: 4230,
    cliente: "SUGEYLE BENCOMO",
    identificacion: "V-14718649",
    monto: "11,40"
  },
  {
    id: 4231,
    cliente: "YULMEDR LA C RUZ",
    identificacion: "V-19287306",
    monto: "10,00"
  },
  {
    id: 4232,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "155,05"
  },
  {
    id: 4233,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "678,00"
  },
  {
    id: 4234,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "130,50"
  },
  {
    id: 4235,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "99,53"
  },
  {
    id: 4236,
    cliente: "HENNRY MENDOZA",
    identificacion: "V-16535946",
    monto: "26,25"
  },
  {
    id: 4237,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "4,00"
  },
  {
    id: 4238,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "1.000,00"
  },
  {
    id: 4239,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "2.500,00"
  },
  {
    id: 4240,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "3.000,00"
  },
  {
    id: 4241,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "750,00"
  },
  {
    id: 4242,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.250,00"
  },
  {
    id: 4243,
    cliente: "DISTRIBUIDORA EL CAMPO C,A",
    identificacion: "J-31217841-8",
    monto: "1.750,00"
  },
  {
    id: 4244,
    cliente: "FERTI AGRO EL SEMILLERO, C.A",
    identificacion: "J-40631928-7",
    monto: "2.000,00"
  },
  {
    id: 4245,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "1.750,00"
  },
  {
    id: 4246,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "109,32"
  },
  {
    id: 4247,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "723,52"
  },
  {
    id: 4248,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "710,40"
  },
  {
    id: 4249,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "316,50"
  },
  {
    id: 4250,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "2.411,96"
  },
  {
    id: 4251,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "541,68"
  },
  {
    id: 4252,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "301,60"
  },
  {
    id: 4253,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "104,00"
  },
  {
    id: 4254,
    cliente: "FERRESEMILLAS ANAMAR, C.A",
    identificacion: "J-30719062-0",
    monto: "750,00"
  },
  {
    id: 4255,
    cliente: "CASAGRO, C.A",
    identificacion: "J-30794227-4",
    monto: "3.656,40"
  },
  {
    id: 4256,
    cliente: "AGROINSUMOS EL CAMPESINO, C.A",
    identificacion: "J-50242803-8",
    monto: "314,84"
  },
  {
    id: 4257,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "428,20"
  },
  {
    id: 4258,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "1.000,00"
  },
  {
    id: 4259,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "24,00"
  },
  {
    id: 4260,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "205,62"
  },
  {
    id: 4261,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "9,00"
  },
  {
    id: 4262,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "17,50"
  },
  {
    id: 4263,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "77,25"
  },
  {
    id: 4264,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "16,50"
  },
  {
    id: 4265,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "28,00"
  },
  {
    id: 4266,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "2.250,86"
  },
  {
    id: 4267,
    cliente: "AGROINSUMOS AGRECA`S, C.A",
    identificacion: "J-50174530-7",
    monto: "1.356,00"
  },
  {
    id: 4268,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "623,02"
  },
  {
    id: 4269,
    cliente: "SUMINISTRO SAUL & NAVARRO F. P",
    identificacion: "V-25004096",
    monto: "510,96"
  },
  {
    id: 4270,
    cliente: "SURTICAMPO SILVA, F.P",
    identificacion: "V-17565982",
    monto: "502,56"
  },
  {
    id: 4271,
    cliente: "FERREAGRO SAN JOSE DE OSWALDO JOSE CONTRERAS MOLINA, F.P",
    identificacion: "V-20394516",
    monto: "282,00"
  },
  {
    id: 4272,
    cliente: "AGROPECUARIA V.R DE MILFIDO VERA",
    identificacion: "V-15134206",
    monto: "520,00"
  },
  {
    id: 4273,
    cliente: "INVERSIONES BENYSPORT DE BENITO TELLES, F.P",
    identificacion: "V-09179881",
    monto: "449,00"
  },
  {
    id: 4274,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "260,00"
  },
  {
    id: 4275,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "38,00"
  },
  {
    id: 4276,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "5.070,00"
  },
  {
    id: 4277,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "150,00"
  },
  {
    id: 4278,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "50,00"
  },
  {
    id: 4279,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "154,00"
  },
  {
    id: 4280,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "270,00"
  },
  {
    id: 4281,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "135,63"
  },
  {
    id: 4282,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "107,94"
  },
  {
    id: 4283,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "448,34"
  },
  {
    id: 4284,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "780,00"
  },
  {
    id: 4285,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "82,40"
  },
  {
    id: 4286,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "48,57"
  },
  {
    id: 4287,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "70,91"
  },
  {
    id: 4288,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "58,48"
  },
  {
    id: 4289,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "2.500,00"
  },
  {
    id: 4290,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "625,00"
  },
  {
    id: 4291,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.000,00"
  },
  {
    id: 4292,
    cliente: "FERRESEMILLAS ANAMAR, C.A",
    identificacion: "J-30719062-0",
    monto: "1.000,00"
  },
  {
    id: 4293,
    cliente: "INVERSIONES Y MULTISERVICIOS ROMERCA",
    identificacion: "V-14053628",
    monto: "275,00"
  },
  {
    id: 4294,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "149,16"
  },
  {
    id: 4295,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "230,10"
  },
  {
    id: 4296,
    cliente: "SALVADOR OSUNA",
    identificacion: "V-18348883",
    monto: "116,16"
  },
  {
    id: 4297,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "109,53"
  },
  {
    id: 4298,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "105,00"
  },
  {
    id: 4299,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "196,32"
  },
  {
    id: 4300,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "102,80"
  },
  {
    id: 4301,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "90,00"
  },
  {
    id: 4302,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "36,00"
  },
  {
    id: 4303,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "27,00"
  },
  {
    id: 4304,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "51,15"
  },
  {
    id: 4305,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "2,58"
  },
  {
    id: 4306,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "314,47"
  },
  {
    id: 4307,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.620,00"
  },
  {
    id: 4308,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "290,00"
  },
  {
    id: 4309,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "435,00"
  },
  {
    id: 4310,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "79,79"
  },
  {
    id: 4311,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "422,00"
  },
  {
    id: 4312,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "134,81"
  },
  {
    id: 4313,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "4,14"
  },
  {
    id: 4314,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "1.250,00"
  },
  {
    id: 4315,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "40,33"
  },
  {
    id: 4316,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.331,52"
  },
  {
    id: 4317,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "159,29"
  },
  {
    id: 4318,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "340,13"
  },
  {
    id: 4319,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "454,94"
  },
  {
    id: 4320,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "144,20"
  },
  {
    id: 4321,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "37,14"
  },
  {
    id: 4322,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "94,96"
  },
  {
    id: 4323,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "15,65"
  },
  {
    id: 4324,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "190,00"
  },
  {
    id: 4325,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "93,74"
  },
  {
    id: 4326,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "117,00"
  },
  {
    id: 4327,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "194,55"
  },
  {
    id: 4328,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "254,00"
  },
  {
    id: 4329,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "2.500,00"
  },
  {
    id: 4330,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "18,84"
  },
  {
    id: 4331,
    cliente: "MARIA DOMITILA MARQUEZ",
    identificacion: "V-2687773",
    monto: "51,00"
  },
  {
    id: 4332,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "750,00"
  },
  {
    id: 4333,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "190,00"
  },
  {
    id: 4334,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "165,00"
  },
  {
    id: 4335,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "308,70"
  },
  {
    id: 4336,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "1.250,00"
  },
  {
    id: 4337,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "750,00"
  },
  {
    id: 4338,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.393,80"
  },
  {
    id: 4339,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "736,98"
  },
  {
    id: 4340,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "1.087,04"
  },
  {
    id: 4341,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "841,92"
  },
  {
    id: 4342,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "633,48"
  },
  {
    id: 4343,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "682,04"
  },
  {
    id: 4344,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "3.595,68"
  },
  {
    id: 4345,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "1.338,76"
  },
  {
    id: 4346,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "161,52"
  },
  {
    id: 4347,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "1.250,00"
  },
  {
    id: 4348,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "186,36"
  },
  {
    id: 4349,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "161,52"
  },
  {
    id: 4350,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "177,57"
  },
  {
    id: 4351,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "300,00"
  },
  {
    id: 4352,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "370,00"
  },
  {
    id: 4353,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "100,00"
  },
  {
    id: 4354,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "180,50"
  },
  {
    id: 4355,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "344,00"
  },
  {
    id: 4356,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "135,00"
  },
  {
    id: 4357,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "288,00"
  },
  {
    id: 4358,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "288,00"
  },
  {
    id: 4359,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "5,43"
  },
  {
    id: 4360,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "9,20"
  },
  {
    id: 4361,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "375,00"
  },
  {
    id: 4362,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "30,00"
  },
  {
    id: 4363,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "165,28"
  },
  {
    id: 4364,
    cliente: "CARINA HERNANDEZ",
    identificacion: "V-14438238",
    monto: "80,00"
  },
  {
    id: 4365,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "175,97"
  },
  {
    id: 4366,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "70,00"
  },
  {
    id: 4367,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "594,20"
  },
  {
    id: 4368,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "120,00"
  },
  {
    id: 4369,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "133,00"
  },
  {
    id: 4370,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "14,00"
  },
  {
    id: 4371,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "1.380,00"
  },
  {
    id: 4372,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "155,00"
  },
  {
    id: 4373,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "360,00"
  },
  {
    id: 4374,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.614,00"
  },
  {
    id: 4375,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "672,00"
  },
  {
    id: 4376,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "33,75"
  },
  {
    id: 4377,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "131,00"
  },
  {
    id: 4378,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "453,50"
  },
  {
    id: 4379,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "74,30"
  },
  {
    id: 4380,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "189,00"
  },
  {
    id: 4381,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "176,28"
  },
  {
    id: 4382,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "405,73"
  },
  {
    id: 4383,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "300,00"
  },
  {
    id: 4384,
    cliente: "JESUS SOLER",
    identificacion: "V-5769334",
    monto: "41,90"
  },
  {
    id: 4385,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "282,38"
  },
  {
    id: 4386,
    cliente: "ARTURO SEGOVIA",
    identificacion: "V-26412152",
    monto: "64,00"
  },
  {
    id: 4387,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "180,00"
  },
  {
    id: 4388,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "456,00"
  },
  {
    id: 4389,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "464,34"
  },
  {
    id: 4390,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "150,00"
  },
  {
    id: 4391,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "30,70"
  },
  {
    id: 4392,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "196,50"
  },
  {
    id: 4393,
    cliente: "JOSE ISIDRO TORRES OLIVAR",
    identificacion: "V-5501421",
    monto: "32,00"
  },
  {
    id: 4394,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "19,03"
  },
  {
    id: 4395,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "105,00"
  },
  {
    id: 4396,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "9,30"
  },
  {
    id: 4397,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "84,00"
  },
  {
    id: 4398,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "305,18"
  },
  {
    id: 4399,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "105,00"
  },
  {
    id: 4400,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "100,00"
  },
  {
    id: 4401,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "14,00"
  },
  {
    id: 4402,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "576,00"
  },
  {
    id: 4403,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "144,00"
  },
  {
    id: 4404,
    cliente: "ORLANDO ALDANA",
    identificacion: "V-11894736",
    monto: "160,00"
  },
  {
    id: 4405,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "88,43"
  },
  {
    id: 4406,
    cliente: "MULTIAGRO, C.A",
    identificacion: "J-40853491-6",
    monto: "315,00"
  },
  {
    id: 4407,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "220,68"
  },
  {
    id: 4408,
    cliente: "AGROINSUMOS EL CAMPESINO, C.A",
    identificacion: "J-50242803-8",
    monto: "296,00"
  },
  {
    id: 4409,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "5,00"
  },
  {
    id: 4410,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "431,50"
  },
  {
    id: 4411,
    cliente: "MARIA DOMITILA MARQUEZ",
    identificacion: "V-2687773",
    monto: "37,00"
  },
  {
    id: 4412,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "348,22"
  },
  {
    id: 4413,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "85,56"
  },
  {
    id: 4414,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "36,00"
  },
  {
    id: 4415,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "34,50"
  },
  {
    id: 4416,
    cliente: "COMERCIALIZADORA EL MOVIMIENTO F.P DE DANIEL SEGOVIA",
    identificacion: "V-15337820",
    monto: "507,84"
  },
  {
    id: 4417,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "89,63"
  },
  {
    id: 4418,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "731,88"
  },
  {
    id: 4419,
    cliente: "UNIDAD DE PRODUCCION SOCIAL AGRICOLA BUENOS AIRES",
    identificacion: "J-50025501-2",
    monto: "380,00"
  },
  {
    id: 4420,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "437,16"
  },
  {
    id: 4421,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "300,00"
  },
  {
    id: 4422,
    cliente: "MIRIAN AMESTI",
    identificacion: "V-7805690",
    monto: "30,00"
  },
  {
    id: 4423,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "356,00"
  },
  {
    id: 4424,
    cliente: "INVERSIONES BENYSPORT DE BENITO TELLES, F.P",
    identificacion: "V-09179881",
    monto: "166,00"
  },
  {
    id: 4425,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "289,80"
  },
  {
    id: 4426,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "357,00"
  },
  {
    id: 4427,
    cliente: "EMPRENDIMIENTO THAIS CARRIZO",
    identificacion: "J-50713413-0",
    monto: "55,00"
  },
  {
    id: 4428,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "107,00"
  },
  {
    id: 4429,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "431,68"
  },
  {
    id: 4430,
    cliente: "PALMERAS DEL SUR C.A",
    identificacion: "J-50246684-3",
    monto: "4.974,55"
  },
  {
    id: 4431,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "540,00"
  },
  {
    id: 4432,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "3.240,00"
  },
  {
    id: 4433,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "1.080,00"
  },
  {
    id: 4434,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "2.700,00"
  },
  {
    id: 4435,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "3.750,00"
  },
  {
    id: 4436,
    cliente: "REINALDO JONAS GONZALEZ CASTILLO",
    identificacion: "V-14004001",
    monto: "3.380,00"
  },
  {
    id: 4437,
    cliente: "PHARMAVETPHE SHOP DE AVILIO STANISLAO, F.P",
    identificacion: "V-01189800",
    monto: "908,00"
  },
  {
    id: 4438,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "2.800,00"
  },
  {
    id: 4439,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "840,00"
  },
  {
    id: 4440,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "280,00"
  },
  {
    id: 4441,
    cliente: "INVERSIONES BENYSPORT DE BENITO TELLES, F.P",
    identificacion: "V-09179881",
    monto: "560,00"
  },
  {
    id: 4442,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "1.890,00"
  },
  {
    id: 4443,
    cliente: "FERRESEMILLAS ANAMAR, C.A",
    identificacion: "J-30719062-0",
    monto: "1.080,00"
  },
  {
    id: 4444,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "1.080,00"
  },
  {
    id: 4445,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "2.700,00"
  },
  {
    id: 4446,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "192,00"
  },
  {
    id: 4447,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "2.160,00"
  },
  {
    id: 4448,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "810,00"
  },
  {
    id: 4449,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "2.430,00"
  },
  {
    id: 4450,
    cliente: "INVERSIONES FERREAGRO SABANA DE HEKMAT DE JESUS HAMADE LEON",
    identificacion: "V-9176564",
    monto: "1.350,00"
  },
  {
    id: 4451,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "53,75"
  },
  {
    id: 4452,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.350,00"
  },
  {
    id: 4453,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.350,00"
  },
  {
    id: 4454,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "201,20"
  },
  {
    id: 4455,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "940,00"
  },
  {
    id: 4456,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "338,34"
  },
  {
    id: 4457,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "180,00"
  },
  {
    id: 4458,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "177,22"
  },
  {
    id: 4459,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "2.245,00"
  },
  {
    id: 4460,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "773,52"
  },
  {
    id: 4461,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "12,50"
  },
  {
    id: 4462,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "549,56"
  },
  {
    id: 4463,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "147,91"
  },
  {
    id: 4464,
    cliente: "AGROPECUARIA E INVERSIONES RONFER 2013 DE EDGARDO JOSE RONDON FERNANDEZ, F.P",
    identificacion: "V-15032030",
    monto: "96,00"
  },
  {
    id: 4465,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "760,00"
  },
  {
    id: 4466,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "258,00"
  },
  {
    id: 4467,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "57,40"
  },
  {
    id: 4468,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "19.175,00"
  },
  {
    id: 4469,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "416,00"
  },
  {
    id: 4470,
    cliente: "GEOVANY LINARES",
    identificacion: "V-11950370",
    monto: "283,29"
  },
  {
    id: 4471,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "89,00"
  },
  {
    id: 4472,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "335,16"
  },
  {
    id: 4473,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "110,00"
  },
  {
    id: 4474,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "110,70"
  },
  {
    id: 4475,
    cliente: "ANTONIO MARTINEZ TERAN",
    identificacion: "V-4321487",
    monto: "95,00"
  },
  {
    id: 4476,
    cliente: "JOSE ISIDRO TORRES OLIVAR",
    identificacion: "V-5501421",
    monto: "5,00"
  },
  {
    id: 4477,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "1.370,59"
  },
  {
    id: 4478,
    cliente: "AGROPECUARIA E INVERSIONES RONFER 2013 DE EDGARDO JOSE RONDON FERNANDEZ, F.P",
    identificacion: "V-15032030",
    monto: "105,00"
  },
  {
    id: 4479,
    cliente: "AGROBIOTECNICA, C.A",
    identificacion: "J-40747608-4",
    monto: "116,00"
  },
  {
    id: 4480,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "598,66"
  },
  {
    id: 4481,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "721,51"
  },
  {
    id: 4482,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "416,00"
  },
  {
    id: 4483,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "100,00"
  },
  {
    id: 4484,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "72,00"
  },
  {
    id: 4485,
    cliente: "AGROINSUMOS EL CAMPESINO, C.A",
    identificacion: "J-50242803-8",
    monto: "210,00"
  },
  {
    id: 4486,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "75,00"
  },
  {
    id: 4487,
    cliente: "JOSE JARAMILLO",
    identificacion: "V-16882732",
    monto: "20,00"
  },
  {
    id: 4488,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "29,00"
  },
  {
    id: 4489,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "227,67"
  },
  {
    id: 4490,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "397,01"
  },
  {
    id: 4491,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "300,00"
  },
  {
    id: 4492,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "110,00"
  },
  {
    id: 4493,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "283,50"
  },
  {
    id: 4494,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "38,70"
  },
  {
    id: 4495,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "160,20"
  },
  {
    id: 4496,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "57,40"
  },
  {
    id: 4497,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "148,45"
  },
  {
    id: 4498,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "16,10"
  },
  {
    id: 4499,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "38,77"
  },
  {
    id: 4500,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "53,00"
  },
  {
    id: 4501,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "1.098,00"
  },
  {
    id: 4502,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "490,14"
  },
  {
    id: 4503,
    cliente: "GUSTAVO ALBERTO ANTUNEZ VAILATI",
    identificacion: "V-17093225",
    monto: "101,82"
  },
  {
    id: 4504,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "297,00"
  },
  {
    id: 4505,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "204,00"
  },
  {
    id: 4506,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "567,00"
  },
  {
    id: 4507,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "200,00"
  },
  {
    id: 4508,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "342,50"
  },
  {
    id: 4509,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "24,00"
  },
  {
    id: 4510,
    cliente: "FERREAGRICOLA LAS ROSAS, F.P DE YORMAN GUSTAVO BRICEÑO",
    identificacion: "V-08720768",
    monto: "250,00"
  },
  {
    id: 4511,
    cliente: "AGRO COMERCIAL EMILY DE PEDRO LUIS CARRILLO TORRES, F.P",
    identificacion: "V-11315660",
    monto: "1.620,00"
  },
  {
    id: 4512,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "1.620,00"
  },
  {
    id: 4513,
    cliente: "FERREAGRICOLA LAS ROSAS, F.P DE YORMAN GUSTAVO BRICEÑO",
    identificacion: "V-08720768",
    monto: "270,00"
  },
  {
    id: 4514,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "2.700,00"
  },
  {
    id: 4515,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "984,56"
  },
  {
    id: 4516,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.890,00"
  },
  {
    id: 4517,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "540,00"
  },
  {
    id: 4518,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "1.350,00"
  },
  {
    id: 4519,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "1.890,00"
  },
  {
    id: 4520,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "1.350,00"
  },
  {
    id: 4521,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "2.160,00"
  },
  {
    id: 4522,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "540,00"
  },
  {
    id: 4523,
    cliente: "AGROVETERINARIA VILORIA DE JOSE LUIS VILORIA, F.P",
    identificacion: "V-87217538",
    monto: "86,10"
  },
  {
    id: 4524,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "106,00"
  },
  {
    id: 4525,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "1.350,00"
  },
  {
    id: 4526,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "371,00"
  },
  {
    id: 4527,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "24,00"
  },
  {
    id: 4528,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "102,00"
  },
  {
    id: 4529,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "159,54"
  },
  {
    id: 4530,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "196,00"
  },
  {
    id: 4531,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "62,60"
  },
  {
    id: 4532,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "470,91"
  },
  {
    id: 4533,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "100,00"
  },
  {
    id: 4534,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "150,00"
  },
  {
    id: 4535,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "523,56"
  },
  {
    id: 4536,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "285,00"
  },
  {
    id: 4537,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "212,00"
  },
  {
    id: 4538,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "42,68"
  },
  {
    id: 4539,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "740,00"
  },
  {
    id: 4540,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "285,00"
  },
  {
    id: 4541,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "140,00"
  },
  {
    id: 4542,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "235,54"
  },
  {
    id: 4543,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "312,00"
  },
  {
    id: 4544,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "276,74"
  },
  {
    id: 4545,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "214,00"
  },
  {
    id: 4546,
    cliente: "COMERCIALIZADORA SAN ISIDRO BENDITO DE JOSE GODOY, F.P",
    identificacion: "V-24409248",
    monto: "683,00"
  },
  {
    id: 4547,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "1.620,00"
  },
  {
    id: 4548,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "2.700,00"
  },
  {
    id: 4549,
    cliente: "MARIA DOMITILA MARQUEZ",
    identificacion: "V-2687773",
    monto: "6,00"
  },
  {
    id: 4550,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "1.620,00"
  },
  {
    id: 4551,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "1.890,00"
  },
  {
    id: 4552,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "717,50"
  },
  {
    id: 4553,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "1.890,00"
  },
  {
    id: 4554,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "71,47"
  },
  {
    id: 4555,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.620,00"
  },
  {
    id: 4556,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "4.050,00"
  },
  {
    id: 4557,
    cliente: "DISTRIBUIDORA EL CAMPO C,A",
    identificacion: "J-31217841-8",
    monto: "1.080,00"
  },
  {
    id: 4558,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "376,04"
  },
  {
    id: 4559,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "211,98"
  },
  {
    id: 4560,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "30,34"
  },
  {
    id: 4561,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "178,01"
  },
  {
    id: 4562,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "95,85"
  },
  {
    id: 4563,
    cliente: "IMPORTADORA CONTINENTAL A&A, C.A",
    identificacion: "J-29749838-9",
    monto: "99,00"
  },
  {
    id: 4564,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "18,00"
  },
  {
    id: 4565,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "636,83"
  },
  {
    id: 4566,
    cliente: "DISTRIBUIDORA EL CAMPO C,A",
    identificacion: "J-31217841-8",
    monto: "2.487,96"
  },
  {
    id: 4567,
    cliente: "IMPORTADORA CONTINENTAL A&A, C.A",
    identificacion: "J-29749838-9",
    monto: "198,72"
  },
  {
    id: 4568,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "312,50"
  },
  {
    id: 4569,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "234,02"
  },
  {
    id: 4570,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "5,96"
  },
  {
    id: 4571,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "65,97"
  },
  {
    id: 4572,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "159,32"
  },
  {
    id: 4573,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "199,44"
  },
  {
    id: 4574,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "197,00"
  },
  {
    id: 4575,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "197,00"
  },
  {
    id: 4576,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "207,00"
  },
  {
    id: 4577,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "588,64"
  },
  {
    id: 4578,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "624,00"
  },
  {
    id: 4579,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "624,00"
  },
  {
    id: 4580,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "520,00"
  },
  {
    id: 4581,
    cliente: "RAFAEL JOSE HERNANDEZ ALEJO",
    identificacion: "V-14113974",
    monto: "29,00"
  },
  {
    id: 4582,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "24,10"
  },
  {
    id: 4583,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "199,16"
  },
  {
    id: 4584,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "2,63"
  },
  {
    id: 4585,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "40,40"
  },
  {
    id: 4586,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "32,22"
  },
  {
    id: 4587,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "247,50"
  },
  {
    id: 4588,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "342,80"
  },
  {
    id: 4589,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "28,59"
  },
  {
    id: 4590,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "42,68"
  },
  {
    id: 4591,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "187,18"
  },
  {
    id: 4592,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "47,20"
  },
  {
    id: 4593,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "10,35"
  },
  {
    id: 4594,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "245,11"
  },
  {
    id: 4595,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "118,40"
  },
  {
    id: 4596,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "220,00"
  },
  {
    id: 4597,
    cliente: "COMERCIALIZADORA JOHN SANCHEZ. C.A",
    identificacion: "J-50717116-7",
    monto: "26,00"
  },
  {
    id: 4598,
    cliente: "COMERCIALIZADORA JOHN SANCHEZ. C.A",
    identificacion: "J-50717116-7",
    monto: "12,00"
  },
  {
    id: 4599,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "2.859,50"
  },
  {
    id: 4600,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "80,00"
  },
  {
    id: 4601,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "165,21"
  },
  {
    id: 4602,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "18,53"
  },
  {
    id: 4603,
    cliente: "ORLANDO ALDANA",
    identificacion: "V-11894736",
    monto: "4,44"
  },
  {
    id: 4604,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "119,79"
  },
  {
    id: 4605,
    cliente: "INVERSIONES Y MULTISERVICIOS ROMERCA",
    identificacion: "V-14053628",
    monto: "275,00"
  },
  {
    id: 4606,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "337,21"
  },
  {
    id: 4607,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "82,19"
  },
  {
    id: 4608,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "620,95"
  },
  {
    id: 4609,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "32,22"
  },
  {
    id: 4610,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "240,00"
  },
  {
    id: 4611,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "50,00"
  },
  {
    id: 4612,
    cliente: "RAUL VASQUEZ",
    identificacion: "V-13050978",
    monto: "72,12"
  },
  {
    id: 4613,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "105,00"
  },
  {
    id: 4614,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "637,10"
  },
  {
    id: 4615,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "32,92"
  },
  {
    id: 4616,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "46,09"
  },
  {
    id: 4617,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "111,59"
  },
  {
    id: 4618,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "320,82"
  },
  {
    id: 4619,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "444,00"
  },
  {
    id: 4620,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "260,00"
  },
  {
    id: 4621,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "325,00"
  },
  {
    id: 4622,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "510,00"
  },
  {
    id: 4623,
    cliente: "LA HACIENDA PROVIDENCIA, C.A",
    identificacion: "J-50069354-0",
    monto: "1.625,00"
  },
  {
    id: 4624,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "3.133,62"
  },
  {
    id: 4625,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "0,00"
  },
  {
    id: 4626,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "1.300,00"
  },
  {
    id: 4627,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "325,00"
  },
  {
    id: 4628,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "18,22"
  },
  {
    id: 4629,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "2,63"
  },
  {
    id: 4630,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "38,21"
  },
  {
    id: 4631,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "604,50"
  },
  {
    id: 4632,
    cliente: "COMERCIALIZADORA JOHN SANCHEZ. C.A",
    identificacion: "J-50717116-7",
    monto: "102,00"
  },
  {
    id: 4633,
    cliente: "LA HACIENDA PROVIDENCIA, C.A",
    identificacion: "J-50069354-0",
    monto: "3.804,84"
  },
  {
    id: 4634,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "22,16"
  },
  {
    id: 4635,
    cliente: "JEYSSON JOSE TORRES",
    identificacion: "V-14800114",
    monto: "1,00"
  },
  {
    id: 4636,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "147,84"
  },
  {
    id: 4637,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "20,58"
  },
  {
    id: 4638,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "200,00"
  },
  {
    id: 4639,
    cliente: "LA HACIENDA PROVIDENCIA, C.A",
    identificacion: "J-50069354-0",
    monto: "1.600,00"
  },
  {
    id: 4640,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "307,72"
  },
  {
    id: 4641,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "241,46"
  },
  {
    id: 4642,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "320,03"
  },
  {
    id: 4643,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "119,00"
  },
  {
    id: 4644,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "271,27"
  },
  {
    id: 4645,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "169,26"
  },
  {
    id: 4646,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.332,92"
  },
  {
    id: 4647,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "5,50"
  },
  {
    id: 4648,
    cliente: "RAFAEL JOSE HERNANDEZ ALEJO",
    identificacion: "V-14113974",
    monto: "903,23"
  },
  {
    id: 4649,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "2.950,00"
  },
  {
    id: 4650,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "1.180,00"
  },
  {
    id: 4651,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "2.950,00"
  },
  {
    id: 4652,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "2.950,00"
  },
  {
    id: 4653,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "300,00"
  },
  {
    id: 4654,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "885,00"
  },
  {
    id: 4655,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "743,56"
  },
  {
    id: 4656,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "81,92"
  },
  {
    id: 4657,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "3.540,00"
  },
  {
    id: 4658,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "75,66"
  },
  {
    id: 4659,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "2.065,00"
  },
  {
    id: 4660,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "590,00"
  },
  {
    id: 4661,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "70,00"
  },
  {
    id: 4662,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "413,00"
  },
  {
    id: 4663,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "282,10"
  },
  {
    id: 4664,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "281,16"
  },
  {
    id: 4665,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "410,00"
  },
  {
    id: 4666,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "82,36"
  },
  {
    id: 4667,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "114,00"
  },
  {
    id: 4668,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "398,72"
  },
  {
    id: 4669,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "192,00"
  },
  {
    id: 4670,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "76,50"
  },
  {
    id: 4671,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "62,16"
  },
  {
    id: 4672,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "70,98"
  },
  {
    id: 4673,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "2.510,00"
  },
  {
    id: 4674,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "90,00"
  },
  {
    id: 4675,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "128,47"
  },
  {
    id: 4676,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "14,19"
  },
  {
    id: 4677,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "120,45"
  },
  {
    id: 4678,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "996,04"
  },
  {
    id: 4679,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "57,06"
  },
  {
    id: 4680,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "92,20"
  },
  {
    id: 4681,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "680,00"
  },
  {
    id: 4682,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.800,00"
  },
  {
    id: 4683,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "1.500,00"
  },
  {
    id: 4684,
    cliente: "AGRO COMERCIAL EMILY DE PEDRO LUIS CARRILLO TORRES, F.P",
    identificacion: "V-11315660",
    monto: "450,00"
  },
  {
    id: 4685,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "3.000,00"
  },
  {
    id: 4686,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "3.000,00"
  },
  {
    id: 4687,
    cliente: "CLAUDIO ALEJANDRO MANZANILLA ANDRADE",
    identificacion: "V-18097897",
    monto: "38,16"
  },
  {
    id: 4688,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "3.000,00"
  },
  {
    id: 4689,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "1.500,00"
  },
  {
    id: 4690,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "750,00"
  },
  {
    id: 4691,
    cliente: "REINALDO JONAS GONZALEZ CASTILLO",
    identificacion: "V-14004001",
    monto: "2.250,00"
  },
  {
    id: 4692,
    cliente: "AGRO COMERCIAL EMILY DE PEDRO LUIS CARRILLO TORRES, F.P",
    identificacion: "V-11315660",
    monto: "450,00"
  },
  {
    id: 4693,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "630,00"
  },
  {
    id: 4694,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "1.383,00"
  },
  {
    id: 4695,
    cliente: "SAMUEL PEREZ",
    identificacion: "V-19287378",
    monto: "26,76"
  },
  {
    id: 4696,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "191,06"
  },
  {
    id: 4697,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "21,72"
  },
  {
    id: 4698,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "119,05"
  },
  {
    id: 4699,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "97,20"
  },
  {
    id: 4700,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "115,75"
  },
  {
    id: 4701,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "62,46"
  },
  {
    id: 4702,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "40,00"
  },
  {
    id: 4703,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "69,95"
  },
  {
    id: 4704,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "125,91"
  },
  {
    id: 4705,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.842,40"
  },
  {
    id: 4706,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.884,82"
  },
  {
    id: 4707,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.087,20"
  },
  {
    id: 4708,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "248,49"
  },
  {
    id: 4709,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "126,00"
  },
  {
    id: 4710,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "54,85"
  },
  {
    id: 4711,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "273,08"
  },
  {
    id: 4712,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "480,00"
  },
  {
    id: 4713,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "1.330,00"
  },
  {
    id: 4714,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "572,01"
  },
  {
    id: 4715,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "9.375,10"
  },
  {
    id: 4716,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "1.029,50"
  },
  {
    id: 4717,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "1.334,10"
  },
  {
    id: 4718,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "2.265,20"
  },
  {
    id: 4719,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "331,54"
  },
  {
    id: 4720,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "391,50"
  },
  {
    id: 4721,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "12,68"
  },
  {
    id: 4722,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "45,00"
  },
  {
    id: 4723,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "58,49"
  },
  {
    id: 4724,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "348,13"
  },
  {
    id: 4725,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "225,04"
  },
  {
    id: 4726,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "63,78"
  },
  {
    id: 4727,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "146,02"
  },
  {
    id: 4728,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "674,65"
  },
  {
    id: 4729,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "352,20"
  },
  {
    id: 4730,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "441,63"
  },
  {
    id: 4731,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "56,53"
  },
  {
    id: 4732,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "1.480,00"
  },
  {
    id: 4733,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "100,00"
  },
  {
    id: 4734,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "1.041,06"
  },
  {
    id: 4735,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "45,00"
  },
  {
    id: 4736,
    cliente: "AGROPECUARIA KAMBUCA, C.A",
    identificacion: "J-00360834-3",
    monto: "14.221,50"
  },
  {
    id: 4737,
    cliente: "CARLOS ALBERTO SANTINI GONZALEZ",
    identificacion: "V-11320103",
    monto: "557,64"
  },
  {
    id: 4738,
    cliente: "CARLOS ALBERTO SANTINI GONZALEZ",
    identificacion: "V-11320103",
    monto: "175,50"
  },
  {
    id: 4739,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.100,00"
  },
  {
    id: 4740,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "750,00"
  },
  {
    id: 4741,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.100,00"
  },
  {
    id: 4742,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "1.500,00"
  },
  {
    id: 4743,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.087,20"
  },
  {
    id: 4744,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "2.200,00"
  },
  {
    id: 4745,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "1.320,00"
  },
  {
    id: 4746,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "2,87"
  },
  {
    id: 4747,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "17,53"
  },
  {
    id: 4748,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "175,00"
  },
  {
    id: 4749,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "480,00"
  },
  {
    id: 4750,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "406,86"
  },
  {
    id: 4751,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "8,00"
  },
  {
    id: 4752,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "14,50"
  },
  {
    id: 4753,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "1.240,00"
  },
  {
    id: 4754,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "160,00"
  },
  {
    id: 4755,
    cliente: "AGRO-OFERTA DE JOSE MANUEL MORENO, F.P",
    identificacion: "V-26046567",
    monto: "3.875,00"
  },
  {
    id: 4756,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "3.875,00"
  },
  {
    id: 4757,
    cliente: "JULIO CESAR PEREZ PACHECO",
    identificacion: "V-13127764",
    monto: "3.100,00"
  },
  {
    id: 4758,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "3,68"
  },
  {
    id: 4759,
    cliente: "FERREAGRO VALLE ANDINO",
    identificacion: "J-50618648-9",
    monto: "900,00"
  },
  {
    id: 4760,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "1.500,00"
  },
  {
    id: 4761,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "4.387,00"
  },
  {
    id: 4762,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "278,82"
  },
  {
    id: 4763,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "3.000,00"
  },
  {
    id: 4764,
    cliente: "AGROSIEMBRAS Y SEMILLAS, C.A",
    identificacion: "J-50564022-4",
    monto: "600,00"
  },
  {
    id: 4765,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "351,00"
  },
  {
    id: 4766,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "720,00"
  },
  {
    id: 4767,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "384,77"
  },
  {
    id: 4768,
    cliente: "ADJAM HAMADE",
    identificacion: "V-16883697",
    monto: "825,00"
  },
  {
    id: 4769,
    cliente: "MULTIAGRO, C.A",
    identificacion: "J-40853491-6",
    monto: "1.375,00"
  },
  {
    id: 4770,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "580,00"
  },
  {
    id: 4771,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "3.920,00"
  },
  {
    id: 4772,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-88719917",
    monto: "117,00"
  },
  {
    id: 4773,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "612,24"
  },
  {
    id: 4774,
    cliente: "LUIS SANTINI",
    identificacion: "V-24139033",
    monto: "144,56"
  },
  {
    id: 4775,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "2.496,00"
  },
  {
    id: 4776,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "846,40"
  },
  {
    id: 4777,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "284,82"
  },
  {
    id: 4778,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "455,74"
  },
  {
    id: 4779,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "235,92"
  },
  {
    id: 4780,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "111,60"
  },
  {
    id: 4781,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "206,43"
  },
  {
    id: 4782,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "325,49"
  },
  {
    id: 4783,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "174,00"
  },
  {
    id: 4784,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.920,00"
  },
  {
    id: 4785,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "19,20"
  },
  {
    id: 4786,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "125,00"
  },
  {
    id: 4787,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "210,00"
  },
  {
    id: 4788,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "56,53"
  },
  {
    id: 4789,
    cliente: "PEDRO PERES",
    identificacion: "V-12548767",
    monto: "6,00"
  },
  {
    id: 4790,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "336,84"
  },
  {
    id: 4791,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "282,00"
  },
  {
    id: 4792,
    cliente: "CARLOS ALBERTO SANTINI GONZALEZ",
    identificacion: "V-11320103",
    monto: "189,88"
  },
  {
    id: 4793,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "284,82"
  },
  {
    id: 4794,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "949,40"
  },
  {
    id: 4795,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "149,68"
  },
  {
    id: 4796,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "82,50"
  },
  {
    id: 4797,
    cliente: "MICHEL ATTAR",
    identificacion: "V-23838423",
    monto: "210,00"
  },
  {
    id: 4798,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "139,56"
  },
  {
    id: 4799,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "121,00"
  },
  {
    id: 4800,
    cliente: "CARLOS URDANETA",
    identificacion: "V-7783740",
    monto: "111,30"
  },
  {
    id: 4801,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "363,00"
  },
  {
    id: 4802,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "159,50"
  },
  {
    id: 4803,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "65,16"
  },
  {
    id: 4804,
    cliente: "JOSE GREGORIO ARAUJO",
    identificacion: "V-8718618",
    monto: "93,70"
  },
  {
    id: 4805,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "13.311,00"
  },
  {
    id: 4806,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "369,20"
  },
  {
    id: 4807,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "415,20"
  },
  {
    id: 4808,
    cliente: "LENIN ALDANA",
    identificacion: "V-13925845",
    monto: "28,05"
  },
  {
    id: 4809,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "834,60"
  },
  {
    id: 4810,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "3.250,00"
  },
  {
    id: 4811,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "66,45"
  },
  {
    id: 4812,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.264,64"
  },
  {
    id: 4813,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "1.159,00"
  },
  {
    id: 4814,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "161,00"
  },
  {
    id: 4815,
    cliente: "AGROBIOTECNICA, C.A",
    identificacion: "J-40747608-4",
    monto: "209,10"
  },
  {
    id: 4816,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "41,45"
  },
  {
    id: 4817,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "383,00"
  },
  {
    id: 4818,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "187,82"
  },
  {
    id: 4819,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "6.014,52"
  },
  {
    id: 4820,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.041,28"
  },
  {
    id: 4821,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "22,20"
  },
  {
    id: 4822,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.033,08"
  },
  {
    id: 4823,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "140,00"
  },
  {
    id: 4824,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "3.000,00"
  },
  {
    id: 4825,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "660,00"
  },
  {
    id: 4826,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "6.438,00"
  },
  {
    id: 4827,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "2.418,00"
  },
  {
    id: 4828,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "682,00"
  },
  {
    id: 4829,
    cliente: "RAFAEL ALDANA",
    identificacion: "V-8791719",
    monto: "450,00"
  },
  {
    id: 4830,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "1.395,00"
  },
  {
    id: 4831,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "46,00"
  },
  {
    id: 4832,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "650,00"
  },
  {
    id: 4833,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "434,70"
  },
  {
    id: 4834,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "1.200,00"
  },
  {
    id: 4835,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.013,56"
  },
  {
    id: 4836,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "115,20"
  },
  {
    id: 4837,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "464,70"
  },
  {
    id: 4838,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "900,00"
  },
  {
    id: 4839,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "379,48"
  },
  {
    id: 4840,
    cliente: "CARLOS BLANCO",
    identificacion: "V-26347831",
    monto: "600,00"
  },
  {
    id: 4841,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "5.400,00"
  },
  {
    id: 4842,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "36,36"
  },
  {
    id: 4843,
    cliente: "RICHARD CARRERO",
    identificacion: "V-13523699",
    monto: "8,00"
  },
  {
    id: 4844,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "31,88"
  },
  {
    id: 4845,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "6,00"
  },
  {
    id: 4846,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "480,00"
  },
  {
    id: 4847,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "832,80"
  },
  {
    id: 4848,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "160,00"
  },
  {
    id: 4849,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "260,00"
  },
  {
    id: 4850,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "682,80"
  },
  {
    id: 4851,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "22,00"
  },
  {
    id: 4852,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "56,53"
  },
  {
    id: 4853,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "184,50"
  },
  {
    id: 4854,
    cliente: "GEOVANY MARQUEZ",
    identificacion: "V-12046814",
    monto: "10,50"
  },
  {
    id: 4855,
    cliente: "JUNNIOR DUARTE",
    identificacion: "V-18259690",
    monto: "744,00"
  },
  {
    id: 4856,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "242,36"
  },
  {
    id: 4857,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "186,00"
  },
  {
    id: 4858,
    cliente: "RICHARD CARRERO",
    identificacion: "V-13523699",
    monto: "15,50"
  },
  {
    id: 4859,
    cliente: "RICHARD CARRERO",
    identificacion: "V-13523699",
    monto: "18,42"
  },
  {
    id: 4860,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "81,50"
  },
  {
    id: 4861,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "7.780,00"
  },
  {
    id: 4862,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.787,00"
  },
  {
    id: 4863,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "580,00"
  },
  {
    id: 4864,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "900,00"
  },
  {
    id: 4865,
    cliente: "AGROPECUARIA MI CONUQUITO QUERIDO, C.A",
    identificacion: "J-50095550-2",
    monto: "142,14"
  },
  {
    id: 4866,
    cliente: "LUIS SANTINI",
    identificacion: "V-24139033",
    monto: "22,63"
  },
  {
    id: 4867,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "555,00"
  },
  {
    id: 4868,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "522,10"
  },
  {
    id: 4869,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "1.155,00"
  },
  {
    id: 4870,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "95,00"
  },
  {
    id: 4871,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "224,98"
  },
  {
    id: 4872,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "745,50"
  },
  {
    id: 4873,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "176,50"
  },
  {
    id: 4874,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "201,03"
  },
  {
    id: 4875,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "565,32"
  },
  {
    id: 4876,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "37,00"
  },
  {
    id: 4877,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "200,00"
  },
  {
    id: 4878,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "457,04"
  },
  {
    id: 4879,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "57,00"
  },
  {
    id: 4880,
    cliente: "AGROINSUMOS EL CAMPESINO, C.A",
    identificacion: "J-50242803-8",
    monto: "435,00"
  },
  {
    id: 4881,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "56,53"
  },
  {
    id: 4882,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "210,15"
  },
  {
    id: 4883,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "538,56"
  },
  {
    id: 4884,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "229,80"
  },
  {
    id: 4885,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "110,64"
  },
  {
    id: 4886,
    cliente: "AGROANDES, C.A",
    identificacion: "J-50049945-0",
    monto: "800,00"
  },
  {
    id: 4887,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.488,68"
  },
  {
    id: 4888,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.643,00"
  },
  {
    id: 4889,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.643,00"
  },
  {
    id: 4890,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "985,80"
  },
  {
    id: 4891,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.643,00"
  },
  {
    id: 4892,
    cliente: "INVERSIONES FERREAGRO SABANA DE HEKMAT DE JESUS HAMADE LEON",
    identificacion: "V-9176564",
    monto: "985,80"
  },
  {
    id: 4893,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "990,00"
  },
  {
    id: 4894,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "584,64"
  },
  {
    id: 4895,
    cliente: "ELY RAMON CONTRERAS",
    identificacion: "V-12797942",
    monto: "563,25"
  },
  {
    id: 4896,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "2.900,00"
  },
  {
    id: 4897,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "3.000,00"
  },
  {
    id: 4898,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "1.380,00"
  },
  {
    id: 4899,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.525,00"
  },
  {
    id: 4900,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "960,00"
  },
  {
    id: 4901,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "288,00"
  },
  {
    id: 4902,
    cliente: "INVERSIONES FERREAGRO SABANA DE HEKMAT DE JESUS HAMADE LEON",
    identificacion: "V-9176564",
    monto: "1.140,00"
  },
  {
    id: 4903,
    cliente: "TIENDAS MUNDO AGRO, C.A",
    identificacion: "J-50259284-9",
    monto: "4.270,00"
  },
  {
    id: 4904,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "263,41"
  },
  {
    id: 4905,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "381,00"
  },
  {
    id: 4906,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "20,90"
  },
  {
    id: 4907,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "52,08"
  },
  {
    id: 4908,
    cliente: "INVERSIONES YPR, C.A",
    identificacion: "J-41230553-0",
    monto: "2.610,00"
  },
  {
    id: 4909,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "2.425,00"
  },
  {
    id: 4910,
    cliente: "DARLIN MORENO",
    identificacion: "V-19795833",
    monto: "131,16"
  },
  {
    id: 4911,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "128,51"
  },
  {
    id: 4912,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "600,00"
  },
  {
    id: 4913,
    cliente: "EDUARD GUERRA",
    identificacion: "V-27022695",
    monto: "77,70"
  },
  {
    id: 4914,
    cliente: "EDUARD GUERRA",
    identificacion: "V-27022695",
    monto: "97,79"
  },
  {
    id: 4915,
    cliente: "EDUARD GUERRA",
    identificacion: "V-27022695",
    monto: "137,25"
  },
  {
    id: 4916,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "225,72"
  },
  {
    id: 4917,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "3.668,20"
  },
  {
    id: 4918,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "175,84"
  },
  {
    id: 4919,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "104,61"
  },
  {
    id: 4920,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "3.000,00"
  },
  {
    id: 4921,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "700,00"
  },
  {
    id: 4922,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "557,00"
  },
  {
    id: 4923,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "1.017,15"
  },
  {
    id: 4924,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.612,00"
  },
  {
    id: 4925,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "699,00"
  },
  {
    id: 4926,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "300,00"
  },
  {
    id: 4927,
    cliente: "PHARMAVETPHE SHOP DE AVILIO STANISLAO, F.P",
    identificacion: "V-01189800",
    monto: "370,00"
  },
  {
    id: 4928,
    cliente: "ARGENIS ALDANA",
    identificacion: "V-5790840",
    monto: "125,18"
  },
  {
    id: 4929,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "300,00"
  },
  {
    id: 4930,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "562,92"
  },
  {
    id: 4931,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "7,50"
  },
  {
    id: 4932,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "35,00"
  },
  {
    id: 4933,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "953,46"
  },
  {
    id: 4934,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "197,16"
  },
  {
    id: 4935,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.572,50"
  },
  {
    id: 4936,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "3.100,00"
  },
  {
    id: 4937,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.550,00"
  },
  {
    id: 4938,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.550,00"
  },
  {
    id: 4939,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "270,00"
  },
  {
    id: 4940,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "150,00"
  },
  {
    id: 4941,
    cliente: "INVERSIONES BENYSPORT DE BENITO TELLES, F.P",
    identificacion: "V-09179881",
    monto: "232,50"
  },
  {
    id: 4942,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "855,00"
  },
  {
    id: 4943,
    cliente: "AGRO MAX. BARRUETA DE JOSE DAVID BARRUETA GUZMAN",
    identificacion: "V-25489669",
    monto: "135,50"
  },
  {
    id: 4944,
    cliente: "AGROSIEMBRAS Y SEMILLAS, C.A",
    identificacion: "J-50564022-4",
    monto: "300,00"
  },
  {
    id: 4945,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "1.314,30"
  },
  {
    id: 4946,
    cliente: "INVERSIONES Y SUMINISTROS AGROVE DE JUAN SALVADOR NAVARRO PEÑA",
    identificacion: "V-23721364",
    monto: "648,62"
  },
  {
    id: 4947,
    cliente: "AGROPECUARIA DISALIPRO, C.A",
    identificacion: "J-31094521-7",
    monto: "800,00"
  },
  {
    id: 4948,
    cliente: "DISTRIBUIDORA EL CAMPO C,A",
    identificacion: "J-31217841-8",
    monto: "1.014,90"
  },
  {
    id: 4949,
    cliente: "EULOGIO NOGUERA",
    identificacion: "V-12486246",
    monto: "360,00"
  },
  {
    id: 4950,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "125,11"
  },
  {
    id: 4951,
    cliente: "HERNANDEZ TRUJIMERSH",
    identificacion: "V-14438900",
    monto: "932,10"
  },
  {
    id: 4952,
    cliente: "AGROSIEMBRAS Y SEMILLAS, C.A",
    identificacion: "J-50564022-4",
    monto: "58,78"
  },
  {
    id: 4953,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "1.175,00"
  },
  {
    id: 4954,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "135,00"
  },
  {
    id: 4955,
    cliente: "CARLOS GIL",
    identificacion: "V-4665884",
    monto: "271,69"
  },
  {
    id: 4956,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "708,30"
  },
  {
    id: 4957,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "190,00"
  },
  {
    id: 4958,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "211,23"
  },
  {
    id: 4959,
    cliente: "IMPORTADORA CONTINENTAL A&A, C.A",
    identificacion: "J-29749838-9",
    monto: "532,80"
  },
  {
    id: 4960,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "3.032,68"
  },
  {
    id: 4961,
    cliente: "COMUNA SOCIALISTA LA CHAPA",
    identificacion: "J-50620835-0",
    monto: "286,17"
  },
  {
    id: 4962,
    cliente: "COMUNA SOCIALISTA LA CHAPA",
    identificacion: "J-50620835-0",
    monto: "7.068,17"
  },
  {
    id: 4963,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "310,80"
  },
  {
    id: 4964,
    cliente: "COMUNA SOCIALISTA LA CHAPA",
    identificacion: "J-50620835-0",
    monto: "895,66"
  },
  {
    id: 4965,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "60,00"
  },
  {
    id: 4966,
    cliente: "VICTOR VASQUEZ",
    identificacion: "V-18350659",
    monto: "23,26"
  },
  {
    id: 4967,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "56,53"
  },
  {
    id: 4968,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "320,00"
  },
  {
    id: 4969,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "483,11"
  },
  {
    id: 4970,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "362,52"
  },
  {
    id: 4971,
    cliente: "AGROPECUARIA LA LOBERA, C.A",
    identificacion: "J-40432937-4",
    monto: "602,10"
  },
  {
    id: 4972,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "159,22"
  },
  {
    id: 4973,
    cliente: "EMPRENDIMIENTO AVILIO STANISLAO",
    identificacion: "J-50752458-2",
    monto: "690,00"
  },
  {
    id: 4974,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "2.106,29"
  },
  {
    id: 4975,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "843,58"
  },
  {
    id: 4976,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "945,00"
  },
  {
    id: 4977,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "11.570,00"
  },
  {
    id: 4978,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "552,00"
  },
  {
    id: 4979,
    cliente: "COMUNA SOCIALISTA LA CHAPA",
    identificacion: "J-50620835-0",
    monto: "105,00"
  },
  {
    id: 4980,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "1.599,65"
  },
  {
    id: 4981,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "542,67"
  },
  {
    id: 4982,
    cliente: "JOSE GREGORIO ARAUJO",
    identificacion: "V-8718618",
    monto: "70,00"
  },
  {
    id: 4983,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "770,90"
  },
  {
    id: 4984,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "13,61"
  },
  {
    id: 4985,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "22,96"
  },
  {
    id: 4986,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "32,00"
  },
  {
    id: 4987,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "119,22"
  },
  {
    id: 4988,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "300,00"
  },
  {
    id: 4989,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "265,02"
  },
  {
    id: 4990,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "11,00"
  },
  {
    id: 4991,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "15,04"
  },
  {
    id: 4992,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.103,60"
  },
  {
    id: 4993,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "336,00"
  },
  {
    id: 4994,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "45,18"
  },
  {
    id: 4995,
    cliente: "LA HACIENDA PROVIDENCIA, C.A",
    identificacion: "J-50069354-0",
    monto: "819,12"
  },
  {
    id: 4996,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "4.860,08"
  },
  {
    id: 4997,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "319,30"
  },
  {
    id: 4998,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.740,32"
  },
  {
    id: 4999,
    cliente: "INVERSIONES Y MULTISERVICIOS ROMERCA",
    identificacion: "V-14053628",
    monto: "3.200,00"
  },
  {
    id: 5000,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "4.650,00"
  },
  {
    id: 5001,
    cliente: "INVERSIONES FERREAGRO SABANA DE HEKMAT DE JESUS HAMADE LEON",
    identificacion: "V-9176564",
    monto: "1.550,00"
  },
  {
    id: 5002,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "188,40"
  },
  {
    id: 5003,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "37,00"
  },
  {
    id: 5004,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "243,91"
  },
  {
    id: 5005,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "580,00"
  },
  {
    id: 5006,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "769,80"
  },
  {
    id: 5007,
    cliente: "DANIEL BRICEÑO",
    identificacion: "V-10314781",
    monto: "34,31"
  },
  {
    id: 5008,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "89,06"
  },
  {
    id: 5009,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "186,00"
  },
  {
    id: 5010,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "300,00"
  },
  {
    id: 5011,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "269,00"
  },
  {
    id: 5012,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "8.012,75"
  },
  {
    id: 5013,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "750,00"
  },
  {
    id: 5014,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "1.600,00"
  },
  {
    id: 5015,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "509,22"
  },
  {
    id: 5016,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "4.830,00"
  },
  {
    id: 5017,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "4,00"
  },
  {
    id: 5018,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "4.600,00"
  },
  {
    id: 5019,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "53,73"
  },
  {
    id: 5020,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "600,00"
  },
  {
    id: 5021,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "110,92"
  },
  {
    id: 5022,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "315,70"
  },
  {
    id: 5023,
    cliente: "GEOVANY MARQUEZ",
    identificacion: "V-12046814",
    monto: "16,50"
  },
  {
    id: 5024,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "204,50"
  },
  {
    id: 5025,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "1.283,05"
  },
  {
    id: 5026,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "432,00"
  },
  {
    id: 5027,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "749,40"
  },
  {
    id: 5028,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "840,36"
  },
  {
    id: 5029,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "470,00"
  },
  {
    id: 5030,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "4.836,66"
  },
  {
    id: 5031,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "311,00"
  },
  {
    id: 5032,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "959,70"
  },
  {
    id: 5033,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "779,52"
  },
  {
    id: 5034,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "391,72"
  },
  {
    id: 5035,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.857,78"
  },
  {
    id: 5036,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "2.621,38"
  },
  {
    id: 5037,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "336,76"
  },
  {
    id: 5038,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "2.142,12"
  },
  {
    id: 5039,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "3.488,60"
  },
  {
    id: 5040,
    cliente: "ENDER REA",
    identificacion: "V-14719168",
    monto: "19,77"
  },
  {
    id: 5041,
    cliente: "FREYMAN LOPEZ",
    identificacion: "V-13376506",
    monto: "9,23"
  },
  {
    id: 5042,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "3.000,00"
  },
  {
    id: 5043,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "1.550,00"
  },
  {
    id: 5044,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.406,02"
  },
  {
    id: 5045,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "193,52"
  },
  {
    id: 5046,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "789,90"
  },
  {
    id: 5047,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "320,10"
  },
  {
    id: 5048,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "26,14"
  },
  {
    id: 5049,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "640,00"
  },
  {
    id: 5050,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "960,00"
  },
  {
    id: 5051,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "960,00"
  },
  {
    id: 5052,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "51,02"
  },
  {
    id: 5053,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "275,80"
  },
  {
    id: 5054,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "315,20"
  },
  {
    id: 5055,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "728,50"
  },
  {
    id: 5056,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "885,62"
  },
  {
    id: 5057,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "188,40"
  },
  {
    id: 5058,
    cliente: "AGRO STORE, C.A",
    identificacion: "J-50119950-7",
    monto: "800,00"
  },
  {
    id: 5059,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "352,00"
  },
  {
    id: 5060,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "122,83"
  },
  {
    id: 5061,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "234,00"
  },
  {
    id: 5062,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "532,60"
  },
  {
    id: 5063,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "9,00"
  },
  {
    id: 5064,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "287,05"
  },
  {
    id: 5065,
    cliente: "JULIO CESAR PEREZ PACHECO",
    identificacion: "V-13127764",
    monto: "1.042,60"
  },
  {
    id: 5066,
    cliente: "JULIO CESAR PEREZ PACHECO",
    identificacion: "V-13127764",
    monto: "350,00"
  },
  {
    id: 5067,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "399,64"
  },
  {
    id: 5068,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "121,95"
  },
  {
    id: 5069,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "395,00"
  },
  {
    id: 5070,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "240,00"
  },
  {
    id: 5071,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "15,00"
  },
  {
    id: 5072,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "185,22"
  },
  {
    id: 5073,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "54,86"
  },
  {
    id: 5074,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "933,06"
  },
  {
    id: 5075,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "1.447,92"
  },
  {
    id: 5076,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "8.900,00"
  },
  {
    id: 5077,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "102,65"
  },
  {
    id: 5078,
    cliente: "BERNARDO BRAVO",
    identificacion: "V-8715937",
    monto: "406,07"
  },
  {
    id: 5079,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "50,40"
  },
  {
    id: 5080,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "258,00"
  },
  {
    id: 5081,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "49,74"
  },
  {
    id: 5082,
    cliente: "AGROPECUARIA LA LOBERA, C.A",
    identificacion: "J-40432937-4",
    monto: "410,35"
  },
  {
    id: 5083,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "221,00"
  },
  {
    id: 5084,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "124,00"
  },
  {
    id: 5085,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "62,00"
  },
  {
    id: 5086,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "71,40"
  },
  {
    id: 5087,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "8.900,00"
  },
  {
    id: 5088,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "905,76"
  },
  {
    id: 5089,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "174,23"
  },
  {
    id: 5090,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "85,00"
  },
  {
    id: 5091,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "861,58"
  },
  {
    id: 5092,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "3.200,00"
  },
  {
    id: 5093,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "65,96"
  },
  {
    id: 5094,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "1.050,00"
  },
  {
    id: 5095,
    cliente: "INVERSIONES ALEMAN DE JAVIER ALEMAN, F.P",
    identificacion: "V-11131002",
    monto: "640,00"
  },
  {
    id: 5096,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "3.200,00"
  },
  {
    id: 5097,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "3.150,00"
  },
  {
    id: 5098,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "320,00"
  },
  {
    id: 5099,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "2.565,83"
  },
  {
    id: 5100,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "1.650,00"
  },
  {
    id: 5101,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "425,00"
  },
  {
    id: 5102,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "153,88"
  },
  {
    id: 5103,
    cliente: "COMERCIAL AGROTEIDE DE NIXON SECUNDINO DIAZ BASTIDAS",
    identificacion: "V-1229938",
    monto: "425,00"
  },
  {
    id: 5104,
    cliente: "COMERCIALIZADORA SANDOVAL I, C.A",
    identificacion: "J-41159525-0",
    monto: "330,00"
  },
  {
    id: 5105,
    cliente: "COMERCIALIZADORA SANDOVAL I, C.A",
    identificacion: "J-41159525-0",
    monto: "171,80"
  },
  {
    id: 5106,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "520,00"
  },
  {
    id: 5107,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "170,00"
  },
  {
    id: 5108,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "280,00"
  },
  {
    id: 5109,
    cliente: "REINALDO JONAS GONZALEZ CASTILLO",
    identificacion: "V-14004001",
    monto: "3.120,00"
  },
  {
    id: 5110,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "21,90"
  },
  {
    id: 5111,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "110,00"
  },
  {
    id: 5112,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "384,00"
  },
  {
    id: 5113,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "94,57"
  },
  {
    id: 5114,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "175,90"
  },
  {
    id: 5115,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "11,00"
  },
  {
    id: 5116,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "54,00"
  },
  {
    id: 5117,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "1.000,00"
  },
  {
    id: 5118,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "13,00"
  },
  {
    id: 5119,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "372,02"
  },
  {
    id: 5120,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "245,12"
  },
  {
    id: 5121,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "103,11"
  },
  {
    id: 5122,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "785,00"
  },
  {
    id: 5123,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "235,00"
  },
  {
    id: 5124,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "79,06"
  },
  {
    id: 5125,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.244,94"
  },
  {
    id: 5126,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "444,00"
  },
  {
    id: 5127,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "320,00"
  },
  {
    id: 5128,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "226,44"
  },
  {
    id: 5129,
    cliente: "JOSELIN EDIRA APONTE",
    identificacion: "V-16533321",
    monto: "21,90"
  },
  {
    id: 5130,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "386,32"
  },
  {
    id: 5131,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "20,00"
  },
  {
    id: 5132,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "182,64"
  },
  {
    id: 5133,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "509,30"
  },
  {
    id: 5134,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "756,30"
  },
  {
    id: 5135,
    cliente: "INNOVA BUSINESS CORPORATION, C.A",
    identificacion: "J-40546341-4",
    monto: "5.032,00"
  },
  {
    id: 5136,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "541,10"
  },
  {
    id: 5137,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "157,30"
  },
  {
    id: 5138,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "24,40"
  },
  {
    id: 5139,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "12,50"
  },
  {
    id: 5140,
    cliente: "GEOVANY MARQUEZ",
    identificacion: "V-12046814",
    monto: "47,80"
  },
  {
    id: 5141,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "974,16"
  },
  {
    id: 5142,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.435,42"
  },
  {
    id: 5143,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.675,00"
  },
  {
    id: 5144,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "147,44"
  },
  {
    id: 5145,
    cliente: "AGROPECUARIA VALLES SOLOS, C.A",
    identificacion: "J-31243987-4",
    monto: "100,00"
  },
  {
    id: 5146,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "14,00"
  },
  {
    id: 5147,
    cliente: "INVERSIONES BENYSPORT DE BENITO TELLES, F.P",
    identificacion: "V-09179881",
    monto: "212,50"
  },
  {
    id: 5148,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "212,50"
  },
  {
    id: 5149,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "182,94"
  },
  {
    id: 5150,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "67,00"
  },
  {
    id: 5151,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "755,22"
  },
  {
    id: 5152,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "37,91"
  },
  {
    id: 5153,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "3.170,00"
  },
  {
    id: 5154,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "708,00"
  },
  {
    id: 5155,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "1.667,00"
  },
  {
    id: 5156,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "320,00"
  },
  {
    id: 5157,
    cliente: "AGROPECUARIA V.R DE MILFIDO VERA",
    identificacion: "V-15134206",
    monto: "450,00"
  },
  {
    id: 5158,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "510,00"
  },
  {
    id: 5159,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "818,50"
  },
  {
    id: 5160,
    cliente: "AGROINSUMOS EL AMIGO DEL CAMPO, C.A",
    identificacion: "J-50627919-3",
    monto: "3.200,00"
  },
  {
    id: 5161,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "3.423,30"
  },
  {
    id: 5162,
    cliente: "AGROSIEMBRAS Y SEMILLAS, C.A",
    identificacion: "J-50564022-4",
    monto: "44,14"
  },
  {
    id: 5163,
    cliente: "SUMINISTROS AGRICOLAS EL ARADO DE ROGER HUMBERTO ROMERO DURAN, F.P",
    identificacion: "V-09334364",
    monto: "196,62"
  },
  {
    id: 5164,
    cliente: "EMPRENDIMIENTO AVILIO STANISLAO",
    identificacion: "J-50752458-2",
    monto: "353,87"
  },
  {
    id: 5165,
    cliente: "AGROPECUARIA SANTA SOFIA",
    identificacion: "V-23594678",
    monto: "240,00"
  },
  {
    id: 5166,
    cliente: "HECTOR ROJAS TAPARO",
    identificacion: "V-13118574",
    monto: "48,00"
  },
  {
    id: 5167,
    cliente: "JUAN MORENO",
    identificacion: "V-10924513",
    monto: "855,56"
  },
  {
    id: 5168,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "165,32"
  },
  {
    id: 5169,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "35,12"
  },
  {
    id: 5170,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "425,00"
  },
  {
    id: 5171,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "212,50"
  },
  {
    id: 5172,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "419,15"
  },
  {
    id: 5173,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "12,86"
  },
  {
    id: 5174,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "132,00"
  },
  {
    id: 5175,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "320,00"
  },
  {
    id: 5176,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "31,50"
  },
  {
    id: 5177,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "162,60"
  },
  {
    id: 5178,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "204,80"
  },
  {
    id: 5179,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "990,00"
  },
  {
    id: 5180,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "42,50"
  },
  {
    id: 5181,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "124,00"
  },
  {
    id: 5182,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "75,00"
  },
  {
    id: 5183,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "50,00"
  },
  {
    id: 5184,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "285,42"
  },
  {
    id: 5185,
    cliente: "INVERSIONES YPR, C.A",
    identificacion: "J-41230553-0",
    monto: "3.200,00"
  },
  {
    id: 5186,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "123,48"
  },
  {
    id: 5187,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "369,20"
  },
  {
    id: 5188,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "72,00"
  },
  {
    id: 5189,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "14,00"
  },
  {
    id: 5190,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "290,00"
  },
  {
    id: 5191,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "59,50"
  },
  {
    id: 5192,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.600,00"
  },
  {
    id: 5193,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "748,32"
  },
  {
    id: 5194,
    cliente: "ASOCIACION COOPERATIVA MARAJABU, R.L",
    identificacion: "J-40989917-9",
    monto: "11.240,00"
  },
  {
    id: 5195,
    cliente: "ASOCIACION COOPERATIVA MARAJABU, R.L",
    identificacion: "J-40989917-9",
    monto: "1.716,00"
  },
  {
    id: 5196,
    cliente: "COOPERATIVA PUENTE PIEDRA ESTIGUATES",
    identificacion: "J-30782407-7",
    monto: "12.926,00"
  },
  {
    id: 5197,
    cliente: "COOPERATIVA PUENTE PIEDRA ESTIGUATES",
    identificacion: "J-30782407-7",
    monto: "1.716,00"
  },
  {
    id: 5198,
    cliente: "ASOCIACION COOPERATIVA LA CULEBRINA, R.L",
    identificacion: "J-50333934-9",
    monto: "3.934,00"
  },
  {
    id: 5199,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "820,00"
  },
  {
    id: 5200,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "440,00"
  },
  {
    id: 5201,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.110,60"
  },
  {
    id: 5202,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.028,64"
  },
  {
    id: 5203,
    cliente: "JULIO CESAR PEREZ PACHECO",
    identificacion: "V-13127764",
    monto: "640,00"
  },
  {
    id: 5204,
    cliente: "JULIO CESAR PEREZ PACHECO",
    identificacion: "V-13127764",
    monto: "763,50"
  },
  {
    id: 5205,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "34,00"
  },
  {
    id: 5206,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "43,80"
  },
  {
    id: 5207,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "960,00"
  },
  {
    id: 5208,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "112,65"
  },
  {
    id: 5209,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "5,76"
  },
  {
    id: 5210,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "79,33"
  },
  {
    id: 5211,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "118,80"
  },
  {
    id: 5212,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "21,80"
  },
  {
    id: 5213,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "3.373,00"
  },
  {
    id: 5214,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "656,64"
  },
  {
    id: 5215,
    cliente: "LLANO TRUJILLO, C.A",
    identificacion: "J-50835876-7",
    monto: "525,00"
  },
  {
    id: 5216,
    cliente: "GEIZAEL DAVID MEJIAS BARRETA",
    identificacion: "V-28612196",
    monto: "21,90"
  },
  {
    id: 5217,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "32,00"
  },
  {
    id: 5218,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "424,37"
  },
  {
    id: 5219,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "34,52"
  },
  {
    id: 5220,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "503,14"
  },
  {
    id: 5221,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "33,78"
  },
  {
    id: 5222,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "235,00"
  },
  {
    id: 5223,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "124,90"
  },
  {
    id: 5224,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "664,00"
  },
  {
    id: 5225,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "103,57"
  },
  {
    id: 5226,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "14,46"
  },
  {
    id: 5227,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "2.807,00"
  },
  {
    id: 5228,
    cliente: "INVERSIONES EL SUR DE COQUIVACOA, C.A",
    identificacion: "J-40939051-9",
    monto: "5.600,00"
  },
  {
    id: 5229,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "2.850,00"
  },
  {
    id: 5230,
    cliente: "AGRO FERRE NIKGREY`S PEON F.P",
    identificacion: "V-27710228",
    monto: "1.140,00"
  },
  {
    id: 5231,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "4.300,00"
  },
  {
    id: 5232,
    cliente: "AGROPECUARIA DISALIPRO, C.A",
    identificacion: "J-31094521-7",
    monto: "3.200,00"
  },
  {
    id: 5233,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "285,00"
  },
  {
    id: 5234,
    cliente: "INVERSIONES EL SUR DE COQUIVACOA, C.A",
    identificacion: "J-40939051-9",
    monto: "1.600,00"
  },
  {
    id: 5235,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "285,42"
  },
  {
    id: 5236,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "2.750,00"
  },
  {
    id: 5237,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "2.850,00"
  },
  {
    id: 5238,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "217,50"
  },
  {
    id: 5239,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "4.954,00"
  },
  {
    id: 5240,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "237,60"
  },
  {
    id: 5241,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "15,60"
  },
  {
    id: 5242,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "139,66"
  },
  {
    id: 5243,
    cliente: "YUSMELY BRICEÑO",
    identificacion: "V-19101367",
    monto: "87,23"
  },
  {
    id: 5244,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "73,20"
  },
  {
    id: 5245,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "64,00"
  },
  {
    id: 5246,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "80,06"
  },
  {
    id: 5247,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "112,53"
  },
  {
    id: 5248,
    cliente: "LEWIS ARAUJO",
    identificacion: "V-20655780",
    monto: "10,50"
  },
  {
    id: 5249,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "931,70"
  },
  {
    id: 5250,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "342,00"
  },
  {
    id: 5251,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "242,76"
  },
  {
    id: 5252,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "31,90"
  },
  {
    id: 5253,
    cliente: "JESUS RIVAS",
    identificacion: "V-15752367",
    monto: "19,75"
  },
  {
    id: 5254,
    cliente: "VETENCOURT JESSICA",
    identificacion: "V-19899692",
    monto: "125,00"
  },
  {
    id: 5255,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "9.300,00"
  },
  {
    id: 5256,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "800,00"
  },
  {
    id: 5257,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "39,50"
  },
  {
    id: 5258,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.378,86"
  },
  {
    id: 5259,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "38,80"
  },
  {
    id: 5260,
    cliente: "SERVICIOS E INVERSIONES BP & CVS, C.A",
    identificacion: "J-50094708-9",
    monto: "378,15"
  },
  {
    id: 5261,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "26,96"
  },
  {
    id: 5262,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "540,00"
  },
  {
    id: 5263,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "480,00"
  },
  {
    id: 5264,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "2.795,00"
  },
  {
    id: 5265,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "9,00"
  },
  {
    id: 5266,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "8,50"
  },
  {
    id: 5267,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "150,00"
  },
  {
    id: 5268,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "52,50"
  },
  {
    id: 5269,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "21,90"
  },
  {
    id: 5270,
    cliente: "JESUS YANEL PEREZ",
    identificacion: "V-14148503",
    monto: "21,90"
  },
  {
    id: 5271,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "660,00"
  },
  {
    id: 5272,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "3.500,00"
  },
  {
    id: 5273,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "478,25"
  },
  {
    id: 5274,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "960,00"
  },
  {
    id: 5275,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "324,20"
  },
  {
    id: 5276,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "178,80"
  },
  {
    id: 5277,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "113,76"
  },
  {
    id: 5278,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "186,00"
  },
  {
    id: 5279,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "4,89"
  },
  {
    id: 5280,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "98,00"
  },
  {
    id: 5281,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "739,60"
  },
  {
    id: 5282,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "112,80"
  },
  {
    id: 5283,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "46,00"
  },
  {
    id: 5284,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "3.375,00"
  },
  {
    id: 5285,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "12,50"
  },
  {
    id: 5286,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "2.720,00"
  },
  {
    id: 5287,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "1.550,00"
  },
  {
    id: 5288,
    cliente: "RAFAEL APONTE",
    identificacion: "V-13764264",
    monto: "8,00"
  },
  {
    id: 5289,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "580,00"
  },
  {
    id: 5290,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "5.100,00"
  },
  {
    id: 5291,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "245,00"
  },
  {
    id: 5292,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "102,00"
  },
  {
    id: 5293,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "19,75"
  },
  {
    id: 5294,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "680,00"
  },
  {
    id: 5295,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "84,00"
  },
  {
    id: 5296,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "705,85"
  },
  {
    id: 5297,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "65,70"
  },
  {
    id: 5298,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "143,75"
  },
  {
    id: 5299,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "206,30"
  },
  {
    id: 5300,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "39,50"
  },
  {
    id: 5301,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "67,95"
  },
  {
    id: 5302,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "2.100,00"
  },
  {
    id: 5303,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "180,00"
  },
  {
    id: 5304,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "230,00"
  },
  {
    id: 5305,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "21,90"
  },
  {
    id: 5306,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "870,00"
  },
  {
    id: 5307,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.825,00"
  },
  {
    id: 5308,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "175,00"
  },
  {
    id: 5309,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "126,00"
  },
  {
    id: 5310,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "888,00"
  },
  {
    id: 5311,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "1.528,31"
  },
  {
    id: 5312,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "660,59"
  },
  {
    id: 5313,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "12,00"
  },
  {
    id: 5314,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "340,08"
  },
  {
    id: 5315,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "6.614,20"
  },
  {
    id: 5316,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "1.014,00"
  },
  {
    id: 5317,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "2.800,00"
  },
  {
    id: 5318,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "2.730,00"
  },
  {
    id: 5319,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "1.969,00"
  },
  {
    id: 5320,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "24,00"
  },
  {
    id: 5321,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "206,16"
  },
  {
    id: 5322,
    cliente: "JORBIN QUINTERO",
    identificacion: "V-13830903",
    monto: "1.272,00"
  },
  {
    id: 5323,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "6.127,00"
  },
  {
    id: 5324,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "169,80"
  },
  {
    id: 5325,
    cliente: "COMERCIALIZADORA JOHN SANCHEZ. C.A",
    identificacion: "J-50717116-7",
    monto: "48,06"
  },
  {
    id: 5326,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "350,00"
  },
  {
    id: 5327,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "84,00"
  },
  {
    id: 5328,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "235,00"
  },
  {
    id: 5329,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "30,00"
  },
  {
    id: 5330,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "56,46"
  },
  {
    id: 5331,
    cliente: "JOEL COLMENARES",
    identificacion: "V-18350865",
    monto: "21,92"
  },
  {
    id: 5332,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "61,40"
  },
  {
    id: 5333,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "25,00"
  },
  {
    id: 5334,
    cliente: "COOPERATIVA PUENTE PIEDRA ESTIGUATES",
    identificacion: "J-30782407-7",
    monto: "5.750,00"
  },
  {
    id: 5335,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "821,66"
  },
  {
    id: 5336,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "94,00"
  },
  {
    id: 5337,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "657,50"
  },
  {
    id: 5338,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "540,61"
  },
  {
    id: 5339,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.750,00"
  },
  {
    id: 5340,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "2.790,00"
  },
  {
    id: 5341,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "210,00"
  },
  {
    id: 5342,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "184,00"
  },
  {
    id: 5343,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "497,70"
  },
  {
    id: 5344,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "481,44"
  },
  {
    id: 5345,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "144,00"
  },
  {
    id: 5346,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "94,00"
  },
  {
    id: 5347,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "176,76"
  },
  {
    id: 5348,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "54,00"
  },
  {
    id: 5349,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "299,38"
  },
  {
    id: 5350,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.802,92"
  },
  {
    id: 5351,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "555,50"
  },
  {
    id: 5352,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "647,10"
  },
  {
    id: 5353,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "105,00"
  },
  {
    id: 5354,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "893,00"
  },
  {
    id: 5355,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "3.375,00"
  },
  {
    id: 5356,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "2.808,00"
  },
  {
    id: 5357,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "237,00"
  },
  {
    id: 5358,
    cliente: "JOSE DIRIMO ANTONIO VIELMA ESPINOZA",
    identificacion: "V-7651827",
    monto: "36,20"
  },
  {
    id: 5359,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "232,74"
  },
  {
    id: 5360,
    cliente: "GLOBAL AGROINDUSTRIAS, C.A",
    identificacion: "J-50828116-0",
    monto: "1.830,00"
  },
  {
    id: 5361,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "329,80"
  },
  {
    id: 5362,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "27,00"
  },
  {
    id: 5363,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "184,92"
  },
  {
    id: 5364,
    cliente: "JOHAN CASTELLANOS",
    identificacion: "V-14983507",
    monto: "1.270,00"
  },
  {
    id: 5365,
    cliente: "EDIXO FERNANDEZ",
    identificacion: "V-18287255",
    monto: "228,00"
  },
  {
    id: 5366,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "151,00"
  },
  {
    id: 5367,
    cliente: "JOHAN CASTELLANOS",
    identificacion: "V-14983507",
    monto: "432,50"
  },
  {
    id: 5368,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "400,00"
  },
  {
    id: 5369,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "324,48"
  },
  {
    id: 5370,
    cliente: "AGROBIOTECNICA, C.A",
    identificacion: "J-40747608-4",
    monto: "143,44"
  },
  {
    id: 5371,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "109,00"
  },
  {
    id: 5372,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "60,74"
  },
  {
    id: 5373,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "37,15"
  },
  {
    id: 5374,
    cliente: "YUILMER GERARDO HERANDEZ BRICEÑO",
    identificacion: "V-15824865",
    monto: "37,15"
  },
  {
    id: 5375,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "420,00"
  },
  {
    id: 5376,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "109,70"
  },
  {
    id: 5377,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.631,25"
  },
  {
    id: 5378,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "369,20"
  },
  {
    id: 5379,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "700,00"
  },
  {
    id: 5380,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "643,99"
  },
  {
    id: 5381,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "874,00"
  },
  {
    id: 5382,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "10.000,00"
  },
  {
    id: 5383,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "1.400,00"
  },
  {
    id: 5384,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "117,00"
  },
  {
    id: 5385,
    cliente: "MAGDIEL SEGOVIA",
    identificacion: "V-14598748",
    monto: "118,50"
  },
  {
    id: 5386,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "4.543,19"
  },
  {
    id: 5387,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "26,03"
  },
  {
    id: 5388,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "1.028,60"
  },
  {
    id: 5389,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "1.750,00"
  },
  {
    id: 5390,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "660,00"
  },
  {
    id: 5391,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "662,54"
  },
  {
    id: 5392,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "77,85"
  },
  {
    id: 5393,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "586,20"
  },
  {
    id: 5394,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "315,58"
  },
  {
    id: 5395,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "14,00"
  },
  {
    id: 5396,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.387,50"
  },
  {
    id: 5397,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "1.395,45"
  },
  {
    id: 5398,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "387,66"
  },
  {
    id: 5399,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "778,95"
  },
  {
    id: 5400,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "1.626,84"
  },
  {
    id: 5401,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "525,00"
  },
  {
    id: 5402,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "425,00"
  },
  {
    id: 5403,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "230,00"
  },
  {
    id: 5404,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "164,90"
  },
  {
    id: 5405,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "11,90"
  },
  {
    id: 5406,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "390,00"
  },
  {
    id: 5407,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "204,32"
  },
  {
    id: 5408,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "210,00"
  },
  {
    id: 5409,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "751,80"
  },
  {
    id: 5410,
    cliente: "AGROPECUARIA KAMBUCA, C.A",
    identificacion: "J-00360834-3",
    monto: "7.070,44"
  },
  {
    id: 5411,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "113,33"
  },
  {
    id: 5412,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "256,00"
  },
  {
    id: 5413,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-15294051",
    monto: "131,28"
  },
  {
    id: 5414,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "94,60"
  },
  {
    id: 5415,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "252,00"
  },
  {
    id: 5416,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "248,00"
  },
  {
    id: 5417,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "68,00"
  },
  {
    id: 5418,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "580,00"
  },
  {
    id: 5419,
    cliente: "JOSE ISMAEL ARAUJO",
    identificacion: "V-8718369",
    monto: "214,00"
  },
  {
    id: 5420,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "138,00"
  },
  {
    id: 5421,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "15,00"
  },
  {
    id: 5422,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "144,00"
  },
  {
    id: 5423,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "133,19"
  },
  {
    id: 5424,
    cliente: "JAVIER DAVID AVENDAÑO",
    identificacion: "V-20040745",
    monto: "362,55"
  },
  {
    id: 5425,
    cliente: "CESAR CRESPO",
    identificacion: "V-16465127",
    monto: "20,49"
  },
  {
    id: 5426,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "362,50"
  },
  {
    id: 5427,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "237,00"
  },
  {
    id: 5428,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "4,81"
  },
  {
    id: 5429,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "150,00"
  },
  {
    id: 5430,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "38,80"
  },
  {
    id: 5431,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "35,00"
  },
  {
    id: 5432,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "2.990,28"
  },
  {
    id: 5433,
    cliente: "AGROPECUARIA KAMBUCA, C.A",
    identificacion: "J-00360834-3",
    monto: "960,00"
  },
  {
    id: 5434,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "67,95"
  },
  {
    id: 5435,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "816,00"
  },
  {
    id: 5436,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "3.151,76"
  },
  {
    id: 5437,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "339,13"
  },
  {
    id: 5438,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "67,00"
  },
  {
    id: 5439,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "6,70"
  },
  {
    id: 5440,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "114,20"
  },
  {
    id: 5441,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "155,00"
  },
  {
    id: 5442,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "125,00"
  },
  {
    id: 5443,
    cliente: "SERVICIOS AGRICOLAS EL AGUCATE, C.A",
    identificacion: "J-31112726-7",
    monto: "1.050,00"
  },
  {
    id: 5444,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "553,50"
  },
  {
    id: 5445,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "71,06"
  },
  {
    id: 5446,
    cliente: "DAVID ENRIQUE SANTIAGO DELGADO",
    identificacion: "V-10039600",
    monto: "115,70"
  },
  {
    id: 5447,
    cliente: "DAVID ENRIQUE SANTIAGO DELGADO",
    identificacion: "V-10039600",
    monto: "110,00"
  },
  {
    id: 5448,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "599,58"
  },
  {
    id: 5449,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "252,00"
  },
  {
    id: 5450,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "11,72"
  },
  {
    id: 5451,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "350,00"
  },
  {
    id: 5452,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.298,40"
  },
  {
    id: 5453,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "46,90"
  },
  {
    id: 5454,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "106,50"
  },
  {
    id: 5455,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "37,15"
  },
  {
    id: 5456,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "1.050,00"
  },
  {
    id: 5457,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "445,80"
  },
  {
    id: 5458,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "206,20"
  },
  {
    id: 5459,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "1.553,20"
  },
  {
    id: 5460,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "196,46"
  },
  {
    id: 5461,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "1.750,00"
  },
  {
    id: 5462,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "1.317,24"
  },
  {
    id: 5463,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "438,50"
  },
  {
    id: 5464,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "56,25"
  },
  {
    id: 5465,
    cliente: "FRANCHESKA GARCIA",
    identificacion: "V-18860855",
    monto: "230,00"
  },
  {
    id: 5466,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "54,60"
  },
  {
    id: 5467,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "354,00"
  },
  {
    id: 5468,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "2.022,00"
  },
  {
    id: 5469,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "112,56"
  },
  {
    id: 5470,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "175,00"
  },
  {
    id: 5471,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "450,00"
  },
  {
    id: 5472,
    cliente: "MARLEIN MOSCAN",
    identificacion: "V-16739681",
    monto: "1.247,00"
  },
  {
    id: 5473,
    cliente: "ARMANDO JOSE BRICEÑO",
    identificacion: "V-14835728",
    monto: "163,79"
  },
  {
    id: 5474,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "1.618,79"
  },
  {
    id: 5475,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "117,90"
  },
  {
    id: 5476,
    cliente: "MARLEIN MOSCAN",
    identificacion: "V-16739681",
    monto: "1.119,80"
  },
  {
    id: 5477,
    cliente: "INDUSTRIAS NARD",
    identificacion: "J-50070540-9",
    monto: "6,25"
  },
  {
    id: 5478,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "434,60"
  },
  {
    id: 5479,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "72,14"
  },
  {
    id: 5480,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.666,00"
  },
  {
    id: 5481,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "432,60"
  },
  {
    id: 5482,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "210,90"
  },
  {
    id: 5483,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "64,00"
  },
  {
    id: 5484,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "58,30"
  },
  {
    id: 5485,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "175,00"
  },
  {
    id: 5486,
    cliente: "MARYOLI ANDREINA MORALES LOZADA",
    identificacion: "V-25459629",
    monto: "247,00"
  },
  {
    id: 5487,
    cliente: "ROKI CARRERO",
    identificacion: "V-31239195",
    monto: "4,00"
  },
  {
    id: 5488,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "91,60"
  },
  {
    id: 5489,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "214,02"
  },
  {
    id: 5490,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "95,34"
  },
  {
    id: 5491,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "485,84"
  },
  {
    id: 5492,
    cliente: "ILIO FAJARDO",
    identificacion: "V-9317681",
    monto: "40,32"
  },
  {
    id: 5493,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "98,13"
  },
  {
    id: 5494,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "211,02"
  },
  {
    id: 5495,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "291,79"
  },
  {
    id: 5496,
    cliente: "AGRO MAX. BARRUETA DE JOSE DAVID BARRUETA GUZMAN",
    identificacion: "V-25489669",
    monto: "64,00"
  },
  {
    id: 5497,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "48.620,00"
  },
  {
    id: 5498,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "734,03"
  },
  {
    id: 5499,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "2.017,33"
  },
  {
    id: 5500,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "1.060,00"
  },
  {
    id: 5501,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "450,00"
  },
  {
    id: 5502,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "454,00"
  },
  {
    id: 5503,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "55,95"
  },
  {
    id: 5504,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "911,68"
  },
  {
    id: 5505,
    cliente: "AGROPECUARIA V.R DE MILFIDO VERA",
    identificacion: "V-15134206",
    monto: "2.635,00"
  },
  {
    id: 5506,
    cliente: "JUAN BUITRIAGO",
    identificacion: "V-26591413",
    monto: "147,84"
  },
  {
    id: 5507,
    cliente: "ANTONIO ALCALA",
    identificacion: "V-14193655",
    monto: "367,42"
  },
  {
    id: 5508,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "75,00"
  },
  {
    id: 5509,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.793,70"
  },
  {
    id: 5510,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "308,26"
  },
  {
    id: 5511,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "168,00"
  },
  {
    id: 5512,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "200,85"
  },
  {
    id: 5513,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "37,70"
  },
  {
    id: 5514,
    cliente: "FERREAGRO EL POZO",
    identificacion: "J-31024279-8",
    monto: "338,70"
  },
  {
    id: 5515,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "2.871,30"
  },
  {
    id: 5516,
    cliente: "FERRE SEMILLAS TIMOTES DE JUAN CARLOS RIVAS",
    identificacion: "V-11318791",
    monto: "115,50"
  },
  {
    id: 5517,
    cliente: "FERRE SEMILLAS TIMOTES DE JUAN CARLOS RIVAS",
    identificacion: "V-11318791",
    monto: "46,71"
  },
  {
    id: 5518,
    cliente: "ALCALDIA DE PAMPANITO",
    identificacion: "G-20000525-4",
    monto: "160,62"
  },
  {
    id: 5519,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "1.568,00"
  },
  {
    id: 5520,
    cliente: "JESUS SALAS",
    identificacion: "V-17596797",
    monto: "351,00"
  },
  {
    id: 5521,
    cliente: "AGRO STORE, C.A",
    identificacion: "J-50119950-7",
    monto: "2.945,00"
  },
  {
    id: 5522,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "189,20"
  },
  {
    id: 5523,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "12,61"
  },
  {
    id: 5524,
    cliente: "FRESAS ESDORA",
    identificacion: "J-40124938-8",
    monto: "306,97"
  },
  {
    id: 5525,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "3.040,00"
  },
  {
    id: 5526,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "6.057,65"
  },
  {
    id: 5527,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "1.800,00"
  },
  {
    id: 5528,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.080,00"
  },
  {
    id: 5529,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.160,00"
  },
  {
    id: 5530,
    cliente: "FERREAGRO LAS SABANAS DE MARIA TERAN, F.P",
    identificacion: "V-27625885",
    monto: "2.845,32"
  },
  {
    id: 5531,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "5.173,80"
  },
  {
    id: 5532,
    cliente: "RUBEN GIL",
    identificacion: "V-23781961",
    monto: "332,20"
  },
  {
    id: 5533,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "840,00"
  },
  {
    id: 5534,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "1.196,20"
  },
  {
    id: 5535,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "1.252,30"
  },
  {
    id: 5536,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "276,00"
  },
  {
    id: 5537,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "509,30"
  },
  {
    id: 5538,
    cliente: "AGRICOLA MENDOZA, C.A",
    identificacion: "J-40928991-5",
    monto: "435,00"
  },
  {
    id: 5539,
    cliente: "JOSE GREGORIO ARAUJO",
    identificacion: "V-8718618",
    monto: "120,00"
  },
  {
    id: 5540,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "41,18"
  },
  {
    id: 5541,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "53,94"
  },
  {
    id: 5542,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "4.421,00"
  },
  {
    id: 5543,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "90,98"
  },
  {
    id: 5544,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "106,92"
  },
  {
    id: 5545,
    cliente: "AGROPECUARIA LOS TOCAYOS, C.A.",
    identificacion: "J-50034165-2",
    monto: "480,00"
  },
  {
    id: 5546,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "261,71"
  },
  {
    id: 5547,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "535,30"
  },
  {
    id: 5548,
    cliente: "AGROPECUARIA AGROINSUMOS LA ROSARIO, C.A",
    identificacion: "J-50801360-3",
    monto: "172,05"
  },
  {
    id: 5549,
    cliente: "AGROPECUARIA V.R DE MILFIDO VERA",
    identificacion: "V-15134206",
    monto: "385,00"
  },
  {
    id: 5550,
    cliente: "AGROPECUARIA PREMIUM 2014, C.A",
    identificacion: "J-50045747-2",
    monto: "554,00"
  },
  {
    id: 5551,
    cliente: "INSUMOS AGROCENTRO MUÑOZ, F.P DE ANDRY YOSMAR MUÑOZ ALBARRAN",
    identificacion: "V-18864689",
    monto: "543,90"
  },
  {
    id: 5552,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "1.722,36"
  },
  {
    id: 5553,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "36,25"
  },
  {
    id: 5554,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "128,20"
  },
  {
    id: 5555,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "49,46"
  },
  {
    id: 5556,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "35,00"
  },
  {
    id: 5557,
    cliente: "INVERSIONES LA ANDINA DE RAFEAL BARRIOS, F.P",
    identificacion: "V-11611084",
    monto: "296,80"
  },
  {
    id: 5558,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "700,00"
  },
  {
    id: 5559,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "314,00"
  },
  {
    id: 5560,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "1.650,00"
  },
  {
    id: 5561,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "478,00"
  },
  {
    id: 5562,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "457,74"
  },
  {
    id: 5563,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "403,92"
  },
  {
    id: 5564,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "320,00"
  },
  {
    id: 5565,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "440,00"
  },
  {
    id: 5566,
    cliente: "AGROBANANAS LA CHINITA, C.A",
    identificacion: "J-40134329-5",
    monto: "548,80"
  },
  {
    id: 5567,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "4,60"
  },
  {
    id: 5568,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "104,00"
  },
  {
    id: 5569,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "65,90"
  },
  {
    id: 5570,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "3.600,00"
  },
  {
    id: 5571,
    cliente: "AGROPECUARIA DISALIPRO, C.A",
    identificacion: "J-31094521-7",
    monto: "1.800,00"
  },
  {
    id: 5572,
    cliente: "INVERSIONES Y SUMINISTROS AGROVE DE JUAN SALVADOR NAVARRO PEÑA",
    identificacion: "V-23721364",
    monto: "1.925,00"
  },
  {
    id: 5573,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "385,00"
  },
  {
    id: 5574,
    cliente: "AGROZAM, C.A",
    identificacion: "J-40859382-3",
    monto: "450,00"
  },
  {
    id: 5575,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "2.310,00"
  },
  {
    id: 5576,
    cliente: "INVERSORA Y COMERCILIZADORA MATIMAR, F.P DE MARCOS TULIO RUIZ SIMANCAS",
    identificacion: "V-15746208",
    monto: "2.250,00"
  },
  {
    id: 5577,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "2.147,10"
  },
  {
    id: 5578,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "500,00"
  },
  {
    id: 5579,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "467,00"
  },
  {
    id: 5580,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "856,00"
  },
  {
    id: 5581,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "175,00"
  },
  {
    id: 5582,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "388,04"
  },
  {
    id: 5583,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "326,78"
  },
  {
    id: 5584,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "2.179,32"
  },
  {
    id: 5585,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "200,00"
  },
  {
    id: 5586,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "130,68"
  },
  {
    id: 5587,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "79,76"
  },
  {
    id: 5588,
    cliente: "LEMUS PINEDA",
    identificacion: "V-5757003",
    monto: "70,20"
  },
  {
    id: 5589,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "280,00"
  },
  {
    id: 5590,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "366,43"
  },
  {
    id: 5591,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "125,61"
  },
  {
    id: 5592,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "41,11"
  },
  {
    id: 5593,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "186,00"
  },
  {
    id: 5594,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "156,12"
  },
  {
    id: 5595,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "396,72"
  },
  {
    id: 5596,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "980,00"
  },
  {
    id: 5597,
    cliente: "COMERCIALIZADORA AGRICOLA JJ, C.A",
    identificacion: "J-50030348-3",
    monto: "373,64"
  },
  {
    id: 5598,
    cliente: "AGROPECUARIA EL DIAMANTE, C.A",
    identificacion: "J-09032701-0",
    monto: "2.470,75"
  },
  {
    id: 5599,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "197,50"
  },
  {
    id: 5600,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "276,53"
  },
  {
    id: 5601,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "437,53"
  },
  {
    id: 5602,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "7,60"
  },
  {
    id: 5603,
    cliente: "JOSE ATILIO AVENDAÑO",
    identificacion: "V-10037110",
    monto: "242,16"
  },
  {
    id: 5604,
    cliente: "CARLOS ALBERTO SANTINI GONZALEZ",
    identificacion: "V-11320103",
    monto: "149,63"
  },
  {
    id: 5605,
    cliente: "CARLOS ALBERTO SANTINI GONZALEZ",
    identificacion: "V-11320103",
    monto: "6,50"
  },
  {
    id: 5606,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "291,00"
  },
  {
    id: 5607,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "410,00"
  },
  {
    id: 5608,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "113,00"
  },
  {
    id: 5609,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "218,50"
  },
  {
    id: 5610,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "698,31"
  },
  {
    id: 5611,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "100,00"
  },
  {
    id: 5612,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "73,00"
  },
  {
    id: 5613,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "93,40"
  },
  {
    id: 5614,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "51,02"
  },
  {
    id: 5615,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "1.945,70"
  },
  {
    id: 5616,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "321,00"
  },
  {
    id: 5617,
    cliente: "INVERSIONES SANMART, C.A",
    identificacion: "J-40199020-7",
    monto: "704,40"
  },
  {
    id: 5618,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "400,00"
  },
  {
    id: 5619,
    cliente: "AGROMAGD, C.A",
    identificacion: "J-50836193-8",
    monto: "235,20"
  },
  {
    id: 5620,
    cliente: "AGROMAGD, C.A",
    identificacion: "J-50836193-8",
    monto: "1.001,70"
  },
  {
    id: 5621,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "275,00"
  },
  {
    id: 5622,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "28,24"
  },
  {
    id: 5623,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "42,87"
  },
  {
    id: 5624,
    cliente: "ANDRES ESCALANTE",
    identificacion: "V-23596806",
    monto: "288,00"
  },
  {
    id: 5625,
    cliente: "ADAN BARRIOS",
    identificacion: "V-14310282",
    monto: "1.179,72"
  },
  {
    id: 5626,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "481,93"
  },
  {
    id: 5627,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "481,93"
  },
  {
    id: 5628,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "47,96"
  },
  {
    id: 5629,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "253,34"
  },
  {
    id: 5630,
    cliente: "HENNRY RODRIGUEZ",
    identificacion: "V-24136484",
    monto: "28,75"
  },
  {
    id: 5631,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "107,94"
  },
  {
    id: 5632,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "36,00"
  },
  {
    id: 5633,
    cliente: "ALEXANDER RAMIREZ",
    identificacion: "V-20705027",
    monto: "507,12"
  },
  {
    id: 5634,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "523,02"
  },
  {
    id: 5635,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "24,00"
  },
  {
    id: 5636,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "1.258,08"
  },
  {
    id: 5637,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "125,00"
  },
  {
    id: 5638,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "60,00"
  },
  {
    id: 5639,
    cliente: "AGROFERRETERIA TRUJILLO, C.A",
    identificacion: "J-41236782-0",
    monto: "652,50"
  },
  {
    id: 5640,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "320,00"
  },
  {
    id: 5641,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "59,50"
  },
  {
    id: 5642,
    cliente: "SERVICIOS INTEGRALES ARIAS, F.P",
    identificacion: "V-9174357",
    monto: "192,00"
  },
  {
    id: 5643,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "179,72"
  },
  {
    id: 5644,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "30,00"
  },
  {
    id: 5645,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "940,00"
  },
  {
    id: 5646,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "321,40"
  },
  {
    id: 5647,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "109,99"
  },
  {
    id: 5648,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "85,60"
  },
  {
    id: 5649,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "405,66"
  },
  {
    id: 5650,
    cliente: "FERNANDO AVENDAÑO",
    identificacion: "V-10910147",
    monto: "115,70"
  },
  {
    id: 5651,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "2.551,40"
  },
  {
    id: 5652,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "1.350,00"
  },
  {
    id: 5653,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "47,19"
  },
  {
    id: 5654,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "10,82"
  },
  {
    id: 5655,
    cliente: "INVERSIONES Y DISTRIBUIDORA E&B DE ENDER BENITEZ, F.P",
    identificacion: "V-13206584",
    monto: "1.632,50"
  },
  {
    id: 5656,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "1.116,76"
  },
  {
    id: 5657,
    cliente: "AGROPECUARIA LOS TOCAYOS, C.A.",
    identificacion: "J-50034165-2",
    monto: "44,59"
  },
  {
    id: 5658,
    cliente: "FERREAGRO MONTE VERDE, C.A",
    identificacion: "J-50457162-8",
    monto: "2.275,00"
  },
  {
    id: 5659,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "291,00"
  },
  {
    id: 5660,
    cliente: "SAMUEL BENITEZ",
    identificacion: "V-17345434",
    monto: "525,00"
  },
  {
    id: 5661,
    cliente: "JESUS ALBERTO BRICEÑO HERIZE",
    identificacion: "V-13050121",
    monto: "5,76"
  },
  {
    id: 5662,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "2.100,00"
  },
  {
    id: 5663,
    cliente: "AGROPECUARIA JLJ, C.A",
    identificacion: "J-40700931-1",
    monto: "349,60"
  },
  {
    id: 5664,
    cliente: "INVERSIONES Y FERRETERIA MI REDENTOR VIVE DE JHONNY MORENO, F.P",
    identificacion: "V-13764978",
    monto: "11.024,58"
  },
  {
    id: 5665,
    cliente: "AGROPECUARIA LA GRAN REFORMA, C.A",
    identificacion: "J-50199695-4",
    monto: "151,20"
  },
  {
    id: 5666,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "17,48"
  },
  {
    id: 5667,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "25,53"
  },
  {
    id: 5668,
    cliente: "ADRIAN BARRIOS",
    identificacion: "V-30024012",
    monto: "105,00"
  },
  {
    id: 5669,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "5,00"
  },
  {
    id: 5670,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "176,65"
  },
  {
    id: 5671,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "593,60"
  },
  {
    id: 5672,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.214,00"
  },
  {
    id: 5673,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "350,00"
  },
  {
    id: 5674,
    cliente: "ALCALDIA DE PAMPANITO",
    identificacion: "G-20000525-4",
    monto: "80,40"
  },
  {
    id: 5675,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "467,05"
  },
  {
    id: 5676,
    cliente: "DISTRIBUIDORA AGROINSUMOS LA ENTRADA DE CARLOS VETHENCOURT, F.P",
    identificacion: "V-17509212",
    monto: "256,00"
  },
  {
    id: 5677,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "79,08"
  },
  {
    id: 5678,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "18,11"
  },
  {
    id: 5679,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "653,69"
  },
  {
    id: 5680,
    cliente: "AGROPECUARIA DOÑA SONIA, C.A",
    identificacion: "J-40973438-2",
    monto: "400,00"
  },
  {
    id: 5681,
    cliente: "ALBA LARA",
    identificacion: "V-24881153",
    monto: "1.892,00"
  },
  {
    id: 5682,
    cliente: "AGROMAGD, C.A",
    identificacion: "J-50836193-8",
    monto: "1.945,05"
  },
  {
    id: 5683,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "808,20"
  },
  {
    id: 5684,
    cliente: "LILIANA VIRGINIA BARRIOS AZUAJE",
    identificacion: "V-29814434",
    monto: "46,74"
  },
  {
    id: 5685,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "179,72"
  },
  {
    id: 5686,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "3.496,00"
  },
  {
    id: 5687,
    cliente: "MERCEDES MARIN",
    identificacion: "V-14599485",
    monto: "74,61"
  },
  {
    id: 5688,
    cliente: "MERCEDES MARIN",
    identificacion: "V-14599485",
    monto: "67,92"
  },
  {
    id: 5689,
    cliente: "FERRE RIEGO SANTA LUCIA DE MARIELA CONCEPCION GONZALES VELASQUEZ, F.P",
    identificacion: "V-10597604",
    monto: "1.277,50"
  },
  {
    id: 5690,
    cliente: "AGROFERREINVERSIONES ABRIL, C.A",
    identificacion: "J-41085861-3",
    monto: "344,30"
  },
  {
    id: 5691,
    cliente: "AGROPECUARIA JS, C.A",
    identificacion: "J-41108151-5",
    monto: "2.992,50"
  },
  {
    id: 5692,
    cliente: "EDECIO GONZALEZ",
    identificacion: "V-10911551",
    monto: "20,64"
  },
  {
    id: 5693,
    cliente: "COMERCIALIZADORA AGRICOLA AMAIA C.A.",
    identificacion: "J-50823440-5",
    monto: "70,48"
  },
  {
    id: 5694,
    cliente: "CARLOS DARIO CORDERO PAREDES",
    identificacion: "V-5496246",
    monto: "68,95"
  },
  {
    id: 5695,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "329,76"
  },
  {
    id: 5696,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "333,10"
  },
  {
    id: 5697,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "350,00"
  },
  {
    id: 5698,
    cliente: "AGROCRIKET, C.A",
    identificacion: "J-50345970-0",
    monto: "122,78"
  },
  {
    id: 5699,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "200,00"
  },
  {
    id: 5700,
    cliente: "EL CIMARRON AGROSERVICIOS Y CONSTRUCCIONES, C.A",
    identificacion: "J-30249193-2",
    monto: "2.240,00"
  },
  {
    id: 5701,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "245,86"
  },
  {
    id: 5702,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "2.211,00"
  },
  {
    id: 5703,
    cliente: "INVERSIONES EL GRAN YO SOY DE ROSSI MARGARITA RIVERA, F.P",
    identificacion: "V-19383121",
    monto: "492,72"
  },
  {
    id: 5704,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "760,00"
  },
  {
    id: 5705,
    cliente: "FRANCISCO JAVIER GIL",
    identificacion: "V-20707730",
    monto: "291,00"
  },
  {
    id: 5706,
    cliente: "AGROPECUARIA LA FORTALEZA, C.A",
    identificacion: "J-31032877-3",
    monto: "1.097,00"
  },
  {
    id: 5707,
    cliente: "AGROPECUARIA LOS SAUCES, C.A.",
    identificacion: "J-31323644-6",
    monto: "134,40"
  },
  {
    id: 5708,
    cliente: "LUIS EDUARDO PACHECO",
    identificacion: "V-16990035",
    monto: "14,21"
  },
  {
    id: 5709,
    cliente: "INVERSIONES AGROPECUARIA LA PERLA, S.A",
    identificacion: "J-07019538-0",
    monto: "231,14"
  },
  {
    id: 5710,
    cliente: "JUAN ANTONELO",
    identificacion: "V-12906459",
    monto: "2.202,52"
  },
  {
    id: 5711,
    cliente: "JUAN ANTONELO",
    identificacion: "V-12906459",
    monto: "20,00"
  },
  {
    id: 5712,
    cliente: "AGROINSUMOS NELSON LACRUZ DE NELSON ENRIQUE LACRUZ UZCATEGUI",
    identificacion: "V-24135855",
    monto: "175,00"
  },
  {
    id: 5713,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "117,96"
  },
  {
    id: 5714,
    cliente: "PEDRO SUAREZ",
    identificacion: "V-18801217",
    monto: "42,21"
  },
  {
    id: 5715,
    cliente: "CONRRADO PEREZ",
    identificacion: "V-15584063",
    monto: "6,00"
  },
  {
    id: 5716,
    cliente: "PEDRO MARIN",
    identificacion: "V-18457912",
    monto: "136,50"
  },
  {
    id: 5717,
    cliente: "FRANCIS BASTIDAS",
    identificacion: "V-27022751",
    monto: "24,42"
  },
  {
    id: 5718,
    cliente: "AGROTIENDA CASA GREEN, C.A",
    identificacion: "J-50231577-2",
    monto: "84,00"
  }
];


module.exports = datosDeVentas