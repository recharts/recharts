import{R as t}from"./iframe-Cuz0ArBZ.js";import{u as a}from"./CategoricalChart-b2JFE4qY.js";import{R as p}from"./zIndexSlice-BM2UDWO3.js";import{C as s}from"./ComposedChart-T-m9qZYj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-7bfxR50O.js";import{X as l}from"./XAxis-BpKyP0dN.js";import{Y as h}from"./YAxis-Do03vVTX.js";import{L as c}from"./Legend-B_NjPVg9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C1GsE6D6.js";import"./index-CnjN1eJY.js";import"./index-B7Kpo2ne.js";import"./index-D4JBGtbh.js";import"./index-DJ25wrw2.js";import"./throttle-D2UP89es.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Uf2etwQJ.js";import"./resolveDefaultProps-DFRYrt1w.js";import"./isWellBehavedNumber-BNR7n96m.js";import"./d3-scale-BU8ngyGj.js";import"./renderedTicksSlice-DoN5idQ6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D4ZrgDD1.js";import"./chartDataContext-COxhzolJ.js";import"./Layer-BxHvVvNo.js";import"./Curve-CQxBAVgQ.js";import"./types-DHaro4o6.js";import"./step-D64yDiHt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bq9Cx-Mo.js";import"./Label-CD264HLQ.js";import"./Text-DWRXNVQj.js";import"./DOMUtils-DmogtD9z.js";import"./useId-CG7ic0vo.js";import"./useBackwardsCompatibleTheme-CTjF-q2C.js";import"./ZIndexLayer-B2d0C2Gc.js";import"./useAnimationId-BcIXJdGX.js";import"./ActivePoints-Q8Q4Ocdm.js";import"./Dot-CF6FpX3d.js";import"./RegisterGraphicalItemId-B9mLA6kv.js";import"./ErrorBarContext-BXjCcKD5.js";import"./GraphicalItemClipPath-DwzWsDMq.js";import"./SetGraphicalItem-BNqnvDS1.js";import"./getRadiusAndStrokeWidthFromDot-CA2V7d8x.js";import"./ActiveShapeUtils-FehVzgEA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-pF-9QyGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CcuIXN12.js";import"./symbol-rTWtgTAk.js";import"./useElementOffset-Dkvypv9n.js";import"./uniqBy-CviIdRT6.js";import"./iteratee-CFOEg8qh.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
