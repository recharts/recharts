import{r as g,R as e}from"./iframe-DI4HGhHh.js";import{B as i}from"./Brush-_uzboENN.js";import{R as B}from"./zIndexSlice-DLsQIX9Y.js";import{C as p}from"./ComposedChart-BT-NJBPH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BIfkn347.js";import{L as D}from"./LineChart-oDL7AdGy.js";import{R as m}from"./ReferenceLine-BHS9LCDX.js";import{C as d}from"./CartesianGrid-DFT4IhYc.js";import{X as S}from"./XAxis-Dj4RjVoP.js";import{Y as A}from"./YAxis-C1Oi2VZJ.js";import{L as R}from"./Legend-r05uFuGy.js";import{T as w}from"./Tooltip-DGuMnXiM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfcmt9LS.js";import"./d3-scale-CmlQQQpT.js";import"./immer-CAVNBYxE.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./Layer-2I2RJkTJ.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./chartDataContext-GaamtoMW.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dp7N-Hpx.js";import"./CategoricalChart-D5RDPchP.js";import"./Curve-D1vPRm9h.js";import"./types-BM9AiZnq.js";import"./step-D4TxsChD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B_Y2HCHw.js";import"./Label-BOdAN_xF.js";import"./ZIndexLayer-CAI-vp6k.js";import"./useAnimationId-B5j5oAoh.js";import"./ActivePoints-Br89aa_G.js";import"./Dot--Dziv_M5.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getRadiusAndStrokeWidthFromDot-DU4jn54H.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./CartesianAxis-XgaOnUyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Bn-ZN7NN.js";import"./symbol-Bxz5MfJW.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";import"./Cross-B3VN6dnN.js";import"./Rectangle-CdJqIjzl.js";import"./util-Dxo8gN5i.js";import"./Sector-ohE8-JF6.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
