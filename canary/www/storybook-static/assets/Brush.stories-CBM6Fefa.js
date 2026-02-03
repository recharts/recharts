import{r as v,e}from"./iframe-BP2nTpch.js";import{B as i}from"./Brush-DezXiehQ.js";import{R}from"./arrayEqualityCheck-uIVE1gVz.js";import{C as p}from"./ComposedChart-DZabq8it.js";import{L as t}from"./Line-DWbyZqWl.js";import{R as c}from"./RechartsHookInspector-DAq4QekR.js";import{X as S}from"./XAxis-CXtp3tfD.js";import{Y as A}from"./YAxis-nqLFZHiU.js";import{C as m}from"./CartesianGrid-DA7Rb6hV.js";import{L as w}from"./Legend-CZGfaFJW.js";import{R as d}from"./ReferenceLine-CQaIiYpc.js";import{L as B}from"./LineChart-Ce6-7tlW.js";import{T as N}from"./Tooltip-WOVTHsaw.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-pblYALGE.js";import"./axisSelectors-D2SDnJRJ.js";import"./Layer-2wKCZbds.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./chartDataContext-ijRrdm1r.js";import"./RechartsWrapper-B99qXj5r.js";import"./hooks-C4-fdNyt.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FpzVruv-.js";import"./CategoricalChart-Dwlif2jD.js";import"./ReactUtils-8y56L2KY.js";import"./Label-CpYvd4nZ.js";import"./ZIndexLayer-571M2aB4.js";import"./ActivePoints-wLrf3G7J.js";import"./Dot-UJc7CKGe.js";import"./types-7mx8q_Dg.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./ErrorBarContext-NtZ5hNP2.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./useAnimationId-BKvpnK5Z.js";import"./getRadiusAndStrokeWidthFromDot-CWkvHCAb.js";import"./ActiveShapeUtils-CDlOYSnz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-OJy3hMDx.js";import"./Trapezoid-n9rYv4uE.js";import"./Sector-iFxFptm9.js";import"./Symbols-99I1PudQ.js";import"./Curve-DDVqNpBq.js";import"./index-B3FDMrYE.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";import"./CartesianAxis-Dig3Hc3j.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BA3_qNb-.js";import"./iteratee-oCzkJu6y.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-BYyTd8EV.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const We=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,We as __namedExportsOrder,Oe as default};
