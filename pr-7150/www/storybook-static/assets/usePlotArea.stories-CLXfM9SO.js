import{e as t}from"./iframe-rLfMAXZA.js";import{P as a}from"./PlotAreaShower-Df-GR4o6.js";import{c as p}from"./hooks-DgA2khsF.js";import{R as s}from"./arrayEqualityCheck-OjJIGGxq.js";import{C as n}from"./ComposedChart-BjVk6FMS.js";import{L as l}from"./Line-CyeIrLy7.js";import{X as d}from"./XAxis-B_pkAheb.js";import{Y as h}from"./YAxis-BkAFZjuO.js";import{L as c}from"./Legend-icLUUA6C.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./immer-DvqdMPbs.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./zIndexSlice-CNK81FG0.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./Layer-B0Vv-b1h.js";import"./ReactUtils-BClzbOkG.js";import"./Label-BHs-e8Zr.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./ZIndexLayer-CsEI63Vc.js";import"./ActivePoints-l6297kMX.js";import"./Dot-0q9wAizM.js";import"./types-BRd5e3b8.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./getRadiusAndStrokeWidthFromDot-CJ49ydrZ.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./CartesianAxis-C2v11b4L.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-OnGDg19o.js";import"./uniqBy-DZwvWIvi.js";import"./iteratee-BUpKOxlc.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
