import{r as g,R as e}from"./iframe-CwAvad--.js";import{B as i}from"./Brush-mOxrE-sl.js";import{R as B}from"./zIndexSlice-B2fpzDns.js";import{C as p}from"./ComposedChart-CqWNcaET.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-6FU32cog.js";import{L as D}from"./LineChart-_-H7-oS0.js";import{R as m}from"./ReferenceLine-DE7eqF92.js";import{C as d}from"./CartesianGrid-DllQ9z3q.js";import{X as S}from"./XAxis-BvogKVrk.js";import{Y as A}from"./YAxis-MJLPmDW2.js";import{L as R}from"./Legend-B1tdzHVH.js";import{T as w}from"./Tooltip-Bt4YXD2U.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-DrEfcBvU.js";import"./resolveDefaultProps-IMOML7UF.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./chartDataContext-QAMmb-FO.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./throttle-CrTklCSM.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./d3-scale-D8xH9yG8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DnHhaR9q.js";import"./CategoricalChart-Bfs9hS_5.js";import"./Curve-D0-SKbNI.js";import"./types-MLS83tAs.js";import"./step-2IVSrnG4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ChIe5_bS.js";import"./Label-Bfni9WDi.js";import"./ZIndexLayer-nfC8QR9T.js";import"./useAnimationId--5AtISHD.js";import"./ActivePoints-C9ktctM9.js";import"./Dot-Dc5RP_RF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./getRadiusAndStrokeWidthFromDot-BTB7kz6B.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./CartesianAxis-Bp0BWyNg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-Gg7Vpfem.js";import"./symbol-BMZOsAHr.js";import"./useElementOffset-Cg3HrgTI.js";import"./uniqBy-BQQiLG87.js";import"./iteratee-A6arNK9y.js";import"./Cross-Du1c2uqK.js";import"./Rectangle-CDEEKCGc.js";import"./util-Dxo8gN5i.js";import"./Sector-6KETZnCF.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
