import{R as t}from"./iframe-Ce2LNmzq.js";import{u as a}from"./CategoricalChart-CdBHij7l.js";import{R as p}from"./zIndexSlice-1iBSzntV.js";import{C as s}from"./ComposedChart-D8QzjQGV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cmb7zLRd.js";import{X as l}from"./XAxis-ChLxoQeP.js";import{Y as h}from"./YAxis-CHPMR7tu.js";import{L as c}from"./Legend-P00sCpER.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./throttle-BPcDKDas.js";import"./get-C2VjdU0L.js";import"./axisSelectors-nf5d_TCI.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./Layer-CmHiQhsD.js";import"./Curve-pGKyKnaa.js";import"./types-D9eaN5qP.js";import"./step-B81xmQ7d.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EYOrwSGz.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./DOMUtils-DXjDSVEa.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./ZIndexLayer-hciQBMwm.js";import"./useAnimationId-DJBKMCXo.js";import"./ActivePoints-BV19snok.js";import"./Dot-BtvWNtdQ.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getRadiusAndStrokeWidthFromDot-D3ct2NHr.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D_IJzMyn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dl8ZAYeK.js";import"./symbol-DLuozwbz.js";import"./useElementOffset-e8S935ma.js";import"./uniqBy-DM1WHRb1.js";import"./iteratee-DVWRkxa3.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
