import{R as e}from"./iframe-DfxvUCoY.js";import{R as i}from"./zIndexSlice-a1aajdGJ.js";import{C as a}from"./ComposedChart-C8jbAnB3.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CEYliQmp.js";import{X as s}from"./XAxis-CDwQyzI6.js";import{Y as c}from"./YAxis-CHYqw0Yg.js";import{L as d}from"./Line-BI5q6xYq.js";import{R as g}from"./ReferenceLine-0QtPMrsl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CY5RCzqb.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./isWellBehavedNumber-By0pufN4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKrR_shM.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./Label-Db_taApy.js";import"./ZIndexLayer-BYPoLUrq.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bell45ld.js";import"./step-BKVqTwxS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DEpW04f-.js";import"./useAnimationId-D9BVxJGQ.js";import"./ActivePoints-Bi6fN5zN.js";import"./Dot-BKUKbPeQ.js";import"./RegisterGraphicalItemId-uzM-_OM4.js";import"./ErrorBarContext-D2pK0104.js";import"./GraphicalItemClipPath-D5-jIAHW.js";import"./SetGraphicalItem-8Isqc2ZP.js";import"./getRadiusAndStrokeWidthFromDot-DIcAvM1x.js";import"./ActiveShapeUtils-BCjs6TQU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
