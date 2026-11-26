import{r as p,R as t}from"./iframe-Dc30QV19.js";import{L as n}from"./LineChart-BVqoGQCO.js";import{R as s}from"./zIndexSlice-CpA2ZBZb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ClmqShxo.js";import{X as d}from"./XAxis-BcaW8pnZ.js";import{Y as y}from"./YAxis-4iRuFsIi.js";import{L as u}from"./Legend-BagAQWPe.js";import{L as h}from"./Line-Dt1yHtoT.js";import{T as g}from"./Tooltip-lztVFhcX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRR6oB9d.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./axisSelectors-BahrCffV.js";import"./throttle-WMkM63z_.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./polarAxisSelectors-DgLFgBab.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BSORqksa.js";import"./index-C7W3-csu.js";import"./index-LKWh_pde.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./CartesianAxis-CybNaUvq.js";import"./Layer-Ckk2aNrm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./Label-pzKHNVcm.js";import"./types-Df_aU1u_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DoXC1ptL.js";import"./symbol-Bi8SUrQz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-zZqt_kY_.js";import"./uniqBy-CFq97YsS.js";import"./iteratee-DUr8YIIJ.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-EGGU3KdZ.js";import"./Curve-C3EkNIPD.js";import"./step-DiRHFC6W.js";import"./dataEntryStyles-m1FbV_av.js";import"./ActivePoints-BEziX1h5.js";import"./Dot-DSqKqZYM.js";import"./activeStyles-CSTRknfO.js";import"./useAnimationId-dTayRcrW.js";import"./ErrorBarContext-CnjMgqWz.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./Cross-CfZJmYUc.js";import"./Rectangle-iIoXGW1W.js";import"./util-Dxo8gN5i.js";import"./Sector-D2Q0-3lo.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
