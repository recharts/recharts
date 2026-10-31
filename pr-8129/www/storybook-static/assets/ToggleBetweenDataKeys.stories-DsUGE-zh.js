import{r as p,R as t}from"./iframe-CDpmIgQT.js";import{L as n}from"./LineChart-CxB7_xWC.js";import{R as s}from"./zIndexSlice-BfaxD0dh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-De1usH_N.js";import{X as d}from"./XAxis-3XA4-bKe.js";import{Y as y}from"./YAxis-Ogt9or7H.js";import{L as u}from"./Legend-MQRSYMdg.js";import{L as h}from"./Line-0hIul04-.js";import{T as g}from"./Tooltip-BT8KywYi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVUl_Te9.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CxEn2HHB.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./Label-PB9tCobP.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-os6E-iMi.js";import"./Symbols-DArBJCV3.js";import"./symbol-MYiWw4z2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-QH7GmGID.js";import"./uniqBy-DQsH6j_y.js";import"./iteratee-BSoVQiX1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D7wdedao.js";import"./step-CbLfzlrV.js";import"./LabelList-IVU2RGL-.js";import"./ActivePoints-BB-NTxO3.js";import"./Dot-BEctbnXU.js";import"./activeStyles-BpeBFXJT.js";import"./useAnimationId-LIn9B9pI.js";import"./dataEntryStyles-tenSUrif.js";import"./ErrorBarContext-Bqx6IufA.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getRadiusAndStrokeWidthFromDot-DBydaLHm.js";import"./ActiveShapeUtils-CinHd9se.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./Cross-BFOt9lJd.js";import"./Rectangle-D76RToCn.js";import"./util-Dxo8gN5i.js";import"./Sector-BFnJfpa_.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
