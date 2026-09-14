import{R as t}from"./iframe-IEvG1YpM.js";import{j as a}from"./RechartsWrapper-CcfL5xRi.js";import{R as p}from"./zIndexSlice-Cihis5J4.js";import{C as n}from"./ComposedChart-BBH3eYaa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CUy9vJUP.js";import{X as l}from"./XAxis-DtybEOgK.js";import{Y as h}from"./YAxis-Ci6Vvz28.js";import{L as c}from"./Legend-DdM0jFep.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-bAVDGQbe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Df8E9bUD.js";import"./throttle-By8-YJwd.js";import"./index-POEf-RyB.js";import"./index-CK_MpSkX.js";import"./isWellBehavedNumber-tc8VJoOF.js";import"./d3-scale-TRidtPn4.js";import"./index-BBOVdE4u.js";import"./index-DwR3lO_P.js";import"./renderedTicksSlice-CllAnVPd.js";import"./index-DdsMrJb_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DCzoDDQF.js";import"./chartDataContext-xd-wjTQ9.js";import"./CategoricalChart-DdwxNdAm.js";import"./Layer-BKPgTeR2.js";import"./Curve--AmmIjVJ.js";import"./types-CuB5x_0O.js";import"./step-DtrjPrha.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-UW_5IIXp.js";import"./Label-CuRdPt5D.js";import"./Text-Dae-pI4X.js";import"./DOMUtils-DCB2CSvd.js";import"./useId-CcNvwQMQ.js";import"./useBackwardsCompatibleTheme-BUS5d1Jo.js";import"./ZIndexLayer-DyfcVau_.js";import"./useAnimationId-qJZeznSq.js";import"./ActivePoints-C4j-E_4c.js";import"./Dot-Dp0Tai_6.js";import"./RegisterGraphicalItemId-CAU5eRLw.js";import"./ErrorBarContext-BWjTRxXS.js";import"./GraphicalItemClipPath-BuVEsdiO.js";import"./SetGraphicalItem-Du-9XCGr.js";import"./getRadiusAndStrokeWidthFromDot-DStXY72J.js";import"./ActiveShapeUtils-BSvyuOAY.js";import"./useGraphicalItemIdentity-BKM5eyt0.js";import"./CartesianAxis-CPXu2kHS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cj-zSnNx.js";import"./symbol-LU74KwaU.js";import"./useElementOffset-D5R4rosy.js";import"./uniqBy-CGJXAfXB.js";import"./iteratee-ilBKujfJ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
