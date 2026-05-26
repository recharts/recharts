import{u as n,e as t}from"./iframe-D8sYifa2.js";import{L as p}from"./LineChart-D_YlS_3q.js";import{d as s}from"./arrayEqualityCheck-y2Q9GogF.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-Bb81pApp.js";import{X as d}from"./XAxis-9biS9qcH.js";import{Y as u}from"./YAxis-BUVq_Z24.js";import{L as y}from"./Legend-7cd7NCmD.js";import{L as h}from"./Line-CkUEu8v5.js";import{T as g}from"./Tooltip-_uQNvj8Z.js";import{R as K}from"./RechartsHookInspector-DH476wIm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkonLtU6.js";import"./index-DUx68t71.js";import"./immer-DGWVQIGE.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./CartesianAxis-k72kWN9A.js";import"./Layer-D0lgb40K.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./Label-DJUogzP7.js";import"./ZIndexLayer-BoxbsGwS.js";import"./types-C-x3ql1e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Iph-WCB-.js";import"./symbol-B2tLKIcI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B8DfRQ2Q.js";import"./uniqBy-CHW-V9O0.js";import"./iteratee-DhisUvfr.js";import"./Curve-D7_AU4BE.js";import"./step-Cv8kCHVT.js";import"./graphicalItemTheme-BorrGmPK.js";import"./ActivePoints-DwTRXl_F.js";import"./Dot-IstG4xe6.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./ErrorBarContext-CMRjTkut.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./getRadiusAndStrokeWidthFromDot-E4UfAf03.js";import"./ActiveShapeUtils-gpKwZwuV.js";import"./Cross-Ct2MkSFS.js";import"./Rectangle-WKQjNyd_.js";import"./Sector-TIMVCNQr.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
