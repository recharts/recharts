const nodeLinkData = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 291741 },
    { source: 2, target: 4, value: 62429 },
  ],
};

const complexNodeLinkData = {
  nodes: [
    { name: 'Income' },
    { name: 'Budget' },
    { name: 'Investment' },
    { name: 'Real Estate' },
    { name: 'Crypto' },
    { name: 'Stocks & Funds' },
    { name: 'Saving' },
    { name: 'Scpi' },
    { name: 'BTC' },
    { name: 'ETH' },
    { name: 'SOL' },
    { name: 'Housing' },
    { name: 'Food' },
    { name: 'Rent' },
    { name: 'Utility' },
    { name: 'Mortgage' },
    { name: 'Groceries' },
    { name: 'Delivery' },
    { name: 'Restaurant' },
  ],
  links: [
    {
      source: 0,
      target: 1,
      value: 8500,
    },
    {
      source: 1,
      target: 2,
      value: 2300,
    },
    {
      source: 1,
      target: 3,
      value: 400,
    },
    {
      source: 1,
      target: 4,
      value: 1250,
    },
    {
      source: 2,
      target: 5,
      value: 1800,
    },
    {
      source: 2,
      target: 6,
      value: 500,
    },
    {
      source: 3,
      target: 7,
      value: 400,
    },
    {
      source: 4,
      target: 8,
      value: 500,
    },
    {
      source: 4,
      target: 9,
      value: 500,
    },
    {
      source: 4,
      target: 10,
      value: 250,
    },
    {
      source: 1,
      target: 11,
      value: 3384,
    },
    {
      source: 1,
      target: 12,
      value: 800,
    },
    {
      source: 11,
      target: 13,
      value: 1234,
    },
    {
      source: 11,
      target: 14,
      value: 150,
    },
    {
      source: 11,
      target: 15,
      value: 2000,
    },
    {
      source: 12,
      target: 16,
      value: 450,
    },
    {
      source: 12,
      target: 17,
      value: 200,
    },
    {
      source: 12,
      target: 18,
      value: 150,
    },
  ],
};

export { nodeLinkData, complexNodeLinkData };
