import{r as g,R as e}from"./iframe-AVXfkv0w.js";import{B as i}from"./Brush-BmptPW8a.js";import{R as B}from"./zIndexSlice-Cpy73fEL.js";import{C as p}from"./ComposedChart-T6jMjzBh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Cq09MVYd.js";import{L as D}from"./LineChart-CU1gnp-i.js";import{R as m}from"./ReferenceLine-BqmkzDeT.js";import{C as d}from"./CartesianGrid-B41Wa7H4.js";import{X as S}from"./XAxis-Ccg3sENg.js";import{Y as A}from"./YAxis-IC2DAOXe.js";import{L as R}from"./Legend-CrCKt3md.js";import{T as w}from"./Tooltip-Co7Yg1ig.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-ht4prXr-.js";import"./resolveDefaultProps-Dkqh2Ws0.js";import"./Text-Cc6gSuDY.js";import"./DOMUtils-BVwM3Jdl.js";import"./isWellBehavedNumber-C_0WrTwr.js";import"./chartDataContext-bVF6MeRR.js";import"./RechartsWrapper-Bri81Hil.js";import"./index-CFZrGIxH.js";import"./index-Dd93-if2.js";import"./index-DVRYbkUW.js";import"./index-CAfC1Ith.js";import"./throttle-CElZ_OGC.js";import"./renderedTicksSlice-BWAQroks.js";import"./axisSelectors-D5sH7YSt.js";import"./d3-scale-BOPObWse.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DosAg0hI.js";import"./CategoricalChart-B23xHRz2.js";import"./Curve-B8QEUj55.js";import"./types-3aWcalA-.js";import"./step-0iQNMmmi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-XdBOicHp.js";import"./Label-Bn0N3T-p.js";import"./ZIndexLayer-B0wR3MRM.js";import"./useAnimationId-DI1PqqVk.js";import"./ActivePoints-Bwfb1T53.js";import"./Dot-B1Np5YQX.js";import"./RegisterGraphicalItemId-Ba7mqd93.js";import"./ErrorBarContext-DhRbE3HA.js";import"./GraphicalItemClipPath-CZYMuLkO.js";import"./SetGraphicalItem-BnjtQKWx.js";import"./getRadiusAndStrokeWidthFromDot-DI-Ci7Ho.js";import"./ActiveShapeUtils-CFy0QQ1U.js";import"./CartesianAxis-CUHI9zvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-dI54hGBN.js";import"./symbol-DmI7JuN2.js";import"./useElementOffset-DyzLG0E2.js";import"./uniqBy-CdBEraEs.js";import"./iteratee-uAse0fea.js";import"./Cross-BKXxMdc4.js";import"./Rectangle-C0v_P9FW.js";import"./util-Dxo8gN5i.js";import"./Sector-BRdSyD44.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Ye=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Ye as __namedExportsOrder,Xe as default};
