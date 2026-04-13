import{e as t}from"./iframe-Br4eYoVn.js";import{P as a}from"./PlotAreaShower-DSu4MaQt.js";import{c as p}from"./hooks-qMCGdphr.js";import{R as s}from"./arrayEqualityCheck-BTssjmx8.js";import{C as n}from"./ComposedChart-DO9Baogr.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CjfZ9drr.js";import{X as h}from"./XAxis-C8A1sscS.js";import{Y as c}from"./YAxis-WZOcc484.js";import{L as g}from"./Legend-Covp1wtm.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./immer-DPmqhqsD.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./zIndexSlice-C3EiH9DM.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./Layer-BXiy0Hpp.js";import"./ReactUtils-Dn-n-3Yl.js";import"./Label-CUHpuvtr.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./ZIndexLayer-BkFJTbU_.js";import"./ActivePoints-BJ31ITZc.js";import"./Dot-ec03_cyV.js";import"./types-Bdr3PbTc.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./useAnimationId-7Mhr-lzJ.js";import"./getRadiusAndStrokeWidthFromDot-DtONMN5t.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./Curve-C9oEn5cY.js";import"./CartesianAxis-DnfdLPHJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
