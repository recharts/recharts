import{e as t}from"./iframe-BUUPGxKW.js";import{P as a}from"./PlotAreaShower-BDM2L963.js";import{c as p}from"./hooks-BNCSk-QW.js";import{R as s}from"./arrayEqualityCheck-uAaGhnkl.js";import{C as n}from"./ComposedChart-DSmYFUeE.js";import{L as l}from"./Line-CtLW08yR.js";import{X as d}from"./XAxis-DpsztnP2.js";import{Y as h}from"./YAxis-B2sJZ_bt.js";import{L as c}from"./Legend-CgioBktz.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./immer-kqZDXGZE.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./zIndexSlice-DsPDLjCa.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./CartesianChart-npq1asZ9.js";import"./chartDataContext-D2ei2EEV.js";import"./CategoricalChart-BjzN8N8f.js";import"./Layer-DlNKk7f2.js";import"./ReactUtils-BaDlyhyr.js";import"./Label-C0y-OKmx.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./ZIndexLayer-CiKkYojy.js";import"./ActivePoints-oTNshfX-.js";import"./Dot-3oFAy5A0.js";import"./types-DBwevUA7.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./useAnimationId-CMTrGaHR.js";import"./getRadiusAndStrokeWidthFromDot-CPj_WkC-.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-3zO8wV20.js";import"./Trapezoid-BV5ztp3S.js";import"./Sector-DdslfAV3.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./Curve-C5yOoaqn.js";import"./CartesianAxis-CFdsXoNd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DfNe91Mv.js";import"./uniqBy-RZOC8lwP.js";import"./iteratee-D8peaFHS.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
