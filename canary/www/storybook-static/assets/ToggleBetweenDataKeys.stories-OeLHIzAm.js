import{r as n,e as t}from"./iframe-D_8UNJGJ.js";import{L as p}from"./LineChart-C_KlJwbs.js";import{R as s}from"./arrayEqualityCheck-DLi0Ag40.js";import{C as c}from"./CartesianGrid-DoYIeoEt.js";import{X as l}from"./XAxis-nL349YCp.js";import{Y as d}from"./YAxis-UxrLaYW9.js";import{L as y}from"./Legend-Bj7vspPs.js";import{L as h}from"./Line-BhgCy_e3.js";import{T as u}from"./Tooltip-DDSjwDzP.js";import{R as g}from"./RechartsHookInspector-DqWSEPyK.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./immer-DgVi67O2.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./zIndexSlice-B5sMKRff.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./resolveDefaultProps-B5V57fEA.js";import"./CartesianAxis-CmGsQYnB.js";import"./Layer-CSFY2JoB.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./ZIndexLayer-B2K1T5O_.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./step-CSwA1lmy.js";import"./useElementOffset-CK6e0j5r.js";import"./uniqBy-CkdEBd3k.js";import"./iteratee-DSwxyR9X.js";import"./ReactUtils-lBfKzFjL.js";import"./ActivePoints-DBRR_Zdk.js";import"./Dot-C1CtLKbe.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./ErrorBarContext-F8JTwXXl.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./useAnimationId-BTJ6QCKz.js";import"./getRadiusAndStrokeWidthFromDot-DQGbBU8q.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./Curve-ICQj_4TC.js";import"./Cross-Daw2rW9r.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
