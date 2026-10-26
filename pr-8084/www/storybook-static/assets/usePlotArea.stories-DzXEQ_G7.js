import{R as t}from"./iframe-sVYf0T4K.js";import{z as a}from"./RechartsWrapper-cX9KnfoQ.js";import{R as p}from"./zIndexSlice-DCYn61_Z.js";import{C as n}from"./ComposedChart-79IdZ4r_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ChZJFWD1.js";import{X as l}from"./XAxis-DBp8xvXF.js";import{Y as h}from"./YAxis-CNIo2SjU.js";import{L as c}from"./Legend-C9mntufH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BNjxkguA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DeiSy_-h.js";import"./throttle-B5u3GWWh.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaVFs3zj.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./Layer-BIjeoEg2.js";import"./Curve-DRJ9KjAo.js";import"./types-ZHVwXJa3.js";import"./step-DuwXt4tv.js";import"./path-DyVhHtw_.js";import"./activeStyles-BGq7qwld.js";import"./Label-DWNcL86V.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./dataEntryStyles-4CyLqaB1.js";import"./useAnimationId-D71D5MAL.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./CartesianAxis-BI1VsAr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
