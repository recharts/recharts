import{R as e}from"./iframe-DjMXRMWw.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-CtOSUbKS.js";import{C as i}from"./ComposedChart-BWguOzjW.js";import{B as m}from"./Brush-BrxrYFSC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-inystY2z.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnIn7gPv.js";import"./axisSelectors-CNz5a2R6.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./Layer-CXKDxib5.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
