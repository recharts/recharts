import{R as t}from"./iframe-CUml5YCN.js";import{z as a}from"./RechartsWrapper-jAZSY4Pq.js";import{R as p}from"./zIndexSlice-Duug8EOo.js";import{C as n}from"./ComposedChart-bDo5B3j8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-HXIUzKg7.js";import{X as l}from"./XAxis-DS-AJg-5.js";import{Y as h}from"./YAxis-CGT5tGsT.js";import{L as c}from"./Legend-Dy_w-u1K.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B2HI9EL2.js";import"./throttle-00pBoixS.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CEanJ2qJ.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./Layer-BUAUs1E0.js";import"./Curve-MMF3Mq57.js";import"./types-BdRO-t6j.js";import"./step-CbD7Fw7p.js";import"./path-DyVhHtw_.js";import"./LabelList-1BV2-5OM.js";import"./Label-Co-nrknN.js";import"./Text-C-J7rFVH.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./ActivePoints-DmxPU0dU.js";import"./Dot-Bb0NnVdB.js";import"./activeStyles-DSIZcOzy.js";import"./useAnimationId-CTU-teyX.js";import"./dataEntryStyles-DqljzTne.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getRadiusAndStrokeWidthFromDot-B5I8H9q6.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./useEffectiveDataKey-11clGpT5.js";import"./CartesianAxis-BVj8a-va.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./FillDefinition-DVWLhRTd.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
