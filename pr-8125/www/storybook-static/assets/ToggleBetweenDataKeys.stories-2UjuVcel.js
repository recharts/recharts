import{r as p,R as t}from"./iframe-DofrrzSz.js";import{L as n}from"./LineChart-tOZ7w82P.js";import{R as s}from"./zIndexSlice-D4jXZr7P.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-8iIghlqn.js";import{X as d}from"./XAxis-eOTmMW_3.js";import{Y as y}from"./YAxis-CsrZD7w1.js";import{L as u}from"./Legend-D4qwGaS7.js";import{L as h}from"./Line-BTgeNYF6.js";import{T as g}from"./Tooltip-BfuE3aDI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-E_-kYNca.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./get-cF5BDHN6.js";import"./axisSelectors-pqZm8n4V.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./Label-CuxsGsNv.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DuwvESx8.js";import"./useElementOffset-4AYFNtWz.js";import"./uniqBy-DXDzCPGj.js";import"./iteratee-BW9bJqkP.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CgPD96Nk.js";import"./step-B24WZLE3.js";import"./LabelList-CvvaVn8W.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./activeStyles-DFxA9Zbs.js";import"./useAnimationId-DIc4f048.js";import"./ErrorBarContext-Be2kUHyO.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./Cross-Ct78yXXS.js";import"./Rectangle-DH-fHCjZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DZJ-f5iW.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
