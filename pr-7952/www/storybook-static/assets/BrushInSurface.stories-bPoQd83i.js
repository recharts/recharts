import{R as e}from"./iframe-W_agkVyV.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-CTdReD9p.js";import{C as i}from"./ComposedChart-C5TkesQ1.js";import{B as m}from"./Brush-Be9gYy2k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./isWellBehavedNumber-DiRVonYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./Layer-BtznfAPn.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
