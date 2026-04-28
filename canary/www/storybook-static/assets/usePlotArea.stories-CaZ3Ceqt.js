import{e as t}from"./iframe-C-pXZx8X.js";import{P as a}from"./PlotAreaShower-tlilFsff.js";import{c as p}from"./hooks-r8g2kJ2v.js";import{R as s}from"./arrayEqualityCheck-3ozDp3-_.js";import{C as n}from"./ComposedChart-2Cv-F1wi.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BOal81Oz.js";import{X as h}from"./XAxis-Cso_vWau.js";import{Y as c}from"./YAxis-Cf-PEWST.js";import{L as g}from"./Legend-BT-Rzo6C.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-7zC2ccyN.js";import"./immer-BPSGuEHb.js";import"./axisSelectors-DSvN8duu.js";import"./d3-scale-DB0MXZYa.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cEBRbYcQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAPnfiXY.js";import"./index-BNdn82my.js";import"./zIndexSlice-DrJF7HQv.js";import"./renderedTicksSlice-DMz1msG5.js";import"./CartesianChart-DOSPFIH6.js";import"./chartDataContext-DGhRpyKC.js";import"./CategoricalChart-DtUHVQpT.js";import"./Layer-B6gfj40j.js";import"./ReactUtils-H7Wf3vTm.js";import"./Label-CSYOUhma.js";import"./Text-BgpDM3B5.js";import"./DOMUtils-DRd1JeLt.js";import"./ZIndexLayer-C3MbX-IF.js";import"./ActivePoints-DJBfU3jH.js";import"./Dot-DLckMiiT.js";import"./types-TOcuhXpR.js";import"./RegisterGraphicalItemId-DGn9oQ3L.js";import"./ErrorBarContext-DCKdVGWu.js";import"./GraphicalItemClipPath-DVPpijAl.js";import"./SetGraphicalItem-BA0j0x-s.js";import"./useAnimationId-Cz59vryg.js";import"./getRadiusAndStrokeWidthFromDot-C9K8kJrs.js";import"./ActiveShapeUtils-ytK3Mr7g.js";import"./isPlainObject-CpM-pRk6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DKyirF4T.js";import"./Trapezoid-DrJg1aIg.js";import"./Sector-D1AnDLTs.js";import"./Symbols-B0EVt28X.js";import"./symbol-Cn7BoW2g.js";import"./step-CZ17sXck.js";import"./Curve-CX8mbWGt.js";import"./CartesianAxis-DSUJUk3Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CrfjAq51.js";import"./uniqBy-39GcZYmA.js";import"./iteratee-DR1zOXOU.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
