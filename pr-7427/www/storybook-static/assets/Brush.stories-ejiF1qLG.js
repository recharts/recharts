import{r as g,R as e}from"./iframe-gLXjAGh2.js";import{B as i}from"./Brush-reamUmG2.js";import{R as B}from"./zIndexSlice-BiRgg5Ku.js";import{C as p}from"./ComposedChart-JJ7W0sdT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CYHfJ8Mx.js";import{L as D}from"./LineChart-Bq3Yqggi.js";import{R as m}from"./ReferenceLine-C21HHxVe.js";import{C as d}from"./CartesianGrid-B_jcyNg_.js";import{X as S}from"./XAxis-DwB13nw6.js";import{Y as A}from"./YAxis-sdrrSkAr.js";import{L as R}from"./Legend-B6WdNlEd.js";import{T as w}from"./Tooltip-CuqSWY1W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Qcb7JOLO.js";import"./d3-scale-Ce8TMAGR.js";import"./immer-JN2QralJ.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./string-B6fdYHAA.js";import"./Layer-BmcxLaEj.js";import"./resolveDefaultProps-CF7N32I5.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./chartDataContext-ClIe94X6.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./renderedTicksSlice-xzybHrTF.js";import"./axisSelectors-CZIlY7LR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BlBRmLbV.js";import"./CategoricalChart-2uN7uMEr.js";import"./Curve-D6HNQ0fs.js";import"./types-BTt0M0gg.js";import"./step-DHNiqqKo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BahKKeqN.js";import"./Label-CJgHZQsX.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./useAnimationId-Cl5wMxi-.js";import"./ActivePoints-gwX5g1ZR.js";import"./Dot-B_5lkSZo.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getRadiusAndStrokeWidthFromDot--8r5PZrP.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./CartesianAxis-FCBmPftJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-CO1Km2T0.js";import"./symbol-Bq_9R8Y2.js";import"./useElementOffset-BY9xe1Fd.js";import"./uniqBy-DwtP5gK0.js";import"./iteratee-Dfb5foZq.js";import"./Cross-CrYY4UWB.js";import"./Rectangle-DMbb_PeV.js";import"./Sector-gyVqqxj3.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
