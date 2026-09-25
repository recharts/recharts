import{R as e}from"./iframe-BbNtNwCn.js";import{R as i}from"./zIndexSlice-VrNRi_G1.js";import{C as n}from"./ComposedChart-D4iN_2Rf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-D3_l0nV8.js";import{X as s}from"./XAxis-oTutdnda.js";import{Y as c}from"./YAxis-C6UVi-mq.js";import{L as d}from"./Line-HubJkyzh.js";import{R as g}from"./ReferenceLine-BBCxW6vT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKFxohT3.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./axisSelectors-BzyIizHG.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./CartesianAxis-Ccs4Ad33.js";import"./Layer-DFZlw494.js";import"./Text-jR3JJSu6.js";import"./DOMUtils-DKOsv_Gf.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./Label-Bi0vIQjw.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./types-fRbVNPnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-IZX4MWkA.js";import"./step-CORgqai8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-LXQvjRXM.js";import"./useAnimationId-CCouJXLZ.js";import"./ActivePoints-BWe-WnoU.js";import"./Dot-xDiH-N__.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getRadiusAndStrokeWidthFromDot-3xOb0JOi.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
