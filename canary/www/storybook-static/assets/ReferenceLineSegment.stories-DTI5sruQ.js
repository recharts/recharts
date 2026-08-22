import{R as e}from"./iframe-BX5cRibr.js";import{R as i}from"./zIndexSlice-AZuYl_vp.js";import{C as a}from"./ComposedChart-ySsto5-f.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BEN8mmtg.js";import{X as s}from"./XAxis-DwJ67tbd.js";import{Y as c}from"./YAxis-LHNvPj5J.js";import{L as d}from"./Line-Ble_dEe_.js";import{R as g}from"./ReferenceLine-HQq0i9Up.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zmqWqRK4.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./Label-DaxsWVsm.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DB2Kv5XX.js";import"./step-DSSF95ZQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm8c3RW5.js";import"./useAnimationId-CcWR-JA_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
