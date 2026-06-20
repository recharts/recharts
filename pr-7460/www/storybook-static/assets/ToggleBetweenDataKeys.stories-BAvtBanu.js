import{r as n,R as t}from"./iframe-D-d0UxKx.js";import{L as p}from"./LineChart-Pa2w6mgZ.js";import{R as s}from"./zIndexSlice-BzS2rwPG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C8-alLqA.js";import{X as d}from"./XAxis-D-U3c8PB.js";import{Y as y}from"./YAxis-AsX76kO1.js";import{L as u}from"./Legend-CfUz-HfC.js";import{L as h}from"./Line-DfVKxJkd.js";import{T as g}from"./Tooltip-DE_FR6bh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eUO8gZBV.js";import"./index-BFabSAMq.js";import"./index-CSjSfLNV.js";import"./index-hrPGNLyo.js";import"./index-Ch_o8Zsm.js";import"./immer-Bcymh1Oy.js";import"./get-DvwB2phC.js";import"./renderedTicksSlice-Dhujer-i.js";import"./axisSelectors-gJCz_NoR.js";import"./d3-scale-CAmzDAEa.js";import"./resolveDefaultProps-BULhiKbt.js";import"./isWellBehavedNumber-Cwzb-39K.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfHu0MoO.js";import"./chartDataContext-SgkfnsQg.js";import"./CategoricalChart-_USPwHCV.js";import"./CartesianAxis-BYNBLpS-.js";import"./Layer-DoiILNSz.js";import"./Text-BFbCMtys.js";import"./DOMUtils-BKfb6-ez.js";import"./Label-1pCxWysR.js";import"./ZIndexLayer-ikBJbvxL.js";import"./types-CjTc4pGQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DvPqf0ou.js";import"./symbol-l5NtWDxl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dy9eSR4I.js";import"./uniqBy-IX-17FwE.js";import"./iteratee-BSWYHyHw.js";import"./Curve-BbmMMCNF.js";import"./step-DyColUtB.js";import"./AnimatedItems-BX5PTjVC.js";import"./useAnimationId-TLS-J4It.js";import"./ActivePoints-DL-7xiHM.js";import"./Dot-BZoK9nPq.js";import"./RegisterGraphicalItemId-P4cnc2kT.js";import"./ErrorBarContext-9wDlrEu1.js";import"./GraphicalItemClipPath-CHhCw_J2.js";import"./SetGraphicalItem-B0zIa8gn.js";import"./getRadiusAndStrokeWidthFromDot-Bs94Qetl.js";import"./ActiveShapeUtils-BYmp4x7X.js";import"./Cross-oxBNcvXe.js";import"./Rectangle-DBqM3f2v.js";import"./util-Dxo8gN5i.js";import"./Sector-Mx1uR2nm.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
