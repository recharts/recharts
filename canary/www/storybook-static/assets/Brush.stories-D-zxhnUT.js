import{r as g,R as e}from"./iframe-DkUPJ-sS.js";import{B as i}from"./Brush-B-VRJH2Z.js";import{R as B}from"./zIndexSlice-12UiSTLm.js";import{C as p}from"./ComposedChart-3SzIkZlG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-C2hOgETN.js";import{L as D}from"./LineChart-MrbYuqQw.js";import{R as m}from"./ReferenceLine-j6X-eQ90.js";import{C as d}from"./CartesianGrid-wrIIvehP.js";import{X as S}from"./XAxis-BWwIFA6B.js";import{Y as A}from"./YAxis-DUp2X2GH.js";import{L as R}from"./Legend-DKjZAMK9.js";import{T as w}from"./Tooltip-CWW4V7pP.js";import"./preload-helper-Dp1pzeXC.js";import"./Layer-Dz0e5F_f.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./chartDataContext-90C9fl16.js";import"./axisSelectors-DXomLufj.js";import"./throttle-B27eHaYH.js";import"./polarAxisSelectors-BXszvLGt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CycPPIVV.js";import"./RechartsWrapper-mRcsep52.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./CategoricalChart-B3U5Ej9_.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Curve-CbuCUFZQ.js";import"./types-BwlCxTmg.js";import"./step-BRslF1pk.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BCBCgPLo.js";import"./Label-8ZjagO8_.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./activeStyles-DgOrLWSA.js";import"./useAnimationId-2gl_z5Fx.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./ErrorBarContext-MZRvuvrv.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./CartesianAxis-CPfh-d6g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-Bn3uQ3yx.js";import"./uniqBy-BDWNlPAq.js";import"./iteratee-WjMYvucc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BtLlyYev.js";import"./Rectangle-BG9rqJG5.js";import"./util-Dxo8gN5i.js";import"./Sector-jJcJmYqW.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
