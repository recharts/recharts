import{R as e}from"./iframe-DhvgJ3Tw.js";import{R as i}from"./zIndexSlice-DT7jNbQo.js";import{C as n}from"./ComposedChart-Dp8vMI0e.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BO8o_HK3.js";import{X as s}from"./XAxis-DydSoLLm.js";import{Y as c}from"./YAxis-BAhPmXz7.js";import{L as d}from"./Line-ly6ORB0G.js";import{R as g}from"./ReferenceLine-DY2w-Fhq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CKLGeLep.js";import"./throttle-BWeAvDIL.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./RechartsWrapper-683IwuKd.js";import"./axisSelectors-aIh5be-p.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUY8Yxll.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./Text-oQHtFAiE.js";import"./ZIndexLayer-jkdgENMR.js";import"./Label-lswEF7zo.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CM-2NJGX.js";import"./step-IHXDW0UX.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CJFnAm-4.js";import"./ActivePoints-DpArZmW3.js";import"./Dot-Bpcl5rlN.js";import"./activeStyles-Dbg52UlV.js";import"./useAnimationId-DBeWeQl6.js";import"./Symbols-BU6SDWGm.js";import"./symbol-Dj9V0gE5.js";import"./ErrorBarContext-rAqCLm-Y.js";import"./SetGraphicalItem-FYK4izOM.js";import"./getRadiusAndStrokeWidthFromDot-Cdk2wNTs.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./useEffectiveDataKey-NorWb4gC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
