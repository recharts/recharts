import{r as p,R as t}from"./iframe-ULtY-NVK.js";import{L as n}from"./LineChart-CXUYxjQj.js";import{R as s}from"./zIndexSlice-jBtZtiCi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bx2isx_J.js";import{X as d}from"./XAxis-BxexlvNE.js";import{Y as y}from"./YAxis-BQ0jDyxm.js";import{L as u}from"./Legend-Vbwf_oDe.js";import{L as h}from"./Line-CXxZTyaf.js";import{T as g}from"./Tooltip-R8qLM_P2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-JXy35Des.js";import"./resolveDefaultProps-CnMrFr-n.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DyOG1uRh.js";import"./throttle-CHVCCuLD.js";import"./index-Bra2wTck.js";import"./index-CnlGEyBG.js";import"./polarAxisSelectors-DJMQca_o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ZBKsHMes.js";import"./index-Do3BZ6Ro.js";import"./index-Btm1B8SY.js";import"./renderedTicksSlice-CHJPPtWm.js";import"./index-BJmOGKKZ.js";import"./fillDefinitions-BGQhPk93.js";import"./CartesianChart-CrgxKX8P.js";import"./chartDataContext-BeD9TymV.js";import"./CategoricalChart-DwptyBKz.js";import"./CartesianAxis-B-ohTpBX.js";import"./Layer-DhwnXi08.js";import"./Text-DIgVe04Z.js";import"./ZIndexLayer-3L32Zbp4.js";import"./Label-RNo0-Kup.js";import"./types-YE6r9ekT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D8MIyMXa.js";import"./symbol-C9fiuppk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhIwgz5u.js";import"./uniqBy-DTA7LqR-.js";import"./iteratee-DNbp_EuJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CN39irzx.js";import"./step-qhW1rf6_.js";import"./dataEntryStyles-DVOUqZ2G.js";import"./ActivePoints-DVHPdhuz.js";import"./Dot-D81fGPmQ.js";import"./activeStyles-nNAh6kPS.js";import"./useAnimationId-BnN3bcdg.js";import"./ErrorBarContext-DkSuy-bE.js";import"./SetGraphicalItem-C0LXV43X.js";import"./getRadiusAndStrokeWidthFromDot-DoYvpvg5.js";import"./ActiveShapeUtils-S-fma9uX.js";import"./useEffectiveDataKey-DbYUjo2f.js";import"./Cross-DardZkkK.js";import"./Rectangle-CgoAn4IQ.js";import"./util-Dxo8gN5i.js";import"./Sector-KxRZamhw.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
