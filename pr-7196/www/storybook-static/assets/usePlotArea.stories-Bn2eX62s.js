import{e as t}from"./iframe-BOzdYMSK.js";import{P as a}from"./PlotAreaShower-DAwEQHde.js";import{c as p}from"./hooks-DABVmJA-.js";import{R as s}from"./arrayEqualityCheck-C-L8EdU9.js";import{C as n}from"./ComposedChart-CMGQFiN-.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CMTElOTG.js";import{X as h}from"./XAxis-BCEpc3K6.js";import{Y as c}from"./YAxis-FsZJz6tV.js";import{L as g}from"./Legend-BwMlwprH.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DfVhVyBn.js";import"./immer-BswUgWWB.js";import"./axisSelectors-D0SqUNzA.js";import"./d3-scale-BLmRkdBI.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2gE7AyU9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKlBI8B-.js";import"./index-DlDmkRAf.js";import"./zIndexSlice-C7XasEZZ.js";import"./renderedTicksSlice-Br0n-FAv.js";import"./CartesianChart-CYCDZmDe.js";import"./chartDataContext-CLnWO5Qo.js";import"./CategoricalChart-DnUtLsS8.js";import"./Layer-B9qQTSv5.js";import"./ReactUtils-B7_pPpqU.js";import"./Label-Dx_BRROg.js";import"./Text-BrQPjMdx.js";import"./DOMUtils-BtSYpCvp.js";import"./ZIndexLayer-DSuS-vq3.js";import"./ActivePoints-pX3DuQoW.js";import"./Dot-B9xnb9v8.js";import"./types-o0ZEOggY.js";import"./RegisterGraphicalItemId-BExwrCQG.js";import"./ErrorBarContext-Bo7z398t.js";import"./GraphicalItemClipPath-CABkDL1Y.js";import"./SetGraphicalItem-CvulM7lS.js";import"./useAnimationId-DdiGbGls.js";import"./getRadiusAndStrokeWidthFromDot-DHr5ycqw.js";import"./ActiveShapeUtils-DtwM1IUK.js";import"./isPlainObject-ugbSTU2W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7iw7enh.js";import"./Trapezoid-BZWxKB8U.js";import"./Sector-O1WOLqS-.js";import"./Symbols-CMXu8a67.js";import"./symbol-BCO6WfvA.js";import"./step-C508TLAF.js";import"./Curve-BClDVh5D.js";import"./CartesianAxis-CvCr5PgT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-B-5_AZVT.js";import"./uniqBy-gL9NO_yL.js";import"./iteratee-BNe7uJ8G.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
