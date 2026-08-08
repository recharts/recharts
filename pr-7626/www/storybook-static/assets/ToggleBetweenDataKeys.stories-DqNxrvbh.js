import{r as n,R as t}from"./iframe-mg7UZdto.js";import{L as p}from"./LineChart-BWgolCOG.js";import{R as s}from"./zIndexSlice-DEfN8C0Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DN2LwA5f.js";import{X as d}from"./XAxis-BsNzvHKv.js";import{Y as y}from"./YAxis-BMDO5XEp.js";import{L as u}from"./Legend-DR3_R6Mv.js";import{L as h}from"./Line-CKKxuewC.js";import{T as g}from"./Tooltip-B8ZKq-Dz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkHp-MEf.js";import"./index-BUwgWfYf.js";import"./index-DeDE_LvF.js";import"./index-DZOBKqcM.js";import"./index-bFsd1KxH.js";import"./throttle-HD1NX84B.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BM8BDlXD.js";import"./resolveDefaultProps-BbtnPTv-.js";import"./isWellBehavedNumber-D_gpPOh3.js";import"./d3-scale-BWztF9lr.js";import"./renderedTicksSlice-sYtIEKKa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1jEcb3f.js";import"./chartDataContext-Dda0Eag5.js";import"./CategoricalChart-B1n3f5Qd.js";import"./CartesianAxis-DSGrP4Zf.js";import"./Layer-C85ssoby.js";import"./Text-B1zEX4dn.js";import"./DOMUtils-L0wsUfkf.js";import"./Label-Dkvvn7Fi.js";import"./ZIndexLayer-CwALprKR.js";import"./types-afGVOb_T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CO1IbQpv.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dmi8IJ-j.js";import"./symbol-DIOJnGLH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CEEz18uE.js";import"./uniqBy-ruWdsv0m.js";import"./iteratee-BYovAAOw.js";import"./Curve-k9Dj6G6o.js";import"./step-CmgtGEqA.js";import"./AnimatedItems-B1JY3m8f.js";import"./useAnimationId-B9PPVOgc.js";import"./ActivePoints-q5U2dg7Z.js";import"./Dot-Bxa-PMP9.js";import"./RegisterGraphicalItemId-k1fDZWtY.js";import"./ErrorBarContext-BlA0hFY9.js";import"./graphicalItemIdentity-C58faD0D.js";import"./SetGraphicalItem-Cs3-aGdX.js";import"./getRadiusAndStrokeWidthFromDot-DhEmmwnz.js";import"./ActiveShapeUtils-vQCoYSuM.js";import"./Cross-CdCS8kMS.js";import"./Rectangle-Di0wPj7o.js";import"./util-Dxo8gN5i.js";import"./Sector-DlZB2hlJ.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
