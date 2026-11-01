import{r as p,R as t}from"./iframe-D34TH6kS.js";import{L as n}from"./LineChart-C8XIyg25.js";import{R as s}from"./zIndexSlice-DaIxnBgS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BgbGVFlx.js";import{X as d}from"./XAxis-eUT57Vta.js";import{Y as y}from"./YAxis-BB2iGVHg.js";import{L as u}from"./Legend-BWK9Xcu6.js";import{L as h}from"./Line-CA8mNuGo.js";import{T as g}from"./Tooltip-BZwHxVtU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dd_PV6Ah.js";import"./resolveDefaultProps-C_e5Jx4S.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dy4Zn44Z.js";import"./throttle-BpT9ifnU.js";import"./index-CbUl4qJT.js";import"./index-BdPMZI3x.js";import"./polarAxisSelectors-CB23D7zz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZnn2eaB.js";import"./index-DmQdJSj7.js";import"./index-x328HEKx.js";import"./renderedTicksSlice-BJ7Rgktl.js";import"./index-B0gBzv4y.js";import"./fillDefinitions-C7IVG_LK.js";import"./CartesianChart-DTsOd4db.js";import"./ZIndexPortal-DFRqCkn0.js";import"./CategoricalChart-DeDW5Ok8.js";import"./CartesianAxis-BM-PI8Qd.js";import"./Layer-Dwmoii2m.js";import"./Text-DnFfEMnn.js";import"./DOMUtils-CL7ddNNK.js";import"./ZIndexLayer-CjBSjq3C.js";import"./Label-Bmp2qp_V.js";import"./types-sVdhE-m7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DvTMqivt.js";import"./symbol-CF9tVrFE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ipbyi-Tm.js";import"./uniqBy-HVU5otxv.js";import"./iteratee-P8VRTjFX.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DynZHvMF.js";import"./step-ClOyd6C_.js";import"./LabelList-1IdMTUqF.js";import"./ActivePoints-CrE_aMeq.js";import"./Dot-Dl99GL8N.js";import"./activeStyles-BhcCN1d0.js";import"./useAnimationId-B9qHmTzi.js";import"./dataEntryStyles-vZIv75R2.js";import"./ErrorBarContext-BpXycT31.js";import"./SetGraphicalItem-BAvkQ0nW.js";import"./getRadiusAndStrokeWidthFromDot-Cm9Ouxhm.js";import"./ActiveShapeUtils--tE3PBa7.js";import"./useEffectiveDataKey-rXS-umfC.js";import"./Cross-BL7_RzjB.js";import"./Rectangle-CkQXoZfZ.js";import"./util-Dxo8gN5i.js";import"./Sector-d4TsYNLQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
