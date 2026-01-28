import{r as n,e as t}from"./iframe-C4IWMahh.js";import{L as p}from"./LineChart-Cp0A7Rqc.js";import{R as s}from"./arrayEqualityCheck-0GnG-RUv.js";import{C as c}from"./CartesianGrid-L1AtGOCH.js";import{X as l}from"./XAxis-BngJLTZF.js";import{Y as d}from"./YAxis-Ba9FHWJv.js";import{L as y}from"./Legend-BnPfdZH3.js";import{L as h}from"./Line-4z32avHq.js";import{T as u}from"./Tooltip-zA8WPGbw.js";import{R as g}from"./RechartsHookInspector-CpFOwYB5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1ed8gsV.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./CartesianAxis-DOkMNxmt.js";import"./Layer-CdQ-wzgp.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./Label-C0TeAK2L.js";import"./ZIndexLayer-BJJTWLZI.js";import"./types-Dnr4tbcG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZom7IJQ.js";import"./Curve-DlsjNj4d.js";import"./useElementOffset-DM7EgaVV.js";import"./iteratee-C11Ig8yy.js";import"./ReactUtils-DjwylJ1a.js";import"./ActivePoints-uikp9xPQ.js";import"./Dot-B6v543Pb.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./ErrorBarContext-C2hEeIYE.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./useAnimationId-DNnry8cr.js";import"./getRadiusAndStrokeWidthFromDot-DZBvYZ8u.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-3bF21H.js";import"./Trapezoid-CRuG6j_-.js";import"./Sector-wIi7OYIA.js";import"./Cross-DXveOCuK.js";import"./index-aiWA5sXu.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
