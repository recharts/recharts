import{u as n,e as t}from"./iframe-FqQriuOU.js";import{L as p}from"./LineChart-Cd2DCj8j.js";import{g as s}from"./arrayEqualityCheck-D81yCQ_E.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-weOWy7UD.js";import{X as d}from"./XAxis-rE-0ziVR.js";import{Y as u}from"./YAxis-Bx3kycjW.js";import{L as y}from"./Legend-BZ5lxXMe.js";import{L as h}from"./Line-4-mxtk0F.js";import{T as g}from"./Tooltip-w5W1cpGD.js";import{R as K}from"./RechartsHookInspector-Bzl8PNqn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CApzUvyj.js";import"./index-B7L9uR1Y.js";import"./immer-majn-qZf.js";import"./hooks-B_UbI8Xu.js";import"./axisSelectors-_fK9ZDWF.js";import"./d3-scale-i74XhqWc.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-f7paLzdj.js";import"./renderedTicksSlice-C4IzMNte.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DL9N19jV.js";import"./chartDataContext-8vaUd_eG.js";import"./CategoricalChart-D0upkKoq.js";import"./resolveDefaultProps-CH-QvTob.js";import"./CartesianAxis-BeuIWSvD.js";import"./Layer-dRSSbr5y.js";import"./Text-DPCTz-gd.js";import"./DOMUtils-BuFom25w.js";import"./Label-CKdOaAhH.js";import"./ZIndexLayer-C869JS3k.js";import"./types-CfmOzYIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DAX_okS0.js";import"./symbol-B9MBbnrG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B8C7PBsW.js";import"./uniqBy-B2F8-yBK.js";import"./iteratee-ZukpjJzA.js";import"./Curve-bxiY4w-f.js";import"./step-DRejhJRi.js";import"./AnimatedItems-BOrN0e6v.js";import"./useAnimationId-CwJGQlGj.js";import"./ActivePoints-p2Wn9c62.js";import"./Dot-CoDBEdb8.js";import"./RegisterGraphicalItemId-W17uiJWi.js";import"./ErrorBarContext-BDkPCebh.js";import"./GraphicalItemClipPath-BYvnIWBH.js";import"./SetGraphicalItem-w0uUjr7L.js";import"./getRadiusAndStrokeWidthFromDot-Bl0IsbtV.js";import"./ActiveShapeUtils-DpMDeTgr.js";import"./Cross-BB1RXFg4.js";import"./Rectangle-CJeUHGgv.js";import"./Sector-DRBGLzi3.js";import"./index-FNdgkUyx.js";import"./ChartSizeDimensions-BmkjlCCd.js";import"./OffsetShower-6wrSmmyT.js";import"./PlotAreaShower-MAtCIzZg.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};
