import{r as n,e as t}from"./iframe-DtsdDKdZ.js";import{L as p}from"./LineChart-BvPHy9kI.js";import{R as s}from"./arrayEqualityCheck-Droc7dSW.js";import{C as c}from"./CartesianGrid-E5AGxnFR.js";import{X as l}from"./XAxis-BoqN_M_f.js";import{Y as d}from"./YAxis-Ca_gtZCr.js";import{L as y}from"./Legend-BkrtJQfp.js";import{L as h}from"./Line-B8-iHccE.js";import{T as u}from"./Tooltip-BGursgnW.js";import{R as g}from"./RechartsHookInspector-BlgcmNAN.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./index-C-dV99_B.js";import"./immer-Cl4pjRPT.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./zIndexSlice-C9mn4FBr.js";import"./renderedTicksSlice-DiHGExst.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./resolveDefaultProps-CYphw90L.js";import"./CartesianAxis-XgYIScCi.js";import"./Layer-SH7Pqpr5.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./Label-DA1oiymG.js";import"./ZIndexLayer-DBoKoGoH.js";import"./types-8PVRu1dQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Ct3soTwA.js";import"./symbol-Biu6vDdW.js";import"./step-BAMUjg0M.js";import"./useElementOffset-Cb5MxjJe.js";import"./uniqBy-jMwGgNZk.js";import"./iteratee-Bs43YSd1.js";import"./ReactUtils-D2snZVWC.js";import"./ActivePoints-BpXmKIch.js";import"./Dot-W3eXNr9t.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./ErrorBarContext-BXVMNut-.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./useAnimationId-BeYERtYV.js";import"./getRadiusAndStrokeWidthFromDot-Fg5nPjko.js";import"./ActiveShapeUtils-DTqZq5h0.js";import"./isPlainObject-PKiGLw7x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bs14o4jp.js";import"./Trapezoid-CfylSPEx.js";import"./Sector-BvQTjcKL.js";import"./Curve-DR4nUNk7.js";import"./Cross-qdeQRJDU.js";import"./index-txaMAxKK.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
