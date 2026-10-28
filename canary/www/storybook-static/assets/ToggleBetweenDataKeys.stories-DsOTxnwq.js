import{r as p,R as t}from"./iframe-B5-NOQ5t.js";import{L as n}from"./LineChart-DTFx6DcT.js";import{R as s}from"./zIndexSlice-CRh8M764.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BsxI9W-f.js";import{X as d}from"./XAxis-BFljSmnb.js";import{Y as y}from"./YAxis-BxGdoYHh.js";import{L as u}from"./Legend-CtVYeCbD.js";import{L as h}from"./Line-DcgWWTAC.js";import{T as g}from"./Tooltip-DSfNKNAb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlDVaHKU.js";import"./resolveDefaultProps-CzoCHCv3.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CoB8fX7y.js";import"./throttle-BmJCRGcn.js";import"./index-BByFyeZE.js";import"./index-B_jQtdqD.js";import"./polarAxisSelectors-SkPOKFrV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BV3y_nyi.js";import"./index-CwdbuGI9.js";import"./index-CyjoC35Z.js";import"./renderedTicksSlice-DXZVnJsv.js";import"./index-Dboi7S9M.js";import"./CartesianChart-CFWWZ1wD.js";import"./ZIndexPortal-BtWSCMSf.js";import"./CategoricalChart-DfZY2tZ6.js";import"./CartesianAxis-BQONH3FI.js";import"./Layer-vSXC9HFp.js";import"./Text-B1H13EKo.js";import"./pageBackground-CQjz6Ds_.js";import"./ZIndexLayer-CDTqLj5d.js";import"./Label-Buxp0onk.js";import"./types-BMOXg_-b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ol0rnrkZ.js";import"./symbol-DXpOMYfl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-RuET0wQK.js";import"./uniqBy-CQFuYkxP.js";import"./iteratee-Do7GGGp4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-JcmdhaiD.js";import"./step-CC8FisnC.js";import"./LabelList-D_E_aw3e.js";import"./ActivePoints-CT1sEpay.js";import"./Dot-Qrt0ET2t.js";import"./activeStyles-DCKEH4qZ.js";import"./useAnimationId-CsdMGkaP.js";import"./dataEntryStyles-DTbCoLqH.js";import"./ErrorBarContext-x4ks4uU4.js";import"./SetGraphicalItem-OxeVhn_0.js";import"./getRadiusAndStrokeWidthFromDot-t_9z2IoB.js";import"./ActiveShapeUtils-khUUw2eu.js";import"./useEffectiveDataKey-CE1na-4k.js";import"./Cross-DBjXfX2z.js";import"./Rectangle-B17Nym8J.js";import"./util-Dxo8gN5i.js";import"./Sector-BXCggyyt.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
