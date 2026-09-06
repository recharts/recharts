import{R as e}from"./iframe-DVVgwXG1.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-Cy6ToStD.js";import{C as i}from"./ComposedChart-CyvTvZ7f.js";import{B as m}from"./Brush-CA8-D3Ut.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3PkmjBJ2.js";import"./index-DAITARgG.js";import"./index-Bm6wqvaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CO-uE6eF.js";import"./isWellBehavedNumber-CW2NuOI6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgxxYcZz.js";import"./axisSelectors-sfX5WmHa.js";import"./d3-scale-DTJLq2d9.js";import"./index-BzHv6xXV.js";import"./index-By4rtoco.js";import"./renderedTicksSlice-CfmunlkM.js";import"./index-BybtA4IG.js";import"./CartesianChart-CwTnpeKy.js";import"./chartDataContext-Sl_P3rcZ.js";import"./CategoricalChart-LtJN5gjM.js";import"./Layer-DfoKGH6M.js";import"./Text-x0LSajbz.js";import"./DOMUtils-Dl_vO6wQ.js";import"./useId-fZgFwXfQ.js";import"./useBackwardsCompatibleTheme-C6Trngm8.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const V=["InSurface"];export{s as InSurface,V as __namedExportsOrder,U as default};
