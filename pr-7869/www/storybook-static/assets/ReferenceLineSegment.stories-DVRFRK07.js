import{R as e}from"./iframe-w_s9Pd89.js";import{R as i}from"./zIndexSlice-it-eJu8g.js";import{C as n}from"./ComposedChart-DhweWezK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-LBYnT_h9.js";import{X as s}from"./XAxis-vfiIl3GE.js";import{Y as c}from"./YAxis-CCoq1LN0.js";import{L as d}from"./Line-Cz9iuHIb.js";import{R as g}from"./ReferenceLine-Br4A_nRl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CTOajQ3R.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6WLroyVF.js";import"./isWellBehavedNumber-Dd6bWbIs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ddpcm_Bi.js";import"./axisSelectors-BCLDkErh.js";import"./d3-scale-CNw_APXm.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./index-ZJJtOEb6.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./CartesianAxis-Dt-9RID0.js";import"./Layer-3ye4UFiI.js";import"./Text-JLeCEDp8.js";import"./DOMUtils-BAN9qVyI.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./Label-hJtR_DxY.js";import"./ZIndexLayer-29vxzJUo.js";import"./types-o4OSUUn5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DX6i7y1N.js";import"./step-BOR9D5VT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DvmQd7Rs.js";import"./useAnimationId-CYLXREv3.js";import"./ActivePoints-CQqYot6E.js";import"./Dot-9MVoPrmB.js";import"./RegisterGraphicalItemId-BROviYY7.js";import"./ErrorBarContext-DSm_oAUC.js";import"./GraphicalItemClipPath-DbdrEo0q.js";import"./SetGraphicalItem-B0AS2kak.js";import"./getRadiusAndStrokeWidthFromDot-BE8QNtys.js";import"./ActiveShapeUtils-CcbjFIOc.js";import"./useGraphicalItemIdentity-D2kK-yFr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
