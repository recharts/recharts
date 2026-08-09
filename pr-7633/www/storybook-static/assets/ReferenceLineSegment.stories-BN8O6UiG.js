import{R as e}from"./iframe-Dbaqfuxw.js";import{R as i}from"./zIndexSlice-CcFmF_GZ.js";import{C as a}from"./ComposedChart-CFPXJ_wj.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BUjZkSQx.js";import{X as s}from"./XAxis-B8p6yjl5.js";import{Y as c}from"./YAxis-Dutac8df.js";import{L as d}from"./Line-BIC9rMP6.js";import{R as g}from"./ReferenceLine-DfBlpj91.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Y8aMRwU5.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./axisSelectors-BumiVa5e.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./CartesianAxis-DGjRHc2j.js";import"./Layer-BXzB5K08.js";import"./Text-Be1RjgkE.js";import"./DOMUtils-CWVgWmzu.js";import"./Label-BcEDWRMz.js";import"./ZIndexLayer-CpQayApT.js";import"./types-CVDIv1Cb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-60DgJeSx.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CTO_mN3-.js";import"./step-E3pvPVWS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-y-MKsCpX.js";import"./useAnimationId-CsoHoZpG.js";import"./ActivePoints-CymzKczQ.js";import"./Dot-B0ezNCXB.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./getRadiusAndStrokeWidthFromDot-BIpM0DDc.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ce={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const de=["Segment"];export{t as Segment,de as __namedExportsOrder,ce as default};
