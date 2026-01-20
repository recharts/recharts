import{r as n,e as t}from"./iframe-Qbvlqe9c.js";import{L as p}from"./LineChart-l_WtTSqf.js";import{R as s}from"./arrayEqualityCheck-B3n_664E.js";import{C as c}from"./CartesianGrid-BrR2o-p8.js";import{X as l}from"./XAxis-DvwXUl6_.js";import{Y as d}from"./YAxis-CbhDcywn.js";import{L as y}from"./Legend-hkD0puSA.js";import{L as h}from"./Line-CETAi-Tq.js";import{T as u}from"./Tooltip-DNiKyqgP.js";import{R as g}from"./RechartsHookInspector-Bcf65z8s.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j0khHO2J.js";import"./hooks-C__9gfvB.js";import"./axisSelectors-DP3q5L3p.js";import"./zIndexSlice-Dd4fWTvl.js";import"./resolveDefaultProps-76Pg9xKV.js";import"./PolarUtils-1Zh54hEc.js";import"./CartesianChart-BEe2ZeB9.js";import"./chartDataContext-meOOuMw1.js";import"./CategoricalChart-BN7dR1q_.js";import"./CartesianAxis-a9jFIi9h.js";import"./Layer-CGD9i9Tv.js";import"./Text-BhRNkj8s.js";import"./DOMUtils-D4R1mvUb.js";import"./Label-BjNpzDAS.js";import"./ZIndexLayer-BGnFu8Hz.js";import"./types-BIElRGEC.js";import"./Symbols-DUUTByO6.js";import"./Curve-viWUlKkP.js";import"./useElementOffset-CVTdXMNm.js";import"./iteratee-D8VcXKhk.js";import"./ReactUtils-DDfXx9yL.js";import"./ActivePoints-Z50a9Y5S.js";import"./Dot-K6oNejLl.js";import"./RegisterGraphicalItemId-Bl4eT23s.js";import"./ErrorBarContext-BToEOD0T.js";import"./GraphicalItemClipPath-LG6KLgtm.js";import"./SetGraphicalItem-BGT_K21t.js";import"./useAnimationId-BMBkTPld.js";import"./getRadiusAndStrokeWidthFromDot-iWUSXSti.js";import"./ActiveShapeUtils-DIh0EQro.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dq-tt7hT.js";import"./Trapezoid-B2gFU9p-.js";import"./Sector-Byha0vVB.js";import"./Cross-Bkz5W_Jj.js";import"./index-BFsVO8Up.js";import"./ChartSizeDimensions-DHXLFfdm.js";import"./OffsetShower-CcbpVL0P.js";import"./PlotAreaShower-Bw9dKf0L.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
