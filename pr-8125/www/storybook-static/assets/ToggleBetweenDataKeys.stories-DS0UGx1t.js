import{r as p,R as t}from"./iframe-B3-vagTW.js";import{L as n}from"./LineChart-CibVOE3J.js";import{R as s}from"./zIndexSlice-ZzyVUAHl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-WXxHwYMc.js";import{X as d}from"./XAxis-DFfS9226.js";import{Y as y}from"./YAxis-DormNcwM.js";import{L as u}from"./Legend-DJkkf3EF.js";import{L as h}from"./Line-D8DdECJH.js";import{T as g}from"./Tooltip-Cdmks0yt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CddNfr5P.js";import"./resolveDefaultProps-qRvlmwXA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-HaoK80F7.js";import"./throttle-CY8bAEWp.js";import"./index-SDu6d5_I.js";import"./index-DuceAH_t.js";import"./polarAxisSelectors-D6Jg6oqH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4523EFb.js";import"./index-D2TNbHS1.js";import"./index-qrs8hmxN.js";import"./renderedTicksSlice-D2e62elM.js";import"./index-Bf39JYYB.js";import"./CartesianChart-B6mp8hDI.js";import"./ZIndexPortal-C2SecuQr.js";import"./CategoricalChart-xcg0VLQw.js";import"./CartesianAxis-Cwp1aQTy.js";import"./Layer-PmVaLGrp.js";import"./Text-BuzE9c3N.js";import"./DOMUtils-_lgsh9Yh.js";import"./ZIndexLayer-D9XZSYmm.js";import"./Label-vZvIOvi1.js";import"./types-BBjBCtu2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-ETwvKCIL.js";import"./symbol-DMAPBY15.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-FOCBXEG_.js";import"./useElementOffset-D_j3OR66.js";import"./uniqBy-DNND0Smg.js";import"./iteratee-CTRTWi67.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DWZFjGCn.js";import"./step-BN6dVKvX.js";import"./LabelList-MPu8rBts.js";import"./ActivePoints-DAC4XsL1.js";import"./Dot-D46CiK3O.js";import"./activeStyles-mevkhAS-.js";import"./useAnimationId-mixmWsfB.js";import"./ErrorBarContext-B_sCBDRD.js";import"./SetGraphicalItem-CRfd0rzO.js";import"./getRadiusAndStrokeWidthFromDot-DTvCyfLo.js";import"./ActiveShapeUtils-b384wv9G.js";import"./useEffectiveDataKey-pQIYsbLr.js";import"./Cross-QGkOHav6.js";import"./Rectangle-BKi9ciwV.js";import"./util-Dxo8gN5i.js";import"./Sector-DUXa2j63.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
