import{e}from"./iframe-CYwaFdjn.js";import{R as i}from"./arrayEqualityCheck-h7hJTZeM.js";import{C as p}from"./ComposedChart-Bhc9oZML.js";import{C as a}from"./CartesianGrid-CVf3yzRL.js";import{X as n}from"./XAxis-BQk_GJ5z.js";import{Y as s}from"./YAxis-CQZmEXrz.js";import{L as c}from"./Line-cPCVztzu.js";import{R as d}from"./ReferenceLine-Bt2n0LsI.js";import{R as g}from"./RechartsHookInspector-Cc3cBFx4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4Ca1v930.js";import"./immer-5b19dBsP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cjgjDUYZ.js";import"./index-DPTx4Thk.js";import"./hooks-GLHTS7XJ.js";import"./axisSelectors-EAo2gJk2.js";import"./d3-scale-DeBKatuR.js";import"./zIndexSlice-Ccl7S4Cq.js";import"./renderedTicksSlice-CJ6ZtBLo.js";import"./CartesianChart-C448597b.js";import"./chartDataContext-Cd6g7rnb.js";import"./CategoricalChart-DF3SypHH.js";import"./CartesianAxis-Ba5E8SnI.js";import"./Layer-B_rFu8MB.js";import"./Text-BJUH7gc5.js";import"./DOMUtils-PiUaL3gF.js";import"./Label-C4yjQiQy.js";import"./ZIndexLayer-Bzm3_eCs.js";import"./types-DF6SdF0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DjhHO1D7.js";import"./ActivePoints-lICUnLRA.js";import"./Dot-C9RSUdFa.js";import"./RegisterGraphicalItemId-p7bSWKiK.js";import"./ErrorBarContext-RG0zKOh-.js";import"./GraphicalItemClipPath-Csh7Z4rj.js";import"./SetGraphicalItem-B2q6sSST.js";import"./useAnimationId-CHCcDWBw.js";import"./getRadiusAndStrokeWidthFromDot-anW380QN.js";import"./ActiveShapeUtils-BW0Zun0m.js";import"./isPlainObject-ObIkW0y8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbpIXD2p.js";import"./Trapezoid-CF7b4JF3.js";import"./Sector-CKQzsyW5.js";import"./Symbols-V-F_xCkR.js";import"./symbol-Co63Deza.js";import"./step-BGhwLfjY.js";import"./Curve-DtLfkKFm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CEnowju6.js";import"./ChartSizeDimensions-CH8vjifh.js";import"./OffsetShower-DG_CC1wX.js";import"./PlotAreaShower-CPSVbCba.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
