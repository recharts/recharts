import{r as v,e}from"./iframe-xRIz3qbF.js";import{B as i}from"./Brush-DvGNkelF.js";import{R}from"./arrayEqualityCheck-BdN7i4MO.js";import{C as p}from"./ComposedChart-BETovjYm.js";import{L as t}from"./Line-7Y3laxmY.js";import{R as c}from"./RechartsHookInspector-CC_tuF9F.js";import{X as S}from"./XAxis-k5taAUht.js";import{Y as A}from"./YAxis-cxDuI0HH.js";import{C as m}from"./CartesianGrid-c2xUxGhI.js";import{L as w}from"./Legend-BRXMMC1y.js";import{R as d}from"./ReferenceLine-prSiHhq5.js";import{L as B}from"./LineChart-XctFw3Wu.js";import{T as N}from"./Tooltip-CWNo9MQC.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./axisSelectors-CpIgH2EX.js";import"./Layer-BmRFOYbB.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./chartDataContext-BSH8i1Pa.js";import"./RechartsWrapper-y0J6uKM2.js";import"./hooks-0oNAH-Yd.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-taOmKSzk.js";import"./CategoricalChart-Dtl4cVT_.js";import"./ReactUtils-Cl__7Wwh.js";import"./Label-w-b8AlxD.js";import"./ZIndexLayer-CoDEXRAT.js";import"./ActivePoints-B2mIzCuP.js";import"./Dot-hvJwAgko.js";import"./types-BXkuDJCo.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./ErrorBarContext-BFUqajde.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./useAnimationId-Ca9wkO8e.js";import"./getRadiusAndStrokeWidthFromDot-D90JWDGP.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./Symbols-DxmxARm7.js";import"./Curve-DYmyqph4.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";import"./CartesianAxis-7YSNf4Ta.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DkvR4EFs.js";import"./iteratee-CaECTpuh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-DgBjufwG.js";const We={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Te=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Te as __namedExportsOrder,We as default};
