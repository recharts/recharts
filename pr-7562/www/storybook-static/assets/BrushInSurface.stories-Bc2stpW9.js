import{R as e}from"./iframe-54ZcEpUv.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-D4EcTS4q.js";import{C as i}from"./ComposedChart-CXJcoZU4.js";import{B as m}from"./Brush-B3l0NgoS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DtmCwuH2.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./d3-scale-Bz_vEXwn.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./Layer-C5bNrRV9.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";const N={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const P=["InSurface"];export{s as InSurface,P as __namedExportsOrder,N as default};
