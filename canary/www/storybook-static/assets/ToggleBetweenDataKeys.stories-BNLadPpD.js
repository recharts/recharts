import{r as p,R as t}from"./iframe-c26JqrsL.js";import{L as n}from"./LineChart-BTqtIOwK.js";import{R as s}from"./zIndexSlice-BkUYlJsZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BfXOM6vw.js";import{X as d}from"./XAxis-DutmNx-o.js";import{Y as y}from"./YAxis-BMAl-ilQ.js";import{L as u}from"./Legend-B8n_PKuf.js";import{L as h}from"./Line-CCpKAg6f.js";import{T as g}from"./Tooltip-C74uwVO5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dy58hWsd.js";import"./throttle-B2IvKwW-.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./Label-U_zx5ZhA.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./Curve-XxFxrIWP.js";import"./step-CELEtsjP.js";import"./dataEntryStyles-NUuyBQzn.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./Cross-CtwUkA5D.js";import"./Rectangle-C6L3NnBU.js";import"./util-Dxo8gN5i.js";import"./Sector-zTgxjB-0.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
