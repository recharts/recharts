import{r as p,R as t}from"./iframe-CGMPGT_Z.js";import{L as n}from"./LineChart-2TTRC4be.js";import{R as s}from"./zIndexSlice-BwRFWyAI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-xPIg11en.js";import{X as d}from"./XAxis-DbuLqOFS.js";import{Y as y}from"./YAxis-ph0fLQn1.js";import{L as u}from"./Legend-C0TB2Q7_.js";import{L as h}from"./Line-DkMyEWjM.js";import{T as g}from"./Tooltip-VL4D0Geu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQJBpYXH.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-nBPX2Xba.js";import"./throttle-eL-EEQ3_.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./polarAxisSelectors-BIscasf0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhJmdG6x.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./Text-DLnj5LmN.js";import"./ZIndexLayer-9BCkhjyY.js";import"./Label-BCblnQ7e.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Curve-B6JD92Z8.js";import"./step-C3GvXaRE.js";import"./dataEntryStyles-mfmNhCBT.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./ErrorBarContext-BlCnepik.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./Cross-BcQf_zas.js";import"./Rectangle-CLE0n3dQ.js";import"./util-Dxo8gN5i.js";import"./Sector-DRB_9UVA.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
