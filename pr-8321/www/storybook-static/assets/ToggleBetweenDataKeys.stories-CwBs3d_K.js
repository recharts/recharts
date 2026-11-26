import{r as p,R as t}from"./iframe-CvaFu5-c.js";import{L as n}from"./LineChart-D8Cp2b8w.js";import{R as s}from"./zIndexSlice-BCgb8eXa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-3AYqMTzZ.js";import{X as d}from"./XAxis-DQoNxyYu.js";import{Y as y}from"./YAxis-3HuEzFma.js";import{L as u}from"./Legend-vLngwb9Y.js";import{L as h}from"./Line-Bo0hpeCk.js";import{T as g}from"./Tooltip-BuWKvjd4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-sPOqKb.js";import"./resolveDefaultProps-CVIJCqoI.js";import"./get-CjriyByo.js";import"./axisSelectors-BvhvBZte.js";import"./throttle-CPKsFv9V.js";import"./index-Dtg5gRR9.js";import"./index-D2kSQ0HF.js";import"./polarAxisSelectors-nhz4Skhy.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-1_Z3dmgw.js";import"./index-gm9J6V3Z.js";import"./index-DnvnPPwe.js";import"./renderedTicksSlice-DknGqI4w.js";import"./index-6xLnrqw3.js";import"./fillDefinitions-DWPX2s4U.js";import"./CartesianChart-DGNKw331.js";import"./chartDataContext-LmmBbzgU.js";import"./CategoricalChart-Cug4ru24.js";import"./CartesianAxis-71DKFDGT.js";import"./Layer-GSzXSKza.js";import"./Text-BlqBUDkB.js";import"./ZIndexLayer-DO68mxLb.js";import"./Label-D9P4cAWK.js";import"./types-B8ocCfqn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BJcGRvsQ.js";import"./symbol-CBJm44QG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CPc3MDMB.js";import"./uniqBy-DqEP9E_e.js";import"./iteratee-BOojH3GU.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-9zV8sg_8.js";import"./Curve-CMLV0YB3.js";import"./step-C9qQ8yhV.js";import"./dataEntryStyles-B7SMVv85.js";import"./ActivePoints-DxXTbZF0.js";import"./Dot-C2Vb3upB.js";import"./activeStyles-TP9Js-Ix.js";import"./useAnimationId-UMR0vx8i.js";import"./ErrorBarContext-Y9Ni32mE.js";import"./SetGraphicalItem-A7-SSfJY.js";import"./ActiveShapeUtils-nr8N1oHW.js";import"./useEffectiveDataKey-BIeeRG6o.js";import"./Cross-BwS2T31m.js";import"./Rectangle-BN9-Ud6u.js";import"./util-Dxo8gN5i.js";import"./Sector-By2AYXm5.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
