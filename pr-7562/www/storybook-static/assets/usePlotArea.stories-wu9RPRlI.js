import{R as t}from"./iframe-54ZcEpUv.js";import{u as a}from"./CategoricalChart-FIiVxhF6.js";import{R as p}from"./zIndexSlice-D4EcTS4q.js";import{C as s}from"./ComposedChart-CXJcoZU4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DXl0be7s.js";import{X as l}from"./XAxis-BhMXtQiv.js";import{Y as h}from"./YAxis-2cFJkYpr.js";import{L as c}from"./Legend-CB35QEBv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r5U10tn2.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./throttle-DtmCwuH2.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./d3-scale-Bz_vEXwn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./Layer-C5bNrRV9.js";import"./Curve-FTpO0g2t.js";import"./types-kdBRSK-c.js";import"./step-BsOSpGLs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bo-aqLFl.js";import"./Label--73vW_dK.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./ZIndexLayer-CQupnOhG.js";import"./useAnimationId-D-RZ_xXC.js";import"./ActivePoints-DSvyBCZS.js";import"./Dot-C2NjTS0n.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./getRadiusAndStrokeWidthFromDot-eGcgYRyQ.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./CartesianAxis-BfyoGem3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Vlrvy7XV.js";import"./symbol-sg6ZkDjS.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
