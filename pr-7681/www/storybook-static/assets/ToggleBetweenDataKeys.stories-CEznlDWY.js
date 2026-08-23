import{r as n,R as t}from"./iframe-DjwM0vgm.js";import{L as p}from"./LineChart-CKgvEI7y.js";import{R as s}from"./zIndexSlice-S6d1Qn7a.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BgM_ZnAA.js";import{X as d}from"./XAxis-BZppthUd.js";import{Y as y}from"./YAxis-BzjCo30t.js";import{L as u}from"./Legend-DNbtcxUk.js";import{L as h}from"./Line-D-8O9Mab.js";import{T as g}from"./Tooltip-CLlN6saw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BA3LaKhk.js";import"./index-DNt860Ln.js";import"./index-DxMXUOIN.js";import"./index-D4-5N2-z.js";import"./index-z5DhIgT0.js";import"./throttle-CucYyHCR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUwM7bTC.js";import"./resolveDefaultProps-BFL8H9_0.js";import"./isWellBehavedNumber-DYJhUs7I.js";import"./d3-scale-CwSigEVq.js";import"./renderedTicksSlice-BdL9Tyr5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqDwVa2A.js";import"./chartDataContext-D_305TZw.js";import"./CategoricalChart-Cq3eseQi.js";import"./CartesianAxis-SmpQZLxS.js";import"./Layer-4XX9ZvT_.js";import"./Text-esJ64cTt.js";import"./DOMUtils-CoSy3vPc.js";import"./useId-C20ArA-J.js";import"./useBackwardsCompatibleTheme-DiGCOcMi.js";import"./Label-DksVCiKj.js";import"./ZIndexLayer-BplzHMbl.js";import"./types-Co4bPNAL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CKwf6-MY.js";import"./symbol-DPegDx59.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CRpgW7vZ.js";import"./uniqBy-p0oDiZgx.js";import"./iteratee-Ci02_5B5.js";import"./Curve-BULGBxkP.js";import"./step-B9Cib_uB.js";import"./AnimatedItems-C2ZGCcD3.js";import"./useAnimationId-C_ptHuMP.js";import"./ActivePoints-3wMe_Rof.js";import"./Dot-CVNFD5oh.js";import"./RegisterGraphicalItemId-Bfv8TlvG.js";import"./ErrorBarContext-SnNUtmYc.js";import"./GraphicalItemClipPath-BTc4Rf5I.js";import"./SetGraphicalItem-BH3XWVOo.js";import"./getRadiusAndStrokeWidthFromDot-swb7_H1P.js";import"./ActiveShapeUtils-D8QEGcp-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BDdB4vhK.js";import"./Rectangle-Dhvnt00l.js";import"./util-Dxo8gN5i.js";import"./Sector-BRNZ1tO0.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
