import{r as p,R as t}from"./iframe-CNzr7bRc.js";import{L as n}from"./LineChart-CYxFmw6i.js";import{R as s}from"./zIndexSlice-BXquQra7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BBE-PR7v.js";import{X as d}from"./XAxis-BqePxvtA.js";import{Y as y}from"./YAxis-B3tsMqyp.js";import{L as u}from"./Legend-UVXvBnhj.js";import{L as h}from"./Line-C5pEban5.js";import{T as g}from"./Tooltip-BCC0qlIK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDCqiBvb.js";import"./resolveDefaultProps-eALPB1-k.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cj1w7XZO.js";import"./throttle-D60XWAz6.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaY54_t1.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./Text-DNGP5VRJ.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./Label-DK5ffKtI.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BZnJYQev.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./useElementOffset-BRAQ4wcr.js";import"./uniqBy-rckpUkc6.js";import"./iteratee-C6pzj2S7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./LabelList-BM4oqAMz.js";import"./ActivePoints-K0chRQ_g.js";import"./Dot-CUKZE6AE.js";import"./activeStyles-DoMnj4mo.js";import"./useAnimationId-CDC5NaEo.js";import"./ErrorBarContext-CNXHKdeb.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./getRadiusAndStrokeWidthFromDot-COyF9q3U.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./useEffectiveDataKey-CeL4hQha.js";import"./Cross-kZkGTP7N.js";import"./Rectangle-_7pUXE0L.js";import"./util-Dxo8gN5i.js";import"./Sector-DNATorIr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
