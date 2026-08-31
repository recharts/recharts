import{r as n,R as t}from"./iframe-CmDfCYy4.js";import{L as p}from"./LineChart-BB4C177u.js";import{R as s}from"./zIndexSlice-Djwis5u_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cr_AfIuT.js";import{X as d}from"./XAxis-CeJE8CyL.js";import{Y as y}from"./YAxis-Clc76Y2_.js";import{L as u}from"./Legend-IBn7ejnb.js";import{L as h}from"./Line-B9SROX57.js";import{T as g}from"./Tooltip-D2jCQ9zj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PRNOsza0.js";import"./resolveDefaultProps-D0zMnbP3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BLlvkyot.js";import"./throttle-BvVliBGf.js";import"./index-vlpbybCm.js";import"./index-DuLzr3ug.js";import"./isWellBehavedNumber-ytXpT6fS.js";import"./d3-scale-h8Nvvkc2.js";import"./index-BiD8Ib67.js";import"./index-BDVGxzhR.js";import"./renderedTicksSlice-BvQmfKO8.js";import"./index-C3AEkUmj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQcpQ0vQ.js";import"./chartDataContext-Csr98tLV.js";import"./CategoricalChart-BVrKXV60.js";import"./CartesianAxis-DVS9Bx8F.js";import"./Layer-2NB1aHcN.js";import"./Text-FnYPD4kR.js";import"./DOMUtils-CeEb1Ieo.js";import"./useId-DdN0jYjl.js";import"./useBackwardsCompatibleTheme-D23nCtop.js";import"./Label-C_EyvZ8C.js";import"./ZIndexLayer-DE-382dp.js";import"./types-BdmWqFz5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BaYmyV_5.js";import"./symbol-BZq3nHsO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Deb0EMZn.js";import"./uniqBy-CuJXDrId.js";import"./iteratee-CJHJ6T1V.js";import"./Curve-DLCwqskO.js";import"./step-DtcV51zC.js";import"./AnimatedItems-D70_FMkE.js";import"./useAnimationId-CFWhy9Ri.js";import"./ActivePoints-CpKsZRdO.js";import"./Dot-Br2gUZT5.js";import"./RegisterGraphicalItemId-B3K6VYV9.js";import"./ErrorBarContext-CmqdPlQJ.js";import"./GraphicalItemClipPath-BSPzDNhY.js";import"./SetGraphicalItem-BYV2m0jb.js";import"./getRadiusAndStrokeWidthFromDot-BWI8_9l7.js";import"./ActiveShapeUtils-BDpJLacA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Dj79XzQE.js";import"./Rectangle-DZ3tpH7C.js";import"./util-Dxo8gN5i.js";import"./Sector-gLhdGisY.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
