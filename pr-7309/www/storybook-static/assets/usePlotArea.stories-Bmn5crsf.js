import{e as t}from"./iframe-BWXS80lS.js";import{P as a}from"./PlotAreaShower-BwJGGkjL.js";import{c as p}from"./hooks-RRXvqXA6.js";import{R as s}from"./arrayEqualityCheck-C3u4XnRQ.js";import{C as n}from"./ComposedChart-xvGA_wfn.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D2_PZAg_.js";import{X as h}from"./XAxis-_91HGxIi.js";import{Y as c}from"./YAxis-CryQDPi0.js";import{L as g}from"./Legend-BdG4Vj5T.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-hQ4c9Mxw.js";import"./immer-q9ikkIh9.js";import"./axisSelectors-CxvM0uDn.js";import"./d3-scale-zfNl6p6O.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuIDsZJ5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ge4Ob0hk.js";import"./index-BHFN0jNx.js";import"./zIndexSlice-d9o2MkaU.js";import"./renderedTicksSlice-DqJmQzpf.js";import"./CartesianChart-34jBpyPx.js";import"./chartDataContext-BhTPdOXh.js";import"./CategoricalChart-DEIvmDa9.js";import"./Layer-CiG7NGHu.js";import"./ReactUtils-C5S3KkGf.js";import"./Label-CJTshKiS.js";import"./Text-BQ1FWDem.js";import"./DOMUtils-DC1JBHtR.js";import"./ZIndexLayer-fCru-3Nt.js";import"./ActivePoints-BQI1dN0-.js";import"./Dot-BwCqCngA.js";import"./types-B2Bimmd7.js";import"./RegisterGraphicalItemId-CEYbgURY.js";import"./ErrorBarContext-BMlXzYwR.js";import"./GraphicalItemClipPath-DmuLKEXw.js";import"./SetGraphicalItem-Bs8XX-Ij.js";import"./useAnimationId-8mmnumbx.js";import"./getRadiusAndStrokeWidthFromDot-CUi_ls90.js";import"./ActiveShapeUtils-BT90lXsu.js";import"./isPlainObject-Cy0CV0qj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4VIJx5D.js";import"./Trapezoid-DpceZUPJ.js";import"./Sector-CLFD9_Zr.js";import"./Symbols-BWe2eBvB.js";import"./symbol-BsfZTgYj.js";import"./step-CtJYHt9n.js";import"./Curve-DycDyh58.js";import"./CartesianAxis-B8jMapSP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-9snkxXEv.js";import"./uniqBy-C1Fr29UV.js";import"./iteratee-LfF2GEsl.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
