import{r as g,R as e}from"./iframe-Cy6UHwH8.js";import{B as i}from"./Brush-MjdJZ6d9.js";import{R as B}from"./zIndexSlice-Dv2HqMCj.js";import{C as p}from"./ComposedChart-Dm8MO2Et.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-BzhYL1rQ.js";import{L as D}from"./LineChart-BySD3soj.js";import{R as m}from"./ReferenceLine-D5Ogl4-S.js";import{C as d}from"./CartesianGrid-BHWhvLkc.js";import{X as S}from"./XAxis-BEHj4vqI.js";import{Y as A}from"./YAxis-Czbc2cL9.js";import{L as R}from"./Legend-CHfq6ixo.js";import{T as w}from"./Tooltip-xaQOL5rL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./Layer-Ju7yA9Ak.js";import"./resolveDefaultProps-BMx9w-RH.js";import"./Text-DY_HLC6P.js";import"./DOMUtils-CnEhoUR_.js";import"./isWellBehavedNumber-CZJUfVeG.js";import"./chartDataContext-BQ-bLF-q.js";import"./RechartsWrapper-Ms45-clr.js";import"./index-2yzrZcxU.js";import"./index-CqwtYJ2E.js";import"./index-h8aQZ4h5.js";import"./index-CWnN2QDM.js";import"./throttle-CrXcydw9.js";import"./renderedTicksSlice-BtW-OIzZ.js";import"./axisSelectors-DXOe3ZcM.js";import"./d3-scale-Bvw0bMMA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_8s1Ao-.js";import"./CategoricalChart-Bl-8OvLS.js";import"./Curve-l3wqrsuS.js";import"./types-Wlq7LyUb.js";import"./step-CuI5m1Cq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-P3TyXGJ4.js";import"./Label-D4x62xM0.js";import"./ZIndexLayer-BhFWLYxf.js";import"./useAnimationId-q_i8pRM6.js";import"./ActivePoints-DwOS4gGn.js";import"./Dot-Coa1b26v.js";import"./RegisterGraphicalItemId-Du3LTwfY.js";import"./ErrorBarContext-DbNi8xqP.js";import"./GraphicalItemClipPath-CqSFRIsZ.js";import"./SetGraphicalItem-Dh-ykNbg.js";import"./getRadiusAndStrokeWidthFromDot-BnXETLA5.js";import"./ActiveShapeUtils-BsBe7D_I.js";import"./CartesianAxis-D4Lg0Pka.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-COXnL47l.js";import"./symbol-CcEOpE0b.js";import"./useElementOffset-CogvFxV1.js";import"./uniqBy-BpJlFfbc.js";import"./iteratee-DsECz__7.js";import"./Cross-C7BtRR4W.js";import"./Rectangle-NwWJwHZO.js";import"./util-Dxo8gN5i.js";import"./Sector-gxLm8D69.js";const Xe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
