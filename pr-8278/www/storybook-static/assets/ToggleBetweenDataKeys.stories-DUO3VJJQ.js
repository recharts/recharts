import{r as p,R as t}from"./iframe-CUvNAvus.js";import{L as n}from"./LineChart-65MNs1Uv.js";import{R as s}from"./zIndexSlice-D-rH8vD1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-O1nKehQ1.js";import{X as d}from"./XAxis-CM346fVw.js";import{Y as y}from"./YAxis-BY3XsiJB.js";import{L as u}from"./Legend-DIaEXIPc.js";import{L as h}from"./Line-DZZP5hqp.js";import{T as g}from"./Tooltip-Ba60ewZ3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjljmlV4.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Xjgkf-2T.js";import"./throttle-CYllgfiW.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CA_D1sKG.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./CartesianAxis-BL1UgLf5.js";import"./Layer-CoFmyLu_.js";import"./Text-BRc4p81h.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./Label-B7OEZM_6.js";import"./types-CsWgfhSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DyhJv7Tq.js";import"./uniqBy-CzilxMyM.js";import"./iteratee-BTZk3n5k.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./Curve-C_xw8Bh0.js";import"./step-DRuHJRtS.js";import"./dataEntryStyles-C_QXXqcb.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./activeStyles-DPihfCdA.js";import"./useAnimationId-BneLXqad.js";import"./ErrorBarContext-C0H1v8By.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./Cross-C_tBJAja.js";import"./Rectangle-DEfxlhJq.js";import"./util-Dxo8gN5i.js";import"./Sector-ChBmv1Cu.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
