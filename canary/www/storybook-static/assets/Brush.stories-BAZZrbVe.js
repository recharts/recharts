import{r as g,R as e}from"./iframe-Bo9DV_RF.js";import{B as i}from"./Brush-DKnTT8xw.js";import{R as B}from"./zIndexSlice-ChGxP5I9.js";import{C as p}from"./ComposedChart-BSjH4eO6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-A1JFBNP7.js";import{L as D}from"./LineChart-CVAH-tM4.js";import{R as m}from"./ReferenceLine-uIXoynVF.js";import{C as d}from"./CartesianGrid-Wpeq6wtu.js";import{X as S}from"./XAxis-hzMML8e7.js";import{Y as A}from"./YAxis-CK1muElb.js";import{L as R}from"./Legend-ujCCnnlq.js";import{T as w}from"./Tooltip-CgTtgD3h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-C6lb2zxM.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./chartDataContext-PPXpQSNc.js";import"./axisSelectors-BUIYbOzk.js";import"./throttle-CaIo9_rk.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./RechartsWrapper-D6SFyLdk.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./CategoricalChart-BdPgBmoC.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Curve-Dm-GvmWp.js";import"./types-DltK9JsS.js";import"./step-5knHZEdX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./Label-BywaPoTf.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./activeStyles-mw-DKPXy.js";import"./useAnimationId-TvJ5tZp1.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./ErrorBarContext-BobbhAG8.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./CartesianAxis-_PdJmc1T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKdlw8Q0.js";import"./Rectangle-RS1J8Vgk.js";import"./util-Dxo8gN5i.js";import"./Sector-DgCGLhDo.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
