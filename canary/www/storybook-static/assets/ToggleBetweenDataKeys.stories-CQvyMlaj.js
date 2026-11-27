import{r as p,R as t}from"./iframe-C6tckEdC.js";import{L as n}from"./LineChart-DJFdncN6.js";import{R as s}from"./zIndexSlice-BRbRDCdD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-M5jX1B50.js";import{X as d}from"./XAxis-DzYRQrky.js";import{Y as y}from"./YAxis-rcBaqYZ7.js";import{L as u}from"./Legend-CcuFitOG.js";import{L as h}from"./Line-DkURyhs0.js";import{T as g}from"./Tooltip-DW-STvZa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0oVlPs_v.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./axisSelectors-BaS600qd.js";import"./throttle-CU3FfpOW.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-cNizIXDy.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./CartesianAxis-HAEOo14B.js";import"./Layer-CZ4BpJHW.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./Label-DaLGTh2V.js";import"./types-DkdMor4N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./path-BBMZd4YL.js";import"./useElementOffset-ox168otc.js";import"./uniqBy-BwUTEk2q.js";import"./iteratee-Chh9ZJty.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-vxIF-amO.js";import"./Curve-hlfhz3O_.js";import"./step-BdRt_Kf3.js";import"./dataEntryStyles-DEosnEmo.js";import"./ActivePoints-BDUd4tjN.js";import"./Dot-Byjprri8.js";import"./activeStyles-Cw05xMjp.js";import"./useAnimationId-Cexbjbj0.js";import"./ErrorBarContext-CFH2x5Ed.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./useEffectiveDataKey-C_xG5lbB.js";import"./Cross-tRfOgfn5.js";import"./Rectangle-J0TAD1ax.js";import"./util-Dxo8gN5i.js";import"./Sector-aU80y0T4.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
