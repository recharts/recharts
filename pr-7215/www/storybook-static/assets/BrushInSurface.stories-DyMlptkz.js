import{c as e}from"./iframe-D2N5XcPI.js";import{d as a}from"./Time-D4Einjlh.js";import{g as $}from"./zIndexSlice-RoIFDUUO.js";import{C as i}from"./ComposedChart-Blurisz3.js";import{B as m}from"./Brush-CfUf2aLQ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DD2jh41l.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./get-DEEjpUoM.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./CategoricalChart-BLp4HgeB.js";import"./Layer-BVkY8iZh.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";const P={title:"Examples/cartesian/Brush/In Surface"},d={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:s,height:o}=t;return e.createElement("path",{d:`M${n+s/2},${r}L${n+s},${r+o/2}L${n+s/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=d.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const Q=["InSurface"];export{d as InSurface,Q as __namedExportsOrder,P as default};
