import{r as p,R as t}from"./iframe-Cg_iar9N.js";import{L as n}from"./LineChart-Bhq7DxiA.js";import{R as s}from"./zIndexSlice-BjUOfyjh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjcWqsVw.js";import{X as d}from"./XAxis-CGc4hdT9.js";import{Y as y}from"./YAxis-D6x7oYcH.js";import{L as u}from"./Legend-BYP7URbe.js";import{L as h}from"./Line-D_Ww1q7V.js";import{T as g}from"./Tooltip-m2cQU-qg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7ImdcI0.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./axisSelectors-CZOBtonL.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./Label-BJnLd782.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./path-BBMZd4YL.js";import"./useElementOffset-hhsDlGuK.js";import"./uniqBy-DOt34CrH.js";import"./iteratee-DBE5xjg2.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./dataEntryStyles-CxwfrkTv.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./ErrorBarContext-CGI8-gVI.js";import"./SetGraphicalItem-B4YPaENS.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./Cross-JN070_fL.js";import"./Rectangle-C_eYXhuf.js";import"./util-Dxo8gN5i.js";import"./Sector-BaDDZluv.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
