import{R as e}from"./iframe-DMAX8_B_.js";import{R as i}from"./zIndexSlice-BVHCVdkF.js";import{C as n}from"./ComposedChart-DTOc-N3k.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BwTOOuKU.js";import{X as s}from"./XAxis-C1NK8RoH.js";import{Y as c}from"./YAxis-DHMD8bK9.js";import{L as d}from"./Line-Baz5RTuv.js";import{R as g}from"./ReferenceLine-cIq3R3rg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B-jnSQsL.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./axisSelectors-xVjud6VL.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./Label-CAcaahuf.js";import"./ZIndexLayer-YH55ha4J.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BI1HfCSQ.js";import"./step-CY3LQZxJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./ErrorBarContext-eOToNj9e.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
