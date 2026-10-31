import{r as p,R as t}from"./iframe-DrMLBoK_.js";import{L as n}from"./LineChart-QGHfPOo8.js";import{R as s}from"./zIndexSlice-BAbfq_sX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-rjxjRRy0.js";import{X as d}from"./XAxis-Cwv8s30V.js";import{Y as y}from"./YAxis-T-2mqgRO.js";import{L as u}from"./Legend-BPFKtS9p.js";import{L as h}from"./Line-z8Hwxd3e.js";import{T as g}from"./Tooltip-DLFB31JE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXZPsywz.js";import"./resolveDefaultProps-C_WQkFbi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CrOsHKKG.js";import"./throttle-2Z3dikKo.js";import"./index-CTLiCJTk.js";import"./index-IA7JdDoU.js";import"./polarAxisSelectors-D2k-junf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BHx6I7KL.js";import"./index-BsgdmWE6.js";import"./index-DwcArmuD.js";import"./renderedTicksSlice-DjVfoptE.js";import"./index-pQjQ56sZ.js";import"./CartesianChart-Dzyi-du7.js";import"./ZIndexPortal-Cic8j-2O.js";import"./CategoricalChart-CZtxZv4h.js";import"./CartesianAxis-CAiEG9fo.js";import"./Layer-DCQ6NbAd.js";import"./Text-CCAk-006.js";import"./DOMUtils-BZ5XTJuP.js";import"./ZIndexLayer-FCgsPrev.js";import"./Label-CJPkFebi.js";import"./types-CTebeEOM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-BVUslZbl.js";import"./symbol-DCFwQ7z8.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-DS33QVkf.js";import"./useElementOffset-DSzIxfUE.js";import"./uniqBy-Wo4a7xMg.js";import"./iteratee-C7O8kT_z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CDb7Uz9B.js";import"./step-LAZCFOYn.js";import"./LabelList-UL5cxJwa.js";import"./ActivePoints-BqSYU_4H.js";import"./Dot-m22IE0o6.js";import"./activeStyles-CN6y9IyH.js";import"./useAnimationId-C1T3lckw.js";import"./ErrorBarContext-BbnyXFhx.js";import"./SetGraphicalItem-u5R4LaUm.js";import"./getRadiusAndStrokeWidthFromDot-e3lSPE0u.js";import"./ActiveShapeUtils-BLsOucL8.js";import"./useEffectiveDataKey-Cmfpsn2Q.js";import"./Cross-PCIn7ixO.js";import"./Rectangle-CtabDI_D.js";import"./util-Dxo8gN5i.js";import"./Sector-CAabEh96.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
