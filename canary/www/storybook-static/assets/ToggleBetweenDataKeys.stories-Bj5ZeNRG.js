import{r as n,e as t}from"./iframe-qFyPNvi_.js";import{L as p}from"./LineChart-Djn6b_w2.js";import{R as s}from"./arrayEqualityCheck-BR44KOOG.js";import{C as c}from"./CartesianGrid-8Lbkprhq.js";import{X as l}from"./XAxis-B5Ueyu7e.js";import{Y as d}from"./YAxis-B1s9pj0r.js";import{L as y}from"./Legend-DeSJqrBc.js";import{L as h}from"./Line-uOvaDpg7.js";import{T as u}from"./Tooltip-CMoU0mbE.js";import{R as g}from"./RechartsHookInspector-Ce3qLbRt.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DM4_tnRN.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./zIndexSlice-yXhSr7sB.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./ZIndexLayer-B3rHEP_M.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CPIOcRRv.js";import"./Curve-Bf-6f0us.js";import"./useElementOffset-DOXz1Ew0.js";import"./iteratee-CbT9mAc7.js";import"./ReactUtils-Dn42083y.js";import"./ActivePoints-B2Q4-VFp.js";import"./Dot-BYbcpD57.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./ErrorBarContext-tV2jexXK.js";import"./GraphicalItemClipPath-SzdiLGTP.js";import"./SetGraphicalItem-C4lKL51b.js";import"./useAnimationId-CBoODHVq.js";import"./getRadiusAndStrokeWidthFromDot-CpZPzij5.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./Trapezoid-hMqWhzEj.js";import"./Sector-CLe_yWi6.js";import"./Cross-Cx9wV6KX.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
