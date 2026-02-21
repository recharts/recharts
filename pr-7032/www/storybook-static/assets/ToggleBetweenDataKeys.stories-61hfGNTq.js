import{r as n,e as t}from"./iframe-BFxtY9dI.js";import{L as p}from"./LineChart-BjPbf9xB.js";import{R as s}from"./arrayEqualityCheck-BQbZm714.js";import{C as c}from"./CartesianGrid-rH53Dzit.js";import{X as l}from"./XAxis-D3JpuhiV.js";import{Y as d}from"./YAxis-CPuMzTzv.js";import{L as y}from"./Legend-v5xHdTLw.js";import{L as h}from"./Line-UEiO7S8k.js";import{T as u}from"./Tooltip-6YUCcRtK.js";import{R as g}from"./RechartsHookInspector-gudRCKH0.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLTyrBtL.js";import"./index-DIi_90kL.js";import"./immer-CUcePk58.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./resolveDefaultProps-Bso679kC.js";import"./CartesianAxis-BYeXOVyG.js";import"./Layer-YgumUWTD.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./Label-BcnS9G2E.js";import"./ZIndexLayer-DBC69qog.js";import"./types-DnPXbBrB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./step-Ckw-k6uH.js";import"./useElementOffset-DKdxrDGu.js";import"./uniqBy-6ea5zmox.js";import"./iteratee-VCyK8kIm.js";import"./ReactUtils-DAjtS1FD.js";import"./ActivePoints-YDyzEBL0.js";import"./Dot-BvOkHPQI.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./ErrorBarContext-BKgH9nv9.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./useAnimationId-BSFVs4aF.js";import"./getRadiusAndStrokeWidthFromDot-BTjYZIUU.js";import"./ActiveShapeUtils-C6MZRufc.js";import"./isPlainObject-BfhtbKPL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpImsBEM.js";import"./Trapezoid-DlEtqDsP.js";import"./Sector-CtJlOyZO.js";import"./Curve-CuVRTfs_.js";import"./Cross-B1lI0XWJ.js";import"./index-Df7eFGry.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./OffsetShower-C5x-sRSJ.js";import"./PlotAreaShower-BaqJ4sLy.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
