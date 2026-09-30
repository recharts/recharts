import{R as e}from"./iframe-BU3iqhog.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-Cpd3Oi8q.js";import{C as i}from"./ComposedChart-CnlQVWiV.js";import{B as m}from"./Brush-DocpsU-m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dtv6RWTH.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./Layer-BUBmv9mO.js";import"./Text-BrjMZ7T0.js";import"./DOMUtils-CiCEa87M.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};export{s as InSurface,V as __namedExportsOrder,U as default};
