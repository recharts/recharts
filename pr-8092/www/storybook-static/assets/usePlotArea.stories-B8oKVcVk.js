import{R as t}from"./iframe-DloB-Tup.js";import{z as a}from"./RechartsWrapper-C7KZ4AFC.js";import{R as p}from"./zIndexSlice-DkoSoypq.js";import{C as n}from"./ComposedChart-gu5T_l93.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BakhYVyl.js";import{X as l}from"./XAxis-85tJ7DjB.js";import{Y as h}from"./YAxis-C2kKnKD5.js";import{L as c}from"./Legend-CRq1oXoj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-5JufQAoG.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./Layer-S6G7_nQD.js";import"./Curve-Dw8-x6-u.js";import"./types-BVm9IbXw.js";import"./step-CNEatR3g.js";import"./path-DyVhHtw_.js";import"./LabelList-B_3Vas12.js";import"./Label-BCZcSJT3.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./dataEntryStyles-DO0_QeZe.js";import"./ActivePoints-Baun6K6R.js";import"./Dot-CiBIq_Wk.js";import"./activeStyles-B8TQJkxp.js";import"./useAnimationId-B4JCM27x.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getRadiusAndStrokeWidthFromDot-ymvOuKSP.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./CartesianAxis-3ybsRmFq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-fPA8IkJo.js";import"./uniqBy-C9ysuPBd.js";import"./iteratee-C2C5pJva.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
