import{r as n,e as t}from"./iframe-BDkb7FkG.js";import{L as p}from"./LineChart-B2qKPL5H.js";import{R as s}from"./arrayEqualityCheck-B0TJyWD5.js";import{C as c}from"./CartesianGrid-D4TC9vM6.js";import{X as l}from"./XAxis-CmGav0vS.js";import{Y as d}from"./YAxis-Q5HYawHS.js";import{L as y}from"./Legend-BhCA1bNt.js";import{L as h}from"./Line-CgXkRzu8.js";import{T as u}from"./Tooltip-DLj7yf-b.js";import{R as g}from"./RechartsHookInspector-BNEsfHz6.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mZGj0Z3E.js";import"./hooks-DxXidz5r.js";import"./axisSelectors-BNLmthUg.js";import"./zIndexSlice-CEfchlTx.js";import"./resolveDefaultProps-BeK5tOdD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8s7iQvN.js";import"./chartDataContext-BN0HTO99.js";import"./CategoricalChart-QMn_55Fk.js";import"./CartesianAxis-CqOMvTf3.js";import"./Layer-DN29fGq2.js";import"./Text-DNxSgO5d.js";import"./DOMUtils-DkX8_PYo.js";import"./Label-557v0PPI.js";import"./ZIndexLayer-CSKx51xZ.js";import"./types-lD78ZLRW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-cZo6AVu-.js";import"./Curve-BhcGGWB4.js";import"./useElementOffset-Cm-nycv7.js";import"./iteratee-BCcKgiDG.js";import"./ReactUtils-Bu2m7OLZ.js";import"./ActivePoints-CkZqhQS2.js";import"./Dot-Cj5br_BU.js";import"./RegisterGraphicalItemId-CVSGS5U1.js";import"./ErrorBarContext-Cklgrfin.js";import"./GraphicalItemClipPath-PGYoXjM4.js";import"./SetGraphicalItem-D0--qzX6.js";import"./useAnimationId-Dt_DMrVN.js";import"./getRadiusAndStrokeWidthFromDot-B9swL3GN.js";import"./ActiveShapeUtils-BT6H0snO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdEMe32h.js";import"./Trapezoid-BYTF93yz.js";import"./Sector-BDLqy63u.js";import"./Cross-D9nqiwKw.js";import"./index-BiD0RfS5.js";import"./ChartSizeDimensions-DMf6nTY3.js";import"./OffsetShower-CLob0hRN.js";import"./PlotAreaShower-DdbC7e3E.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
