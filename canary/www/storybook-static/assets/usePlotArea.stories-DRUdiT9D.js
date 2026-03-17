import{e as t}from"./iframe-N_BxlBi6.js";import{P as a}from"./PlotAreaShower-DcYSYMnm.js";import{c as p}from"./hooks-DU7HquZl.js";import{R as s}from"./arrayEqualityCheck-CEf0Nn8K.js";import{C as n}from"./ComposedChart-CWKNFmv2.js";import{L as l}from"./Line-CcaUDWqS.js";import{X as d}from"./XAxis-kOfNYCLV.js";import{Y as h}from"./YAxis-DsllJpGC.js";import{L as c}from"./Legend-D89IvT-l.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./immer-m4imqOCY.js";import"./axisSelectors-BasHfAyu.js";import"./d3-scale-DrFqqVTo.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./zIndexSlice-Dwnmzy4_.js";import"./renderedTicksSlice-grNcr2K9.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./Layer-BGFLosQF.js";import"./ReactUtils-Bc5QD6WP.js";import"./Label-DSedETU8.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./ZIndexLayer-B4oG6gqW.js";import"./ActivePoints-BdX8YxXH.js";import"./Dot-B-WJq94W.js";import"./types-BHZ13L2v.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./useAnimationId-CZd_sIsZ.js";import"./getRadiusAndStrokeWidthFromDot-B0bkRdWl.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./Curve-BzBcZROj.js";import"./CartesianAxis-Bz8y1rju.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-drVnHBTv.js";import"./uniqBy-ClVVrVdj.js";import"./iteratee-T_aYBY_u.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
