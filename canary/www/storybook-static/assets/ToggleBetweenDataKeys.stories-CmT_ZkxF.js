import{r as n,e as t}from"./iframe-BDEQfIlb.js";import{L as p}from"./LineChart-953LT7xs.js";import{R as s}from"./arrayEqualityCheck-BA5tHTkl.js";import{C as c}from"./CartesianGrid-CCyEk27r.js";import{X as l}from"./XAxis-NhsKtlV2.js";import{Y as d}from"./YAxis-CNg2gE42.js";import{L as y}from"./Legend-BFcWxD8x.js";import{L as h}from"./Line-CL2F8gdZ.js";import{T as u}from"./Tooltip-CSIOt9u8.js";import{R as g}from"./RechartsHookInspector-BP4qljDX.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CST4_BZP.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./zIndexSlice-B88C6q2R.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./PolarUtils-KAlgtJ9T.js";import"./CartesianChart-Cqd8BAy6.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./CartesianAxis-Dj71nMX3.js";import"./Layer-Con5T55J.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./Label-B9k6RWTG.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./types-tr7QhDo_.js";import"./Symbols-CIf3O2Az.js";import"./Curve-apm-ZytV.js";import"./useElementOffset-CngPJaXk.js";import"./iteratee-B0lHZBPg.js";import"./ReactUtils-B2Wxyi5A.js";import"./ActivePoints-_KCIb0BH.js";import"./Dot-CuzOurFG.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./ErrorBarContext-BVoK2OG_.js";import"./GraphicalItemClipPath-Cxm1A7e8.js";import"./SetGraphicalItem-mM5uupNM.js";import"./useAnimationId-fPMh2rE3.js";import"./getRadiusAndStrokeWidthFromDot-CeQbAwGD.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZIbf3UH.js";import"./Trapezoid-D-MMn83p.js";import"./Sector-CDYiU8tv.js";import"./Cross-BQtDsQ6e.js";import"./index-D0u2n02A.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
