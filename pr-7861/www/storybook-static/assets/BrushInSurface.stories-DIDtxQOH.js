import{R as e}from"./iframe-Bnv6kU7L.js";import{a}from"./Time-CZh6Vidc.js";import{R as $}from"./zIndexSlice-DX-eN-rE.js";import{C as i}from"./ComposedChart-B1DqhSVN.js";import{B as m}from"./Brush-B2BEvQxo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./Layer-LCeVZLuX.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";const U={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[p,u]=e.useState({startIndex:0,endIndex:a.length-1}),[h,g]=e.useState({startIndex:0,endIndex:a.length-1}),I=t=>{u(t)},C=t=>{g(t)},S=t=>{const{x:n,y:r,width:d,height:o}=t;return e.createElement("path",{d:`M${n+d/2},${r}L${n+d},${r+o/2}L${n+d/2},${r+o}L${n},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement($,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,onChange:I,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C})))}},V=["InSurface"];var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
