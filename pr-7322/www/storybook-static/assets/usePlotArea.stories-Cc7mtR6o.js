import{e as t}from"./iframe-Br7b33cR.js";import{P as a}from"./PlotAreaShower-BUasdGew.js";import{c as p}from"./hooks-BC1xVB-F.js";import{R as s}from"./arrayEqualityCheck-BDKsVEjv.js";import{C as n}from"./ComposedChart-BA7IAlKp.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DiemE468.js";import{X as h}from"./XAxis-TVgTAVSm.js";import{Y as c}from"./YAxis-BOEj2uLm.js";import{L as g}from"./Legend-mcm1bE2i.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-D_sBOB8N.js";import"./immer-BhWlJGD4.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D63T188Y.js";import"./index-DVsOwuOo.js";import"./zIndexSlice-DsbsVgFf.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./Layer-IwfPtrhx.js";import"./ReactUtils-WaUbZ0sz.js";import"./Label-SApjRgym.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./ZIndexLayer-D-LZtBsa.js";import"./ActivePoints-DDCoLWpR.js";import"./Dot-D2QBiTth.js";import"./types-CjQO2tSW.js";import"./RegisterGraphicalItemId-Bvds7-Cj.js";import"./ErrorBarContext-BxzjAj_b.js";import"./GraphicalItemClipPath-B3sq3Fvy.js";import"./SetGraphicalItem-rBYE9Kbl.js";import"./useAnimationId-DXRTa-xv.js";import"./getRadiusAndStrokeWidthFromDot-CxbakQi2.js";import"./ActiveShapeUtils-Dqrm1tKM.js";import"./isPlainObject-ggbrHHb5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D361kRQy.js";import"./Trapezoid-CU7AezY8.js";import"./Sector-BovvqAup.js";import"./Symbols-LMEzLfWp.js";import"./symbol-dl1ml4W0.js";import"./step-BTmPe7Fi.js";import"./Curve-BrUwP9tn.js";import"./CartesianAxis-Dlnx8Z1G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-w8M65t7d.js";import"./uniqBy-CKMV7Df5.js";import"./iteratee-D20FIo_7.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
