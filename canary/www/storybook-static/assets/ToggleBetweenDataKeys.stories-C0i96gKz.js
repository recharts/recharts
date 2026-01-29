import{r as n,e as t}from"./iframe-CoxmJKyj.js";import{L as p}from"./LineChart-CLf8vJrG.js";import{R as s}from"./arrayEqualityCheck-BiMa-XSg.js";import{C as c}from"./CartesianGrid-BvUKtn8y.js";import{X as l}from"./XAxis-ByfqRbuq.js";import{Y as d}from"./YAxis-CBdXzckK.js";import{L as y}from"./Legend-D_gOoCGt.js";import{L as h}from"./Line-BdzKDbXD.js";import{T as u}from"./Tooltip-D_QcebJB.js";import{R as g}from"./RechartsHookInspector-DxKqckh3.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BeGnBw32.js";import"./hooks-C3tSBkhO.js";import"./axisSelectors-Cx1Cm9h8.js";import"./zIndexSlice-BS5hTNaN.js";import"./resolveDefaultProps-sn4NzjIu.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-TnRBDpKI.js";import"./chartDataContext-88-zaTIw.js";import"./CategoricalChart-CyysacNR.js";import"./CartesianAxis-C3XzKlXq.js";import"./Layer-FnVtSY9f.js";import"./Text-CbKrSYiu.js";import"./DOMUtils-p48KsCFt.js";import"./Label-BaauyrMN.js";import"./ZIndexLayer-C9Rpc0HU.js";import"./types-VgYnwRoj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3p0hcDOB.js";import"./Curve-BcGu8BmK.js";import"./useElementOffset-lvwsgQgc.js";import"./iteratee-BEESgXf_.js";import"./ReactUtils-DelGq7vW.js";import"./ActivePoints-D0nFSc_H.js";import"./Dot-BifkMnm9.js";import"./RegisterGraphicalItemId-CJCmzU4Y.js";import"./ErrorBarContext-Ce5dqlrV.js";import"./GraphicalItemClipPath-B39q-JPL.js";import"./SetGraphicalItem-_WwZUCgQ.js";import"./useAnimationId-DMb1Vy6w.js";import"./getRadiusAndStrokeWidthFromDot-k8J8eAkm.js";import"./ActiveShapeUtils-DHfcpEHc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KCszVTMh.js";import"./Trapezoid-CHWx_77j.js";import"./Sector-De_XHewT.js";import"./Cross-NaJlCvRs.js";import"./index-BjMwiY7v.js";import"./ChartSizeDimensions-CtAc8nGI.js";import"./OffsetShower-BIEGpqN_.js";import"./PlotAreaShower-B9vM17qm.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
