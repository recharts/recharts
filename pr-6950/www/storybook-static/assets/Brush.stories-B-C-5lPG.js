import{r as v,e}from"./iframe-CBadok3R.js";import{B as i}from"./Brush-cCrpKaJF.js";import{R}from"./arrayEqualityCheck-D8DZf4E7.js";import{C as p}from"./ComposedChart-Dc_UJsoP.js";import{L as t}from"./Line-vL2LKnJQ.js";import{R as c}from"./RechartsHookInspector-Ccr9vg9I.js";import{X as S}from"./XAxis-CuDJTYDf.js";import{Y as A}from"./YAxis-CkBODHFa.js";import{C as m}from"./CartesianGrid-NQ1HzpRF.js";import{L as w}from"./Legend-_sja8EIY.js";import{R as d}from"./ReferenceLine-CJJRfYms.js";import{L as B}from"./LineChart-CV2RrBex.js";import{T as N}from"./Tooltip-VKl52Hto.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./axisSelectors-7aa3p4xy.js";import"./Layer-CZpxdYtD.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./chartDataContext-PjfwFb0T.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./hooks-CvcnYJr5.js";import"./zIndexSlice-Cb0fYcD4.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DhdNdBtI.js";import"./CategoricalChart-DgHJ04hm.js";import"./ReactUtils-BQuPA_dW.js";import"./Label-B9arnFZu.js";import"./ZIndexLayer-gNsJWqo_.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./types-D0Nc3U-x.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";import"./CartesianAxis-BWCbP_kU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CRBaCWHR.js";import"./iteratee-9Y6z12tH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-C0Q6IQ13.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
