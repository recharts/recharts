import{e as t}from"./iframe-eSAJEZht.js";import{P as a}from"./PlotAreaShower-ltT9O7XE.js";import{c as p}from"./hooks-Q2uSt6yB.js";import{R as s}from"./arrayEqualityCheck-DIP4cf6Y.js";import{C as n}from"./ComposedChart-C-MvXfhH.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BoAJbviG.js";import{X as h}from"./XAxis-DBtpKE2p.js";import{Y as c}from"./YAxis-BH4pX6Iz.js";import{L as g}from"./Legend-B-8fEd-n.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./immer-TNEPjPCB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./Layer-Cp_zb8Y2.js";import"./ReactUtils-H-FoJgDc.js";import"./Label-C16feiqK.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./ZIndexLayer-D46bbrBq.js";import"./ActivePoints-DV8ALALF.js";import"./Dot--nNeygLj.js";import"./types-BwWrJ-BL.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./ErrorBarContext-BMrhnYpV.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./useAnimationId-Cu-vgNv6.js";import"./getRadiusAndStrokeWidthFromDot-CDzYNMm_.js";import"./ActiveShapeUtils-Dy2Nr1AF.js";import"./isPlainObject-YNZwY72g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvSVsybX.js";import"./Trapezoid-CdRLetkI.js";import"./Sector-DkuyB5qD.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";import"./step-n_okOr0Q.js";import"./Curve-dniblYNk.js";import"./CartesianAxis-CGGz-Ws1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-aklaWS_N.js";import"./uniqBy-CeyRlWJb.js";import"./iteratee-CR1uVucu.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
