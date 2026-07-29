import{R as e}from"./iframe-DHvlXZZp.js";import{R as i}from"./zIndexSlice-D7_5YQCx.js";import{C as a}from"./ComposedChart-C7ZUQvNE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-ClkzgT-p.js";import{X as s}from"./XAxis-C0xAN7Vm.js";import{Y as c}from"./YAxis-DYTJhxlv.js";import{L as d}from"./Line-DYyHO80i.js";import{R as g}from"./ReferenceLine-CZU6sCzz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bg-VcpoN.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./d3-scale-Cey7ctPf.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./CartesianAxis-DdKNIbtf.js";import"./Layer-BW5xomOj.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./Label-TKCFRexK.js";import"./ZIndexLayer-D7_As1-8.js";import"./types-CRJA0nge.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BqfUunGe.js";import"./isBuffer-Crkas5dz.js";import"./Curve-Bc6Wc-5h.js";import"./step-B2khkJJz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BVZCnb1h.js";import"./useAnimationId-uiW7aOrL.js";import"./ActivePoints-oifiU6yf.js";import"./Dot-Btw86tRD.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./ErrorBarContext-BK2fwAvo.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getRadiusAndStrokeWidthFromDot-B-WHlf9E.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
