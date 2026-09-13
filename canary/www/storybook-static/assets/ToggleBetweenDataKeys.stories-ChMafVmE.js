import{r as p,R as t}from"./iframe-CLtR9-MI.js";import{L as n}from"./LineChart-CXkvgPgF.js";import{R as s}from"./zIndexSlice-DAD-nkNa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-NAjdvN10.js";import{X as d}from"./XAxis-6BQkQ0ss.js";import{Y as y}from"./YAxis-D2WqE3kW.js";import{L as u}from"./Legend-D9WY1rjh.js";import{L as h}from"./Line-oRa3yORT.js";import{T as g}from"./Tooltip-CsVYMHIy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BboqGkG2.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B01i0yXb.js";import"./throttle-DKa3BIxu.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./CartesianAxis-BeUj4LrW.js";import"./Layer-DSwUEhDY.js";import"./Text-CwyJl8Qf.js";import"./DOMUtils-B1EmNrIU.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./Label-BpbNna-S.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./types-_UL_m5mX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-S2gdZXyp.js";import"./symbol-CyNk4FNP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFvCNgns.js";import"./uniqBy-BXE4YbrE.js";import"./iteratee-DJf2_w-w.js";import"./Curve-B_ohmPvH.js";import"./step-BArTcWqE.js";import"./AnimatedItems-NFxue0WW.js";import"./useAnimationId-CKjPSYvA.js";import"./ActivePoints-LWQ74ttv.js";import"./Dot-Cg_oxTyJ.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./ErrorBarContext-DJq7p9Zk.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getRadiusAndStrokeWidthFromDot-DNgkSIfr.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./useGraphicalItemIdentity-CogcmOBq.js";import"./Cross-C5OQK69h.js";import"./Rectangle-DkICwgVP.js";import"./util-Dxo8gN5i.js";import"./Sector-DWsBRtQH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
