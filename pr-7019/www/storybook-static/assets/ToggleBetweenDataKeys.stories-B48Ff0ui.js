import{r as n,e as t}from"./iframe-DSWYlzWY.js";import{L as p}from"./LineChart-B0FWuSto.js";import{R as s}from"./arrayEqualityCheck-Fy9pCvBq.js";import{C as c}from"./CartesianGrid-1IEROZor.js";import{X as l}from"./XAxis-iMOgY7Au.js";import{Y as d}from"./YAxis-Bm_Vu3am.js";import{L as y}from"./Legend-ChFyYIbp.js";import{L as h}from"./Line-BC8L4eV2.js";import{T as u}from"./Tooltip-CN-1saOx.js";import{R as g}from"./RechartsHookInspector-f6frTyp5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DVh3xt6X.js";import"./hooks-B7BbWUVY.js";import"./axisSelectors-C1uR2G3h.js";import"./zIndexSlice-CwHVazMP.js";import"./renderedTicksSlice-soMCmbpR.js";import"./resolveDefaultProps-BiAk_CPB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFtDWNyw.js";import"./chartDataContext-DGfmnKNf.js";import"./CategoricalChart-DpkOEink.js";import"./CartesianAxis-BDz1zwgU.js";import"./Layer-BJ-1LjgN.js";import"./Text-CcJbWbw0.js";import"./DOMUtils-9Gl4sMzI.js";import"./Label-DAbjiZ3-.js";import"./ZIndexLayer-DdgNL7UI.js";import"./types-C3ofbdQr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DBQdL11F.js";import"./Curve-kGDkBF5o.js";import"./useElementOffset-Chrj36We.js";import"./iteratee-DTflgsMG.js";import"./ReactUtils-cJI4Ub_j.js";import"./ActivePoints-Boyrjsl3.js";import"./Dot-iLU5pbFu.js";import"./RegisterGraphicalItemId-BBtGsgZd.js";import"./ErrorBarContext-W32xCQ7P.js";import"./GraphicalItemClipPath-SnzIRqgJ.js";import"./SetGraphicalItem-BwFpDELA.js";import"./useAnimationId-C_vJY8DS.js";import"./getRadiusAndStrokeWidthFromDot-BMXa57aN.js";import"./ActiveShapeUtils-CIyCCcXD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMuMjxhY.js";import"./Trapezoid-COd96k2O.js";import"./Sector-BpUrusHe.js";import"./Cross-kxoIjZLr.js";import"./index-CFzpIqAG.js";import"./ChartSizeDimensions-B4hBN_oD.js";import"./OffsetShower-Dq8TEAZv.js";import"./PlotAreaShower-CsbtiMRd.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
