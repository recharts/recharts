import{R as e}from"./iframe-D--BifOA.js";import{R as i}from"./zIndexSlice-BS_bCBK-.js";import{C as n}from"./ComposedChart-CuIfpr-P.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DdPhDV4c.js";import{X as s}from"./XAxis-Csoi6tJo.js";import{Y as c}from"./YAxis-kT_Dhc9L.js";import{L as d}from"./Line-qeb5AOli.js";import{R as g}from"./ReferenceLine-RBAz_5oR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CArjZiC0.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-lipkooEs.js";import"./isWellBehavedNumber-Dtp514zB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSj-zOMY.js";import"./axisSelectors-BukMemNW.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./CartesianAxis-C4H8T_Ld.js";import"./Layer-DyzQQGzG.js";import"./Text-DqGbkrCU.js";import"./DOMUtils-DY29CBKb.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./Label-CFZdNolQ.js";import"./ZIndexLayer-BREUw5RK.js";import"./types-Ba9pm5hc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B6JdyyX2.js";import"./step-DWnGBeyO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dg7VLsKy.js";import"./useAnimationId-DR1fMTy4.js";import"./ActivePoints-BPt1O7jo.js";import"./Dot-BJReGaVO.js";import"./RegisterGraphicalItemId-BvCBLwbE.js";import"./ErrorBarContext-DfSUsFkF.js";import"./GraphicalItemClipPath-Bf92gQO6.js";import"./SetGraphicalItem-DcBb5qLP.js";import"./getRadiusAndStrokeWidthFromDot-CK_UfwUG.js";import"./ActiveShapeUtils-BVXEB5o6.js";import"./useGraphicalItemIdentity-pSJHNQYU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
