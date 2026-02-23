import{r as n,e as t}from"./iframe-CGVhrCsk.js";import{L as p}from"./LineChart-DTuXPKhR.js";import{R as s}from"./arrayEqualityCheck-hWfBO-dZ.js";import{C as c}from"./CartesianGrid-CPVW_xM8.js";import{X as l}from"./XAxis-CU7mfsQ-.js";import{Y as d}from"./YAxis-pDp602YX.js";import{L as y}from"./Legend-CpunIFOu.js";import{L as h}from"./Line-BDkuDWC1.js";import{T as u}from"./Tooltip-BZRXTx-W.js";import{R as g}from"./RechartsHookInspector-W4SpTwNb.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./immer-ByckOGb7.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./zIndexSlice-DutzqnKh.js";import"./renderedTicksSlice-DmMczr5P.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./CartesianAxis-DzeHRsGq.js";import"./Layer-DI3r5k9z.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./Label-Ca0FMlUU.js";import"./ZIndexLayer-BlFiVhV6.js";import"./types-CutyoUQf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./useElementOffset--pKlwBer.js";import"./uniqBy-BhkSAKgM.js";import"./iteratee-DIIFvXI9.js";import"./ReactUtils-CZtHcLE8.js";import"./ActivePoints-DCd-acaj.js";import"./Dot-Dwb1H9wZ.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./useAnimationId-bFrgCHGo.js";import"./getRadiusAndStrokeWidthFromDot-EoCljdHa.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL9KViSo.js";import"./Trapezoid-C1cOue80.js";import"./Sector-8CmLtbdM.js";import"./Curve-DdraDXui.js";import"./Cross-DPS2xDL2.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./OffsetShower-56TqmRW6.js";import"./PlotAreaShower-CzLMiHXt.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
