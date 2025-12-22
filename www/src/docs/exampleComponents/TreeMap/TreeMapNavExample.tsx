import { Treemap } from 'recharts';

// #region Sample data
const data = [{ size: 20 }, { size: 30 }, { size: 50 }];

// #endregion
const TreeMapNavExample = () => {
  return (
    <Treemap
      style={{ width: '100%', height: '3rem', aspectRatio: 2 * 1.618 }}
      data={data}
      dataKey="size"
      aspectRatio={2 * 1.618}
      stroke="#fff"
      fill="#8884d8"
    />
  );
};

export default TreeMapNavExample;
