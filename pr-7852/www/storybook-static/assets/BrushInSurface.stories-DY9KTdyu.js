import{R as e}from"./iframe-Bh4IukvS.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-BnhPp-nh.js";import{C as i}from"./ComposedChart-qa2sMwNO.js";import{B as m}from"./Brush-BnNIUmQ1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXYaw1-J.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS55fj5A.js";import"./isWellBehavedNumber-COGARIBs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CloVGpsi.js";import"./axisSelectors-C8F9z3Z9.js";import"./d3-scale-BYEA786G.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./renderedTicksSlice-DKLC06E4.js";import"./index-BoLfeuKb.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./Layer-O2qI8LTc.js";import"./Text-ByHw94zt.js";import"./DOMUtils-jG16kJ-0.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
