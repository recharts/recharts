import{r as p,R as t}from"./iframe-B0md2XL3.js";import{L as n}from"./LineChart-BNnNIx5L.js";import{R as s}from"./zIndexSlice-DA0iP-6p.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CETnhiYb.js";import{X as d}from"./XAxis-DLCMfyHC.js";import{Y as y}from"./YAxis-Dak2FPR9.js";import{L as u}from"./Legend-DtVtA_Ey.js";import{L as h}from"./Line-Dwcg0Xhw.js";import{T as g}from"./Tooltip-C1QwgOny.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWXf9YtC.js";import"./resolveDefaultProps-DYFy43g1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CGXaSNKn.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./Label-B4OtwMWB.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFimtnCZ.js";import"./uniqBy-BlUnuxiL.js";import"./iteratee-C8WNKkID.js";import"./isArguments-yB-y1yaH.js";import"./Curve-s1Q-eWha.js";import"./step-B9w_ahFS.js";import"./LabelList-CC8uMe5u.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./activeStyles-CvpZ-3cp.js";import"./useAnimationId-OzV8hXkE.js";import"./dataEntryStyles-QaPc2U0F.js";import"./ErrorBarContext-CrVPyI6s.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./Cross-DSFwnFYd.js";import"./Rectangle-DtE2sp0d.js";import"./util-Dxo8gN5i.js";import"./Sector-DpuCM0BB.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
