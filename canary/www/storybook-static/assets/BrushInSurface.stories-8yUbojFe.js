import{R as e}from"./iframe-Bo_zsOWR.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-OHt7JoW7.js";import{C as i}from"./ComposedChart-DjFfvHi0.js";import{B as m}from"./Brush-DwK9VCeC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BqQSOARz.js";import"./index-BFt4SfZr.js";import"./index-PR_8Seu8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUDDeE56.js";import"./isWellBehavedNumber-DciPVP_A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXOTGCmH.js";import"./axisSelectors-CoIK-Kuy.js";import"./d3-scale-CKJS4wTS.js";import"./index-krRAv2GK.js";import"./index-Mut52yxE.js";import"./renderedTicksSlice-CdFXeG0P.js";import"./index-DviWxMqn.js";import"./CartesianChart-CzEQA5tK.js";import"./chartDataContext-Cxr8uE5y.js";import"./CategoricalChart-fHgXn9UL.js";import"./Layer-CAovhaI5.js";import"./Text-bwywBWWq.js";import"./DOMUtils-Bc-kV__a.js";import"./useId-DYywqoqR.js";import"./useBackwardsCompatibleTheme-Qf0ZXpAz.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
