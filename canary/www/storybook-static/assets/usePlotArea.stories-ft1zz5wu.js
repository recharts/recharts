import{R as t}from"./iframe-z45XlhiT.js";import{z as a}from"./RechartsWrapper-CkIduI85.js";import{R as p}from"./zIndexSlice-rByxwPq2.js";import{C as n}from"./ComposedChart-C_oOM-_x.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BNg9pLDQ.js";import{X as l}from"./XAxis-yN0YOhJu.js";import{Y as h}from"./YAxis-C3VQiLjy.js";import{L as c}from"./Legend-DSAqr5_p.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZIpCEiW.js";import"./throttle-trzEzJ5j.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DBdfj2JL.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./Layer-BkChjDHf.js";import"./Curve-DeIAn4Qv.js";import"./types-DMhu4FvJ.js";import"./step-xmYWYAoT.js";import"./path-DyVhHtw_.js";import"./LabelList-BXCYEXvh.js";import"./Label-CmK6wYAn.js";import"./Text-D6fTfOcl.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./activeStyles-2Y8cHsw1.js";import"./useAnimationId-DASBPoZY.js";import"./dataEntryStyles-CahaEVij.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./CartesianAxis-CzSQFzRC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dw7KsQZo.js";import"./uniqBy-SRHayfFD.js";import"./iteratee-BTmoFKFa.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
