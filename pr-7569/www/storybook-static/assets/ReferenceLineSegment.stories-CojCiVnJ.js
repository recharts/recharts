import{R as e}from"./iframe-rlLReeiH.js";import{R as i}from"./zIndexSlice-dET_x_8J.js";import{C as a}from"./ComposedChart-BU4P-eJZ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DfwwNFKS.js";import{X as s}from"./XAxis-BANsvQjN.js";import{Y as c}from"./YAxis-BPC8NcBR.js";import{L as d}from"./Line-DYTHbSmy.js";import{R as g}from"./ReferenceLine-bxFx8nEm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-7RYQhcti.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./axisSelectors-RWAxTq2z.js";import"./d3-scale-kKXY2gAc.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./CartesianAxis-DB3D7e8-.js";import"./Layer-yUpNfqTk.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./Label-D0R02xnC.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./types-Dt7L5GFC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-7HuuJXLM.js";import"./step-C_7J8XoD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DR-XZCrI.js";import"./useAnimationId-Dx24Y47b.js";import"./ActivePoints-CnoLHeSd.js";import"./Dot-BHxvOKDj.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";import"./getRadiusAndStrokeWidthFromDot-Bxzf33Tp.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
