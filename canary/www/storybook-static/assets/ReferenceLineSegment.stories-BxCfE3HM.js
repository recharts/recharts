import{R as e}from"./iframe-DHiXiYOt.js";import{R as i}from"./zIndexSlice-K2mOff9O.js";import{C as n}from"./ComposedChart-q17tGP41.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BTti1Wp0.js";import{X as s}from"./XAxis-D6ROrCNU.js";import{Y as c}from"./YAxis-CSlSkAf_.js";import{L as d}from"./Line-DwxSpxuq.js";import{R as g}from"./ReferenceLine-DFTw4BYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZL46Cig.js";import"./throttle-9IxKLS84.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./RechartsWrapper-CRTUKx29.js";import"./axisSelectors-BDB90zwk.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-mRNKtGCI.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./CartesianAxis-BSNVQcOz.js";import"./Layer-DJ7NPFY5.js";import"./Text-BC_B-bRG.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./Label-Gr9qDnB4.js";import"./dataEntryStyles-CfpC7ekH.js";import"./types-rgikEiEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D9Rxfik5.js";import"./step-Bo1xvdEx.js";import"./path-DyVhHtw_.js";import"./activeStyles-CUDvtf42.js";import"./useAnimationId-Ca9jA2_m.js";import"./ActivePoints-4PNB8ast.js";import"./Dot-BAUuju1I.js";import"./Symbols-CWw_TPA_.js";import"./symbol-BqJAsPmG.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getRadiusAndStrokeWidthFromDot-CmFu8Xh3.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
