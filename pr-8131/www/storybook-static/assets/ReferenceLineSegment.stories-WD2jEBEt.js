import{R as e}from"./iframe-CcMBsn7a.js";import{R as i}from"./zIndexSlice-DFRlFrsj.js";import{C as n}from"./ComposedChart-DZIz87wm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-1eIMjlFo.js";import{X as s}from"./XAxis-Dcud2AjR.js";import{Y as c}from"./YAxis-BnF9M7Oe.js";import{L as d}from"./Line-CsN0isYC.js";import{R as g}from"./ReferenceLine-CEudP_VY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./throttle-LNv5qelv.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./RechartsWrapper-C5Uizgqh.js";import"./axisSelectors-CpYzXpFY.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DgNN2Fjk.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./Text-Dz_XqFLj.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./Label-M1IGuJE8.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CgTOK48B.js";import"./step-Dj8K5zlQ.js";import"./path-DyVhHtw_.js";import"./LabelList-BOiHk-iP.js";import"./ActivePoints-BpaOU93T.js";import"./Dot-DnefNcpX.js";import"./activeStyles-CkIUhE4Y.js";import"./useAnimationId-BiyhMFfV.js";import"./dataEntryStyles-Bttpss0z.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./ErrorBarContext-B0K3ejq2.js";import"./SetGraphicalItem-D39u22t5.js";import"./getRadiusAndStrokeWidthFromDot-DGeLWXaD.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
