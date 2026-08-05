import{r as n,R as t}from"./iframe-Cimk_otj.js";import{L as p}from"./LineChart-CfWE946H.js";import{R as s}from"./zIndexSlice-CzTLX9Ul.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BuEh-2En.js";import{X as d}from"./XAxis-ByDDt0Jf.js";import{Y as y}from"./YAxis-Bv-UC-Jk.js";import{L as u}from"./Legend-mJb9ktQo.js";import{L as h}from"./Line-CRuVEpLB.js";import{T as g}from"./Tooltip-iHYM4Kfb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./throttle-QmRScbE8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjpwO9gg.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./Label-DQCQB4o-.js";import"./ZIndexLayer-DKEQN7E1.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BWwzL4bj.js";import"./symbol-D3PRm8fB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./Curve-VqOwF4YW.js";import"./step-CBLStXIf.js";import"./AnimatedItems-tyjZKRCa.js";import"./useAnimationId-CWH9KLrM.js";import"./ActivePoints-DtOrXveG.js";import"./Dot-DcWN47E-.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./graphicalItemIdentity-dpRLTV2V.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./Cross-DMlRKkj6.js";import"./Rectangle-CgoJ-bg6.js";import"./util-Dxo8gN5i.js";import"./Sector-BivCzjVW.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
