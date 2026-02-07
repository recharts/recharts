import{r as v,e}from"./iframe-BH4WSVJq.js";import{B as i}from"./Brush-Brde7c5y.js";import{R}from"./arrayEqualityCheck-CP7zdH6j.js";import{C as p}from"./ComposedChart-DfoszhwC.js";import{L as t}from"./Line-B3K65Hzw.js";import{R as c}from"./RechartsHookInspector-C-rHiQ21.js";import{X as S}from"./XAxis-Co1hN3iA.js";import{Y as A}from"./YAxis-Dj6UBB19.js";import{C as m}from"./CartesianGrid-ChShBsrG.js";import{L as w}from"./Legend-BnVA_vKm.js";import{R as d}from"./ReferenceLine-DqTrFsRx.js";import{L as B}from"./LineChart-CQAFoWwo.js";import{T as N}from"./Tooltip-DmWUq_Wy.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-YH6ur84t.js";import"./axisSelectors-DWE-oxLu.js";import"./Layer-FSItnfZD.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./chartDataContext-px_EklfT.js";import"./RechartsWrapper-cR6befFD.js";import"./hooks-CsAFpvHN.js";import"./zIndexSlice-DQh671qs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CnXNKoh0.js";import"./CategoricalChart-BvpoJ5FY.js";import"./ReactUtils-DW1hnj4j.js";import"./Label-BSQQrDO-.js";import"./ZIndexLayer-CiVdec-B.js";import"./ActivePoints-DZW_-t1x.js";import"./Dot-KeJkGvxa.js";import"./types-BEfpPHVi.js";import"./RegisterGraphicalItemId-BYo0Vbbs.js";import"./ErrorBarContext-DRki-TWq.js";import"./GraphicalItemClipPath-DGOjr7en.js";import"./SetGraphicalItem-Blp2F8-c.js";import"./useAnimationId-BPcwtD5E.js";import"./getRadiusAndStrokeWidthFromDot-DJ87tJ-9.js";import"./ActiveShapeUtils-BnM7Jbce.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BrKooVgo.js";import"./Trapezoid-B_z9CYCL.js";import"./Sector-BpvDDX3s.js";import"./Symbols-BTckn8e4.js";import"./Curve-C54rJcUa.js";import"./index-Cisc0CQR.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";import"./CartesianAxis-6RsVZvqn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-COjyL-h1.js";import"./iteratee-DdEzHjIf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-CxE7VLOZ.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
