import{R as e}from"./iframe-GoDWXF60.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-rcyByprz.js";import{C as i}from"./ComposedChart-BNv_QKcO.js";import{B as m}from"./Brush-BoC4rdi7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BC2iKf2c.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./d3-scale-Dm23_hA9.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./index-b9Wor0gC.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./Layer-BmsCQfeY.js";import"./Text-DHajDoQn.js";import"./DOMUtils-BcP1iiu3.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
