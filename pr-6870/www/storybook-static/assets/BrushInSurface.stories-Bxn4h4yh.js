import{e}from"./iframe-D2G3HIAp.js";import{a}from"./Time-CZh6Vidc.js";import{R as f}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as i}from"./ComposedChart-B3gygK9L.js";import{B as m}from"./Brush-Dk_jzg43.js";import{R as E}from"./RechartsHookInspector-Bl5k7Hvc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSJViu-.js";import"./PolarUtils-Dps0SkyA.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./zIndexSlice-DJ_SqHH-.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./Layer--_yZLHYD.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const K={title:"Examples/cartesian/Brush/In Surface"},s={render:()=>{const[h,u]=e.useState({startIndex:0,endIndex:a.length-1}),[p,I]=e.useState({startIndex:0,endIndex:a.length-1}),g=n=>{u(n)},C=n=>{I(n)},S=n=>{const{x:t,y:r,width:d,height:o}=n;return e.createElement("path",{d:`M${t+d/2},${r}L${t+d},${r+o/2}L${t+d/2},${r+o}L${t},${r+o/2}Z`,fill:"red",stroke:"none"})};return e.createElement(f,{width:"100%",height:200},e.createElement("p",null,"Simple Brush"),e.createElement(i,{data:a},e.createElement(m,{startIndex:h.startIndex,endIndex:h.endIndex,x:100,y:50,width:400,height:40,onChange:g,traveller:S})),e.createElement("p",null,"Brush has specified gap"),e.createElement(i,{data:a},e.createElement(m,{startIndex:p.startIndex,endIndex:p.endIndex,x:100,y:50,width:400,height:40,gap:5,onChange:C}),e.createElement(E,null)))}};var l,x,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(c=(x=s.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const N=["InSurface"];export{s as InSurface,N as __namedExportsOrder,K as default};
