import{e as t}from"./iframe-dL2OVy5F.js";import{P as a}from"./PlotAreaShower-CS9RsVg8.js";import{c as p}from"./hooks-CtDQVu0u.js";import{R as s}from"./arrayEqualityCheck-CaMvItyo.js";import{C as n}from"./ComposedChart-Y8SckKJS.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Dq6GxaVC.js";import{X as h}from"./XAxis-B86_r9Ch.js";import{Y as c}from"./YAxis-BsWm2FVM.js";import{L as g}from"./Legend-DPzIZPc1.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./immer-DHklT898.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./Layer-BrlL2tOs.js";import"./ReactUtils-A9WQzOkM.js";import"./Label-C6izcScL.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./ZIndexLayer-BvENavnS.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./types-LCDeNazI.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./ErrorBarContext-Ba1R8w21.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./useAnimationId-C4Vc8PxM.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./ActiveShapeUtils-6me4R15I.js";import"./isPlainObject-O_SkrgJ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-XiX3CaBX.js";import"./Trapezoid-Jy6pnob6.js";import"./Sector-4mD4Ykg7.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";import"./step-CSrZegzj.js";import"./Curve-DLwP9u8w.js";import"./CartesianAxis-BKf97Rvg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DKr_-hTa.js";import"./uniqBy--BozFN4q.js";import"./iteratee-BlkE-BhU.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
