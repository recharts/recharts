import{e as t}from"./iframe-CQJPfyRy.js";import{P as a}from"./PlotAreaShower-5vmtZ6RI.js";import{c as p}from"./hooks-Br8DVu9M.js";import{R as s}from"./arrayEqualityCheck-Do-enXm5.js";import{C as n}from"./ComposedChart-CSl27s_R.js";import{L as l}from"./Line-C2VLHXFP.js";import{X as d}from"./XAxis-C55dSO1i.js";import{Y as h}from"./YAxis-zax745HO.js";import{L as c}from"./Legend-CeDuC081.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-LXLx4zNb.js";import"./immer-DHWyBJal.js";import"./axisSelectors-gm8fWGo4.js";import"./d3-scale-0hh8p2_S.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0riu8XRb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7Czoz0bu.js";import"./index-asPVD2vd.js";import"./zIndexSlice-BiBD01er.js";import"./renderedTicksSlice-DTP68QVC.js";import"./CartesianChart-CPXNCGau.js";import"./chartDataContext-DJi5hdYR.js";import"./CategoricalChart-CEJ--eNG.js";import"./Layer-BR9af65P.js";import"./ReactUtils-BwwuZj5u.js";import"./Label-BC7yp0Hg.js";import"./Text-DUnDznQK.js";import"./DOMUtils-D2gdOsD8.js";import"./ZIndexLayer-CPRNxtdQ.js";import"./ActivePoints-9_VA3S9i.js";import"./Dot-CkHgD_rL.js";import"./types-C_DlCak5.js";import"./RegisterGraphicalItemId-DMChCr2V.js";import"./ErrorBarContext-Dk7bnNHc.js";import"./GraphicalItemClipPath-CC9lmHGx.js";import"./SetGraphicalItem-Dq_i_ZrQ.js";import"./useAnimationId-CEC-e8Az.js";import"./getRadiusAndStrokeWidthFromDot-Cxhe8pLo.js";import"./ActiveShapeUtils-BA4ci1jq.js";import"./isPlainObject-CksZGLlM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj9r1Fs-.js";import"./Trapezoid-D7kT_7oQ.js";import"./Sector-D83NtDJL.js";import"./Symbols-l6c5y-Z_.js";import"./symbol-BeKwF9Wk.js";import"./step-8cZIHSos.js";import"./Curve-ChVqsMwJ.js";import"./CartesianAxis-DQSl9zNs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-5AqETRkk.js";import"./uniqBy-DNiBcrLY.js";import"./iteratee-CEMi4iou.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
