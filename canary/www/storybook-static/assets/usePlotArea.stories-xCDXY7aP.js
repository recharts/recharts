import{e as t}from"./iframe-DggZKTRy.js";import{P as a}from"./PlotAreaShower-t65TdSVB.js";import{c as p}from"./hooks-6phBN8Fl.js";import{R as s}from"./arrayEqualityCheck-DnZLtMf6.js";import{C as n}from"./ComposedChart-8cXw1Wpu.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-02UcdPyY.js";import{X as h}from"./XAxis-Dbhs6mKo.js";import{Y as c}from"./YAxis-Dp9rJ-_E.js";import{L as g}from"./Legend-zdcB5Bes.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DI522ei_.js";import"./immer-DqkR2i4r.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DXkRukFF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./Layer-BuKRQch4.js";import"./ReactUtils-D9Ez5HAk.js";import"./Label-Dxk2zJHG.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./ZIndexLayer-D85cG2g2.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./types-CBaBaM7i.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./ErrorBarContext-YFVjhS9M.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./ActiveShapeUtils-DDWUau3o.js";import"./isPlainObject-CasrDXFD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-mU1cjLaJ.js";import"./Trapezoid-CpShvAQC.js";import"./Sector-BKRhbQqJ.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";import"./step-IN4trDru.js";import"./Curve-DpzeZUSQ.js";import"./CartesianAxis-BXbHKKX1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CmFu-JrW.js";import"./uniqBy-Bv-E6IG_.js";import"./iteratee-BGmnQGqa.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
