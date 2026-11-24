import{r as g,R as e}from"./iframe-B1Ov3CkI.js";import{B as i}from"./Brush-BvpCK7oE.js";import{R as B}from"./zIndexSlice-BZ09-fF4.js";import{C as p}from"./ComposedChart-Dd5cIYd9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-D6fDEx2j.js";import{L as D}from"./LineChart-ChIIlifa.js";import{R as m}from"./ReferenceLine-CkegcyYM.js";import{C as d}from"./CartesianGrid-BNmKxAJh.js";import{X as S}from"./XAxis-B8awpm7u.js";import{Y as A}from"./YAxis-CKqezMqR.js";import{L as R}from"./Legend-DS16XVv7.js";import{T as w}from"./Tooltip-cJI8ulaq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-DAwsvvog.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./chartDataContext-fgeg9aho.js";import"./axisSelectors-CwNUFUW3.js";import"./throttle-CU4m2LyG.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./RechartsWrapper-CArKZuEM.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./CategoricalChart-C2LUjjE6.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Curve-D-bNq0v5.js";import"./types-ynn-_gFH.js";import"./step-B516R2zU.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-lld3ulFL.js";import"./Label-DD8YxEOL.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./activeStyles-D0wpO0Mw.js";import"./useAnimationId-DhG5SB-S.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./ErrorBarContext-CrvdUc7x.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./CartesianAxis-CqVMCZWw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-D5jbWozH.js";import"./uniqBy-CuCMSFr0.js";import"./iteratee-D4VRlXRY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-0Rf112BE.js";import"./Rectangle-B3p2_n3w.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_mWH5U.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
