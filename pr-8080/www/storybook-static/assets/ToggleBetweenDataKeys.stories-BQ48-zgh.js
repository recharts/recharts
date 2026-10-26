import{r as p,R as t}from"./iframe-zw95Jg5I.js";import{L as n}from"./LineChart-lMX534J_.js";import{R as s}from"./zIndexSlice-BhhR1tic.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C41mXYJa.js";import{X as d}from"./XAxis-FSNVlg8z.js";import{Y as y}from"./YAxis-DxhDNNfO.js";import{L as u}from"./Legend-C1xiNV_O.js";import{L as h}from"./Line-DC_4pa8I.js";import{T as g}from"./Tooltip-hAQMQs7N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNF4noKd.js";import"./resolveDefaultProps-oavmg9-5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DAhbEMcv.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./Label-B1gN_1pg.js";import"./dataEntryStyles-B6Pg3he4.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DSktO4lL.js";import"./uniqBy-BGk6LrH6.js";import"./iteratee-Dt64Sdjl.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D_d6vzaM.js";import"./step-Q9jA4NJI.js";import"./activeStyles-Dzq6_wuP.js";import"./useAnimationId-DHyavBGa.js";import"./ActivePoints-DhDmo-r8.js";import"./Dot-gB6O6AIc.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getRadiusAndStrokeWidthFromDot-BjYb5x8U.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./Cross-C0WKTy_J.js";import"./Rectangle-B120DpgE.js";import"./util-Dxo8gN5i.js";import"./Sector-B4pIaq7y.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
