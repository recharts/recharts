import{r as p,R as t}from"./iframe-DTgRciqJ.js";import{L as n}from"./LineChart-Djjsij8a.js";import{R as s}from"./zIndexSlice-DVbLmSgB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DI64TJvK.js";import{X as d}from"./XAxis-GGlBaKPK.js";import{Y as y}from"./YAxis-Bbi7V5fP.js";import{L as u}from"./Legend-DuFVdlS3.js";import{L as h}from"./Line-B2ntj69e.js";import{T as g}from"./Tooltip-41XtV6OS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MmwUlJ_d.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CM_jcbgZ.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./Layer-uwDyCJ97.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./Label-ClRWPO-B.js";import"./types-D-ekNx8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-DVVBuQo8.js";import"./dataEntryStyles-B-5OPbn7.js";import"./useElementOffset-C_KB9sAl.js";import"./uniqBy-CROCk4kq.js";import"./iteratee-CNnsb6wb.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjloRNAl.js";import"./step-0aJ3gZqs.js";import"./LabelList-DQdMNFQg.js";import"./ActivePoints-q_blbmo6.js";import"./Dot-BnzqQ9RW.js";import"./activeStyles-bjUNghBK.js";import"./useAnimationId-D4a67WLs.js";import"./ErrorBarContext-CqakUp6M.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getRadiusAndStrokeWidthFromDot-DXeqlmgf.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./Cross-C0wVoJ92.js";import"./Rectangle-NM_AUMQ3.js";import"./util-Dxo8gN5i.js";import"./Sector-BVpz_1zh.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
