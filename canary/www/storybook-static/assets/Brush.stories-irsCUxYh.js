import{r as v,e}from"./iframe-C2m-yPM5.js";import{B as i}from"./Brush-BeD4pZ3A.js";import{R}from"./arrayEqualityCheck-TbGkdOW0.js";import{C as p}from"./ComposedChart-CnOpfs4O.js";import{L as t}from"./Line-DQZ-cp1P.js";import{R as c}from"./RechartsHookInspector-hZPAuXLN.js";import{X as S}from"./XAxis-pwIeR2Z_.js";import{Y as A}from"./YAxis-UtKchpqB.js";import{C as m}from"./CartesianGrid-_Vu6X4Ru.js";import{L as w}from"./Legend-Bl5gozJt.js";import{R as d}from"./ReferenceLine-C8JTj_jm.js";import{L as B}from"./LineChart-BP_rZsno.js";import{T as N}from"./Tooltip-CASLOoZ8.js";import{p as l}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./axisSelectors-DcRH2ohT.js";import"./Layer-Iud-sCq9.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./chartDataContext-BYudZTMM.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./hooks-DAeXdWPb.js";import"./zIndexSlice-C6669BzF.js";import"./PolarUtils-CURfmLFn.js";import"./CartesianChart-DhCLRkDZ.js";import"./CategoricalChart-DyutkFbX.js";import"./ReactUtils-DmzHw7gD.js";import"./Label-BXoaurZ0.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./ActivePoints-VAc3oi-v.js";import"./Dot-CZbIvFZH.js";import"./types-8dUwYk5q.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./ErrorBarContext-DcTW_4BU.js";import"./GraphicalItemClipPath-DhdF9Via.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./useAnimationId-Du8Fxdxx.js";import"./getRadiusAndStrokeWidthFromDot-j4oCpZf6.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./Trapezoid-CwALKVJk.js";import"./Sector-DFUU7h0Y.js";import"./Symbols-vGEzJ5HY.js";import"./Curve-Bma3Kx5X.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";import"./CartesianAxis-BexRodkO.js";import"./useElementOffset-CEtPZLws.js";import"./iteratee-C4HdVpvy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-C4JN4moc.js";const _e={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
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
}`,...(x=(E=a.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var b,K,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ComposedChart>;
  }
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Oe=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Oe as __namedExportsOrder,_e as default};
