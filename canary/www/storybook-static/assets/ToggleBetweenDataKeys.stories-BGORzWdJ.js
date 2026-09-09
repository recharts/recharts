import{r as p,R as t}from"./iframe-gpTdtb3o.js";import{L as n}from"./LineChart-D2d2-OWm.js";import{R as s}from"./zIndexSlice-B_W_5LRM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-3cymI0rY.js";import{X as d}from"./XAxis-DYu-ZOyv.js";import{Y as y}from"./YAxis-CLFsfV71.js";import{L as u}from"./Legend-BGa0h3W9.js";import{L as h}from"./Line-B4xDYNCi.js";import{T as g}from"./Tooltip-DafckEdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3qcdzr8.js";import"./resolveDefaultProps-B1pv53Kz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CvE00xSD.js";import"./throttle-hlhbAB_M.js";import"./index-Ca1MAT9x.js";import"./index-6dylaplf.js";import"./isWellBehavedNumber-Cw4jxBns.js";import"./d3-scale-7NDnVj98.js";import"./index-nUwe86SZ.js";import"./index-DXV1xdLh.js";import"./renderedTicksSlice-DaEdYejM.js";import"./index-BMezmC1E.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DPQqrhgz.js";import"./chartDataContext-BsKoSYgw.js";import"./CategoricalChart-f3aA9Jty.js";import"./CartesianAxis-CIlmhzaL.js";import"./Layer-D_tVd9Wv.js";import"./Text-ak0t_Bx4.js";import"./DOMUtils-Cn984pfG.js";import"./useId-ByjeVVFt.js";import"./useBackwardsCompatibleTheme-DCuKeaT8.js";import"./Label-Dvu_EEFs.js";import"./ZIndexLayer-DtPhgAmh.js";import"./types-DEtafNZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-NpmPSUOW.js";import"./symbol-YRQzSnHu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHZkptX3.js";import"./uniqBy-DYlIInnP.js";import"./iteratee-CkkSmBRO.js";import"./Curve-lr3CvHTC.js";import"./step-Ywftl4vM.js";import"./AnimatedItems-CmtCKI6D.js";import"./useAnimationId-BJpAmfdR.js";import"./ActivePoints-BZ5te_n2.js";import"./Dot-DOoS6SKx.js";import"./RegisterGraphicalItemId-D6ws7CHx.js";import"./ErrorBarContext-Cyjjr4ja.js";import"./GraphicalItemClipPath-BJM_h44F.js";import"./SetGraphicalItem-C_pU6L7b.js";import"./getRadiusAndStrokeWidthFromDot-BwkbZUgK.js";import"./ActiveShapeUtils-DjV0uxAo.js";import"./useGraphicalItemIdentity-DKbxUJti.js";import"./Cross-fe2tev2Z.js";import"./Rectangle-CKEK9pt1.js";import"./util-Dxo8gN5i.js";import"./Sector-BIT9pt3G.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
