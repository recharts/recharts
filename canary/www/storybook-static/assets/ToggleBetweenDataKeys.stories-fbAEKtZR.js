import{r as n,R as t}from"./iframe-i0tdfO-S.js";import{L as p}from"./LineChart-DD8dnRUz.js";import{R as s}from"./zIndexSlice-kcLB36p_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJy1eyof.js";import{X as d}from"./XAxis-DVXCxOsO.js";import{Y as y}from"./YAxis-DpT96wDN.js";import{L as u}from"./Legend-De9VUwMG.js";import{L as h}from"./Line-Cm9DvNYq.js";import{T as g}from"./Tooltip-hnGeefGZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./index-BBdkxuke.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./throttle-yuh6eqF5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C9dKusfX.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./CartesianAxis-CDi0h_Ul.js";import"./Layer-CsmYaDC8.js";import"./Text-BMlLhZu5.js";import"./DOMUtils-CUxE2jbS.js";import"./Label-DT2Ych2e.js";import"./ZIndexLayer-CZv5OG2W.js";import"./types-CcIZQOYN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7h8s25b.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BI3PLQUq.js";import"./symbol-CkQQR2Y2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSiJWWdb.js";import"./uniqBy-CKF-LbxF.js";import"./iteratee-DkO0J_ik.js";import"./Curve-Dy9EB64d.js";import"./step-hH_hNvlA.js";import"./AnimatedItems-DHFbNXP7.js";import"./useAnimationId-OfLHi_5O.js";import"./ActivePoints-pXtGf72N.js";import"./Dot-CtPF4Cca.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./graphicalItemIdentity-wnXl2DYz.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./Cross-BVPma9bA.js";import"./Rectangle-BEbMkxuP.js";import"./util-Dxo8gN5i.js";import"./Sector-JppCnCMA.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
