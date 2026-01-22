import{r as n,e as t}from"./iframe-DTIyp44P.js";import{L as p}from"./LineChart-BNbknmjN.js";import{R as s}from"./arrayEqualityCheck-CROVUPPr.js";import{C as c}from"./CartesianGrid-DaTARVDI.js";import{X as l}from"./XAxis-C5uFpCOY.js";import{Y as d}from"./YAxis-Yf9V8Wcd.js";import{L as y}from"./Legend-Cz3fWYcj.js";import{L as h}from"./Line-Dm90Di08.js";import{T as u}from"./Tooltip-jrOn7pW9.js";import{R as g}from"./RechartsHookInspector-D8bdCWM1.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./resolveDefaultProps-CEVdASN5.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./CartesianAxis-C2UO2Q74.js";import"./Layer-CNvBRmF0.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./Label-CM6isse0.js";import"./ZIndexLayer-J9Ech39_.js";import"./types-CLTao0pZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BXEo6yiB.js";import"./Curve-QqkAraw2.js";import"./useElementOffset-D30Ax_lm.js";import"./iteratee-Dn7no0dn.js";import"./ReactUtils-BtxPFKgx.js";import"./ActivePoints-BGCbkuuz.js";import"./Dot-CleSK0nt.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./ErrorBarContext-4Fy8J4Om.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./useAnimationId-cUd_sss9.js";import"./getRadiusAndStrokeWidthFromDot-avL-XlUZ.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./Trapezoid-C-AINK0-.js";import"./Sector-BVwTJui3.js";import"./Cross-Bg-nihvf.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
