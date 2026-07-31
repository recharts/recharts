import{r as g,R as e}from"./iframe-BNn_UWWx.js";import{B as i}from"./Brush-CVbk5ezs.js";import{R as B}from"./zIndexSlice-DE7GeAH-.js";import{C as p}from"./ComposedChart-iCBZpoeK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-4Qiyz8U8.js";import{L as D}from"./LineChart-BiN7QGsN.js";import{R as m}from"./ReferenceLine-CM_BsMRq.js";import{C as d}from"./CartesianGrid-DbZp0pXH.js";import{X as S}from"./XAxis-DzOTQwY3.js";import{Y as A}from"./YAxis-BcmUZyL1.js";import{L as R}from"./Legend-l_ee7Eod.js";import{T as w}from"./Tooltip-Df9xmlZA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-C9Gg67SI.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./chartDataContext-rNOOEU-v.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./throttle-Dubphbjd.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CP3XnrfD.js";import"./CategoricalChart-DKj_eLFg.js";import"./Curve-B398d6Gz.js";import"./types-BuPE8SUX.js";import"./step-1QEEOZnW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DzsSkQFR.js";import"./Label-BR5BCwPX.js";import"./ZIndexLayer-DbGeHIXa.js";import"./useAnimationId-DDbhsfXp.js";import"./ActivePoints-OEb_V2h_.js";import"./Dot-BO-47chS.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./ErrorBarContext-D8VbAhOk.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./graphicalItemIdentity-BD7rPDFr.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./CartesianAxis-DOE8j2mB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-DdqJjdJl.js";import"./symbol-duGx-9jG.js";import"./useElementOffset-P4rP0RLr.js";import"./uniqBy-D-I4fNAI.js";import"./iteratee-DsQTe1TT.js";import"./Cross-BSR1dAMZ.js";import"./Rectangle-BIKDq1_W.js";import"./util-Dxo8gN5i.js";import"./Sector-BM4nRum4.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(K=(b=s.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};const Fe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Fe as __namedExportsOrder,Ye as default};
