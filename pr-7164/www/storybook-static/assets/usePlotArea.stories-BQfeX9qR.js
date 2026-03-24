import{e as t}from"./iframe-Cghk5Dv5.js";import{P as a}from"./PlotAreaShower-m5B18Oa-.js";import{c as p}from"./hooks-DvHGCK_P.js";import{R as s}from"./arrayEqualityCheck-Blp4qByB.js";import{C as n}from"./ComposedChart-BzndwtyO.js";import{L as l}from"./Line-CyV2MMls.js";import{X as d}from"./XAxis-C28GaQOE.js";import{Y as h}from"./YAxis-DfDbyqX9.js";import{L as c}from"./Legend-BuwKR0lo.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./immer-C9d2WDC3.js";import"./axisSelectors-BmN1bSZG.js";import"./d3-scale-DwfmephR.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCDf7E4k.js";import"./index--WQv2JEI.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./Layer-BZayzYJ5.js";import"./ReactUtils-DJKFAAVq.js";import"./Label-DMYBuQg7.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./ZIndexLayer-C0MHsSee.js";import"./ActivePoints-D_0gNFPA.js";import"./Dot-DDhuD7gd.js";import"./types-BAdQFhn_.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./ErrorBarContext-B48_fgxO.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./useAnimationId-B_fUzLa-.js";import"./getRadiusAndStrokeWidthFromDot-CegfqfN2.js";import"./ActiveShapeUtils-CgedLmsf.js";import"./isPlainObject-GvFH0_0U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-SpFzk5.js";import"./Trapezoid-D5vWYT03.js";import"./Sector-WHMRpyIm.js";import"./Symbols-i2nCmAEN.js";import"./symbol-BX-g_aqV.js";import"./step-CJt2p9N6.js";import"./Curve-tyrMpXlR.js";import"./CartesianAxis-NFB-A6xZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DGki2voW.js";import"./uniqBy-BP9r3ZBr.js";import"./iteratee-Cll8zDsJ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
