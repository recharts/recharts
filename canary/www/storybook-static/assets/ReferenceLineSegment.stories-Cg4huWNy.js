import{R as e}from"./iframe-CLOWWJpx.js";import{R as i}from"./zIndexSlice-Chs4RMZ4.js";import{C as a}from"./ComposedChart-CUtdgPf9.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BvYfACiJ.js";import{X as s}from"./XAxis-5aclO3SU.js";import{Y as c}from"./YAxis-QbO3_x34.js";import{L as d}from"./Line-8To0Hkmm.js";import{R as g}from"./ReferenceLine-BpE6qzA7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NR7rmq0H.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./isWellBehavedNumber-Bkt9PZby.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-PtmXkiLl.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./axisSelectors-B6C-iAl6.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./Layer-GlnJsptq.js";import"./Text-CoBlae8g.js";import"./DOMUtils-cc_L-yud.js";import"./Label-DG_GQs1i.js";import"./ZIndexLayer-NdFk7Llr.js";import"./types-B-e_P8o7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DZ0oaj1l.js";import"./step-CeEc6BtY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKcQidly.js";import"./useAnimationId-CXs0-Peu.js";import"./ActivePoints-DzcusPWJ.js";import"./Dot-DoW1vskp.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./graphicalItemIdentity-DPGCfWOI.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
