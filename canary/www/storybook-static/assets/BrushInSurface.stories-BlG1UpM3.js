import{R as e}from"./iframe-H7jEjneP.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-Dwk71gAs.js";import{C as i}from"./ComposedChart-bb4rZ5JT.js";import{B as m}from"./Brush-ca5D_nJ6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn1i2xOI.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./isWellBehavedNumber-DWCHHiO4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./index-DrbE-eKG.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./Layer-FJAqqNNz.js";import"./Text-B4P_g0R9.js";import"./DOMUtils-C61hDB9-.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
