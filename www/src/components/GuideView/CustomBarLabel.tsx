function CustomBarLabel(props: any) {
  const { x, y, width, value } = props;

  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
}

export default CustomBarLabel;
