import{r as p,R as t}from"./iframe-B_nNZpI2.js";import{L as n}from"./LineChart-Cs4wa7ww.js";import{R as s}from"./zIndexSlice-FViTDxbD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Coq5qgFM.js";import{X as d}from"./XAxis-BnGisaM6.js";import{Y as y}from"./YAxis-2XrZ_LwE.js";import{L as u}from"./Legend-ZqNJUdO7.js";import{L as h}from"./Line-CXhhFX8j.js";import{T as g}from"./Tooltip-D8OOgtrt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-v3LlOW.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlrbKtsJ.js";import"./throttle-CfowHFSP.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./polarAxisSelectors-c40A3UY1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BP2r_61E.js";import"./index-D3rZTjme.js";import"./index-CMcdxE-j.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./CartesianAxis-CmpohTUe.js";import"./Layer-BI_5R4V_.js";import"./Text-D-JNnNjs.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./Label-CETIJz5j.js";import"./types-CwUR8ti8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-zxsCudAN.js";import"./symbol-CQ43VyHp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Q6NphwPQ.js";import"./uniqBy-B6gg-PM7.js";import"./iteratee-pGgkjcUZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CDY88Bak.js";import"./step-Bq7ByKAT.js";import"./LabelList-DxewBo1N.js";import"./ActivePoints-2YuDFMtV.js";import"./Dot-DlBvAs_S.js";import"./activeStyles-BsBbQeVt.js";import"./useAnimationId-DARA-gCu.js";import"./dataEntryStyles-RBGB6YIO.js";import"./ErrorBarContext-DhTGqk3o.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getRadiusAndStrokeWidthFromDot-C7tNLDQS.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./Cross-_mk-19-J.js";import"./Rectangle-C8RP3-tc.js";import"./util-Dxo8gN5i.js";import"./Sector-PJXI1L2R.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
