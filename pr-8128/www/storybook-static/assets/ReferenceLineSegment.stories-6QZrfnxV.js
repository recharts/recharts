import{R as e}from"./iframe-CqZM7-m_.js";import{R as i}from"./zIndexSlice-C2bhYwAU.js";import{C as p}from"./ComposedChart-bZT0Cb13.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-Br8mHJsN.js";import{X as s}from"./XAxis-KlRKQHwy.js";import{Y as c}from"./YAxis-ae7SlnFd.js";import{L as d}from"./Line-Bo0PrlbL.js";import{R as g}from"./ReferenceLine-BCzp7oUY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./RechartsWrapper-C-tKczMb.js";import"./axisSelectors-CU7asiQ5.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./Label-CFulNYa4.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-CUygaBJV.js";import"./fillDefinitions-1X04y-fM.js";import"./Curve-Drzcx3Ud.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./LabelList-DhQNMiPW.js";import"./ActivePoints-BpTQnUkT.js";import"./Dot-DqP_pV0T.js";import"./activeStyles-cNHowlQL.js";import"./useAnimationId-Bff8cv61.js";import"./dataEntryStyles-Df1iMIlW.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./ErrorBarContext-CF_mHvca.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getRadiusAndStrokeWidthFromDot-CxqTtpIP.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./CartesianScaleHelper-C9Oze4oB.js";const le={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},Ce=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,Ce as __namedExportsOrder,le as default};
