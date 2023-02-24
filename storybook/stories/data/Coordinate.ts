const coordinateData = [
  {
    x: 9,
    y: 5,
  },
  {
    x: 15,
    y: 30,
  },
  {
    x: 28,
    y: 50,
  },
  {
    x: 500,
    y: 200,
  },
];

const coordinateWithValueData = [
  { x: 10, y: 50, value: 100 },
  { x: 150, y: 150, value: 100 },
  { x: 290, y: 70, value: 100 },
  { x: 430, y: 60, value: 100 },
  { x: 570, y: 30, value: 100 },
];

const coordinateWithNullY = [
  { x: 10, y: 50 },
  { x: 150, y: 150 },
  { x: 290, y: null },
  { x: 430, y: 60 },
  { x: 570, y: 30 },
];

export { coordinateData, coordinateWithValueData, coordinateWithNullY };
