import{r as g,R as e}from"./iframe-BB3m-jQ-.js";import{B as i}from"./Brush-XRzdQ0hK.js";import{R as B}from"./zIndexSlice-FQKZcMr3.js";import{C as p}from"./ComposedChart-B0LqgEa_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BbNuxZg2.js";import{L as D}from"./LineChart-WRZI52TR.js";import{R as m}from"./ReferenceLine-B8TBDvpB.js";import{C as d}from"./CartesianGrid-D-mGIltq.js";import{X as S}from"./XAxis-pxNAoOYF.js";import{Y as A}from"./YAxis-DFvGwgRl.js";import{L as R}from"./Legend-CNZk2NxG.js";import{T as w}from"./Tooltip-MUgVRJs6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bu83WliH.js";import"./d3-scale-m2Sr9nLg.js";import"./immer-Bb2hNnOx.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./string-B6fdYHAA.js";import"./Layer-Bqk0isqQ.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./chartDataContext-DDcaXf9b.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./axisSelectors-D1VEbPH5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVsCYNZX.js";import"./CategoricalChart-5b78-xMl.js";import"./Curve-DSs4mNcf.js";import"./types-DSXkzfdz.js";import"./step-BVafN2Sf.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CAeOjIy6.js";import"./Label-DntCvjB2.js";import"./ZIndexLayer-BGBP_zx3.js";import"./useAnimationId-D5BtmEUA.js";import"./ActivePoints-C8hQhNqS.js";import"./Dot-D2XHIErC.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";import"./getRadiusAndStrokeWidthFromDot-V3DuSoMt.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./CartesianAxis-DNzSt2Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DrzCmBWa.js";import"./symbol-BOqiXccp.js";import"./useElementOffset-CexjbpfR.js";import"./uniqBy-CGQlZ1n7.js";import"./iteratee-B1717eE-.js";import"./Cross-N7Is12JC.js";import"./Rectangle-BZncl5wy.js";import"./Sector-YzzTDgsn.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
