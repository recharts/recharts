import{r as g,R as e}from"./iframe-DmhIhH2M.js";import{B as i}from"./Brush-1ZrjQVEm.js";import{R as B}from"./zIndexSlice-DeBpIagA.js";import{C as p}from"./ComposedChart-ChlzmAy5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D1lDVI0J.js";import{L as D}from"./LineChart-2nPrNSar.js";import{R as m}from"./ReferenceLine-kXV1S6Gi.js";import{C as d}from"./CartesianGrid-BJf1gxhT.js";import{X as S}from"./XAxis-CY-yJKaB.js";import{Y as A}from"./YAxis-Bd-9gvNF.js";import{L as R}from"./Legend-FVCMzRGs.js";import{T as w}from"./Tooltip-CScVRDo5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BMOKRRSC.js";import"./d3-scale-BlfVJ3Lp.js";import"./immer-lqUHKS7P.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./string-B6fdYHAA.js";import"./Layer-BQ4TD7AW.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./isWellBehavedNumber-yi49kod_.js";import"./chartDataContext-Bz86G8Ko.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./axisSelectors-BcE8uUaD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNQnxap5.js";import"./CategoricalChart-Be8j81vN.js";import"./Curve-CUt78Byo.js";import"./types-ChCyCTKP.js";import"./step-Cfvx5huc.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D_A-W6sA.js";import"./Label-C1lSOaos.js";import"./ZIndexLayer-qAObD_uq.js";import"./useAnimationId-CIds5Px0.js";import"./ActivePoints-Bn_C34jU.js";import"./Dot-D4RDD7gw.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getRadiusAndStrokeWidthFromDot-C1-mcmXd.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./CartesianAxis-C8QhC4vv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-bmVrm1PP.js";import"./symbol-DzNzzMDl.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";import"./Cross-6N8YKHWm.js";import"./Rectangle-BUGLdKb8.js";import"./Sector-D-2Yrtfy.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,I,f;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var L,b,K;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      </ComposedChart>;
  }
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Xe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Xe as __namedExportsOrder,Ge as default};
