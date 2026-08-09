import{r as g,R as e}from"./iframe-D8LGzSZk.js";import{B as i}from"./Brush-BILqZE-A.js";import{R as B}from"./zIndexSlice-D4In7Qwm.js";import{C as p}from"./ComposedChart-DvTjgPom.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-ZoXFLPkA.js";import{L as D}from"./LineChart-D5QTIoMv.js";import{R as m}from"./ReferenceLine-IzMbYsOO.js";import{C as d}from"./CartesianGrid-DKpR4i07.js";import{X as S}from"./XAxis-C_x0Pf4s.js";import{Y as A}from"./YAxis-D48rI8id.js";import{L as R}from"./Legend-DK3nJZyc.js";import{T as w}from"./Tooltip-CERApXh1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Layer-BAr2SIyH.js";import"./resolveDefaultProps-BeJ0S4OV.js";import"./Text-Ck4AHDur.js";import"./DOMUtils-wR-VJIN5.js";import"./isWellBehavedNumber-D4yK7wtr.js";import"./chartDataContext-Cw__b2Gb.js";import"./axisSelectors-BOb7-s4k.js";import"./throttle-DBP8ZUoh.js";import"./index-NWBmwsqT.js";import"./index-BaqTm3t4.js";import"./d3-scale-MiqNvyLk.js";import"./RechartsWrapper-CZZbYxLA.js";import"./index-fhqam811.js";import"./index-DA6ZImtD.js";import"./renderedTicksSlice-CA4Xyl-r.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_d2iI6W.js";import"./CategoricalChart-CdB0xgvp.js";import"./Curve-DT0m8y-G.js";import"./types-DdZOgyMd.js";import"./step-DqFmeUpS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CHvu2d7x.js";import"./Label-Bqhs0VHz.js";import"./ZIndexLayer-DHXeXlB8.js";import"./useAnimationId-BUbByZru.js";import"./ActivePoints-OrQGZuXb.js";import"./Dot-Cpsl4ohG.js";import"./RegisterGraphicalItemId-Co71u55H.js";import"./ErrorBarContext-CERdVHDL.js";import"./graphicalItemIdentity-Cj_WIcRj.js";import"./SetGraphicalItem-CcV_dEEg.js";import"./getRadiusAndStrokeWidthFromDot-Cc17-_w5.js";import"./ActiveShapeUtils-325OC07p.js";import"./RechartsThemeContext-CPh4O7nx.js";import"./CartesianAxis-B5BkrXXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-hPRj1Yr-.js";import"./symbol-Ds5VUmm2.js";import"./useElementOffset-_N-y_9xm.js";import"./uniqBy-BhmhM53_.js";import"./iteratee-BE8kvPGN.js";import"./Cross-BiZb4Wu-.js";import"./Rectangle-3deEvB_z.js";import"./util-Dxo8gN5i.js";import"./Sector-Bn97mbzM.js";const Ye={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))};var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
