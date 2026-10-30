import{r as p,R as t}from"./iframe-Bp2XYb68.js";import{L as n}from"./LineChart-CjJHpTGi.js";import{R as s}from"./zIndexSlice-Cdn-Kk-M.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-iZT-826p.js";import{X as d}from"./XAxis-ts9--8Kg.js";import{Y as y}from"./YAxis-EIT5_cgk.js";import{L as u}from"./Legend-CWn7fB8c.js";import{L as h}from"./Line-BuHa0ZJe.js";import{T as g}from"./Tooltip-DefDQyy6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFwXtpN1.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D7x9R07e.js";import"./throttle-DjpMRj7m.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BystX3Ur.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./CartesianAxis-BoCxaOyC.js";import"./Layer-BCuSbR8-.js";import"./Text-NUByGaeH.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./Label-BYixOdgi.js";import"./types-ChkwvJX7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-ChX4QXi5.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0qZzXDV.js";import"./uniqBy-C0-xR335.js";import"./iteratee-B9Sxwtsj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-L4y0Pw0M.js";import"./step-D6j5BM_X.js";import"./LabelList-NX9sUv81.js";import"./ActivePoints-BQlT-yF-.js";import"./Dot-Bp6Z7m8n.js";import"./activeStyles-BkNcOac3.js";import"./useAnimationId-BnLlvmFh.js";import"./dataEntryStyles-0iby4079.js";import"./ErrorBarContext-C1RLIbYa.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./getRadiusAndStrokeWidthFromDot-Du2-K1xF.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./useEffectiveDataKey-DiX5XHUq.js";import"./Cross-dfK3CHkP.js";import"./Rectangle-M7CoQGRa.js";import"./util-Dxo8gN5i.js";import"./Sector-Ml-EH-s8.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
