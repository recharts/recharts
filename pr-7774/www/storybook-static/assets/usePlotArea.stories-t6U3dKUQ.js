import{R as t}from"./iframe-BPEJKbq8.js";import{j as a}from"./RechartsWrapper-DxqXjp29.js";import{R as p}from"./zIndexSlice-VIpuzkKp.js";import{C as n}from"./ComposedChart-CCL4cMEJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ba6803Tc.js";import{X as l}from"./XAxis-Cj_7D1I7.js";import{Y as h}from"./YAxis-BtY2v5Bn.js";import{L as c}from"./Legend-C-9iC4T1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1un5xk9O.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DzMkLtRT.js";import"./throttle-DF-tIWsK.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./Layer-CtRRCC-v.js";import"./Curve-DXLcFLNV.js";import"./types-_BaiC61O.js";import"./step-NWmRhsUj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DyYNY1ib.js";import"./Label-L-zdkhzC.js";import"./Text-DJ80zvuP.js";import"./DOMUtils-CHvDeV8q.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./ZIndexLayer-WSPcn9qV.js";import"./useAnimationId-BVUST1Us.js";import"./ActivePoints-iI1SWNnX.js";import"./Dot-BI_iFhuu.js";import"./RegisterGraphicalItemId-D7i3sBo8.js";import"./ErrorBarContext-D5cSQqKQ.js";import"./GraphicalItemClipPath-DkgmJC3z.js";import"./SetGraphicalItem-DABANGfl.js";import"./getRadiusAndStrokeWidthFromDot-NFmAqb_v.js";import"./ActiveShapeUtils-CnR2FwMp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BsRH_pN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CU27xM1D.js";import"./symbol-y49qb0yv.js";import"./useElementOffset-6K-IQoth.js";import"./uniqBy-K0PFycK4.js";import"./iteratee-DTkDCoyb.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
