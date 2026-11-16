import{r as g,R as e}from"./iframe-KWoDlvv0.js";import{B as i}from"./Brush-DVXq7Wz7.js";import{R as B}from"./zIndexSlice-D6_TQa48.js";import{C as p}from"./ComposedChart-BNaAIAHQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CoYDa0ns.js";import{L as D}from"./LineChart-BqGOzDd7.js";import{R as m}from"./ReferenceLine-6fyj2G8G.js";import{C as d}from"./CartesianGrid-CwnO4f1F.js";import{X as S}from"./XAxis-Dha5DL-7.js";import{Y as A}from"./YAxis-BpsL_9nJ.js";import{L as R}from"./Legend-zpJKMWIs.js";import{T as w}from"./Tooltip-DyIqXAOf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-waQQT3dP.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./Text-DoeJcgDd.js";import"./ZIndexLayer-UqbdP99s.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./chartDataContext-CRRlgIpa.js";import"./axisSelectors-CV2At8Yo.js";import"./throttle-BvqCZ8Vh.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oWIqdaah.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./CategoricalChart-539yhc35.js";import"./Curve-B7-98jub.js";import"./types-DGnljtoN.js";import"./step-e6HwNXpN.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B50QbiA3.js";import"./Label-BPcs5PEB.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./activeStyles-DdJ_j3KP.js";import"./useAnimationId-Dr1qu-UX.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./ErrorBarContext-B7AiZePC.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./CartesianAxis-CyfkCIs2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-1JyRc5h3.js";import"./uniqBy-CbPnR-9p.js";import"./iteratee-DIz1rWLv.js";import"./isArguments-yB-y1yaH.js";import"./Cross-XnGezxgG.js";import"./Rectangle-9Jhf_J89.js";import"./util-Dxo8gN5i.js";import"./Sector-sU6YNYVD.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
