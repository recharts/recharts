import{r as n,R as t}from"./iframe-DYQm5pDK.js";import{L as p}from"./LineChart-CQnyySwh.js";import{R as s}from"./zIndexSlice-CJYweGKN.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJ5NVgIf.js";import{X as d}from"./XAxis-CZY80vys.js";import{Y as y}from"./YAxis-CVSg61xk.js";import{L as u}from"./Legend-uHaRlLU1.js";import{L as h}from"./Line-B1Oexf9c.js";import{T as g}from"./Tooltip-BL26R0Fe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gRpL_xKU.js";import"./index-B8vof7O1.js";import"./index-Dvf4xz5M.js";import"./index-D9641aDn.js";import"./index-CSHdKH08.js";import"./throttle-Ctp9_qVa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSPBywkg.js";import"./resolveDefaultProps-V2XetKb4.js";import"./isWellBehavedNumber-Db1VnkRV.js";import"./d3-scale-CuSyjdwU.js";import"./renderedTicksSlice-C_bKCtit.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1bq5gRk4.js";import"./chartDataContext-Dp_kX4bj.js";import"./CategoricalChart-DNCs6fuc.js";import"./CartesianAxis-DZAfkwU8.js";import"./Layer-BE5fWip9.js";import"./Text-BBWNQ9ND.js";import"./DOMUtils-DI2U8hPw.js";import"./Label-2fJkWQrM.js";import"./ZIndexLayer-CYpXSJgQ.js";import"./types-DMj2PdKG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BL-IAPcg.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-P4A1ZIZ7.js";import"./symbol-CB2ASYk-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DeY_vqj5.js";import"./uniqBy-CK7b43Ay.js";import"./iteratee-Daur8jM2.js";import"./Curve-1QDxrN5k.js";import"./step-CyVWmh7T.js";import"./AnimatedItems-CRKAM_Pk.js";import"./useAnimationId-Dfuzx8c4.js";import"./ActivePoints-BAfWfPzl.js";import"./Dot-vrg5zOK2.js";import"./RegisterGraphicalItemId-CoopfHz0.js";import"./ErrorBarContext-BW9yLQD5.js";import"./graphicalItemIdentity-c8N24HJ4.js";import"./SetGraphicalItem-F1NAG8Fb.js";import"./getRadiusAndStrokeWidthFromDot-C6IhQk60.js";import"./ActiveShapeUtils-DDuLsW0U.js";import"./Cross-CUYn565i.js";import"./Rectangle-C2cnIGYc.js";import"./util-Dxo8gN5i.js";import"./Sector-D1BdjjPU.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
