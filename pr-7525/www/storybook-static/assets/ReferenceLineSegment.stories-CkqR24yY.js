import{R as e}from"./iframe-Dlbg_GZB.js";import{R as i}from"./zIndexSlice-CMn4Cwlm.js";import{C as a}from"./ComposedChart-BqgVwKSR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-g5KYVCwt.js";import{X as s}from"./XAxis-g3Yqs_q0.js";import{Y as c}from"./YAxis-K45jOkJG.js";import{L as d}from"./Line-BpbqzpNB.js";import{R as g}from"./ReferenceLine-DHTk-KYh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3Y4hQMj.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./Label-d3wc6rF5.js";import"./ZIndexLayer-feAlcx_0.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
