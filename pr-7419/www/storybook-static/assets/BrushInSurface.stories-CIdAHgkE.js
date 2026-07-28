import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{Vn as r,ct as i,t as a,u as o}from"./iframe-BiMB5Acc.js";import{t as s,u as c}from"./data-J2vpPkF6.js";var l,u,d,f;e((()=>{l=t(n()),a(),s(),u={title:`Examples/cartesian/Brush/In Surface`},d={render:()=>{let[e,t]=l.useState({startIndex:0,endIndex:c.length-1}),[n,a]=l.useState({startIndex:0,endIndex:c.length-1});return l.createElement(r,{width:`100%`,height:200},l.createElement(`p`,null,`Simple Brush`),l.createElement(o,{data:c},l.createElement(i,{startIndex:e.startIndex,endIndex:e.endIndex,x:100,y:50,width:400,height:40,onChange:e=>{t(e)},traveller:e=>{let{x:t,y:n,width:r,height:i}=e;return l.createElement(`path`,{d:`M${t+r/2},${n}L${t+r},${n+i/2}L${t+r/2},${n+i}L${t},${n+i/2}Z`,fill:`red`,stroke:`none`})}})),l.createElement(`p`,null,`Brush has specified gap`),l.createElement(o,{data:c},l.createElement(i,{startIndex:n.startIndex,endIndex:n.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:e=>{a(e)}})))}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface BrushStartEndIndex {
      startIndex?: number;
      endIndex?: number;
    }
    const [simple, setSimple] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1
    });
    const [gap, setGap] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateData.length - 1
    });
    const handleChange = (res: BrushStartEndIndex) => {
      setSimple(res);
    };
    const handleGapChange = (res: BrushStartEndIndex) => {
      setGap(res);
    };
    const renderTraveller = (props: {
      x: number;
      y: number;
      width: number;
      height: number;
    }) => {
      const {
        x,
        y,
        width,
        height
      } = props;
      return <path d={\`M\${x + width / 2},\${y}L\${x + width},\${y + height / 2}L\${x + width / 2},\${y + height}L\${x},\${y + height / 2}Z\`} fill="red" stroke="none" />;
    };
    return <ResponsiveContainer width="100%" height={200}>
        <p>Simple Brush</p>
        <ComposedChart data={dateData}>
          <Brush startIndex={simple.startIndex} endIndex={simple.endIndex} x={100} y={50} width={400} height={40} onChange={handleChange} traveller={renderTraveller} />
        </ComposedChart>
        <p>Brush has specified gap</p>
        <ComposedChart data={dateData}>
          <Brush startIndex={gap.startIndex} endIndex={gap.endIndex} x={100} y={50} width={400} height={40} gap={5} onChange={handleGapChange} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...d.parameters?.docs?.source}}},f=[`InSurface`]}))();export{d as InSurface,f as __namedExportsOrder,u as default};