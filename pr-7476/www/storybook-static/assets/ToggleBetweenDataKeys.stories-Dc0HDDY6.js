import{r as n,R as t}from"./iframe-DkQJn7oC.js";import{L as p}from"./LineChart-IWGJWAv2.js";import{R as s}from"./zIndexSlice-CLvhVPNj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BjORpNZe.js";import{X as d}from"./XAxis-OlRaja_E.js";import{Y as y}from"./YAxis-B058BHQI.js";import{L as u}from"./Legend-BYrqTAz3.js";import{L as h}from"./Line-3Fr2lg_K.js";import{T as g}from"./Tooltip-BA3rhm5B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5ByFvr9.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./immer-ozzvrCwh.js";import"./get-_o-XDxyc.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./resolveDefaultProps-CtV3qxun.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./CartesianAxis-BfpvL1x5.js";import"./Layer-Br1RHuVf.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./Label-ufurgCkW.js";import"./ZIndexLayer-BvwLITgH.js";import"./types-BZmxyoje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Bzvyyefy.js";import"./symbol-BtyE-nfF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjsvA0sO.js";import"./uniqBy-BXfaEW_y.js";import"./iteratee-C_u0N0mB.js";import"./Curve-HzFtr0jb.js";import"./step-G_UXBYu7.js";import"./AnimatedItems-w7rZvjc1.js";import"./useAnimationId-CwryZT39.js";import"./ActivePoints-j2kJmVua.js";import"./Dot-Dno_atKi.js";import"./RegisterGraphicalItemId-BCNHxJaH.js";import"./ErrorBarContext-DzKhrRZV.js";import"./GraphicalItemClipPath-Dkvi73X5.js";import"./SetGraphicalItem-Cl7ozA9v.js";import"./getRadiusAndStrokeWidthFromDot-DRw_J2VH.js";import"./ActiveShapeUtils-CNNYz_9g.js";import"./Cross-B81Fs-AA.js";import"./Rectangle-BEXU9a8A.js";import"./util-Dxo8gN5i.js";import"./Sector-Cf94wIX9.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
