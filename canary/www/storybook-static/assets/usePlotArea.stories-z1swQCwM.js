import{e as t}from"./iframe-DbVDg_ca.js";import{P as a}from"./PlotAreaShower-D9cE9N3J.js";import{c as p}from"./hooks-8LGpZrMc.js";import{R as s}from"./arrayEqualityCheck-BSVOQ7T-.js";import{C as n}from"./ComposedChart-BlXi-i9v.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DEUmSR0a.js";import{X as h}from"./XAxis-nk-GltPq.js";import{Y as c}from"./YAxis-C-wbbJhP.js";import{L as g}from"./Legend-CBqpD3-1.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./immer-0ZZjS5Nj.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./Layer-C9NfejAk.js";import"./ReactUtils-ruqV-srf.js";import"./Label-CT2eYMKi.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./ZIndexLayer-D5PjewgR.js";import"./ActivePoints-Ck9TrlmM.js";import"./Dot-Boac-7JN.js";import"./types-9bS4DgjT.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./ErrorBarContext-BvEmMKSO.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./useAnimationId-BGASjBYn.js";import"./getRadiusAndStrokeWidthFromDot-I2XTj7OF.js";import"./ActiveShapeUtils-a-btUYcY.js";import"./isPlainObject-qXbjbrRe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C71dLN6n.js";import"./Trapezoid-DCNj78K7.js";import"./Sector-DIpZMX41.js";import"./Symbols-h61-aZIG.js";import"./symbol-suQNbvDu.js";import"./step-DVp28hgV.js";import"./Curve-7li-NOkq.js";import"./CartesianAxis-wfs3tk0I.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-lMXxs2jy.js";import"./uniqBy-B0VkYOM0.js";import"./iteratee-DJFQcjLL.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
