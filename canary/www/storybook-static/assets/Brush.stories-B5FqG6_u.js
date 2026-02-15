import{r as v,e}from"./iframe-yr43iL0r.js";import{B as i}from"./Brush-CKmK3bZW.js";import{R}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{C as p}from"./ComposedChart-1KeYqgHX.js";import{L as t}from"./Line-DPN0sTqh.js";import{R as c}from"./RechartsHookInspector-DBIDewuF.js";import{X as S}from"./XAxis-CO6uFh57.js";import{Y as A}from"./YAxis-mhKbt4Et.js";import{C as m}from"./CartesianGrid-BGR_wFd3.js";import{L as w}from"./Legend-CYCdBd0U.js";import{R as d}from"./ReferenceLine-H4X2Y2pV.js";import{L as B}from"./LineChart-BUtK01_l.js";import{T as N}from"./Tooltip-CyIF4bCF.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./axisSelectors-CxU8esto.js";import"./Layer-CmzX8B_O.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./chartDataContext-CzToVTlc.js";import"./RechartsWrapper-CBwzaw9q.js";import"./hooks-DV8SPP2s.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-XyvFTYw0.js";import"./CategoricalChart-NU99wwp5.js";import"./ReactUtils-BmYUR6Pw.js";import"./Label-BXAwjjII.js";import"./ZIndexLayer-Cs9veiYj.js";import"./ActivePoints-C__HlfVm.js";import"./Dot-DO5eF7L8.js";import"./types-C8fXyDYe.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./ErrorBarContext-OMAqLqYv.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./useAnimationId-CevQg5hG.js";import"./getRadiusAndStrokeWidthFromDot-DEWUqlIZ.js";import"./ActiveShapeUtils-tkDZnXJM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KnzijHvw.js";import"./Trapezoid-BsqiFDvD.js";import"./Sector-BWGZTQIf.js";import"./Symbols-DYDfKw0L.js";import"./Curve-BbMbMcrT.js";import"./index-BF6TeZpk.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";import"./CartesianAxis-DoAv_8BM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DgYeCa-o.js";import"./iteratee-DUEQD3sA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-okrOoNo4.js";const We={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const Te=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,Te as __namedExportsOrder,We as default};
