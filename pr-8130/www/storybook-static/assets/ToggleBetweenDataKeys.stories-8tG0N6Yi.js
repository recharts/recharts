import{r as p,R as t}from"./iframe-CrYQDt8P.js";import{L as n}from"./LineChart-zjnciWl2.js";import{R as s}from"./zIndexSlice-DgBq9YFj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CWEHRbp1.js";import{X as d}from"./XAxis-ZRzZ6JbG.js";import{Y as y}from"./YAxis-Ibw-9rE8.js";import{L as u}from"./Legend-BNrmNdlO.js";import{L as h}from"./Line-DP1Q7foL.js";import{T as g}from"./Tooltip-Dov3wQN7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BAwtrVn5.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CHapoDkY.js";import"./throttle-EZYco_S-.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./polarAxisSelectors-qncpG9DL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8VX6HZY.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./CartesianAxis-DR-jLyCK.js";import"./Layer-BQFOl3cJ.js";import"./Text-BvJLtM_q.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./Label-_UeQKQwH.js";import"./types-D5M-0McJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BR2Z5pZe.js";import"./uniqBy-CuoQtKoh.js";import"./iteratee-9w6c29G1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D-a7nqUy.js";import"./step-DGjeaFMT.js";import"./LabelList-C_2TXPHb.js";import"./ActivePoints-CSQF1wsy.js";import"./Dot-GBqckkZQ.js";import"./activeStyles-C1vUddIu.js";import"./useAnimationId-DhleLLtl.js";import"./dataEntryStyles-D63lSB48.js";import"./ErrorBarContext-BkAsJpXU.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getRadiusAndStrokeWidthFromDot-nu59-3In.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./useEffectiveDataKey-CniHgm4C.js";import"./Cross-6AmbnwV4.js";import"./Rectangle-BrqfjGXb.js";import"./util-Dxo8gN5i.js";import"./Sector-Bm50MfLq.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
