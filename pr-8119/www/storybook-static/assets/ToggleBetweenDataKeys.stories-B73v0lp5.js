import{r as p,R as t}from"./iframe-C3rzwJQL.js";import{L as n}from"./LineChart-BmPdJkqa.js";import{R as s}from"./zIndexSlice-6U0v4l7r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B6Ohn97n.js";import{X as d}from"./XAxis-DiB8sdSh.js";import{Y as y}from"./YAxis-Bi88dWrW.js";import{L as u}from"./Legend-B7oMtHG8.js";import{L as h}from"./Line-BD2mjSH_.js";import{T as g}from"./Tooltip-2DujJhc4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--Ro5bVbm.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-_YduxGmH.js";import"./throttle-B7FABENa.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C-_ks2ZK.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./CartesianAxis-CD4CCpjb.js";import"./Layer-B6-xlzoZ.js";import"./Text-X-wYRMmx.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./Label-CBpcK4i6.js";import"./types-BKor_cCv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-Cpwg_wUg.js";import"./dataEntryStyles-CekGYxzv.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-NLRniG8O.js";import"./step-B3ivcKoR.js";import"./LabelList-CqZcLqEs.js";import"./ActivePoints-1KuvikUF.js";import"./Dot-obmqUtS4.js";import"./activeStyles-DlQJ4xNs.js";import"./useAnimationId-Dn06_oTK.js";import"./ErrorBarContext-BUzY2WBc.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getRadiusAndStrokeWidthFromDot-CUcYHW0t.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./Cross-BzTKK6a0.js";import"./Rectangle-CRaBEnAs.js";import"./util-Dxo8gN5i.js";import"./Sector-CTZzADJH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
