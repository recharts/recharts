import{r as v,e}from"./iframe-Qbvlqe9c.js";import{B as i}from"./Brush-p_5rnWxA.js";import{R}from"./arrayEqualityCheck-B3n_664E.js";import{C as p}from"./ComposedChart-dCvdXjW4.js";import{L as t}from"./Line-CETAi-Tq.js";import{R as c}from"./RechartsHookInspector-Bcf65z8s.js";import{X as S}from"./XAxis-DvwXUl6_.js";import{Y as A}from"./YAxis-CbhDcywn.js";import{C as m}from"./CartesianGrid-BrR2o-p8.js";import{L as w}from"./Legend-hkD0puSA.js";import{R as d}from"./ReferenceLine-DNJssYEO.js";import{L as B}from"./LineChart-l_WtTSqf.js";import{T as N}from"./Tooltip-DNiKyqgP.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./axisSelectors-DP3q5L3p.js";import"./Layer-CGD9i9Tv.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./chartDataContext-meOOuMw1.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./zIndexSlice-Dd4fWTvl.js";import"./PolarUtils-1Zh54hEc.js";import"./CartesianChart-BEe2ZeB9.js";import"./CategoricalChart-BN7dR1q_.js";import"./ReactUtils-DDfXx9yL.js";import"./Label-BjNpzDAS.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./ActivePoints-Z50a9Y5S.js";import"./Dot-K6oNejLl.js";import"./types-BIElRGEC.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./ErrorBarContext-BToEOD0T.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./useAnimationId-BMBkTPld.js";import"./getRadiusAndStrokeWidthFromDot-iWUSXSti.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./Trapezoid-B2gFU9p-.js";import"./Sector-Byha0vVB.js";import"./Symbols-DUUTByO6.js";import"./Curve-viWUlKkP.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";import"./CartesianAxis-a9jFIi9h.js";import"./useElementOffset-CVTdXMNm.js";import"./iteratee-D8VcXKhk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-Bkz5W_Jj.js";const _e={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Oe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Oe as __namedExportsOrder,_e as default};
