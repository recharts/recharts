import{u as v,e}from"./iframe-Cbg-fKNU.js";import{B as i}from"./Brush-D1bP82cT.js";import{g as R}from"./arrayEqualityCheck-hFPRsS2v.js";import{C as p}from"./ComposedChart-Cte27ylB.js";import{p as c}from"./Page-DPte-9pC.js";import{L as t}from"./Line-CJNTh-a_.js";import{R as u}from"./RechartsHookInspector-D7okJ7xS.js";import{L as B}from"./LineChart-oPoXsNlH.js";import{R as m}from"./ReferenceLine-DKqCpND_.js";import{C as d}from"./CartesianGrid-B52730MV.js";import{X as S}from"./XAxis-scJ13O_U.js";import{Y as A}from"./YAxis-DeM2VHlz.js";import{L as w}from"./Legend-BGilQiwd.js";import{T as N}from"./Tooltip-QqR-Kvw7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./d3-scale-DuHK7VZm.js";import"./immer-S1zDTrNa.js";import"./string-yHBgcFlJ.js";import"./Layer-OlYOmPUf.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./chartDataContext-BUHR6knq.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-IEffqnC4.js";import"./CategoricalChart-DAwQUD4-.js";import"./Curve-C22NWxJ6.js";import"./types-BpyuZwQS.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-POHvOeVE.js";import"./Label-Dne7i20P.js";import"./ZIndexLayer-qeHNPcT8.js";import"./useAnimationId-ClgLuj6x.js";import"./ActivePoints-CVBcNwxF.js";import"./Dot-CvNBt79L.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./ErrorBarContext-Q5zY_unn.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getRadiusAndStrokeWidthFromDot-Cg3OgevG.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";import"./CartesianAxis-A8y-DKmq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";import"./useElementOffset-DGafWhz7.js";import"./uniqBy-C9mCQonC.js";import"./iteratee-BMHEy9Yu.js";import"./Cross-DbVYaY0D.js";import"./Rectangle-DIyqwkit.js";import"./Sector-jEv1BStD.js";const Fe={component:i},a={render:l=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:c},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(u,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:l=>e.createElement(p,{width:600,height:300,data:c,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(d,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(m,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(u,null))},s={render:l=>e.createElement(p,{width:600,height:300,data:c},e.createElement(i,null,e.createElement(B,null,e.createElement(m,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(d,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(u,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(K=s.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};const je=["ControlledBrush","PanoramicBrush","NoChartBrush"];export{a as ControlledBrush,s as NoChartBrush,o as PanoramicBrush,je as __namedExportsOrder,Fe as default};
