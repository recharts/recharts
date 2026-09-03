import{r as n,R as t}from"./iframe-BMDGt33G.js";import{L as p}from"./LineChart-B2WH9o6A.js";import{R as s}from"./zIndexSlice-DCVNKZSi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D_fcGPSa.js";import{X as d}from"./XAxis-BLwPYlxb.js";import{Y as y}from"./YAxis-Bb9GrcYH.js";import{L as u}from"./Legend-BLAXFxYE.js";import{L as h}from"./Line-DesYXgxV.js";import{T as g}from"./Tooltip-CxdSCIpl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU85gN_Z.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DoXQrKNQ.js";import"./throttle-DHXzdyrx.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./isWellBehavedNumber-D73nv25y.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./CartesianAxis-D9IiMPGB.js";import"./Layer-CjUZiXYs.js";import"./Text-DYkDw-5j.js";import"./DOMUtils-DBrlboks.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./Label-l14yVQ5q.js";import"./ZIndexLayer-CaEles3w.js";import"./types-BuxhmSle.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-1hycImks.js";import"./symbol-DkqqIOyx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAEYehLF.js";import"./uniqBy-BujAWGSb.js";import"./iteratee-Bncw5-E9.js";import"./Curve-CIJakMM0.js";import"./step-B_y4L6H0.js";import"./AnimatedItems-DPSFxYpd.js";import"./useAnimationId-B5h3AUKS.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CHNDSXAv.js";import"./Rectangle-DB4jjQ5C.js";import"./util-Dxo8gN5i.js";import"./Sector-dMXSO2iG.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
