import{R as e}from"./iframe-DZbjLUQo.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-kNjtHJvr.js";import{C as i}from"./ComposedChart-B2VCtYfx.js";import{B as m}from"./Brush-Gk9fr-WE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7gpneaA.js";import"./axisSelectors-SzDg3mS0.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./Layer-Dh4rshAh.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
