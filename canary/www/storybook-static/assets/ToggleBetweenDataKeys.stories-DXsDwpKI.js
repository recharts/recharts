import{r as p,R as t}from"./iframe-CMzJyxaT.js";import{L as n}from"./LineChart-CrlgkH24.js";import{R as s}from"./zIndexSlice-Dud0JIgm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dm32_Z2s.js";import{X as d}from"./XAxis-IIW9Jscf.js";import{Y as y}from"./YAxis-fzMCOkqh.js";import{L as u}from"./Legend-CiOxER4p.js";import{L as h}from"./Line-Be4wWJHL.js";import{T as g}from"./Tooltip-B4t-72_f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CfktXOMD.js";import"./resolveDefaultProps-D90TgEnc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bq81Ao7M.js";import"./throttle-BTIGJM4c.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRT9BUPN.js";import"./index-BuF3Ul7s.js";import"./index-Ihh44ZOg.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./CartesianAxis-CqeHr0V2.js";import"./Layer-AKX63atr.js";import"./Text-RRbVz4t0.js";import"./ZIndexLayer-D9_6vJMt.js";import"./Label-BnlLNWzo.js";import"./types-Dl8VwStK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-d_VeINkv.js";import"./symbol-DKhDQ6iW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BbjAediX.js";import"./uniqBy-BYP-xu74.js";import"./iteratee-DHrbjV55.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Be5_WgCt.js";import"./step-Bwzmrw1Q.js";import"./dataEntryStyles-bJA9yLxO.js";import"./ActivePoints-C14hYzDD.js";import"./Dot-CJPE3X0k.js";import"./activeStyles-D3ZF14ZM.js";import"./useAnimationId-CAh3JWUx.js";import"./ErrorBarContext-DaqV69Oh.js";import"./SetGraphicalItem-DihoZDul.js";import"./getRadiusAndStrokeWidthFromDot-DeK2Mko4.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./Cross-C0i8Q6it.js";import"./Rectangle-CL2UaBeU.js";import"./util-Dxo8gN5i.js";import"./Sector-BjzMwCaG.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
