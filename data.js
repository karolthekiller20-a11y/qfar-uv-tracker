const semesters = [
  {
    number: 1,
    label: "Semestre 1",
    courses: [
      {
        code: "QFAR111",
        name: "Química General I",
        prerequisites: []
      },
      {
        code: "QFAR112",
        name: "Matemáticas",
        prerequisites: []
      },
      {
        code: "QFAR113",
        name: "Biología Celular",
        prerequisites: []
      },
      {
        code: "QFAR114",
        name: "Introducción al Laboratorio",
        prerequisites: []
      },
      {
        code: "QFAR115",
        name: "Introducción a la Química y Farmacia",
        prerequisites: []
      },
      {
        code: "QFAR116",
        name: "Anatomía",
        prerequisites: []
      },
      {
        code: "TNL",
        name: "Taller Nivelación Lengua Materna",
        prerequisites: []
      }
    ]
  },

  {
    number: 2,
    label: "Semestre 2",
    courses: [
      {
        code: "QFAR121",
        name: "Química General II",
        prerequisites: ["QFAR111","QFAR114"]
      },
      {
        code: "QFAR122",
        name: "Cálculo",
        prerequisites: ["QFAR112"]
      },
      {
        code: "QFAR123",
        name: "Fisiología I",
        prerequisites: ["QFAR113","QFAR116"]
      },
      {
        code: "QFAR124",
        name: "Química Orgánica I",
        prerequisites: ["QFAR111","QFAR114"]
      },
      {
        code: "QFAR125",
        name: "Introducción a la Estadística",
        prerequisites: ["QFAR112"]
      },
      {
        code: "TNI",
        name: "Taller Nivelación Inglés",
        prerequisites: []
      }
    ]
  }
];
