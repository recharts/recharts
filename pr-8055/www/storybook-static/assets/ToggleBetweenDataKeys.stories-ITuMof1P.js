import{r as p,R as t}from"./iframe-CugsIFqT.js";import{L as n}from"./LineChart-D4W8b0bG.js";import{R as s}from"./zIndexSlice-DhzbqJ4_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B1sm3k7E.js";import{X as d}from"./XAxis-6HDBvGN1.js";import{Y as y}from"./YAxis-DaK5xoY3.js";import{L as u}from"./Legend-D8bcbKXA.js";import{L as h}from"./Line-CaiOsEW_.js";import{T as g}from"./Tooltip-DxX815jR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8Omcwd_.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-v31N2mNx.js";import"./throttle-DcWQ2VKw.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./isWellBehavedNumber-De17yvdK.js";import"./d3-scale-BE1RrYdy.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DwBMtOAp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./CartesianAxis-BJ-39moG.js";import"./Layer-Cn8FVO5-.js";import"./Text-B6xMGXMn.js";import"./pageBackground-CAJ4za5K.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./Label-Bo3nl74y.js";import"./ZIndexLayer-DwmQuX8A.js";import"./types-D00HSLdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CsFdNTJ7.js";import"./symbol-Cs2NCsK1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZwJ3BKY.js";import"./uniqBy-CE_ecxrY.js";import"./iteratee-Pb6iGz9n.js";import"./isArguments-yB-y1yaH.js";import"./Curve-TcJOrOAj.js";import"./step-B1Iay_8G.js";import"./activeStyles-_GUbXh9K.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./ActivePoints-DdTGUghp.js";import"./Dot-CBYwyJvt.js";import"./ErrorBarContext-XAjwvqyS.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getRadiusAndStrokeWidthFromDot-1Vrisa5h.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./useEffectiveDataKey-CDLJWg00.js";import"./Cross-D6Fvih2B.js";import"./Rectangle-BTGg0Smx.js";import"./util-Dxo8gN5i.js";import"./Sector-DWMdeq_4.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
