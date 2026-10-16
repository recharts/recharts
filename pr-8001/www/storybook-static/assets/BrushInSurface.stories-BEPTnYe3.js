import{R as e}from"./iframe-Dgm4gy-U.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-CiwacDpC.js";import{C as i}from"./ComposedChart-ByttuQ_a.js";import{B as m}from"./Brush-CRXFz2_-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zAOqa1T8.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./axisSelectors-mj5UOSEK.js";import"./d3-scale-CRCwBtC_.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./Layer-BihfHLDn.js";import"./Text-8gs2XgOQ.js";import"./pageBackground-Cm2lHn8y.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
