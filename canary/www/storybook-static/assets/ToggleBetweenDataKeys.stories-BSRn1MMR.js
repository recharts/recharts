import{r as p,R as t}from"./iframe-pamQLAuY.js";import{L as n}from"./LineChart-5N_32-17.js";import{R as s}from"./zIndexSlice-BlDUGc8d.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CQCtiiJp.js";import{X as d}from"./XAxis-D-SXbwy8.js";import{Y as y}from"./YAxis-BYc7pX1a.js";import{L as u}from"./Legend-Daog0-bD.js";import{L as h}from"./Line-CX1OnHXo.js";import{T as g}from"./Tooltip-Oq2N_gGp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ub_WEUz3.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DKhGUp-k.js";import"./throttle-C_B1UjR8.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eIG0jwTX.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./Text-CgAHMzD3.js";import"./ZIndexLayer-DY36flUP.js";import"./Label-53Y237WA.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BHovV0ds.js";import"./symbol-OE1C7JWw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-S9fbae.js";import"./uniqBy-7m0iRReY.js";import"./iteratee-so155A_3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CBzOhU6V.js";import"./step-BpEAsRCc.js";import"./dataEntryStyles-Cjt_fwSW.js";import"./ActivePoints-D3TY6zpk.js";import"./Dot-Ocwx86Cy.js";import"./activeStyles-BKbfAIaZ.js";import"./useAnimationId-BGgwVpYD.js";import"./ErrorBarContext-mAfMrTZ7.js";import"./SetGraphicalItem-CAx5rLIN.js";import"./getRadiusAndStrokeWidthFromDot-C-R45OAI.js";import"./ActiveShapeUtils-CLFAkUa0.js";import"./useEffectiveDataKey-DQOO5VHk.js";import"./Cross-CYiCwTq0.js";import"./Rectangle-B2noBFFP.js";import"./util-Dxo8gN5i.js";import"./Sector-CeM_rKaz.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
