import{r as p,R as t}from"./iframe-CRBCr4I7.js";import{L as n}from"./LineChart-BMih5QAj.js";import{R as s}from"./zIndexSlice-C5HnNY9r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ByvwPBwu.js";import{X as d}from"./XAxis-4jTaFcnE.js";import{Y as y}from"./YAxis-C5vFCns8.js";import{L as u}from"./Legend-Dak6j9fY.js";import{L as h}from"./Line-Bk3eQLZy.js";import{T as g}from"./Tooltip-DE0qGtkw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Csv9gEG8.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cn24srzI.js";import"./throttle-Bi7M9SHL.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./Label-CLJtKhiN.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./Curve-L8TXrD0N.js";import"./step-CDOWbVN9.js";import"./dataEntryStyles-BCu_-7t9.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./activeStyles-BGmObwWl.js";import"./useAnimationId-BEWOQrK8.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./Cross-DIfmxK3b.js";import"./Rectangle-BwKZkKAc.js";import"./util-Dxo8gN5i.js";import"./Sector-MfTKhJkQ.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
