import{r as n,R as t}from"./iframe-ge4_mRTY.js";import{L as p}from"./LineChart-C0MW7rJO.js";import{R as s}from"./zIndexSlice-uDWjDJHd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DC5uGhFE.js";import{X as d}from"./XAxis-DVigS2Vl.js";import{Y as y}from"./YAxis-6Axf8DBL.js";import{L as u}from"./Legend-DoIR2LxL.js";import{L as h}from"./Line-CVLhEgT6.js";import{T as g}from"./Tooltip-BXR5Wqsp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./throttle-5caQeXVN.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./d3-scale-DAQlT4KL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./CartesianAxis-DfPCf8Ah.js";import"./Layer-CMf1Vf_h.js";import"./Text-D0QrHV93.js";import"./DOMUtils-B5z_Rz2Y.js";import"./Label-DHHP6jol.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./types-BGJIvFfK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CQFl9wZe.js";import"./symbol-X9jydYHL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B1ayTe9X.js";import"./uniqBy-H1XeOGJd.js";import"./iteratee-DetP-FdP.js";import"./Curve-DgHNdRhX.js";import"./step-DgphAjx2.js";import"./AnimatedItems-DTVko9-M.js";import"./useAnimationId-BwVBlHti.js";import"./ActivePoints-D4PeEGz4.js";import"./Dot-CSi-hwhf.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./ErrorBarContext-CqyguIOl.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./graphicalItemIdentity-UY1iR6Cu.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./Cross-CCksfaKi.js";import"./Rectangle-C3sbzP8A.js";import"./util-Dxo8gN5i.js";import"./Sector-DkwubCkH.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
