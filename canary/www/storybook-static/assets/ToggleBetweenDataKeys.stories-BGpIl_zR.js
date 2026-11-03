import{r as p,R as t}from"./iframe-C4yajH80.js";import{L as n}from"./LineChart-snXQJVg4.js";import{R as s}from"./zIndexSlice-BfiJerBV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-XydKHAKo.js";import{X as d}from"./XAxis-BFxxSACP.js";import{Y as y}from"./YAxis-CKXsneZC.js";import{L as u}from"./Legend-D8kma9hL.js";import{L as h}from"./Line-B3Ju-sFB.js";import{T as g}from"./Tooltip-C3r4dDMD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EDwJ-hpd.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C4wAO8K7.js";import"./throttle-A9at9acq.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fBzFIMPy.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./CartesianAxis-CiDuuMHX.js";import"./Layer-D0yKuovh.js";import"./Text-Bi36EJ7d.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./Label-B6ownNND.js";import"./types-CL_v27h0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jHj6xKf0.js";import"./uniqBy-B9zpECzU.js";import"./iteratee-Cick1OQS.js";import"./isArguments-yB-y1yaH.js";import"./Curve-fl7qnDBk.js";import"./step-I8SAqNm5.js";import"./LabelList-C_dQABL5.js";import"./ActivePoints-Ve6xkJ_B.js";import"./Dot-CrVSKUlv.js";import"./activeStyles-DvcaieBh.js";import"./useAnimationId-BUxfS1h6.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./ErrorBarContext-ELy3xUI7.js";import"./SetGraphicalItem-aXzYe790.js";import"./getRadiusAndStrokeWidthFromDot-BI02GC_O.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./Cross-CJWJdMdd.js";import"./Rectangle-Co2_9m8t.js";import"./util-Dxo8gN5i.js";import"./Sector-CnqTZ0oD.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
