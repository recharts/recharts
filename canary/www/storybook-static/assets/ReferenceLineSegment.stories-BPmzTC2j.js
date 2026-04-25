import{e}from"./iframe-CPCZOK1n.js";import{R as i}from"./arrayEqualityCheck-8pkbG_5i.js";import{C as p}from"./ComposedChart-BjaTFdDo.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BkCl4ydr.js";import{X as s}from"./XAxis-DvE2ctn8.js";import{Y as c}from"./YAxis-D_9Qs3qD.js";import{L as d}from"./Line-CGyBz7yI.js";import{R as g}from"./ReferenceLine-CqqFC8cT.js";import{R as f}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-oWFt7rla.js";import"./immer-BU-gze6F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./CartesianAxis-hOqGK2-F.js";import"./Layer-DgSzLvrX.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./Label-CTXaFaVv.js";import"./ZIndexLayer-PN2_dLzy.js";import"./types-tTbnguye.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CSglJ9G5.js";import"./ActivePoints-MCeE4Hpe.js";import"./Dot-Drgga1HN.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./useAnimationId-BOEFbdDG.js";import"./getRadiusAndStrokeWidthFromDot-DT85GWcH.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
