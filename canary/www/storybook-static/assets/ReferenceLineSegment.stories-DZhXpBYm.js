import{R as e}from"./iframe-BTkF_ck3.js";import{R as i}from"./zIndexSlice-DMb1iT4y.js";import{C as n}from"./ComposedChart-s1Akoicf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BryifyLu.js";import{X as s}from"./XAxis-XXOeJL4_.js";import{Y as c}from"./YAxis-xlfioMoU.js";import{L as d}from"./Line-D7qRA9BJ.js";import{R as g}from"./ReferenceLine-jlSmr0dc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./RechartsWrapper-Bfhw4EQp.js";import"./axisSelectors-CNaIfHAW.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./CartesianAxis-BPFkFfQP.js";import"./Layer-DbGB2kqV.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./Label-BzrvAI-c.js";import"./types-8wxp4ZmL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-sIdkl0eW.js";import"./step-DBbPIMUm.js";import"./path-DyVhHtw_.js";import"./LabelList-2kTqXwcO.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./activeStyles-DacmxpXN.js";import"./useAnimationId-BxLJVC0T.js";import"./dataEntryStyles-CxN2r_W-.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./ErrorBarContext-nR9VGpMB.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
