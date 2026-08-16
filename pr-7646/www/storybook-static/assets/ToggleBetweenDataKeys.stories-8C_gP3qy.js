import{r as n,R as t}from"./iframe-CdVkyLHS.js";import{L as p}from"./LineChart-C5NhKWyk.js";import{R as s}from"./zIndexSlice-GOyP9Zss.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DrJHjPfQ.js";import{X as d}from"./XAxis-CRNnSUZ9.js";import{Y as y}from"./YAxis-BxGuypq0.js";import{L as u}from"./Legend-0BqTFmy8.js";import{L as h}from"./Line-Piz3hUqR.js";import{T as g}from"./Tooltip-CA_3aYjj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJIttxHk.js";import"./index-OMOk9pzv.js";import"./index-DysuFDaN.js";import"./index-QyElv-Xn.js";import"./index-DvCc_EAq.js";import"./throttle-CdLGvlu3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BJboZDv2.js";import"./resolveDefaultProps-CH_tZ1CV.js";import"./isWellBehavedNumber-CukO4dTL.js";import"./d3-scale-C_ybSH9a.js";import"./renderedTicksSlice-nlBTJT3n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DH_QKR3e.js";import"./chartDataContext-vMtbxlvm.js";import"./CategoricalChart-Bmub6W6K.js";import"./CartesianAxis-Cg3yJD5r.js";import"./Layer-DsEuCMxp.js";import"./Text-Bg49R2O8.js";import"./DOMUtils-yV6fdCO6.js";import"./useBackwardsCompatibleTheme-BUV415Lc.js";import"./Label-Cwb8kt4E.js";import"./ZIndexLayer-CnILDHp4.js";import"./types-D7MUQAXd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CGFvJ-2L.js";import"./symbol-DqtQmnKr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-hZq7XyZb.js";import"./uniqBy-DAdYZ9zP.js";import"./iteratee-Bb8Y4tsd.js";import"./Curve-BU_gswLL.js";import"./step-CTvr7swL.js";import"./AnimatedItems-B_5qg-lC.js";import"./useAnimationId-CnyNJ0d7.js";import"./ActivePoints-D2jscU_r.js";import"./Dot-J0nM858J.js";import"./RegisterGraphicalItemId-D7VKY1D2.js";import"./ErrorBarContext-BWl2zb09.js";import"./GraphicalItemClipPath-kU06yTtA.js";import"./SetGraphicalItem-CKTCd1Uv.js";import"./getRadiusAndStrokeWidthFromDot-Clc9jd4p.js";import"./ActiveShapeUtils-C96E8Hlz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CSXpNGes.js";import"./Rectangle-nloq3-mC.js";import"./util-Dxo8gN5i.js";import"./Sector-BmwK_MH9.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
