import{R as e}from"./iframe-TJn1iDy_.js";import{R as i}from"./zIndexSlice-DcxCrJas.js";import{C as n}from"./ComposedChart-CjLYC499.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DZkiD9Lt.js";import{X as s}from"./XAxis-B_y5feDu.js";import{Y as c}from"./YAxis-BwpngE3S.js";import{L as d}from"./Line-BFq-C2HM.js";import{R as g}from"./ReferenceLine-BLndEEHD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-boe4gmWF.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1uePsee.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGWm-04h.js";import"./axisSelectors-BRmQ6VbT.js";import"./d3-scale-VVBOPfYG.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./Text-Lhe6e02h.js";import"./pageBackground-CtZ35NZS.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./Label-DOD1E2dd.js";import"./ZIndexLayer-qm_XHo-2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./activeStyles-C-8W4HoU.js";import"./useAnimationId-BdprCSjI.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./ErrorBarContext-B5z72jnv.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
