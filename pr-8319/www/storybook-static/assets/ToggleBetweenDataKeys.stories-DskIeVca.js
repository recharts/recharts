import{r as p,R as t}from"./iframe-B9Tl-Ens.js";import{L as n}from"./LineChart--ofPEsD8.js";import{R as s}from"./zIndexSlice-CeB5DPsb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-UZ-yUTT_.js";import{X as d}from"./XAxis-DgmkF9Yy.js";import{Y as y}from"./YAxis-CjYRlTBq.js";import{L as u}from"./Legend-pOgp7twQ.js";import{L as h}from"./Line-DsiP8Uyr.js";import{T as g}from"./Tooltip-jUi0yI8j.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeTgaRib.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./axisSelectors-x8C92zXU.js";import"./throttle-dfeJw9jR.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./polarAxisSelectors-C83zEpXU.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Cl0QaiN4.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./Label-Dez-agGk.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./path-BBMZd4YL.js";import"./useElementOffset-O98GivjF.js";import"./uniqBy-COJiZ3F4.js";import"./iteratee-6n8bYTkS.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DojBXQgy.js";import"./Curve-pkk8Hz5i.js";import"./step-BuRhJuEF.js";import"./dataEntryStyles-DvmFQkM4.js";import"./ActivePoints-D0ERAXFA.js";import"./Dot-DzsU10RZ.js";import"./activeStyles-B1QGMcNg.js";import"./useAnimationId-eoD8CiMN.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./useEffectiveDataKey-BhVu78c2.js";import"./Cross-CPeavNPd.js";import"./Rectangle-BHPo4ax_.js";import"./util-Dxo8gN5i.js";import"./Sector-B3gJsk8n.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
