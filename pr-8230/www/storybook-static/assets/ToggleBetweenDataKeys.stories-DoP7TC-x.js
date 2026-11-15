import{r as p,R as t}from"./iframe-B2PzCMaw.js";import{L as n}from"./LineChart-MH_SG76l.js";import{R as s}from"./zIndexSlice-D2yQeuEI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CQMMgqaf.js";import{X as d}from"./XAxis-hYV9QQyh.js";import{Y as y}from"./YAxis-B5nmPwid.js";import{L as u}from"./Legend-D1MO9Czw.js";import{L as h}from"./Line-BuZqDult.js";import{T as g}from"./Tooltip-Bvvf1V81.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-jPkZuWdd.js";import"./throttle-DjegI8Tm.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BTQYnDFg.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./Text-587hVFVv.js";import"./ZIndexLayer-P8eiWDF3.js";import"./Label-dW2fYkfR.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEcx2xhj.js";import"./uniqBy-DGDne-O9.js";import"./iteratee-BOVTI74Q.js";import"./isArguments-yB-y1yaH.js";import"./Curve-36hHeCTa.js";import"./step-BzcUBi6T.js";import"./dataEntryStyles-BUMHKDbc.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./activeStyles-dbWrPfDr.js";import"./useAnimationId-C33gpbVv.js";import"./ErrorBarContext-BWeZxt5m.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./Cross-RcwJWn4R.js";import"./Rectangle-B8youXH0.js";import"./util-Dxo8gN5i.js";import"./Sector-D7Q7W1P9.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
