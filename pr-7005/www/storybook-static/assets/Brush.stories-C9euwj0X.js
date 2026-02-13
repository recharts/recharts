import{r as v,e}from"./iframe-BdYBH0hQ.js";import{B as i}from"./Brush-Dn6PjgeY.js";import{R}from"./arrayEqualityCheck-CnZHVnux.js";import{C as p}from"./ComposedChart-BGyCZHRq.js";import{L as t}from"./Line-Dl92IfyZ.js";import{R as c}from"./RechartsHookInspector-XSvtem8K.js";import{X as S}from"./XAxis-C-6SXyUA.js";import{Y as A}from"./YAxis-i93sK3J3.js";import{C as m}from"./CartesianGrid-CogLHW9f.js";import{L as w}from"./Legend-D6O1svQr.js";import{R as d}from"./ReferenceLine-DjyYzk4F.js";import{L as B}from"./LineChart-BahnHxKg.js";import{T as N}from"./Tooltip-BE7QlVB7.js";import{p as l}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BV4LHELv.js";import"./axisSelectors-B830JJxv.js";import"./Layer-CC1sQm5k.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./chartDataContext-nXwfjN3A.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./zIndexSlice-5OAeHe1c.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWPbPBgj.js";import"./CategoricalChart-CVN3i_3c.js";import"./ReactUtils-BSN6r0Fc.js";import"./Label-nQ379wTM.js";import"./ZIndexLayer-D6TqYbdI.js";import"./ActivePoints-B5y_bpJR.js";import"./Dot-B2CiLsKD.js";import"./types-CeaFy_xO.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./ErrorBarContext-CAApCFPz.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./useAnimationId-D1PUvmFT.js";import"./getRadiusAndStrokeWidthFromDot-BackDSVj.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./Symbols-Dfpy34Qh.js";import"./Curve-C1OuXXjt.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";import"./CartesianAxis-DtTXwL03.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-JJ_3zRXD.js";import"./iteratee-DAeDwiVA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./Cross-sCGbxVjq.js";const Oe={component:i},a={render:u=>{const[h,y]=v.useState(2),[k,g]=v.useState(5);return e.createElement(e.Fragment,null,e.createElement(R,{width:"100%",height:400},e.createElement(p,{data:l},e.createElement(t,{dataKey:"uv",isAnimationActive:!1}),e.createElement(i,{startIndex:h,endIndex:k,onChange:r=>{g(r.endIndex),y(r.startIndex)},alwaysShowText:!0}),e.createElement(c,null))),e.createElement("input",{type:"number","aria-label":"startIndex",value:h,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&y(n)}}),e.createElement("input",{"aria-label":"endIndex",value:k,onChange:r=>{const n=Number(r.target.value);Number.isInteger(n)&&g(n)}}))}},o={render:u=>e.createElement(p,{width:600,height:300,data:l,margin:{top:0,right:0,left:0,bottom:0}},e.createElement(S,{dataKey:"name"}),e.createElement(A,null),e.createElement(m,{strokeDasharray:"3 3"}),e.createElement(w,null),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}),e.createElement(d,{stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(i,{dataKey:"name"},e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(N,null),e.createElement(c,null))},s={render:u=>e.createElement(p,{width:600,height:300,data:l},e.createElement(i,null,e.createElement(B,null,e.createElement(d,{key:"test",stroke:"red",strokeOpacity:"red",strokeWidth:3,strokeLinecap:"round",y:1e3}),e.createElement(m,{strokeDasharray:"1 1",verticalPoints:[10,20,30],horizontalPoints:[10,20,30]}),e.createElement(t,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),e.createElement(t,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))),e.createElement(c,null))};var C,E,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
