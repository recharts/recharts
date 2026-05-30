import{P as g,c as e}from"./iframe-CR5xUcH4.js";import{B as i}from"./Brush-DgWmj964.js";import{g as B}from"./zIndexSlice-Coakq-0y.js";import{C as p}from"./ComposedChart-DbazSM9x.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-V8UyMqJh.js";import{L as D}from"./LineChart-Bl_3xyD6.js";import{R as m}from"./ReferenceLine-CeKJgA4I.js";import{C as d}from"./CartesianGrid-DwdQhCQQ.js";import{X as S}from"./XAxis-CPvIxoVT.js";import{Y as A}from"./YAxis-7a5sZdUx.js";import{L as P}from"./Legend-DErFnSmW.js";import{T as w}from"./Tooltip-BOQV87c3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CdpBIjqV.js";import"./d3-scale-Cr_JmSke.js";import"./immer-MiNeKFai.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./Layer-DDAYqTxx.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./chartDataContext-YedE8BO5.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C1PsmK-N.js";import"./CategoricalChart-DNMItnv2.js";import"./Curve-7AAFvrE4.js";import"./types-vWyLmemb.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D5HGwZm0.js";import"./Label-gV3sJO-c.js";import"./ZIndexLayer-Br2sJvd3.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./ErrorBarContext-C7CGAddG.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./ActiveShapeUtils-G1Nz0YGi.js";import"./CartesianAxis-CM2xAnRM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-BSKmi5cj.js";import"./symbol-Cf9z5SBx.js";import"./useElementOffset-Bf2VABox.js";import"./uniqBy-CLyAGTeC.js";import"./iteratee-BLXBanMB.js";import"./Cross-B-S6Hkm2.js";import"./Rectangle-IJojDNZ6.js";import"./Sector-CARaIeNp.js";const ze={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(P,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ge=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ge as __namedExportsOrder,ze as default};
