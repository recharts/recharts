import{r as n,R as t}from"./iframe-54ZcEpUv.js";import{L as p}from"./LineChart-D01Tsqu3.js";import{R as s}from"./zIndexSlice-D4EcTS4q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DidoAtGk.js";import{X as d}from"./XAxis-BhMXtQiv.js";import{Y as y}from"./YAxis-2cFJkYpr.js";import{L as u}from"./Legend-CB35QEBv.js";import{L as h}from"./Line-DXl0be7s.js";import{T as g}from"./Tooltip-5XrQW7rn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./throttle-DtmCwuH2.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./d3-scale-Bz_vEXwn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./CartesianAxis-BfyoGem3.js";import"./Layer-C5bNrRV9.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./Label--73vW_dK.js";import"./ZIndexLayer-CQupnOhG.js";import"./types-kdBRSK-c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Vlrvy7XV.js";import"./symbol-sg6ZkDjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";import"./Curve-FTpO0g2t.js";import"./step-BsOSpGLs.js";import"./AnimatedItems-Bo-aqLFl.js";import"./useAnimationId-D-RZ_xXC.js";import"./ActivePoints-DSvyBCZS.js";import"./Dot-C2NjTS0n.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getRadiusAndStrokeWidthFromDot-eGcgYRyQ.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./Cross-434ElTmF.js";import"./Rectangle-KX1Q4ZbD.js";import"./util-Dxo8gN5i.js";import"./Sector-DS_9F4Dx.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
