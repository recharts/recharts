import{R as e}from"./iframe-B33Y4kOs.js";import{R as i}from"./zIndexSlice-BV8vqz-A.js";import{C as n}from"./ComposedChart-C6iXQW_F.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Da9JiP4m.js";import{X as s}from"./XAxis-D7BTfG5w.js";import{Y as c}from"./YAxis-DoRVJcGp.js";import{L as d}from"./Line-BF6bp28v.js";import{R as g}from"./ReferenceLine-DzCitagY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dx9BFaqt.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4BmCMdI.js";import"./axisSelectors-CPTmOT_R.js";import"./d3-scale-BRwhKw_2.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index--PM34IXj.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./CartesianAxis-CldRPjzS.js";import"./Layer-DI-mGCka.js";import"./Text-CnUdOxIr.js";import"./pageBackground-CmnWJfG9.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./Label-DQnbTFco.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./types-cCXzDmUf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CcWZ_EFW.js";import"./step-CvwqDq2P.js";import"./path-DyVhHtw_.js";import"./activeStyles-VptiM0EE.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./ActivePoints-DMCMMH9m.js";import"./Dot-BLVwwgSv.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getRadiusAndStrokeWidthFromDot-BCAZrIZb.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./useEffectiveDataKey-BxhkF0gV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
