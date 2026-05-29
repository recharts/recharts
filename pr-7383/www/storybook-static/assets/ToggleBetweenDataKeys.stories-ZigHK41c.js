import{P as n,c as t}from"./iframe-C5fgHeit.js";import{L as p}from"./LineChart-Dco5hzYS.js";import{g as s}from"./zIndexSlice-Cm8Wfowt.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DF1051eG.js";import{X as d}from"./XAxis-DgWVtNyr.js";import{Y as y}from"./YAxis-CoKsJgTz.js";import{L as u}from"./Legend-DKV1wX0C.js";import{L as g}from"./Line-CaJL65_J.js";import{T as h}from"./Tooltip-Bw7pP9bN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./immer-kTf3s8ve.js";import"./get-DWrZfuk9.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./resolveDefaultProps-CYeq70FN.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./CartesianAxis-DBytmeds.js";import"./Layer-Cc_zBrzh.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./Label-DviSNP2P.js";import"./ZIndexLayer-DJnVmrOS.js";import"./types-CutKYO-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BAb-Z_BR.js";import"./symbol-B7BiD5Uu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CyRs7Ghn.js";import"./uniqBy-DrtRQAo9.js";import"./iteratee-WGyIZ-Gp.js";import"./Curve-C5tRxImZ.js";import"./step-Dfgw13sm.js";import"./ReactUtils-XexX1ZTx.js";import"./ActivePoints-CQ8RyYGT.js";import"./Dot-1zqir61q.js";import"./RegisterGraphicalItemId-Dq8Ivo6G.js";import"./ErrorBarContext-CKHx2UXB.js";import"./GraphicalItemClipPath-BWUEd7L8.js";import"./SetGraphicalItem-dBJjG1CE.js";import"./useAnimationId-DkZHsCyz.js";import"./getRadiusAndStrokeWidthFromDot-D7vHONas.js";import"./ActiveShapeUtils-BJ_lKbaS.js";import"./Cross-DJilIOTx.js";import"./Rectangle-CelBvebx.js";import"./Sector-8_MFoJRk.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
