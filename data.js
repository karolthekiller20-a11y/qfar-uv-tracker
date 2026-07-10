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
{
  number: 2,
  label: 'Semestre 2',
  courses: [
    {
      code: 'QFAR121',
      name: 'Química General II',
      semester: 2,
      prerequisites: ['QFAR111'],
      status: 'locked',
    },
    {
      code: 'QFAR122',
      name: 'Cálculo',
      semester: 2,
      prerequisites: ['QFAR112'],
      status: 'locked',
    },
    {
      code: 'QFAR123',
      name: 'Fisiología I',
      semester: 2,
      prerequisites: ['QFAR113', 'QFAR116'],
      status: 'locked',
    },
    {
      code: 'QFAR124',
      name: 'Química Orgánica I',
      semester: 2,
      prerequisites: ['QFAR111'],
      status: 'locked',
    },
    {
      code: 'QFAR125',
      name: 'Introducción a la Estadística',
      semester: 2,
      prerequisites: ['QFAR112'],
      status: 'locked',
    },
    {
      code: 'TNI',
      name: 'Taller Nivelación Inglés',
      semester: 2,
      prerequisites: [],
      status: 'available',
    },
  ],
},{
  number: 3,
  label: 'Semestre 3',
  courses: [
    {
      code: 'QFAR231',
      name: 'Bioquímica General',
      semester: 3,
      prerequisites: ['QFAR113', 'QFAR121'],
      status: 'locked',
    },
    {
      code: 'QFAR232',
      name: 'Fisicoquímica',
      semester: 3,
      prerequisites: ['QFAR121', 'QFAR122'],
      status: 'locked',
    },
    {
      code: 'QFAR233',
      name: 'Fisiología II',
      semester: 3,
      prerequisites: ['QFAR123'],
      status: 'locked',
    },
    {
      code: 'QFAR234',
      name: 'Química Orgánica II',
      semester: 3,
      prerequisites: ['QFAR124'],
      status: 'locked',
    },
    {
      code: 'QFAR235',
      name: 'Salud Pública',
      semester: 3,
      prerequisites: ['QFAR125'],
      status: 'locked',
    },
    {
      code: 'QFAR236',
      name: 'Microbiología',
      semester: 3,
      prerequisites: ['QFAR113'],
      status: 'locked',
    },
  ],{
  number: 4,
  label: 'Semestre 4',
  courses: [
    {
      code: 'QFAR241',
      name: 'Farmacognosia I',
      semester: 4,
      prerequisites: ['QFAR231'],
      status: 'locked',
    },
    {
      code: 'QFAR242',
      name: 'Química Analítica',
      semester: 4,
      prerequisites: ['QFAR232'],
      status: 'locked',
    },
    {
      code: 'QFAR243',
      name: 'Patología',
      semester: 4,
      prerequisites: ['QFAR233'],
      status: 'locked',
    },
    {
      code: 'QFAR244',
      name: 'Química Orgánica III',
      semester: 4,
      prerequisites: ['QFAR234'],
      status: 'locked',
    },
    {
      code: 'QFAR245',
      name: 'Parasitología',
      semester: 4,
      prerequisites: ['QFAR236'],
      status: 'locked',
    },
    {
      code: 'QFAR246',
      name: 'Bioestadística',
      semester: 4,
      prerequisites: ['QFAR125'],
      status: 'locked',
    },
  ],
},
},
];
