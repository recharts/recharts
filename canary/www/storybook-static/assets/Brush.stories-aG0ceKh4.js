import{r as v,e}from"./iframe-CoxmJKyj.js";import{B as i}from"./Brush-CjsjjXoF.js";import{R}from"./arrayEqualityCheck-BiMa-XSg.js";import{C as p}from"./ComposedChart-CnWrvDY-.js";import{L as t}from"./Line-BdzKDbXD.js";import{R as c}from"./RechartsHookInspector-DxKqckh3.js";import{X as S}from"./XAxis-ByfqRbuq.js";import{Y as A}from"./YAxis-CBdXzckK.js";import{C as m}from"./CartesianGrid-BvUKtn8y.js";import{L as w}from"./Legend-D_gOoCGt.js";import{R as d}from"./ReferenceLine--InyIrh_.js";import{L as B}from"./LineChart-CLf8vJrG.js";import{T as N}from"./Tooltip-D_QcebJB.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./axisSelectors-Cx1Cm9h8.js";import"./Layer-FnVtSY9f.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./chartDataContext-88-zaTIw.js";import"./RechartsWrapper-BeGnBw32.js";import"./hooks-C3tSBkhO.js";import"./zIndexSlice-BS5hTNaN.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-TnRBDpKI.js";import"./CategoricalChart-CyysacNR.js";import"./ReactUtils-DelGq7vW.js";import"./Label-BaauyrMN.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./ActivePoints-D0nFSc_H.js";import"./Dot-BifkMnm9.js";import"./types-VgYnwRoj.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./useAnimationId-DMb1Vy6w.js";import"./getRadiusAndStrokeWidthFromDot-k8J8eAkm.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./Symbols-3p0hcDOB.js";import"./Curve-BcGu8BmK.js";import"./index-BjMwiY7v.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./OffsetShower-BIEGpqN_.js";import"./PlotAreaShower-B9vM17qm.js";import"./CartesianAxis-C3XzKlXq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-lvwsgQgc.js";import"./iteratee-BEESgXf_.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-NaJlCvRs.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
