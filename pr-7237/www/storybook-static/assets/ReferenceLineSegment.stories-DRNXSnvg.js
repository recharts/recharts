import{e}from"./iframe-BnepZbIT.js";import{R as i}from"./arrayEqualityCheck-Bzj1NFbL.js";import{C as p}from"./ComposedChart-84ez2dEG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BWyeFdf4.js";import{X as s}from"./XAxis-SiwesCXl.js";import{Y as c}from"./YAxis-GrlhSCw3.js";import{L as d}from"./Line-CrpR2_m2.js";import{R as g}from"./ReferenceLine-BrhMmAG8.js";import{R as f}from"./RechartsHookInspector-C4hunDdt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./immer-CMcm_nUx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvbGdFiP.js";import"./index-BYgM4v9S.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./zIndexSlice-C8s-XU9n.js";import"./renderedTicksSlice-CSId2xIn.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./CartesianAxis-DimAd1iY.js";import"./Layer-Ca-NGzhu.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./Label-CvQfGABs.js";import"./ZIndexLayer-CaJTwElI.js";import"./types-Df0IzV2Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-64sNutUM.js";import"./ActivePoints-KKzFiWPz.js";import"./Dot-CQLqFjtJ.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./ErrorBarContext-biD2FyQs.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./useAnimationId-0FE8S7Lc.js";import"./getRadiusAndStrokeWidthFromDot-xaimMp6X.js";import"./ActiveShapeUtils-BrWeXoF9.js";import"./isPlainObject-BxGEMuWM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-QDjYZ4Lh.js";import"./Trapezoid-CWH0SbFy.js";import"./Sector-CD_FNLgY.js";import"./Symbols-eksBr05G.js";import"./symbol-hzKkaagP.js";import"./step-BFaHnM_e.js";import"./Curve-DKZiYoJj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
