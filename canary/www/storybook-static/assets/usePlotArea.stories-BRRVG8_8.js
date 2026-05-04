import{e as t}from"./iframe-CSwGLTl-.js";import{P as a}from"./PlotAreaShower-iYv5cbpH.js";import{c as p}from"./hooks-Cr-aq8eM.js";import{R as s}from"./arrayEqualityCheck-CL-IA6GV.js";import{C as n}from"./ComposedChart-D5aR39_O.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ETNwqRkd.js";import{X as h}from"./XAxis-Cejj1aG-.js";import{Y as c}from"./YAxis-BT-Q7oTj.js";import{L as g}from"./Legend-DWU35zat.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DDHHkJGr.js";import"./immer-BjkgQKa2.js";import"./axisSelectors-B8HhzkAr.js";import"./d3-scale-CqlzxEpT.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbJcxAkM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RCqgoQSn.js";import"./index-brbC5UV5.js";import"./zIndexSlice-DK1kcZUU.js";import"./renderedTicksSlice-BnadoeJ5.js";import"./CartesianChart-B2Rv6APp.js";import"./chartDataContext-ipF3cfQe.js";import"./CategoricalChart-JOHaAwTs.js";import"./Layer-D0EBgQRA.js";import"./ReactUtils-Dux8j2Wm.js";import"./Label-ClsrPG6g.js";import"./Text-D_9ONK9Z.js";import"./DOMUtils-C-NFkrvl.js";import"./ZIndexLayer-DrCWdG12.js";import"./ActivePoints-BjU36epI.js";import"./Dot-Chm2SzUE.js";import"./types-D4DhPIk-.js";import"./RegisterGraphicalItemId-hGiyGzsL.js";import"./ErrorBarContext-CbME5Fcu.js";import"./GraphicalItemClipPath-SXtIUXot.js";import"./SetGraphicalItem-p1UFOuzw.js";import"./useAnimationId-D8p9yFrw.js";import"./getRadiusAndStrokeWidthFromDot-BJuBIcOz.js";import"./ActiveShapeUtils-CIM0bDxf.js";import"./isPlainObject-DciJ0OZY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdfYyanO.js";import"./Trapezoid-D59NFDIE.js";import"./Sector-QxBrgctl.js";import"./Symbols-CiFP5VGL.js";import"./symbol-B4MVsM7L.js";import"./step-BjVh3UOw.js";import"./Curve-BKPjExFW.js";import"./CartesianAxis-DDF2MY6x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-776TLx6I.js";import"./uniqBy-UkAqSFPJ.js";import"./iteratee-7prAmQ4J.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
