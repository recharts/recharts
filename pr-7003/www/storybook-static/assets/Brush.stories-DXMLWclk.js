import{r as v,e}from"./iframe-Cy8G_j66.js";import{B as i}from"./Brush-DdRX1Z6w.js";import{R}from"./arrayEqualityCheck-dp8dfL7u.js";import{C as p}from"./ComposedChart-BxEcgcZi.js";import{L as t}from"./Line-qEl9DN3q.js";import{R as c}from"./RechartsHookInspector-lSqxoQlZ.js";import{X as S}from"./XAxis-sHLPbu1e.js";import{Y as A}from"./YAxis-DfWkuEr-.js";import{C as m}from"./CartesianGrid-DLAikBSQ.js";import{L as w}from"./Legend-DRCozq1Q.js";import{R as d}from"./ReferenceLine-dMJhtLYD.js";import{L as B}from"./LineChart-B7cX0L9U.js";import{T as N}from"./Tooltip-DzoeT4p7.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./axisSelectors-Dnswsufb.js";import"./Layer-D4d1YeMH.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./chartDataContext-Dyi2rgks.js";import"./RechartsWrapper-BtX23pZ_.js";import"./hooks-Dh2IuVAR.js";import"./zIndexSlice-BDvzw6V8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzoasTlc.js";import"./CategoricalChart-0rxnxhIB.js";import"./ReactUtils-CPeEyyol.js";import"./Label-r4OEA6Zh.js";import"./ZIndexLayer-DYA27QSR.js";import"./ActivePoints-Bd_88S8O.js";import"./Dot-D2TzI8Gx.js";import"./types-BSABi_Hc.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./useAnimationId-YkjhaILr.js";import"./getRadiusAndStrokeWidthFromDot-DZH1LMkE.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";import"./CartesianAxis-mJhpe0_9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BSLWjzfu.js";import"./iteratee-DDkVWpiV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-eMFSUkxv.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
