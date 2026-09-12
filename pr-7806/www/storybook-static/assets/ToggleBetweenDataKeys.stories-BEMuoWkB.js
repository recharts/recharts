import{r as p,R as t}from"./iframe-B7hbNEXj.js";import{L as n}from"./LineChart-zG6Xq_pu.js";import{R as s}from"./zIndexSlice-B7xQcNcG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-R_m8YFEY.js";import{X as d}from"./XAxis-DTRImo2J.js";import{Y as y}from"./YAxis-DYrUNm06.js";import{L as u}from"./Legend-BHv0V5I1.js";import{L as h}from"./Line-DjZkWb4y.js";import{T as g}from"./Tooltip-DW4lutut.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jiH_AYjt.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Ce4xYfXm.js";import"./symbol-CQ0q3eX5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-w7QmJN4M.js";import"./uniqBy-D7tqJ0kr.js";import"./iteratee-CMD1iHwZ.js";import"./Curve-CUqyVekg.js";import"./step-5lhI3wtQ.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./ActivePoints-BbyHcAce.js";import"./Dot-ArvJ9HsL.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getRadiusAndStrokeWidthFromDot-9G5pAfIZ.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";import"./Cross-kZvf2QnA.js";import"./Rectangle-DXA3Y7lF.js";import"./util-Dxo8gN5i.js";import"./Sector-DGiQIbbB.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
