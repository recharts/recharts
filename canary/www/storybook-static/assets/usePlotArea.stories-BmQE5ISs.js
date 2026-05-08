import{e as t}from"./iframe-CrHrvGFA.js";import{P as a}from"./PlotAreaShower-DFoVEO8k.js";import{c as p}from"./hooks-C-ZW7Hvz.js";import{R as s}from"./arrayEqualityCheck-D7V7-zfy.js";import{C as n}from"./ComposedChart-CTjSJXS0.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DGT2_2aD.js";import{X as h}from"./XAxis-D0X6vRGT.js";import{Y as c}from"./YAxis-p0cAlhrk.js";import{L as g}from"./Legend-DZNOspfU.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./immer-BCwItB4q.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./Layer-VGdDjG6T.js";import"./ReactUtils-B0mFaADN.js";import"./Label-DZt9DpVA.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./ZIndexLayer-CaiMnAVk.js";import"./ActivePoints-CvrGo7z5.js";import"./Dot-2YvQxSoM.js";import"./types-C-thJRzw.js";import"./RegisterGraphicalItemId-BTCsPxG4.js";import"./ErrorBarContext-CFytyOKJ.js";import"./GraphicalItemClipPath-BlrVoPx6.js";import"./SetGraphicalItem-trN_YbRB.js";import"./useAnimationId-gwH5_ERq.js";import"./getRadiusAndStrokeWidthFromDot-5JZDbfVs.js";import"./ActiveShapeUtils-D6tcxPOv.js";import"./isPlainObject--NGRnfHf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTNp-Bxb.js";import"./Trapezoid-KpxrlCw6.js";import"./Sector-DuGIl3xX.js";import"./Symbols-DPG6nOF1.js";import"./symbol-DBDK4FNb.js";import"./step-B-10frX1.js";import"./Curve-DoNjcFRC.js";import"./CartesianAxis-C6mIt3Wc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BFgL1_u4.js";import"./uniqBy-CV0OTDDr.js";import"./iteratee-BfhY7p5d.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
