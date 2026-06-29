import{r as g,R as e}from"./iframe-CCxa2X_3.js";import{B as i}from"./Brush-CDgg0rNt.js";import{R as B}from"./zIndexSlice-CjS-6Q6g.js";import{C as p}from"./ComposedChart-C30GB46c.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-Hi10lWtZ.js";import{L as D}from"./LineChart-DECqCDCO.js";import{R as m}from"./ReferenceLine-C5SPNats.js";import{C as d}from"./CartesianGrid-BnLmHshS.js";import{X as S}from"./XAxis-DgXTsbE5.js";import{Y as A}from"./YAxis-LHNbupxO.js";import{L as R}from"./Legend-BrRZ-j69.js";import{T as w}from"./Tooltip-C_6OA510.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWGRxCzY.js";import"./d3-scale-BD_lAQxm.js";import"./throttle-DVixtPip.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./Layer-DSUD-a_F.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./chartDataContext-un8h0oN7.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqBORtky.js";import"./CategoricalChart-BETRAeyd.js";import"./Curve-DuMlNmnh.js";import"./types-BCrxJhqI.js";import"./step-Cx1fSWqJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtF1ph7i.js";import"./Label-BbbTGnnM.js";import"./ZIndexLayer-DK9HGDkh.js";import"./useAnimationId-Qtosu25G.js";import"./ActivePoints-DMw22gL4.js";import"./Dot-BqRYjtmh.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getRadiusAndStrokeWidthFromDot-CMMqsGHP.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./CartesianAxis-06zEjNAD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-D6XRg3mk.js";import"./symbol-sqDWSZm8.js";import"./useElementOffset-DofYk2ft.js";import"./uniqBy-DXRe4Vi9.js";import"./iteratee-C-XK7dPA.js";import"./Cross-DoeHMXog.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./Sector-DevuOtE1.js";const Ge={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
