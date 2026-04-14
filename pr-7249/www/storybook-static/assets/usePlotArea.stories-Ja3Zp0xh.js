import{e as t}from"./iframe-BL30a25n.js";import{P as a}from"./PlotAreaShower-CDPFlOoQ.js";import{c as p}from"./hooks-Bu6pJnUO.js";import{R as s}from"./arrayEqualityCheck-CTdhw7v2.js";import{C as n}from"./ComposedChart-CwvxB3E8.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-K5AsLX-F.js";import{X as h}from"./XAxis-BuEHyROH.js";import{Y as c}from"./YAxis-97iCNCLl.js";import{L as g}from"./Legend-BFEw6qz3.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./immer-BLjYPncX.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dhgfu696.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSatPt3_.js";import"./index-DaX2Q3AK.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./Layer-DbzzoT5W.js";import"./ReactUtils-CvEgiikN.js";import"./Label-tOosDzC9.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./ActivePoints-DLmu87F_.js";import"./Dot-D_x5JJ0f.js";import"./types-DngVF1gy.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./ErrorBarContext-C--UypnL.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./useAnimationId-StTSWEFx.js";import"./getRadiusAndStrokeWidthFromDot-BWR1tZh1.js";import"./ActiveShapeUtils-DyYtBEWy.js";import"./isPlainObject-DHekL-Pq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dbi9MvBK.js";import"./Trapezoid-DF1LPrGo.js";import"./Sector-By56eltg.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";import"./step-COhLjfgX.js";import"./Curve-C9Gn1Z7l.js";import"./CartesianAxis-6XJOi0JN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
