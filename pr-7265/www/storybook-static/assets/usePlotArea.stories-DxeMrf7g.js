import{e as t}from"./iframe-LMZEDrr2.js";import{P as a}from"./PlotAreaShower-3thsUpgf.js";import{c as p}from"./hooks-D05996su.js";import{R as s}from"./arrayEqualityCheck-Isy6zPZP.js";import{C as n}from"./ComposedChart-CJ4Tf8S0.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-5-HvnnXd.js";import{X as h}from"./XAxis-CDuwPcZ0.js";import{Y as c}from"./YAxis-ClmaHC8-.js";import{L as g}from"./Legend-DpVDCq_z.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./immer-BxzI6gFZ.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./zIndexSlice-C5mrfXZA.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./Layer-Dm4unAaj.js";import"./ReactUtils-D-S282mX.js";import"./Label-C1cFmZLh.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./ZIndexLayer-xLHvpxY5.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./types-C96dbGEy.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./useAnimationId-BVzXz2Ut.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bTQTBoQ8.js";import"./Trapezoid-BaFBv2Ob.js";import"./Sector-DM3Dpfvi.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./Curve-D3f_JNhO.js";import"./CartesianAxis-CmrHLfhr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BsnK6ysB.js";import"./uniqBy-DoryuFu9.js";import"./iteratee-B7wf2MQl.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
