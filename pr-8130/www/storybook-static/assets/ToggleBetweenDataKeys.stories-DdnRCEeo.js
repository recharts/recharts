import{r as p,R as t}from"./iframe-D4WxERWR.js";import{L as n}from"./LineChart-DBT3UlWK.js";import{R as s}from"./zIndexSlice-Ctb-XE3r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bl7Cq_Cu.js";import{X as d}from"./XAxis-CSUQYPZm.js";import{Y as y}from"./YAxis-oI30KIzY.js";import{L as u}from"./Legend-BdsZ9eSK.js";import{L as h}from"./Line-umjtcrXx.js";import{T as g}from"./Tooltip-C28rp3v5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BABrVhwD.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDo6nEPG.js";import"./throttle-YSLka_uT.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./polarAxisSelectors-29BSG3By.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUPxeW1L.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./CartesianAxis-CWiuRNLE.js";import"./Layer-Cql_Pemo.js";import"./Text-DwZS23az.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./Label-DI6ASMtN.js";import"./types-Bl0q8uU6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CCgKIDxa.js";import"./step-BXgucIl4.js";import"./LabelList-CQQZHleH.js";import"./ActivePoints-CTDmaIKH.js";import"./Dot--NIPiAHj.js";import"./activeStyles-BIi7TIST.js";import"./useAnimationId-VHvbbifh.js";import"./dataEntryStyles-Q9NassVy.js";import"./ErrorBarContext-f8d14flb.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getRadiusAndStrokeWidthFromDot-DuPKRIUg.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./Cross-CWHoCY7b.js";import"./Rectangle-CKjrVYq4.js";import"./util-Dxo8gN5i.js";import"./Sector-DHTcqVpn.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
