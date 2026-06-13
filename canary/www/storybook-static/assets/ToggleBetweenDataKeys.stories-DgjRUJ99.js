import{r as n,R as t}from"./iframe-DCSfzZD_.js";import{L as p}from"./LineChart-YBvYJCUI.js";import{R as s}from"./zIndexSlice-Cya-j5JC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTmSZryn.js";import{X as d}from"./XAxis-BD_qaxla.js";import{Y as y}from"./YAxis-CXksHDR7.js";import{L as u}from"./Legend-X10LVISh.js";import{L as h}from"./Line-mUDtb45l.js";import{T as g}from"./Tooltip-ClHTJ87m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./immer-ByTaNkbJ.js";import"./get-bIWt5V4Q.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./CartesianAxis-B8kAJjBK.js";import"./Layer-CYaqqIa6.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./Label-DyuMertz.js";import"./ZIndexLayer-BUBfOUZp.js";import"./types-pWlDed2R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BKzYxUbZ.js";import"./symbol-CEbhlMi_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3zKGjmj.js";import"./uniqBy-BKEBWd8i.js";import"./iteratee-DGPg2gSr.js";import"./Curve-DBwKGQr7.js";import"./step-B0rCVxys.js";import"./AnimatedItems-DS8CzLL4.js";import"./useAnimationId-BTIZp_pi.js";import"./ActivePoints-ClGm_OTK.js";import"./Dot-C_xAmUte.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getRadiusAndStrokeWidthFromDot-C8lTyvL_.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./Cross-CW_92A8M.js";import"./Rectangle-DpxrFSPu.js";import"./Sector-Dk4xXV-l.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
