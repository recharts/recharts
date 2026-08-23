import{R as e}from"./iframe-BcaWFD7u.js";import{R as i}from"./zIndexSlice-bS7cYBKO.js";import{C as a}from"./ComposedChart-BWld5lXM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-ZOFM-CTl.js";import{X as s}from"./XAxis-DD0jXpQz.js";import{Y as c}from"./YAxis-CG4baE84.js";import{L as d}from"./Line-CtVnRj6L.js";import{R as g}from"./ReferenceLine-CvVtj7qf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dz1UTb_M.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./CartesianAxis-D8v1d9Y9.js";import"./Layer-BhtJX80Y.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./Label-C-frAhmf.js";import"./ZIndexLayer-CI7tJTJS.js";import"./types-BCqYYX1O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DaA6zKZn.js";import"./step-CXwuHX1W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-e5mGDN3Y.js";import"./useAnimationId-DDgucPPX.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
