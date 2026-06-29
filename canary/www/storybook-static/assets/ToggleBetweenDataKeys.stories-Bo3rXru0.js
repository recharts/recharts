import{r as n,R as t}from"./iframe-Ce1K7ebi.js";import{L as p}from"./LineChart-DT5pJmHK.js";import{R as s}from"./zIndexSlice-8Zo3fsoU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BOpB_UQw.js";import{X as d}from"./XAxis-3C9aClrU.js";import{Y as y}from"./YAxis-DnjNgR7C.js";import{L as u}from"./Legend-BQlBEeuR.js";import{L as h}from"./Line-Beg62wAW.js";import{T as g}from"./Tooltip-iZJNV3dm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BrIlX8W1.js";import"./index-BorxIHRi.js";import"./index-gt-wl4xF.js";import"./index-s0WSFyA7.js";import"./index-AjZPfGGe.js";import"./immer-wBCCevMF.js";import"./get-BJIMs5EG.js";import"./renderedTicksSlice-GRKlOorj.js";import"./axisSelectors-CwdMfS2t.js";import"./d3-scale-Dx0XyOwO.js";import"./resolveDefaultProps-DSV9zLoY.js";import"./isWellBehavedNumber-CQ8pg5Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDjFqgQH.js";import"./chartDataContext-CPsHUBNm.js";import"./CategoricalChart-CSIi67W8.js";import"./CartesianAxis-vXS1PjkI.js";import"./Layer-B1_feEXA.js";import"./Text-BYOeWYK5.js";import"./DOMUtils-DkFEIDQF.js";import"./Label-CmiiW9da.js";import"./ZIndexLayer-CVK_cW1P.js";import"./types-EmN6t4vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BDRy21CR.js";import"./symbol-aMWaQb_D.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXn7gAmc.js";import"./uniqBy-DJfS3mll.js";import"./iteratee-CHawhTEq.js";import"./Curve-BMLS1vNR.js";import"./step-fKuN5Fcd.js";import"./AnimatedItems-DUKSjkGs.js";import"./useAnimationId-BsE4V4Ok.js";import"./ActivePoints-DVEwrhzj.js";import"./Dot-fVsrRUzo.js";import"./RegisterGraphicalItemId-CAijELDs.js";import"./ErrorBarContext-ZtUvHt5X.js";import"./GraphicalItemClipPath-DDqY4rhz.js";import"./SetGraphicalItem-CTmxPNcP.js";import"./getRadiusAndStrokeWidthFromDot-B3GcRvO7.js";import"./ActiveShapeUtils-DLpYpzZO.js";import"./Cross-BmB1UWT9.js";import"./Rectangle-C8DUmN55.js";import"./util-Dxo8gN5i.js";import"./Sector-SjY5azCI.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
