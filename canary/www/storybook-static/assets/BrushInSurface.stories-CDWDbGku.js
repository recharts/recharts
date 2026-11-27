import{R as e}from"./iframe-Dt7VmJVd.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-CsJRlQGe.js";import{C as i}from"./ComposedChart-BEVdjL9z.js";import{B as m}from"./Brush-DeZ7frQM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./throttle-DKLEp5Cv.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./RechartsWrapper-DmetyJsw.js";import"./axisSelectors-DsQjGGXt.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DKSFl2hd.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./Layer-CKqAbqeS.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";const Q={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},U=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};export{s as InSurface,U as __namedExportsOrder,Q as default};
