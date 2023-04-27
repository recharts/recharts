const sizeData = [
  {
    name: 'analytics',
    children: [
      {
        name: 'cluster',
        children: [
          { name: 'AgglomerativeCluster', size: 10 },
          { name: 'CommunityStructure', size: 20 },
          { name: 'HierarchicalCluster', size: 30 },
          { name: 'MergeEdge', size: 40 },
        ],
      },
      {
        name: 'optimization',
        children: [{ name: 'AspectRatioBanker', size: 100 }],
      },
    ],
  },
  {
    name: 'physics',
    children: [{ name: 'DragForce', size: 200 }],
  },
];

export { sizeData };
