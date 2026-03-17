import{e}from"./iframe-jjkKyBnh.js";import{R as i}from"./arrayEqualityCheck-CUp7G6cL.js";import{C as p}from"./ComposedChart-DegKGvWA.js";import{C as a}from"./CartesianGrid-CHeI6kYa.js";import{X as n}from"./XAxis-Bdq6Jw3w.js";import{Y as s}from"./YAxis-C86w3msg.js";import{L as c}from"./Line-BsmnuUVe.js";import{R as d}from"./ReferenceLine-B-_72Vkb.js";import{R as g}from"./RechartsHookInspector-CxT_wKdY.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-zELNaCXr.js";import"./immer-BbVLmXrm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./hooks-wocA-lGH.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./zIndexSlice-CuuIJiqa.js";import"./renderedTicksSlice-B60M8aLp.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./CategoricalChart-C0mCf7ot.js";import"./CartesianAxis-CIGCYBrz.js";import"./Layer-Dm-ZljB7.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./Label-BaP8ifBC.js";import"./ZIndexLayer-CNnwO4iC.js";import"./types-BzZyKnH8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CrwQQyAX.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./ErrorBarContext-BqWlziyG.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./ActiveShapeUtils-g0vfssj-.js";import"./isPlainObject-BGF86Xvm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-T-u3oWfl.js";import"./Trapezoid-BeD-5DNQ.js";import"./Sector-Cy9ueYzv.js";import"./Symbols-D7PwakqN.js";import"./symbol-iVbFGN4-.js";import"./step-CFbXCSW0.js";import"./Curve-D2x3KFrb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CJmZG3j5.js";import"./ChartSizeDimensions-CLm1CpLg.js";import"./OffsetShower-n-Td0s15.js";import"./PlotAreaShower-5quEOdpp.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
