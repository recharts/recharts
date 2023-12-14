export interface SunburstData {
  name: string;
  value?: number;
  children?: SunburstData[];
}

const hierarchy: SunburstData = {
  name: 'Child1',
  value: 100,
  children: [
    {
      name: 'Child1 > Child1',
      value: 30,
      children: [
        {
          name: 'third child',
          value: 10,
        },
        {
          name: 'another child',
          value: 5,
        },
        {
          name: 'next child',
          value: 15,
        },
      ],
    },
    {
      name: 'Child1 > Child2',
      value: 20,
      children: [
        {
          name: 'another child',
          value: 5,
        },
        {
          name: 'next child',
          value: 15,
        },
      ],
    },
    {
      name: 'Child1 > Child3',
      value: 20,
    },
    {
      name: 'Child1 > Child3',
      value: 10,
    },
    {
      name: 'Child1 > Child3',
      value: 20,
    },
  ],
};

export { hierarchy };
