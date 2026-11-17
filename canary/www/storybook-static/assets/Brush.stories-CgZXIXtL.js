import{r as g,R as e}from"./iframe-Bu5r_UoW.js";import{B as i}from"./Brush-DEM7TJlS.js";import{R as B}from"./zIndexSlice-BoZi0EKL.js";import{C as p}from"./ComposedChart-CGLPX3yw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{L as t}from"./Line-CYcF1koO.js";import{L as D}from"./LineChart-Cgu7glcu.js";import{R as m}from"./ReferenceLine-C9kissCU.js";import{C as d}from"./CartesianGrid-BXqhaeuH.js";import{X as S}from"./XAxis-CnJljd4s.js";import{Y as A}from"./YAxis-sL3yeYN7.js";import{L as R}from"./Legend-CG1wFSPg.js";import{T as w}from"./Tooltip-CWQk5OWh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Layer-DFVqeIzd.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./Text-Whpl_RQm.js";import"./ZIndexLayer-BpE6rRDX.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./chartDataContext-epTHr0-d.js";import"./axisSelectors-Bhk2XSO9.js";import"./throttle-BpoLTe0M.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DImarRMe.js";import"./RechartsWrapper-BqfNjaYX.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./CategoricalChart-DkHDaSrl.js";import"./Curve-CsvMXB6L.js";import"./types-Bn2H5HlC.js";import"./step-D2ytnSwm.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C66iRC8T.js";import"./Label-0RpFXi-A.js";import"./ActivePoints-elCSEGa9.js";import"./Dot-Bi1b_c85.js";import"./activeStyles-8B2_TUAk.js";import"./useAnimationId-BnIWNy46.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./ErrorBarContext-C-78saLU.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getRadiusAndStrokeWidthFromDot-95VsLoAR.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./useEffectiveDataKey-BxhAq3wv.js";import"./CartesianAxis-DeK_gPGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./useElementOffset-Cvj3h31Q.js";import"./uniqBy-CyQEgUk3.js";import"./iteratee-0LTiAB4q.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DTWz3HnI.js";import"./Rectangle-M1V3Y4MR.js";import"./util-Dxo8gN5i.js";import"./Sector-BzagyeT9.js";const Fe={component:i},a={render:u=>{const[l,h]=g.useState(2),[y,k]=g.useState(5);return e.createElement(e.Fragment,null,e.createElement(B,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:l,endIndex:y,onChange:r=>{k(r.endIndex),h(r.startIndex)},alwaysShowText:!0}))),e.createElement("input",{type:"number","aria-label":"startIndex",value:l,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&h(n)}}),e.createElement("input",{"aria-label":"endIndex",value:y,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&k(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(R,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(w,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(D,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))))},je=["ControlledBrush","PanoramicBrush","NoChartBrush"];var v,C,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
