import{R as e}from"./iframe-DEExurmE.js";import{R as i}from"./zIndexSlice-BGV3a2M2.js";import{C as a}from"./ComposedChart-CdFnUaqK.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CgrPUP3p.js";import{X as s}from"./XAxis-DlU7zrsS.js";import{Y as c}from"./YAxis-jXESqwAs.js";import{L as d}from"./Line-CmBtfFLK.js";import{R as g}from"./ReferenceLine-BzlcYL0l.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7dQEHKF.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BERQZkXB.js";import"./axisSelectors-B3HyN164.js";import"./d3-scale-Bb2cyBTe.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./renderedTicksSlice-By6AytUE.js";import"./index-DRipnBKQ.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./CartesianAxis-BAF_XLat.js";import"./Layer-Bb6nRq1I.js";import"./Text-DlL7Kh0g.js";import"./DOMUtils-DiHJPz-Q.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./Label-BoesgQTr.js";import"./ZIndexLayer-DsOTHSzU.js";import"./types-D0GbM314.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CHcEH7zY.js";import"./step-DlHRUAQd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsILchAj.js";import"./useAnimationId-BnI4HmeK.js";import"./ActivePoints-3uqjFngE.js";import"./Dot-BMqykIFL.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getRadiusAndStrokeWidthFromDot-Qb57Gwlz.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const fe=["Segment"];export{t as Segment,fe as __namedExportsOrder,ge as default};
