import{R as e}from"./iframe-F7LhK7Eo.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-B_tReVy-.js";import{C as i}from"./ComposedChart-mcVYsTsk.js";import{B as m}from"./Brush-b2xq4HC5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_DYoZtt.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./Layer-DYdC0UVh.js";import"./Text-DW85mx3b.js";import"./DOMUtils-BT8dLI2y.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
