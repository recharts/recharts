import{R as e}from"./iframe-7ITK_SeI.js";import{R as i}from"./zIndexSlice-Bfez01E7.js";import{C as n}from"./ComposedChart-CXRmBdio.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-g2z_7of-.js";import{X as s}from"./XAxis-B6K6oeNG.js";import{Y as c}from"./YAxis-DKQSRoB1.js";import{L as d}from"./Line-CaFC4Px9.js";import{R as g}from"./ReferenceLine-DJOXDxgl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./throttle-DZAxS36c.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./axisSelectors-BYlSNMl6.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CgbIH62T.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./CartesianAxis-P1lu35Vw.js";import"./Layer-x5ioE0yr.js";import"./Text-uEM3tCf7.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./Label-CsN2_Owm.js";import"./types-CwLExx_V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-SIwN0AJD.js";import"./step-DDoJ0d0M.js";import"./path-DyVhHtw_.js";import"./LabelList-DyQMPI8I.js";import"./ActivePoints-CfvU-oNA.js";import"./Dot-H1TfH3hy.js";import"./activeStyles-CTNWVDS5.js";import"./useAnimationId-DKK7KP9l.js";import"./dataEntryStyles-Dd39-khT.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./ErrorBarContext-Ch69wvN-.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getRadiusAndStrokeWidthFromDot-Cev_FaPT.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};
