import{e as t}from"./iframe-BgwmBjfB.js";import{P as a}from"./PlotAreaShower-BvfC-KbU.js";import{c as p}from"./hooks-BBhaKEpc.js";import{R as s}from"./arrayEqualityCheck-B1qnogVb.js";import{C as n}from"./ComposedChart-QYakg_VE.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BukzmJmv.js";import{X as h}from"./XAxis-BX9DZiaX.js";import{Y as c}from"./YAxis-DL4fvP6H.js";import{L as g}from"./Legend-DBmPCTQS.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./immer-L1QYf-NE.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-qucNpk_A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./Layer-sKAIqvEC.js";import"./ReactUtils-Dla0XjmI.js";import"./Label-BeTMxE7h.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./ZIndexLayer-DX-nM8qM.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./types-CFdz9x_M.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./ErrorBarContext-CLlFokOM.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./ActiveShapeUtils-Bc3Bo2kR.js";import"./isPlainObject-DCrRKxze.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xy71HFhS.js";import"./Trapezoid-Ctq3RZiG.js";import"./Sector-B8iCNGe2.js";import"./Symbols-CqgbDjwG.js";import"./symbol-D69U7vWh.js";import"./step-BxFdL0zf.js";import"./Curve-D2S6CN-2.js";import"./CartesianAxis-GtFYCfV6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DX4-4QE5.js";import"./uniqBy-CHNs3q3W.js";import"./iteratee-DJZlIK_6.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
