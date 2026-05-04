import{e as t}from"./iframe-Cm3fKKya.js";import{P as a}from"./PlotAreaShower-DRAX5UGP.js";import{c as p}from"./hooks-B3tRCSat.js";import{R as s}from"./arrayEqualityCheck-CQWVDseH.js";import{C as n}from"./ComposedChart-CI7e_WTM.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CUx7_hG8.js";import{X as h}from"./XAxis-_gagIVgp.js";import{Y as c}from"./YAxis-BAWoPQYV.js";import{L as g}from"./Legend-Di-CnRxN.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./immer-CEWtNvyb.js";import"./axisSelectors-Bwtc5iq4.js";import"./d3-scale-BjMiYTJr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./zIndexSlice-DYSMWhOl.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./Layer-Bjej1AmV.js";import"./ReactUtils-CCKIvuk2.js";import"./Label-DcJ8tF7g.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./ActivePoints-XXtVAAS1.js";import"./Dot-elfvXfLw.js";import"./types-Cdoht-KM.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./useAnimationId-C78FuYWX.js";import"./getRadiusAndStrokeWidthFromDot-D5QROXAR.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./Curve-C9IFio54.js";import"./CartesianAxis-DUjBj8lo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DSmvd2Je.js";import"./uniqBy-BhwEwJ-s.js";import"./iteratee-BKobvmlS.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
