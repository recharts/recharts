import{R as e}from"./iframe-CXzAxIFn.js";import{R as i}from"./zIndexSlice-DKHp-gjy.js";import{C as a}from"./ComposedChart-Dp1v7Rwh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-B22KpBM2.js";import{X as s}from"./XAxis-CskEzE-5.js";import{Y as c}from"./YAxis-wlQFPYGV.js";import{L as d}from"./Line-8hDx2QW5.js";import{R as g}from"./ReferenceLine-Cc9cwes6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEsGyRMh.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./Label-BVxyVS7u.js";import"./ZIndexLayer-1UiKp4gF.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./Curve-sYpKNcK8.js";import"./step-DNi3GMvN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DRjz3iml.js";import"./useAnimationId-BbyN3hun.js";import"./ActivePoints-BYqyQqlG.js";import"./Dot-B4u9F4mm.js";import"./RegisterGraphicalItemId-CeJgXyMl.js";import"./ErrorBarContext-xfWRS9uR.js";import"./graphicalItemIdentity-D7fkuVDS.js";import"./SetGraphicalItem-CTeY4uJY.js";import"./getRadiusAndStrokeWidthFromDot-w3Si_Ccg.js";import"./ActiveShapeUtils-CfdhJDcC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
