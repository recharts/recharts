import{r as p,R as t}from"./iframe-BaaAHsSG.js";import{L as n}from"./LineChart-BE7Vvnhn.js";import{R as s}from"./zIndexSlice-BDxXfDj3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-9wE0RfBT.js";import{X as d}from"./XAxis-aYI2fpM3.js";import{Y as y}from"./YAxis-ChlB0m7y.js";import{L as u}from"./Legend-BGcjWbNP.js";import{L as h}from"./Line-DieT9HS4.js";import{T as g}from"./Tooltip-we4awqDz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-23oR8mwB.js";import"./resolveDefaultProps-Cr73uuZ7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D3-EkVgN.js";import"./throttle-Dj8lvlLv.js";import"./index-D4xmIBj5.js";import"./index-CE_XEtoH.js";import"./polarAxisSelectors-DEr0nz1I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ck8yTiZB.js";import"./index-H_I4rIPo.js";import"./index-wqmW4YDp.js";import"./renderedTicksSlice-BIfFMhm7.js";import"./index-DlVxU2VG.js";import"./CartesianChart-C2TNi3kH.js";import"./ZIndexPortal-uu5Z5Bf6.js";import"./CategoricalChart-BheijUwq.js";import"./CartesianAxis-DPnfQAxf.js";import"./Layer-CoUaFIbR.js";import"./Text-DTGEXNgB.js";import"./pageBackground-B7fTEEtp.js";import"./ZIndexLayer-CjMMPibs.js";import"./Label-Bv3DZIw1.js";import"./types-B5Uvpfau.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D2tZDjg2.js";import"./symbol-BJVAlnOc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBon_mrc.js";import"./uniqBy-D8VZiVkQ.js";import"./iteratee-C1Uno3VK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BPWuJn0g.js";import"./step-YRU5Bg_6.js";import"./LabelList-D5T0UDIp.js";import"./ActivePoints-BGknUoTd.js";import"./Dot-CzIAlgyO.js";import"./activeStyles-NrCYIabX.js";import"./useAnimationId-BBJNRgOy.js";import"./dataEntryStyles-B1dajl5B.js";import"./ErrorBarContext-Cye9geJm.js";import"./SetGraphicalItem-WQYWKVUP.js";import"./getRadiusAndStrokeWidthFromDot-D47qw3YP.js";import"./ActiveShapeUtils-BWukeBwd.js";import"./useEffectiveDataKey-Dr89jUol.js";import"./Cross-fjJCby9T.js";import"./Rectangle-D1p9HmGl.js";import"./util-Dxo8gN5i.js";import"./Sector-DLAMojSd.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
