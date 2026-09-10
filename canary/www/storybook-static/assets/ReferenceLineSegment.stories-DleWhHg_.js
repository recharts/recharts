import{R as e}from"./iframe-eHTE8XbR.js";import{R as i}from"./zIndexSlice-CwHm8jEL.js";import{C as n}from"./ComposedChart-BxOpXvKQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DygeYOvu.js";import{X as s}from"./XAxis-Cvnzf1dT.js";import{Y as c}from"./YAxis-BfTKYpb9.js";import{L as d}from"./Line-DcoeyTM0.js";import{R as g}from"./ReferenceLine-Z47KBPqM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7Re1Y2w.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGSwepyW.js";import"./axisSelectors-CazxXIUK.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./CartesianAxis-Dyb6UtbO.js";import"./Layer-Rvjy0lqp.js";import"./Text-qSZv8Fj3.js";import"./DOMUtils-C0F5dZFI.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./Label-BHKNCvXv.js";import"./ZIndexLayer-DPdP9SWD.js";import"./types-BOeFjqIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CpXkKn29.js";import"./step-B8Kmttuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-iYX-QLNJ.js";import"./useAnimationId-Dn1LCCOz.js";import"./ActivePoints-CD98k9Q1.js";import"./Dot-CrWlWXGl.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getRadiusAndStrokeWidthFromDot-D8K1Hpkd.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
