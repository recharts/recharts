import{r as n,e as t}from"./iframe-DhupoOg_.js";import{L as p}from"./LineChart-BXp7Ar16.js";import{R as s}from"./arrayEqualityCheck-1a2j5A1f.js";import{C as c}from"./CartesianGrid-CZVdI6-b.js";import{X as l}from"./XAxis-GsEtiJs1.js";import{Y as d}from"./YAxis-Bqh3gjFj.js";import{L as y}from"./Legend-CjOih_WG.js";import{L as h}from"./Line-JwA_PVGy.js";import{T as u}from"./Tooltip-BWybEPAX.js";import{R as g}from"./RechartsHookInspector-BRJSRdzz.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO7q4INj.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./CartesianAxis-CrD8JHxo.js";import"./Layer-Bu6njlMc.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./Label-jW6-M5QE.js";import"./ZIndexLayer-UCgdXbxU.js";import"./types-CAd6nAW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B_Z7RLio.js";import"./Curve-BbS-sSDe.js";import"./useElementOffset-DbSKwHmX.js";import"./iteratee-1SnXECjR.js";import"./ReactUtils-Den_eo7w.js";import"./ActivePoints-CT0rrdoG.js";import"./Dot-h4eiknre.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./ErrorBarContext-DeheRuUe.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./useAnimationId-DwQLM9Vt.js";import"./getRadiusAndStrokeWidthFromDot-CGbuqu4G.js";import"./ActiveShapeUtils-CwO0ADgQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CD_6SwFf.js";import"./Trapezoid-CNwzGgkA.js";import"./Sector-qA3WmdGy.js";import"./Cross-CecaA5jP.js";import"./index-B1siFWfz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
