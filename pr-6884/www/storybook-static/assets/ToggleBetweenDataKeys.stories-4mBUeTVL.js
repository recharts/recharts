import{r as n,e as t}from"./iframe-CaIgGyHM.js";import{L as p}from"./LineChart-ClG2CRPa.js";import{R as s}from"./arrayEqualityCheck-CjxR2bSj.js";import{C as c}from"./CartesianGrid-Bv3reDCi.js";import{X as l}from"./XAxis-CTD8LeaB.js";import{Y as d}from"./YAxis-CtUU2Zal.js";import{L as y}from"./Legend-DSWW6CjA.js";import{L as h}from"./Line-JaWJo4pn.js";import{T as u}from"./Tooltip-BSsCpQhd.js";import{R as g}from"./RechartsHookInspector-Dwl6GEES.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./zIndexSlice-Q7xIp-VY.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./PolarUtils-DrqRDweU.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./CartesianAxis-BIL2gr42.js";import"./Layer-Bv6QiOXu.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./Label-P-OvPLPn.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./types-8d_H4dY-.js";import"./Symbols-Crj6RDt9.js";import"./Curve-9htNi4i5.js";import"./useElementOffset-HsHwXild.js";import"./iteratee-BXSQ8JUf.js";import"./ReactUtils-CsC3O-TD.js";import"./ActivePoints-C6Jn1jar.js";import"./Dot-LAxET7O2.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./ErrorBarContext-Dm8UQh69.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./useAnimationId-C8_uny94.js";import"./getRadiusAndStrokeWidthFromDot-_YFZPvzl.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./Trapezoid-DwBeZXV_.js";import"./Sector-BJsydvu6.js";import"./Cross-lPqrfSfL.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
