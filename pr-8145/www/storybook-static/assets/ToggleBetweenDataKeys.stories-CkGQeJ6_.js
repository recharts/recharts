import{r as p,R as t}from"./iframe-B5EBEutQ.js";import{L as n}from"./LineChart-Bof-e_RY.js";import{R as s}from"./zIndexSlice-BS5hvVSM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BE_yLE8X.js";import{X as d}from"./XAxis-C0OgGT6V.js";import{Y as y}from"./YAxis-US4huNHY.js";import{L as u}from"./Legend-B5cuN_n_.js";import{L as h}from"./Line-CtFf5VG7.js";import{T as g}from"./Tooltip-C4-fT2EA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BC-brhau.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CLoHgdoC.js";import"./throttle-B9WW5VMA.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-iNRnE1hH.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./CartesianAxis-7YbWTN27.js";import"./Layer-BYAjyABW.js";import"./Text-BVXkgzAF.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./Label-Bho88syw.js";import"./types-BmtCPhIx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./path-DyVhHtw_.js";import"./useElementOffset-5ftWeo_0.js";import"./uniqBy-tVD2kZAe.js";import"./iteratee-Cg-J5YFs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Di7q2eVu.js";import"./step-DSuuF4zz.js";import"./LabelList-BsIU2Cho.js";import"./ActivePoints-GUWB2UUS.js";import"./Dot-DmpikD8L.js";import"./activeStyles-CuQ8L2cy.js";import"./useAnimationId-5jS9WdgM.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./ErrorBarContext-dLbqY2mz.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getRadiusAndStrokeWidthFromDot-BJYN0Za2.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./useEffectiveDataKey-BNkN63Yq.js";import"./Cross-CMwNYQDS.js";import"./Rectangle-BZKbEhjO.js";import"./util-Dxo8gN5i.js";import"./Sector-D9Oq45ev.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
