import{r as p,R as t}from"./iframe-BN7wAejV.js";import{L as n}from"./LineChart-wKU7PXvt.js";import{R as s}from"./zIndexSlice-BlaP7sYq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CAMLSwou.js";import{X as d}from"./XAxis-VA1Akzpv.js";import{Y as y}from"./YAxis-LOiiKFb4.js";import{L as u}from"./Legend-BtD9EuDm.js";import{L as h}from"./Line-BQoSY4oZ.js";import{T as g}from"./Tooltip-BFGrTpv-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./axisSelectors-D4jZOjlQ.js";import"./throttle-OOfctLZP.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./polarAxisSelectors-CchWb7G-.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BuYLSsjs.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./Label-Bpsa1uOU.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./path-BBMZd4YL.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-5PNvN8b1.js";import"./Curve-BFV098yv.js";import"./step-Bv7Zqu-1.js";import"./dataEntryStyles-CrycyMb5.js";import"./ActivePoints-EAvCRna9.js";import"./Dot-BsX3Z5g1.js";import"./activeStyles-CXY1xJkQ.js";import"./useAnimationId-ClFn0gGk.js";import"./ErrorBarContext-eg_EChks.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./Cross-Bd__ghdN.js";import"./Rectangle-MX5du-y3.js";import"./util-Dxo8gN5i.js";import"./Sector-h9CQ16Nn.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
