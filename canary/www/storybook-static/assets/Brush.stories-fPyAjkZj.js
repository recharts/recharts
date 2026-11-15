import{r as g,R as e}from"./iframe-c26JqrsL.js";import{B as i}from"./Brush-2Q7W0iSk.js";import{R as B}from"./zIndexSlice-BkUYlJsZ.js";import{C as p}from"./ComposedChart-CWYwg474.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CCpKAg6f.js";import{L as D}from"./LineChart-BTqtIOwK.js";import{R as m}from"./ReferenceLine-Dj7d2q9c.js";import{C as d}from"./CartesianGrid-BfXOM6vw.js";import{X as S}from"./XAxis-DutmNx-o.js";import{Y as A}from"./YAxis-BMAl-ilQ.js";import{L as R}from"./Legend-B8n_PKuf.js";import{T as w}from"./Tooltip-C74uwVO5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-vJvTy9Ku.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./chartDataContext-KJrM16zP.js";import"./axisSelectors-Dy58hWsd.js";import"./throttle-B2IvKwW-.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./CategoricalChart-DQ-Epfo-.js";import"./Curve-XxFxrIWP.js";import"./types-BkHyLjnw.js";import"./step-CELEtsjP.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-NUuyBQzn.js";import"./Label-U_zx5ZhA.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./CartesianAxis-CwL4X3Li.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CtwUkA5D.js";import"./Rectangle-C6L3NnBU.js";import"./util-Dxo8gN5i.js";import"./Sector-zTgxjB-0.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
