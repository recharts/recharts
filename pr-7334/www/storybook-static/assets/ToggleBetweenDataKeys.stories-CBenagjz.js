import{r as n,e as t}from"./iframe-IedaLeal.js";import{L as p}from"./LineChart-BXojSIOU.js";import{R as s}from"./arrayEqualityCheck-CDeFCuAt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B7TLSq6W.js";import{X as d}from"./XAxis-CUj044ZC.js";import{Y as y}from"./YAxis-j1HNTz_n.js";import{L as h}from"./Legend-DVndYvev.js";import{L as u}from"./Line-QYm9FiCp.js";import{T as g}from"./Tooltip-B6TvM8k9.js";import{R as K}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./immer-Dd6dXjxy.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./resolveDefaultProps-DinctDfH.js";import"./CartesianAxis-DdlOSCj4.js";import"./Layer-COpu_kTm.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./Label-NwC3LlsS.js";import"./ZIndexLayer-JYekqGDv.js";import"./types-Ci9gDE8O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./step-CR-qwJGd.js";import"./useElementOffset-XMbgmZkO.js";import"./uniqBy-CZ5FVlWP.js";import"./iteratee-DYAmoIVS.js";import"./ReactUtils-De7AqaLg.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./useAnimationId-D3Yn3hG9.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0StcwZN.js";import"./Trapezoid-DD2FtYjE.js";import"./Sector-BSwgLZD3.js";import"./Curve-BzqwREyl.js";import"./Cross-vdltQL2q.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
