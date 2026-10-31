import{r as p,R as t}from"./iframe-CIzVR-2-.js";import{L as n}from"./LineChart-n8rw1Q6i.js";import{R as s}from"./zIndexSlice-CJv9lj0d.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-JuGuyBql.js";import{X as d}from"./XAxis-DuVjd9Cl.js";import{Y as y}from"./YAxis-BM-BvKCY.js";import{L as u}from"./Legend-BOMw6FGf.js";import{L as h}from"./Line-kvdINkjm.js";import{T as g}from"./Tooltip-Bi9uk3q6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./get-cF5BDHN6.js";import"./axisSelectors-mbotnnaX.js";import"./throttle-g_l7Z0ZN.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./Label-MgaHTNfc.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CqtDfKww.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./isArguments-yB-y1yaH.js";import"./Curve-qbG6zMME.js";import"./step-Ma_Va74-.js";import"./LabelList-BTCEEH0Q.js";import"./ActivePoints-Bfyy8a29.js";import"./Dot-CbUJ7B3N.js";import"./activeStyles-Dl0q6Ayx.js";import"./useAnimationId-BGu4RQqd.js";import"./dataEntryStyles-DxP76lNF.js";import"./ErrorBarContext-BpJZX0b6.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getRadiusAndStrokeWidthFromDot-MbD5sGJN.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./Cross-DPUQkNJu.js";import"./Rectangle-CFbXfnvF.js";import"./util-Dxo8gN5i.js";import"./Sector-CyDWbC_t.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
