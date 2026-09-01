import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{G as r,K as i}from"./zIndexSlice-B0Kxc9j6.js";import{n as a,t as o}from"./Brush-CwCQ7MWG.js";import{n as s,t as c}from"./ComposedChart-BMuDWuTx.js";import{r as l,t as u}from"./Time-CX10VzMO.js";var d,f,p,m;function h(){return(h=t((()=>{d=e(n()),a(),i(),s(),l(),f={title:`Examples/cartesian/Brush/In Surface`},p={render:()=>{let[e,t]=d.useState({startIndex:0,endIndex:u.length-1}),[n,i]=d.useState({startIndex:0,endIndex:u.length-1});return d.createElement(r,{width:`100%`,height:200},d.createElement(`p`,null,`Simple Brush`),d.createElement(c,{data:u},d.createElement(o,{startIndex:e.startIndex,endIndex:e.endIndex,x:100,y:50,width:400,height:40,onChange:e=>{t(e)},traveller:e=>{let{x:t,y:n,width:r,height:i}=e;return d.createElement(`path`,{d:`M${t+r/2},${n}L${t+r},${n+i/2}L${t+r/2},${n+i}L${t},${n+i/2}Z`,fill:`red`,stroke:`none`})}})),d.createElement(`p`,null,`Brush has specified gap`),d.createElement(c,{data:u},d.createElement(o,{startIndex:n.startIndex,endIndex:n.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:e=>{i(e)}})))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`InSurface`]})))()}h();export{p as InSurface,m as __namedExportsOrder,f as default};