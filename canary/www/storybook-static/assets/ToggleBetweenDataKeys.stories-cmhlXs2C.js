import{r as p,R as t}from"./iframe-B1Ov3CkI.js";import{L as n}from"./LineChart-ChIIlifa.js";import{R as s}from"./zIndexSlice-BZ09-fF4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BNmKxAJh.js";import{X as d}from"./XAxis-B8awpm7u.js";import{Y as y}from"./YAxis-CKqezMqR.js";import{L as u}from"./Legend-DS16XVv7.js";import{L as h}from"./Line-D6fDEx2j.js";import{T as g}from"./Tooltip-cJI8ulaq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CArKZuEM.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CwNUFUW3.js";import"./throttle-CU4m2LyG.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./polarAxisSelectors-BnryocK3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRiCZA2b.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./CartesianAxis-CqVMCZWw.js";import"./Layer-DAwsvvog.js";import"./Text-B3OKn0GK.js";import"./ZIndexLayer-DQABw9Zs.js";import"./Label-DD8YxEOL.js";import"./types-ynn-_gFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D5jbWozH.js";import"./uniqBy-CuCMSFr0.js";import"./iteratee-D4VRlXRY.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Curve-D-bNq0v5.js";import"./step-B516R2zU.js";import"./dataEntryStyles-lld3ulFL.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./activeStyles-D0wpO0Mw.js";import"./useAnimationId-DhG5SB-S.js";import"./ErrorBarContext-CrvdUc7x.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./Cross-0Rf112BE.js";import"./Rectangle-B3p2_n3w.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_mWH5U.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
