import{e as t}from"./iframe-CPCZOK1n.js";import{P as a}from"./PlotAreaShower-CM2fQjBs.js";import{c as p}from"./hooks-BA_spPLW.js";import{R as s}from"./arrayEqualityCheck-8pkbG_5i.js";import{C as n}from"./ComposedChart-BjaTFdDo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CGyBz7yI.js";import{X as h}from"./XAxis-DvE2ctn8.js";import{Y as c}from"./YAxis-D_9Qs3qD.js";import{L as g}from"./Legend-D6iqxHJh.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./immer-BU-gze6F.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./Layer-DgSzLvrX.js";import"./ReactUtils-CSglJ9G5.js";import"./Label-CTXaFaVv.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./ZIndexLayer-PN2_dLzy.js";import"./ActivePoints-MCeE4Hpe.js";import"./Dot-Drgga1HN.js";import"./types-tTbnguye.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./useAnimationId-BOEFbdDG.js";import"./getRadiusAndStrokeWidthFromDot-DT85GWcH.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./CartesianAxis-hOqGK2-F.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-SI6UVV-i.js";import"./uniqBy-vQ_AcU9k.js";import"./iteratee-BsseB_NT.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
