import{e as t}from"./iframe-BIeRAvIs.js";import{P as a}from"./PlotAreaShower-Dt-mgpmA.js";import{c as p}from"./hooks-DF9hzSyO.js";import{R as s}from"./arrayEqualityCheck-Bo5lKgUH.js";import{C as n}from"./ComposedChart-Bm_hB9iQ.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CNyBQv9K.js";import{X as h}from"./XAxis-Bz_wbRMX.js";import{Y as c}from"./YAxis-ChIFeHGD.js";import{L as g}from"./Legend-C_7Y7gBH.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DyfQXYwz.js";import"./immer-5-lHdrEI.js";import"./axisSelectors-DpIQAzCF.js";import"./d3-scale-B0zeFeqw.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7afBTwD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM54gdPj.js";import"./index-DwT1n7qR.js";import"./zIndexSlice-C0VSrdrd.js";import"./renderedTicksSlice-Bjl9R1bd.js";import"./CartesianChart-2ONA7LeG.js";import"./chartDataContext-C2nJuVrb.js";import"./CategoricalChart-BhjQzYI5.js";import"./Layer-BzoHvM-S.js";import"./ReactUtils-hS7xEmGS.js";import"./Label-B1v8zCXy.js";import"./Text-CrBefNhw.js";import"./DOMUtils-lW54g6QP.js";import"./ZIndexLayer-BTjArk6I.js";import"./ActivePoints-efPNJuTS.js";import"./Dot-pi2zX1oI.js";import"./types-DQojIKJi.js";import"./RegisterGraphicalItemId-oCC6rABF.js";import"./ErrorBarContext-BHrSsU01.js";import"./GraphicalItemClipPath-C63EteST.js";import"./SetGraphicalItem-DsNhb24c.js";import"./useAnimationId-C9Uv8ueb.js";import"./getRadiusAndStrokeWidthFromDot-D7Vs4ffU.js";import"./ActiveShapeUtils-Bps_BZs-.js";import"./isPlainObject-l3KiUXnf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYSY3nrg.js";import"./Trapezoid-C_yuwcEm.js";import"./Sector-EPL29HSF.js";import"./Symbols-BeXKfzK2.js";import"./symbol-CFCWUA3z.js";import"./step-CNOKEUU2.js";import"./Curve-BwmaiqIM.js";import"./CartesianAxis-2__l5TP8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BNrYAXx-.js";import"./uniqBy-DUPncpu5.js";import"./iteratee-YXX4R6kw.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
