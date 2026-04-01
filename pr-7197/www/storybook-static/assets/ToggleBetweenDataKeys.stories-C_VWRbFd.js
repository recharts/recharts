import{r as n,e as t}from"./iframe-CpushxGE.js";import{L as p}from"./LineChart-Kdwl-iY5.js";import{R as s}from"./arrayEqualityCheck-VmHOknUh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BQfUsrZx.js";import{X as d}from"./XAxis-3mUHVa_Q.js";import{Y as y}from"./YAxis-isuSziaR.js";import{L as h}from"./Legend-1qEFocX2.js";import{L as u}from"./Line-bs4retuD.js";import{T as g}from"./Tooltip-BgOQGlV-.js";import{R as K}from"./RechartsHookInspector-h4ARZYih.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./immer-Cv3ASI8f.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./zIndexSlice-BHiqQbmT.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./resolveDefaultProps-B56n8ket.js";import"./CartesianAxis-C6WYLYP9.js";import"./Layer-CGETD00I.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./Label-Cxa0XqXu.js";import"./ZIndexLayer-B2YDg5m4.js";import"./types-CPRA2Aat.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dka0CVy4.js";import"./symbol-B3B4BbBB.js";import"./step-C3JKHl5Q.js";import"./useElementOffset-Ccd-OoSx.js";import"./uniqBy-bRpf7OJ5.js";import"./iteratee-BUEQrhsa.js";import"./ReactUtils-DYxQvQT8.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./ErrorBarContext-CLrRGRfs.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./useAnimationId-CaEP2jnF.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./ActiveShapeUtils-DlpM3N5z.js";import"./isPlainObject-DBfMrsvU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CagKfqqY.js";import"./Trapezoid-Cc12cYdx.js";import"./Sector-V5LdKq7s.js";import"./Curve-CXWLomdX.js";import"./Cross-BThC6qqJ.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
