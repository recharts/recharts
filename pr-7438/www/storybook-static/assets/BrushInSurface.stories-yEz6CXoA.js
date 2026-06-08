import{R as e}from"./iframe-DWmnh-44.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-BJoYTr5_.js";import{C as i}from"./ComposedChart-W6hZFmz1.js";import{B as m}from"./Brush-BNJeVHID.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DUM2qh_d.js";import"./index-DOTsKUtA.js";import"./index-BHMOAiDy.js";import"./get-BnHecJzQ.js";import"./resolveDefaultProps-CaNslZFW.js";import"./isWellBehavedNumber-fLv0mpTe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3xTPXxL.js";import"./index-DVoRxuxV.js";import"./index-DYZmblhi.js";import"./renderedTicksSlice-DsxFAPWV.js";import"./axisSelectors-BiiECraK.js";import"./d3-scale-Cf8jgknj.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CARUth8A.js";import"./chartDataContext-CAO4RomS.js";import"./CategoricalChart-BUEeThvR.js";import"./Layer-BzPfvU9G.js";import"./Text-DgygHz8M.js";import"./DOMUtils-DIpMDOYS.js";const P={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const Q=["InSurface"];export{s as InSurface,Q as __namedExportsOrder,P as default};
