import{r as n,R as t}from"./iframe-B1mwOZ4B.js";import{L as p}from"./LineChart-DXTTIWtD.js";import{R as s}from"./zIndexSlice-DpKDqXzy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DBXsj84G.js";import{X as d}from"./XAxis-BJXCAx8k.js";import{Y as y}from"./YAxis-CJdoflUo.js";import{L as u}from"./Legend-BcEnXvz4.js";import{L as h}from"./Line-Doz1RfmB.js";import{T as g}from"./Tooltip-jjeQ7wLa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./throttle-B9hrHP2z.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./resolveDefaultProps-C5OuETHs.js";import"./isWellBehavedNumber-CJikzJGt.js";import"./d3-scale-C-ENdXUt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./CartesianAxis-DVp2DYfW.js";import"./Layer-BPIZMWg2.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./Label-B_N5n860.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./types-D3n9ld0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ATwIj2YD.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-C_MEhgLL.js";import"./symbol-BAzYPqqr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CPCExPSE.js";import"./uniqBy-DteB5QyM.js";import"./iteratee-BMrxWccK.js";import"./Curve-BdmH34os.js";import"./step-CnGXO0Ja.js";import"./AnimatedItems-CP4Ed5tB.js";import"./useAnimationId-DOfhPbEn.js";import"./ActivePoints-HVYpWw6k.js";import"./Dot-DiSbgsbS.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./ErrorBarContext-BUi-bCeZ.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getRadiusAndStrokeWidthFromDot-CB_M050h.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./Cross-B-vwqbkx.js";import"./Rectangle-B0J9CZX5.js";import"./util-Dxo8gN5i.js";import"./Sector-Bccm9uTi.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
