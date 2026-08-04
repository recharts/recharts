import{r as n,R as t}from"./iframe-CWA9dL1n.js";import{L as p}from"./LineChart-CwwH48Du.js";import{R as s}from"./zIndexSlice-aQmFZxtc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DQYoQUoz.js";import{X as d}from"./XAxis-DeVvUZ6V.js";import{Y as y}from"./YAxis-Crip943s.js";import{L as u}from"./Legend-Cop-tyu3.js";import{L as h}from"./Line-ClC6axgc.js";import{T as g}from"./Tooltip-yr7yLNs2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CId5I6PX.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./throttle-CO5aCb3a.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./d3-scale-CcIRMvmh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./CartesianAxis-TOCYRN01.js";import"./Layer-DdfHe4zJ.js";import"./Text-B5gv-Qby.js";import"./DOMUtils-h2leYdBT.js";import"./Label-Ci3V9in7.js";import"./ZIndexLayer-DQgxZgR-.js";import"./types-Dm1l0pKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CS3q9FMu.js";import"./symbol-DpU8AU8u.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEgQPazE.js";import"./uniqBy-Cq9W0uGc.js";import"./iteratee-DihBNj6d.js";import"./Curve-Cpe2XzR8.js";import"./step-DXLtdr_A.js";import"./AnimatedItems-4dsj7PS2.js";import"./useAnimationId-BfVlpqgG.js";import"./ActivePoints-f0YyJDEU.js";import"./Dot-BzG5kAil.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./ErrorBarContext-CsfUMbkm.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./graphicalItemIdentity--MezaesT.js";import"./ActiveShapeUtils-cijm59wq.js";import"./Cross-Ci5XozZ6.js";import"./Rectangle-mWWl0VjI.js";import"./util-Dxo8gN5i.js";import"./Sector-BnY7o6rE.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
