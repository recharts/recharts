import{R as e}from"./iframe-BcaWFD7u.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-bS7cYBKO.js";import{C as i}from"./ComposedChart-BWld5lXM.js";import{B as m}from"./Brush-BNj-6d6u.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dz1UTb_M.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./Layer-BhtJX80Y.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";const Q={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const U=["InSurface"];export{s as InSurface,U as __namedExportsOrder,Q as default};
