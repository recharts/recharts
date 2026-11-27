import{r as p,R as t}from"./iframe-BkOwE2GN.js";import{L as n}from"./LineChart-BIXa87a6.js";import{R as s}from"./zIndexSlice-Chy-hne0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D5VfAX5W.js";import{X as d}from"./XAxis-0fckSjiA.js";import{Y as y}from"./YAxis-hX7zZE17.js";import{L as u}from"./Legend-BP3s6Hw6.js";import{L as h}from"./Line-DaHUMkwJ.js";import{T as g}from"./Tooltip-LK18Qy9U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXzR8xrS.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./axisSelectors-DGKEku6n.js";import"./throttle-DAc5l_dD.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-CTw2DMEK.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./Label-y4X5dBPS.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C2OMNI73.js";import"./uniqBy-CEEShQv_.js";import"./iteratee-CcBPK2XM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./Curve-DGsLLJww.js";import"./step-XUgRcOx_.js";import"./dataEntryStyles-R9P1sHzA.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./activeStyles-fROkMw-p.js";import"./useAnimationId-DWRfsMZ5.js";import"./ErrorBarContext-BuIxRivK.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./Cross-Dbp1ZLfh.js";import"./Rectangle-jQhwNsi0.js";import"./util-Dxo8gN5i.js";import"./Sector-DVdFrkkX.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
