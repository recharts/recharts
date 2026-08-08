import{r as n,R as t}from"./iframe-Bh1U-oMl.js";import{L as p}from"./LineChart-DN_h6664.js";import{R as s}from"./zIndexSlice-CbwDGfhV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DLxfJWcm.js";import{X as d}from"./XAxis-BDDyTBp4.js";import{Y as y}from"./YAxis-DLWlNOvC.js";import{L as u}from"./Legend-B_aI-CWe.js";import{L as h}from"./Line-xv0WhQR5.js";import{T as g}from"./Tooltip-BTmBefKP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJiANDik.js";import"./index-BJEvKA6W.js";import"./index-Pl0BuMhm.js";import"./index-CIfG7xc6.js";import"./index-B7DuV58o.js";import"./throttle-DMII0ZAy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-KgYrPzsA.js";import"./resolveDefaultProps-Cs5bXre5.js";import"./isWellBehavedNumber-Dyeu8bHm.js";import"./d3-scale-DvNPjBaU.js";import"./renderedTicksSlice-6pXaWoy-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YxKbksJG.js";import"./chartDataContext-B8xHbf95.js";import"./CategoricalChart-DcSXPqkv.js";import"./CartesianAxis-DON_KZPp.js";import"./Layer-C3H-dOT5.js";import"./Text-bdpnJJaC.js";import"./DOMUtils-TtYkNMfa.js";import"./Label-CoZlS51A.js";import"./ZIndexLayer-C51_GrjW.js";import"./types-w_TylJof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bbvr3NVw.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DQ62W2JC.js";import"./symbol-B_QuibgC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkLuT-ex.js";import"./uniqBy-DzWBXKbZ.js";import"./iteratee-CG3_OUhe.js";import"./Curve-D4WkqVii.js";import"./step-CbC2c93d.js";import"./AnimatedItems-BvF3WRYv.js";import"./useAnimationId-0BmLZ6mF.js";import"./ActivePoints-B8uy1Jk5.js";import"./Dot-ClTJQBAf.js";import"./RegisterGraphicalItemId-UrCBGtwU.js";import"./ErrorBarContext-CYylskZD.js";import"./GraphicalItemClipPath-CR-53Dh0.js";import"./SetGraphicalItem-oPzo6Gr-.js";import"./getRadiusAndStrokeWidthFromDot-BYREjPLW.js";import"./ActiveShapeUtils-0P_4fb1E.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-I1vCGe6r.js";import"./Rectangle-B31sdsfS.js";import"./util-Dxo8gN5i.js";import"./Sector-BkVuw3Sh.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
