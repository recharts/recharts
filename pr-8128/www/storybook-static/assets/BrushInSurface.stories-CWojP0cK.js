import{R as e}from"./iframe-DwhrPqQ2.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-CpWq1zjb.js";import{C as h}from"./ComposedChart-nvDFRK3z.js";import{B as m}from"./Brush-CNktvUxp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjT--ccN.js";import"./throttle-DfnnAIvE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./RechartsWrapper-DwGtUcHg.js";import"./axisSelectors-Co6y6k23.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C0de4oSn.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./Layer-vnYdlnEA.js";import"./Text-C74hS0lU.js";import"./DOMUtils-BcceySrU.js";import"./pageBackground-BJp9wwMp.js";import"./ZIndexLayer-BSdSgNTE.js";import"./themeFill-Dmspdt-4.js";const V={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[i,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(h,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(h,{data:a},e.createElement(m,{startIndex:i.startIndex,endIndex:i.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},W=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};export{s as InSurface,W as __namedExportsOrder,V as default};
