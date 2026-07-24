import{r as n,R as t}from"./iframe-HFtXtWDU.js";import{L as p}from"./LineChart-Czoiphpc.js";import{R as s}from"./zIndexSlice-Cqq8ngM8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DguCJ1oU.js";import{X as d}from"./XAxis-BpsaCJf7.js";import{Y as y}from"./YAxis-DsjAAI5S.js";import{L as u}from"./Legend-Da62BJrp.js";import{L as h}from"./Line-DZMze_xC.js";import{T as g}from"./Tooltip-DJhs5iYq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./throttle-BOHTa9OG.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./axisSelectors-DgDHkI2g.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./isWellBehavedNumber-DknTQDme.js";import"./d3-scale-BFpMyz7A.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./CategoricalChart-wF3j6ivZ.js";import"./CartesianAxis-BnlRkakD.js";import"./Layer-DWG7b0hl.js";import"./Text-CDRZZb9B.js";import"./DOMUtils-Cr-MkK7_.js";import"./Label-BrbXEreR.js";import"./ZIndexLayer-0igMx-O2.js";import"./types-CqGtNHfB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-TDHQ499_.js";import"./symbol-BjgqCFXe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DddFNO6b.js";import"./uniqBy-DB3_HqTc.js";import"./iteratee-D-KV-lOb.js";import"./Curve-BR3zS18n.js";import"./step-CxNVACTf.js";import"./AnimatedItems-uy3iUhMQ.js";import"./useAnimationId-CzZVkbxz.js";import"./ActivePoints-Cr6rlWwV.js";import"./Dot-bRuvlybH.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getRadiusAndStrokeWidthFromDot-Cm-vUEgX.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./Cross-CDfE27Wk.js";import"./Rectangle-1hle0OgU.js";import"./util-Dxo8gN5i.js";import"./Sector-ByxPjfz7.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
