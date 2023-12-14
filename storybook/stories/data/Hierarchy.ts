export interface SunburstData {
  name: string;
  value?: number;
  children?: SunburstData[];
}

const hierarchy: SunburstData = {
  name: 'Root',
  value: 100,
  children: [
    {
      name: 'Child1',
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
          children: [
            {
              name: 'third level child',
              value: 5,
            },
            {
              name: 'third level child',
              value: 5,
            },
            {
              name: 'third level child',
              value: 5,
              children: [{ name: 'level 4', value: 2 }],
            },
          ],
        },
      ],
    },
    {
      name: 'Child2',
      value: 20,
      children: [
        {
          name: 'another child',
          value: 5,
        },
        {
          name: 'next child',
          value: 15,
          children: [
            { name: 'level 3 of child 2', value: 5 },
            { name: 'level 3 of child 2', value: 5 },
            { name: 'level 3 of child 2', value: 5 },
          ],
        },
      ],
    },
    {
      name: 'Child3',
      value: 20,
    },
    {
      name: 'Child4',
      value: 10,
    },
    {
      name: 'Child5',
      value: 20,
    },
  ],
};

export { hierarchy };
