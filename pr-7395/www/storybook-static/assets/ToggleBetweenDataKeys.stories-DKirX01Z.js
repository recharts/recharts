import{P as n,c as t}from"./iframe-DWpXT6OO.js";import{L as p}from"./LineChart-BQY9pHty.js";import{g as s}from"./zIndexSlice-BI8aBdB2.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DzsIPI5_.js";import{X as d}from"./XAxis-BjHcYZV7.js";import{Y as y}from"./YAxis-C6ZngbUi.js";import{L as u}from"./Legend-YLtKyBjO.js";import{L as g}from"./Line-CQQWht13.js";import{T as h}from"./Tooltip-BDoI7nsn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./immer-CtD26uCH.js";import"./get-CAMMj0jB.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./CartesianAxis-3iObmYRO.js";import"./Layer-DdIFnola.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./Label-BLTDXbDF.js";import"./ZIndexLayer-Cqbl6fly.js";import"./types-B1PNqcSi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-JWI6Qnv2.js";import"./symbol-DxUpZVsx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-90O8KY7B.js";import"./uniqBy-BYp6XD8y.js";import"./iteratee-S--T3Ost.js";import"./Curve-wqoEsp4f.js";import"./step-C03CUoTX.js";import"./ReactUtils-CGwSHaxd.js";import"./ActivePoints-D8LyVTVu.js";import"./Dot-B_vusOKB.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";import"./getRadiusAndStrokeWidthFromDot-N8lTwYxy.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./Cross-CsC1zjvc.js";import"./Rectangle-B23U2X2N.js";import"./Sector-C1HiTMuN.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
