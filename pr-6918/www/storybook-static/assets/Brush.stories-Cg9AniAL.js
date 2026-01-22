import{r as v,e}from"./iframe-DpxBiwXt.js";import{B as i}from"./Brush-BZexeKhx.js";import{R}from"./arrayEqualityCheck-FXkJUuOg.js";import{C as p}from"./ComposedChart-BpoK1MIm.js";import{L as t}from"./Line-By9eZF6k.js";import{R as c}from"./RechartsHookInspector-A8kV9_z_.js";import{X as S}from"./XAxis-BwhWcYGH.js";import{Y as A}from"./YAxis-Bi8itMA7.js";import{C as m}from"./CartesianGrid-DNW3g4XV.js";import{L as w}from"./Legend-Cjhc-YUg.js";import{R as d}from"./ReferenceLine-CmIjHZSi.js";import{L as B}from"./LineChart-C4piYulh.js";import{T as N}from"./Tooltip-BplPpqBs.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./axisSelectors-DxY3Hm_g.js";import"./Layer-B_VW6NEu.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./chartDataContext-WZeplglC.js";import"./RechartsWrapper-BjnJrxH9.js";import"./hooks-CjYZQI6e.js";import"./zIndexSlice-BKKsRI17.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-C8Msn2UK.js";import"./CategoricalChart-DGoypZYk.js";import"./ReactUtils-Dffr1epF.js";import"./Label-CEkR5yeX.js";import"./ZIndexLayer-D0mBkmdS.js";import"./ActivePoints-DmMdWDFy.js";import"./Dot-CHYi4_d9.js";import"./types-BBdfixzL.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./ErrorBarContext--hzc0ol9.js";import"./GraphicalItemClipPath-BxeldMcM.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./useAnimationId-xmRGVEvR.js";import"./getRadiusAndStrokeWidthFromDot-C96kEFaR.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./Symbols-DaC_yNBz.js";import"./Curve-D7R0OSkI.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";import"./CartesianAxis-DPFPdJc8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-K-XxmBs3.js";import"./iteratee-Bm9VQgEn.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-BPD08xqW.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
