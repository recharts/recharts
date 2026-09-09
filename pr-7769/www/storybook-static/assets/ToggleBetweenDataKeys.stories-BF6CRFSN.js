import{r as p,R as t}from"./iframe-5Ln2iLqA.js";import{L as n}from"./LineChart-DRhloam_.js";import{R as s}from"./zIndexSlice-DFex-upv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BqXq0n1I.js";import{X as d}from"./XAxis-C-UtlQCm.js";import{Y as y}from"./YAxis-BgyWvHpM.js";import{L as u}from"./Legend-CnXbXW_A.js";import{L as h}from"./Line-0wKA-RqY.js";import{T as g}from"./Tooltip-BCHNqt5f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BHuvBmBF.js";import"./resolveDefaultProps-IjnCGfXZ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BMU5_zje.js";import"./throttle-BvN7rUxU.js";import"./index-CzncCR4k.js";import"./index-D7j-yBVr.js";import"./isWellBehavedNumber-CdZO7OXS.js";import"./d3-scale-DUTFXTFy.js";import"./index-SDNpyV8r.js";import"./index-1g9ahHpc.js";import"./renderedTicksSlice-B6ULVZ0v.js";import"./index-LP2TzsJ5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1RwtF1h6.js";import"./chartDataContext-BWMyO-qW.js";import"./CategoricalChart-no-3Z0-_.js";import"./CartesianAxis-TNvZ3AHE.js";import"./Layer-DAiXs0AA.js";import"./Text-oIzTAhmK.js";import"./DOMUtils-Cf_dBvDb.js";import"./useId-DeG95-BA.js";import"./useBackwardsCompatibleTheme-C1dsWZXc.js";import"./Label-9F2YL2wp.js";import"./ZIndexLayer-ZmLJud1E.js";import"./types-DPL8-78e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CDH7p16m.js";import"./symbol-8zOBKyIH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tgIx7o39.js";import"./uniqBy-DUSKgABV.js";import"./iteratee-BinWTTLm.js";import"./Curve-CjwJajTH.js";import"./step-Dlf9LIeZ.js";import"./AnimatedItems-axJun3VY.js";import"./useAnimationId-CJTvG1Qi.js";import"./ActivePoints-CyfXnlmG.js";import"./Dot-BtmEb1H2.js";import"./RegisterGraphicalItemId-08XYAnQ7.js";import"./ErrorBarContext-Mgqq5-U9.js";import"./GraphicalItemClipPath-CFv0pGXv.js";import"./SetGraphicalItem-woQRWKGe.js";import"./getRadiusAndStrokeWidthFromDot-Cd93T_Q0.js";import"./ActiveShapeUtils-DterXnUU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-COZxUUI-.js";import"./Rectangle-BMEZChfE.js";import"./util-Dxo8gN5i.js";import"./Sector-BPatKHxW.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
