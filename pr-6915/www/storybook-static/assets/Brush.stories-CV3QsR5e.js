import{r as v,e}from"./iframe-NQnSavsc.js";import{B as i}from"./Brush-piUxM61N.js";import{R}from"./arrayEqualityCheck-ClUhvVMc.js";import{C as p}from"./ComposedChart-CtfPGNRU.js";import{L as t}from"./Line-CwyMShR5.js";import{R as c}from"./RechartsHookInspector-CrS4ifUj.js";import{X as S}from"./XAxis-BVWUh-i7.js";import{Y as A}from"./YAxis-B4mT5_6h.js";import{C as m}from"./CartesianGrid-uwgsZBij.js";import{L as w}from"./Legend-BMjXqy5o.js";import{R as d}from"./ReferenceLine-CgAjMLHb.js";import{L as B}from"./LineChart-D9eVXnkL.js";import{T as N}from"./Tooltip-DcWfx3tc.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clR4-9At.js";import"./axisSelectors-GttesoX_.js";import"./Layer-BUJpEzYu.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./chartDataContext-BPtWcoks.js";import"./RechartsWrapper-BFx6ycKR.js";import"./hooks-BcaLrk1Y.js";import"./zIndexSlice-nS_oTVB0.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DsO03C2-.js";import"./CategoricalChart--MZ7Ud20.js";import"./ReactUtils-B56Ms0vK.js";import"./Label-CdLQa_Zq.js";import"./ZIndexLayer-D7r7UDo0.js";import"./ActivePoints-_Hw47NBl.js";import"./Dot-DSKTAfka.js";import"./types-Ditu6fq2.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./ErrorBarContext-CSixxnwN.js";import"./GraphicalItemClipPath-DBWQaJ3W.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./useAnimationId-DY2MKiMD.js";import"./getRadiusAndStrokeWidthFromDot-CnaxLYsp.js";import"./ActiveShapeUtils-CdNAARSB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dUbZu5CP.js";import"./Trapezoid-BZ0zgDCf.js";import"./Sector-DKYprxhX.js";import"./Symbols-C7hNVpPd.js";import"./Curve-D3iL2MuF.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";import"./CartesianAxis-BxH1zk3Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-C8NPmaKx.js";import"./iteratee-R7qkJOYZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-u9ebXOeT.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (_args: Args) => {
    const [startIndex, setStartIndex] = useState<number | undefined>(2);
    const [endIndex, setEndIndex] = useState<number | undefined>(5);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" isAnimationActive={false} />

            <Brush startIndex={startIndex} endIndex={endIndex} onChange={e => {
            setEndIndex(e.endIndex);
            setStartIndex(e.startIndex);
          }} alwaysShowText />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
        <input type="number" aria-label="startIndex" value={startIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setStartIndex(num);
      }} />
        <input aria-label="endIndex" value={endIndex} onChange={evt => {
        const num = Number(evt.target.value);
        if (Number.isInteger(num)) setEndIndex(num);
      }} />
      </>;
  }
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData} margin={{
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
        r: 8
      }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <ReferenceLine stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
        <Brush dataKey="name">
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <Tooltip />
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,K,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (_args: Args) => {
    return <ComposedChart width={600} height={300} data={pageData}>
        <Brush>
          <LineChart>
            <ReferenceLine key="test" stroke="red" strokeOpacity="red" strokeWidth={3} strokeLinecap="round" y={1000} />
            <CartesianGrid strokeDasharray="1 1" verticalPoints={[10, 20, 30]} horizontalPoints={[10, 20, 30]} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Brush>
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const We=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,We as __namedExportsOrder,Oe as default};
