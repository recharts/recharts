import{R as t}from"./iframe-B2PzCMaw.js";import{z as a}from"./RechartsWrapper-hk-Vj6y4.js";import{R as p}from"./zIndexSlice-D2yQeuEI.js";import{C as n}from"./ComposedChart-AFpPZ6lH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BuZqDult.js";import{X as l}from"./XAxis-hYV9QQyh.js";import{Y as h}from"./YAxis-B5nmPwid.js";import{L as c}from"./Legend-D1MO9Czw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./get-cF5BDHN6.js";import"./axisSelectors-jPkZuWdd.js";import"./throttle-DjegI8Tm.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BTQYnDFg.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./Layer-qWAN0MNZ.js";import"./Curve-36hHeCTa.js";import"./types-BQ9HRUUW.js";import"./step-BzcUBi6T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BUMHKDbc.js";import"./Label-dW2fYkfR.js";import"./Text-587hVFVv.js";import"./ZIndexLayer-P8eiWDF3.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./activeStyles-dbWrPfDr.js";import"./useAnimationId-C33gpbVv.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./ErrorBarContext-BWeZxt5m.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./CartesianAxis-p63YhqCL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DEcx2xhj.js";import"./uniqBy-DGDne-O9.js";import"./iteratee-BOVTI74Q.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
