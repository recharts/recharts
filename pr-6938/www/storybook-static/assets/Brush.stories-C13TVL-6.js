import{r as v,e}from"./iframe-DsOUfprP.js";import{B as i}from"./Brush-nFVsboVU.js";import{R}from"./arrayEqualityCheck-DjO11PbP.js";import{C as p}from"./ComposedChart-bIhTAvLw.js";import{L as t}from"./Line-Bsatc-QO.js";import{R as c}from"./RechartsHookInspector-mhd3rbsm.js";import{X as S}from"./XAxis-CfXuJc3U.js";import{Y as A}from"./YAxis-hF6Y_Nk5.js";import{C as m}from"./CartesianGrid-CE8LIB2Q.js";import{L as w}from"./Legend-CjMNvEPR.js";import{R as d}from"./ReferenceLine-BX7ZJqnk.js";import{L as B}from"./LineChart-CMwbZRR2.js";import{T as N}from"./Tooltip-BoIk5KKE.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZmhcaTjs.js";import"./axisSelectors-CJQMQFai.js";import"./Layer-LWw9M75d.js";import"./Text-D4hbrhbx.js";import"./DOMUtils-C9zx0qvq.js";import"./chartDataContext-Dq9n1Njf.js";import"./RechartsWrapper-DwZNGVuW.js";import"./hooks-wPJ0hpZq.js";import"./zIndexSlice-Dgi_woyo.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BHRGlbKq.js";import"./CategoricalChart-BNNYxF9g.js";import"./ReactUtils-CwDP136p.js";import"./Label-CbeoYjYN.js";import"./ZIndexLayer-kg9R7P8d.js";import"./ActivePoints-D2olhcFn.js";import"./Dot-DDC52ur4.js";import"./types-PuShQX9K.js";import"./RegisterGraphicalItemId-BjXMbvNS.js";import"./ErrorBarContext-D6eG4SLo.js";import"./GraphicalItemClipPath-DG39ifF4.js";import"./SetGraphicalItem-CQYRXGzG.js";import"./useAnimationId-zJAyy6w7.js";import"./getRadiusAndStrokeWidthFromDot-4V8YrcAz.js";import"./ActiveShapeUtils-CdiCAAYX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DqV75pSw.js";import"./Trapezoid-tgNCAV59.js";import"./Sector-ClMrTgKg.js";import"./Symbols-DhTE1eBy.js";import"./Curve-DNHLMjMe.js";import"./index-G8W79pF2.js";import"./ChartSizeDimensions-CtzLecLz.js";import"./OffsetShower-CmgUZqHD.js";import"./PlotAreaShower-Da3_E1UK.js";import"./CartesianAxis-Cr7pmBhV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BiZyTWEL.js";import"./iteratee-0AV18N5w.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-CTTDgcsj.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
