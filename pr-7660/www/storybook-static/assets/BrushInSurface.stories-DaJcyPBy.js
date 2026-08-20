import{R as e}from"./iframe-zwg8Ck3J.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-NosrfnoV.js";import{C as i}from"./ComposedChart-B4XJvNSo.js";import{B as m}from"./Brush-DlMgx64j.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba88YkIO.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./axisSelectors-B51wYZzi.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./CategoricalChart-COKLxFKu.js";import"./Layer-BMjk1XnO.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";const Q={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
